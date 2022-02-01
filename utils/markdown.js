// Markdown utility functions
// Last update: 2022-01-30

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
import { unified } from "unified";

// Extract data and content from markdown file
export function mdLoad(filePath) {
    const fullPath = path.join(process.cwd(), filePath);
    const data = grayMatter(fs.readFileSync(fullPath, 'utf8'));
    return data;
}

// Convert markdown code to html
export async function mdToHtml(code) {
    const parsed = await unified()
        .use(remarkParse)
        .use(remarkGfm)
        .use(remarkRehype)
        .use(rehypeExternalLinks, { target: '_blank', rel: ['nofollow'] })
        .use(rehypeStringify)
        .process(code)

    const highlighted = await rehype()
        .data('settings', { fragment: true })
        .use(rehypeHighlight)
        .process(parsed);

    return String(highlighted);
}