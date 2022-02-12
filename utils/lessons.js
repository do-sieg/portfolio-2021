import fs from "fs";
import path from "path";
import { mdLoad, mdToHtml } from "./markdown";
import { getReadingTime } from "./text";

const LESSONS_DIR = "data/lessons";

export async function getLessons({ locale, subjectId }) {
    try {
        let entries = fs.readdirSync(path.join(process.cwd(), LESSONS_DIR, locale, subjectId));

        entries = entries
            .map((filename) => {
                const data = mdLoad(path.join(LESSONS_DIR, locale, subjectId, filename));
                data.data.readingTime = getReadingTime(locale, data.content);
                return {
                    slug: filename.substring(0, filename.indexOf(".md")),
                    metaData: data.data,
                }
            })
            .filter(lesson => lesson.metaData.published);

        return entries;
    } catch (err) {
        console.error(`Error on loading lessons for locale '${locale}'.`, err.message);
        return [];
    }
}

export async function getLesson({ locale, subjectId, slug }) {
    const data = mdLoad(path.join(LESSONS_DIR, locale, subjectId, `${slug}.md`));
    data.data.readingTime = getReadingTime(locale, data.content);
    const htmlContent = await mdToHtml(data.content);
    data.htmlContent = htmlContent;
    return data;
}
