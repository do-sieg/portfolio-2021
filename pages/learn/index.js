import AppHead from "../../components/app/AppHead";
import AppLayout from "../../components/app/AppLayout";
import LearnSubjectCard from "../../components/app/learn/LearnSubjectCard";
import Separator from "../../components/app/Separator";
import { SITE_TITLE } from "../../data/constants";
import { useRouter } from "next/router";
import { useLang } from "../../utils/lang";
import pageStyles from "../../styles/pages/Page.module.css";
import styles from "../../styles/pages/Learn.module.css";

export default function Learn() {
    const {locale} = useRouter();
    const { titleLearn, titleWebLanguages, introLearn, noLessons } = useLang("learn");

    return (
        <AppLayout className={pageStyles.container}>
            <AppHead title={`${SITE_TITLE} - ${titleLearn}`} />

            <h1>{titleLearn}</h1>

            <img className={styles.coverImage} src="/images/learn/learn-cover.jpg" alt={titleLearn} />

            <section>{introLearn}</section>

            <Separator />

            <section>
                {["fr"].includes(locale) ?
                    <>
                        <h2>{titleWebLanguages}</h2>
                        <div className={styles.subjectGroup}>
                            <LearnSubjectCard subjectId={"html"} />
                            <LearnSubjectCard subjectId={"css"} />
                        </div>
                    </>
                    :
                    <div className={styles.noLessons}>{noLessons}</div>
                }
            </section>
        </AppLayout>
    );
}
