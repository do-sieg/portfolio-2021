import AppHead from "../../components/app/AppHead";
import AppLayout from "../../components/app/AppLayout";
import LearnSubjectCard from "../../components/app/learn/LearnSubjectCard";
import Separator from "../../components/app/Separator";
import { SITE_TITLE } from "../../data/constants";
import { useLangTerm } from "../../utils/lang";
import pageStyles from "../../styles/pages/Page.module.css";
import styles from "../../styles/pages/Learn.module.css";

export default function Learn() {
    const L_LESSONS_TITLE = useLangTerm("LESSONS_TITLE");
    const L_LESSONS_INTRO = useLangTerm("LESSONS_INTRO");

    return (
        <AppLayout className={pageStyles.container}>
            <AppHead title={`${SITE_TITLE} - ${L_LESSONS_TITLE}`} />

            <h1>{L_LESSONS_TITLE}</h1>

            <p>{L_LESSONS_INTRO}</p>

            <Separator />

            <section>
                <div className={styles.subjectGroup}>
                    <LearnSubjectCard subjectId={"html"} />
                    <LearnSubjectCard subjectId={"css"} />
                </div>
            </section>
        </AppLayout>
    );
}
