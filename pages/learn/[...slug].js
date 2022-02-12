import AppHead from "../../components/app/AppHead";
import AppLayout from "../../components/app/AppLayout";
import { SITE_TITLE } from "../../data/constants";
import { getLesson, getLessons } from "../../utils/lessons";
import { useLangTerm } from "../../utils/lang";
import LearnNav from "../../components/app/learn/LearnNav";
import MarkdownContent from "../../components/app/MarkdownContent";
import pageStyles from "../../styles/pages/Page.module.css";
import styles from "../../styles/pages/LearnLesson.module.css";

export async function getStaticPaths({ locales }) {
    const paths = [];

    locales.forEach((locale) => {
        const learnSubjects = require(`../../data/learn_subjects_${locale}`).learnSubjects;
        Object.keys(learnSubjects).forEach(async (subjectId) => {
            const lessons = await getLessons({ locale, subjectId });

            lessons.forEach((lesson) => {
                paths.push({
                    params: {
                        slug: [subjectId, lesson.slug],
                    },
                });
            });
        });
    });

    return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
    const [subjectId, slug] = params.slug;

    const data = await getLesson({ locale, subjectId, slug });

    const props = {
        subjectId,
        slug,
        metaData: data.data,
        htmlContent: data.htmlContent,
    };
    return { props };
}

export default function LearnLesson({ subjectId, slug, metaData, htmlContent }) {
    const L_BY = useLangTerm("BY");
    const L_UPDATED = useLangTerm("UPDATED");
    const L_READING_TIME = useLangTerm("READING_TIME");

    return (
        <AppLayout className={pageStyles.container}>
            <AppHead title={`${metaData.title} - ${SITE_TITLE}`} />

            <LearnNav
                subjectId={subjectId}
                lessonSlug={slug}
                lessonTitle={metaData.title}
            />

            <div className={styles.lessonMeta}>
                {L_BY} {metaData.authorName}<br />
                {L_UPDATED} {metaData.updated}<br />
                {metaData.readingTime} {L_READING_TIME}
            </div>

            <h1>{metaData.title}</h1>

           <MarkdownContent content={htmlContent} />

        </AppLayout>
    );
}
