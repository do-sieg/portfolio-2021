import Link from "next/link";
import AppHead from "../../components/app/AppHead";
import AppLayout from "../../components/app/AppLayout";
import { SITE_TITLE, SITE_URL } from "../../data/constants";
import { getSubject, getSubjects } from "../../utils/subjects";
import { getLesson, getLessons } from "../../utils/lessons";
import { useLangTerm } from "../../utils/lang";
import Separator from "../../components/app/Separator";
import AuthorSignature from "../../components/app/AuthorSignature";
import LearnNav from "../../components/app/learn/LearnNav";
import MarkdownContent from "../../components/app/MarkdownContent";
import pageStyles from "../../styles/pages/Page.module.css";
import styles from "../../styles/pages/LearnLesson.module.css";

export async function getStaticPaths({ locales }) {
    const paths = [];

    locales.forEach((locale) => {
        const subjects = getSubjects(locale);
        Object.keys(subjects).forEach(async (subjectId) => {
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
    const subject = getSubject(locale, subjectId);

    const data = await getLesson({ locale, subjectId, slug });

    const { intro, coverImagePath } = getSubject(locale, subjectId);

    data.data.description = intro;
    data.data.coverImagePath = coverImagePath;

    const props = {
        subjectId,
        coverImagePath: subject.coverImagePath,
        slug,
        metaData: data.data,
        htmlContent: data.htmlContent,
    };
    return { props };
}

export default function LearnLesson({ subjectId, coverImagePath, slug, metaData, htmlContent }) {
    const L_UPDATED = useLangTerm("UPDATED");
    const L_READING_TIME = useLangTerm("READING_TIME");
    const L_LESSONS_SIGNATURE = useLangTerm("LESSONS_SIGNATURE");

    return (
        <AppLayout className={pageStyles.container}>
            <AppHead
                title={`${metaData.title} - ${SITE_TITLE}`}
                description={metaData.description}
                imageUrl={metaData?.coverImagePath ? SITE_URL + metaData.coverImagePath : null}
                type="article"
            />

            <LearnNav
                subjectId={subjectId}
                lessonSlug={slug}
                lessonNumber={metaData.number}
                lessonTitle={metaData.title}
            />

            <div className={styles.lessonMeta}>
                {/* {L_BY} {metaData.author.name}<br /> */}
                {L_UPDATED} {metaData.updated}<br />
                {metaData.readingTime} {L_READING_TIME}
            </div>

            <h1>{metaData.title}</h1>

            <img className={styles.coverImage} src={coverImagePath} alt={metaData.title} />

            <article>
                <MarkdownContent content={htmlContent} />
            </article>

            <Separator top="4rem" bottom="2rem" />

            <AuthorSignature imagePath={metaData.author.picture} name={metaData.author.name}>
                <div>{L_LESSONS_SIGNATURE}</div>
            </AuthorSignature>

        </AppLayout>
    );
}
