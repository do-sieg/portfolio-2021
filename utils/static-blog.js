import fs from "fs";
import path from "path";
import { mdLoad, mdToHtml } from "./markdown";
import { getReadingTime } from "./text";

const POSTS_DIR = "data/blog_posts";

export async function getPosts({ locale, category = null, limit = 0, current = null }) {
    try {
        let entries = fs.readdirSync(path.join(process.cwd(), POSTS_DIR, locale));

        entries = entries
            .map((filename) => {
                const data = mdLoad(path.join(POSTS_DIR, locale, filename));
                data.data.readingTime = getReadingTime(locale, data.content);
                return {
                    slug: filename.substring(0, filename.indexOf(".md")),
                    metaData: data.data,
                }
            });

        if (current) entries = entries.filter(post => post.slug !== current);

        entries = entries
            .filter(post => post.metaData.published)
            // .filter(post => post.metaData.published && new Date(post.metaData.date) <= new Date())
            .filter(post => category ? post.metaData.category === category : true)
            .sort((a, b) => new Date(b.metaData.date) - new Date(a.metaData.date));

        if (limit) entries = entries.slice(0, limit);

        return entries;
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
