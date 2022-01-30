import fs from "fs";
import path from "path";
import { mdLoad, mdToHtml } from "./markdown";

const POSTS_DIR = "pages/blog/posts";

export async function getPosts(locale, limit = 0) {
    try {
        let entries = fs.readdirSync(path.join(process.cwd(), POSTS_DIR, locale));
        if (limit) entries = entries.slice(0, limit);

        return entries
            .map((filename) => {
                const data = mdLoad(path.join(POSTS_DIR, locale, filename));
                return {
                    slug: filename.substring(0, filename.indexOf(".md")),
                    metaData: data.data,
                }
            })
            .filter(obj => obj.metaData.published)
            .sort((a, b) => new Date(b.metaData.date) - new Date(a.metaData.date));
    } catch (err) {
        console.error(`Error on loading blog posts for locale '${locale}'.`, err.message);
        return [];
    }
}

export async function getPost(locale, slug) {
    const data = mdLoad(path.join(POSTS_DIR, locale, `${slug}.md`));
    const htmlContent = await mdToHtml(data.content);
    data.htmlContent = htmlContent;
    return data;
}
