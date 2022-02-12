import AppHead from "../../components/app/AppHead";
import AppLayout from "../../components/app/AppLayout";
import { SITE_TITLE } from "../../data/constants";
import { getLessons } from "../../utils/lessons";
import { useLangTerm } from "../../utils/lang";
import Separator from "../../components/app/Separator";
import LearnNav from "../../components/app/learn/LearnNav";
import LearnLessonCard from "../../components/app/learn/LearnLessonCard";
import pageStyles from "../../styles/pages/Page.module.css";
import styles from "../../styles/pages/LearnSubject.module.css";

export async function getStaticPaths({ locales }) {
    const paths = [];
    for (const locale of locales) {
        const learnSubjects = require(`../../data/learn_subjects_${locale}`).learnSubjects;
        paths.push(...Object.keys(learnSubjects).map(subjectId => `/${locale}/learn/${subjectId}`));
    }
    return { paths, fallback: false };
}

export async function getStaticProps({ locale, params }) {
    const { subjectId } = params;
    const learnSubjects = require(`../../data/learn_subjects_${locale}`).learnSubjects;
    const { name, description, sections } = learnSubjects[subjectId];

    const lessons = await getLessons({ locale, subjectId });

    const props = {
        subjectId,
        name,
        description,
        sections,
        lessons,
    };
    return { props };
}

export default function LearnSubject({ subjectId, name, description, sections, lessons }) {
    const L_LESSONS_SUBJECT_TITLE = useLangTerm("LESSONS_SUBJECT_TITLE");

    return (
        <AppLayout className={`${pageStyles.container} ${styles.container}`}>
            <AppHead title={`${L_LESSONS_SUBJECT_TITLE(name)} - ${SITE_TITLE}`} />

            <LearnNav subjectId={subjectId} />

            <h1>{`${L_LESSONS_SUBJECT_TITLE(name)}`}</h1>

            <section><p>{description}</p></section>

            <Separator />

            {Object.keys(sections).map((key, sectionIndex) => {
                const prevKeys = Object.keys(sections).slice(0, sectionIndex);
                const startingIndex = prevKeys.reduce((acc, key) => acc + sections[key].length, 0);
                const list = sections[key];
                return (
                    list.length > 0 ?
                        <section key={key}>
                            <h2>{key}</h2>
                            <div className={styles.lessonsGroup}>
                                {list.map((slug, index) => {
                                    const data = lessons.find(lesson => lesson.slug === slug);
                                    return data ?
                                        <LearnLessonCard
                                            key={index}
                                            index={startingIndex + index}
                                            subjectId={subjectId}
                                            subjectName={name}
                                            data={data}
                                        />
                                        : null;
                                })}
                            </div>
                        </section>
                        : null
                );
            })}

        </AppLayout>
    );
}
