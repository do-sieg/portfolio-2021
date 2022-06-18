// Markdown utility functions
// Last update: 2022-04-25

import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import { rehype } from "rehype";
import rehypeHighlight from "rehype-highlight";
import rehypeExternalLinks from "rehype-external-links";
import rehypeStringify from "rehype-stringify/lib";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize from "rehype-sanitize";
import { unified } from "unified";

// Extract data and content from markdown file
export async function mdLoad(filePath, convertToHtml = false) {
    try {
        const fullPath = path.join(process.cwd(), filePath);
        const markdown = grayMatter(fs.readFileSync(fullPath, 'utf8'));
        markdown.htmlContent = "";
        if (convertToHtml) {
            markdown.htmlContent = await mdToHtml(markdown.content);
        }
        return markdown;
    } catch (err) {
        return { content: "", data: {}, htmlContent: "" };
    }
}

// Convert markdown code to html
export async function mdToHtml(code) {
    const parsed = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype, { allowDangerousHtml: true })
        .use(rehypeRaw)
        .use(rehypeExternalLinks, { target: '_blank', rel: ['nofollow'] })
        .use(rehypeStringify)
        .use(rehypeSanitize)
        .process(code)

    const highlighted = await rehype()
        .data('settings', { fragment: true })
        .use(rehypeHighlight)
        .process(parsed);

    return String(highlighted);
}
