import AppHead from "../../components/app/AppHead";
import AppLayout from "../../components/app/AppLayout";
import { SITE_TITLE } from "../../data/constants";
import { getSubject, getSubjects } from "../../utils/subjects";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useLangTerm } from "../../utils/lang";
import { getPosts } from "../../utils/static-blog";
import Separator from "../../components/app/Separator";
import LearnNav from "../../components/app/learn/LearnNav";
import LearnLessonCard from "../../components/app/learn/LearnLessonCard";
import pageStyles from "../../styles/pages/Page.module.css";
import styles from "../../styles/pages/LearnSubject.module.css";

export async function getStaticPaths({ locales }) {
    const paths = [];
    for (const locale of locales) {
        const subjects = getSubjects(locale);
        paths.push(...Object.keys(subjects).map(subjectId => `/${locale}/learn/${subjectId}`));
    }
    return { paths, fallback: false };
}

export async function getStaticProps({ locale, params }) {
    const { subjectId } = params;
    const subject = getSubject(locale, subjectId);
    const { name, intro, coverImagePath, sections } = subject;

    const { posts } = await getPosts({ pathname: `/data/lessons/${locale}/${subjectId}`, locale });

    const props = {
        subjectId,
        name,
        intro,
        coverImagePath,
        sections,
        posts,
    };
    return { props };
}

export default function LearnSubject({ subjectId, name, intro, coverImagePath, sections, posts }) {
    const { locale, asPath } = useRouter();
    const L_LEARN_NO_LESSONS = useLangTerm("LEARN_NO_LESSONS");
    const L_LESSONS_SUBJECT_TITLE = useLangTerm("LESSONS_SUBJECT_TITLE");
    const [content, setContent] = useState([]);

    useEffect(() => {
        setContent(Object.keys(sections).map((key) => {
            // const prevKeys = Object.keys(sections).slice(0, sectionIndex);
            // const startingIndex = prevKeys.reduce((acc, key) => acc + sections[key].length, 0);
            const list = sections[key];
            return (
                <section key={key}>
                    <h2>{key}</h2>
                    <div className={styles.lessonsGroup}>
                        {list.map((slug, index) => {
                            const data = posts.find(post => post.slug === slug);
                            return data ?
                                <LearnLessonCard
                                    key={index}
                                    subjectId={subjectId}
                                    subjectName={name}
                                    post={data}
                                />
                                : null;
                        })}
                    </div>
                </section>
            );
        }));
    }, [locale, asPath]);

    return (
        <AppLayout className={`${pageStyles.container} ${styles.container}`}>
            <AppHead title={`${L_LESSONS_SUBJECT_TITLE(name)} - ${SITE_TITLE}`} />

            <LearnNav subjectId={subjectId} />

            <img className={styles.coverImage} src={coverImagePath} alt={name} />

            <h1>{`${L_LESSONS_SUBJECT_TITLE(name)}`}</h1>

            <section><p>{intro}</p></section>

            <Separator />

            {content.length > 0 ? content : <div>{L_LEARN_NO_LESSONS}</div>}

        </AppLayout>
    );
}
