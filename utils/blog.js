import fs from "fs";
import path from "path";
import { mdLoad, mdToHtml } from "./markdown";

const POSTS_DIR = "data/blog_posts";

function getReadingTime(locale, text) {
    const averageWordsPerMinute = {
        fr: 195,
        en: 228,
    }[locale];
    const wordCount = text.replace( /[^\w ]/g, "" ).split( /\s+/ ).length;
    return Math.ceil(wordCount / averageWordsPerMinute);
}

export async function getPosts({ locale, category = null, limit = 0 }) {
    try {
        let entries = fs.readdirSync(path.join(process.cwd(), POSTS_DIR, locale));
        if (limit) entries = entries.slice(0, limit);

        return entries
            .map((filename) => {
                const data = mdLoad(path.join(POSTS_DIR, locale, filename));
                data.data.readingTime = getReadingTime(locale, data.content);
                return {
                    slug: filename.substring(0, filename.indexOf(".md")),
                    metaData: data.data,
                }
            })
            .filter(obj => obj.metaData.published)
            .filter(obj => category ? obj.metaData.category === category : true)
            .sort((a, b) => new Date(b.metaData.date) - new Date(a.metaData.date));
    } catch (err) {
        console.error(`Error on loading blog posts for locale '${locale}'.`, err.message);
        return [];
    }
}

export async function getPost({ locale, slug }) {
    const data = mdLoad(path.join(POSTS_DIR, locale, `${slug}.md`));
    data.data.readingTime = getReadingTime(locale, data.content);
    const htmlContent = await mdToHtml(data.content);
    data.htmlContent = htmlContent;
    return data;
}
