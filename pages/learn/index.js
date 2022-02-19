import AppHead from "../../components/app/AppHead";
import AppLayout from "../../components/app/AppLayout";
import LearnSubjectCard from "../../components/app/learn/LearnSubjectCard";
import Separator from "../../components/app/Separator";
import { SITE_TITLE } from "../../data/constants";
import { useRouter } from "next/router";
import { useLangTerm } from "../../utils/lang";
import pageStyles from "../../styles/pages/Page.module.css";
import styles from "../../styles/pages/Learn.module.css";

export default function Learn() {
    const {locale} = useRouter();
    const L_LESSONS_TITLE = useLangTerm("LESSONS_TITLE");
    const L_LESSONS_INTRO = useLangTerm("LESSONS_INTRO");
    const L_LEARN_NO_LESSONS = useLangTerm("LEARN_NO_LESSONS");
    const L_LESSONS_CTG_WEB_LANGUAGES = useLangTerm("LESSONS_CTG_WEB_LANGUAGES");

    return (
        <AppLayout className={pageStyles.container}>
            <AppHead title={`${SITE_TITLE} - ${L_LESSONS_TITLE}`} />

            <h1>{L_LESSONS_TITLE}</h1>

            <img className={styles.coverImage} src="/images/learn/learn-cover.jpg" alt={L_LESSONS_TITLE} />

            <section>{L_LESSONS_INTRO}</section>

            <Separator />

            <section>
                {["fr"].includes(locale) ?
                    <>
                        <h2>{L_LESSONS_CTG_WEB_LANGUAGES}</h2>
                        <div className={styles.subjectGroup}>
                            <LearnSubjectCard subjectId={"html"} />
                            <LearnSubjectCard subjectId={"css"} />
                        </div>
                    </>
                    :
                    <div className={styles.noLessons}>{L_LEARN_NO_LESSONS}</div>
                }
            </section>
        </AppLayout>
    );
}
