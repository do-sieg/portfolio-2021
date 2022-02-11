import AppHead from "../../components/app/AppHead";
import AppLayout from "../../components/app/AppLayout";
import { SITE_TITLE } from "../../data/constants";
import { getLesson, getLessons } from "../../utils/lessons";
import styles from "../../styles/pages/common.module.css";
import ownStyles from "../../styles/pages/blog-post.module.css";
import "highlight.js/styles/vs2015.css";

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
        // subjectId,
        // slug,
        metaData: data.data,
        htmlContent: data.htmlContent,
    };
    return { props };
}

export default function LearnLesson({ metaData, htmlContent }) {
    return (
        <AppLayout className={styles.container}>
            <AppHead title={`${metaData.title} - ${SITE_TITLE}`} />

            <h1>{`${metaData.title}`}</h1>

            <div className={ownStyles.postContent} dangerouslySetInnerHTML={{ __html: htmlContent }} />

        </AppLayout>
    );
}
