import AppHead from "../../components/app/AppHead";
import AppLayout from "../../components/app/AppLayout";
import { SITE_TITLE } from "../../data/constants";
import { getLessons } from "../../utils/lessons";
import { useLangTerm } from "../../utils/lang";
import LearnLessonCard from "../../components/app/learn/LearnLessonCard";
import styles from "../../styles/pages/common.module.css";
import ownStyles from "../../styles/pages/learn-subject.module.css";

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
    const L_LESSONS_LEVEL_TITLES = useLangTerm("LESSONS_LEVEL_TITLES");

    return (
        <AppLayout className={`${styles.container} ${ownStyles.container}`}>
            <AppHead title={`${L_LESSONS_SUBJECT_TITLE(name)} - ${SITE_TITLE}`} />

            <h1>{`${L_LESSONS_SUBJECT_TITLE(name)}`}</h1>

            <p>{description}</p>

            {Object.entries(sections).map(([level, list]) => {
                const startingIndex = {
                    basic: 0,
                    intermediate: sections.basic.length,
                    advanced: sections.basic.length + sections.intermediate.length,
                }[level];

                return (
                    list.length > 0 ?
                        <section key={level}>
                            <h2>{L_LESSONS_LEVEL_TITLES[level]}</h2>
                            <div className={ownStyles.lessonsGroup}>
                                {list.map((slug, index) => {
                                    const data = lessons.find(lesson => lesson.slug === slug);
                                    return data ?
                                        <LearnLessonCard
                                            key={index}
                                            index={startingIndex + index}
                                            subjectId={subjectId}
                                            subjectName={name}
                                            level={level}
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
