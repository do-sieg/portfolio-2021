import Link from "next/link";
import { useRouter } from "next/router";
import { useLangTerm } from "../../../utils/lang";
import styles from "./LearnSubjectCard.module.css";

export default function LearnSubjectCard({ subjectId }) {
    const { locale } = useRouter();
    const learnSubjects = require(`../../../data/learn_subjects_${locale}`).learnSubjects;
    const L_LESSONS_NUMBER = useLangTerm("LESSONS_NUMBER");

    function getTotalLessons(subjectId) {
        const total = Object.values(learnSubjects[subjectId].sections).reduce((acc, element) => acc + element.length, 0);
        return total;
    }

    return (
        learnSubjects[subjectId] && getTotalLessons(subjectId) > 0 ?
            <Link href={`/learn/${subjectId}`}><a>
                <div className={styles.container}>
                    <h3>{learnSubjects[subjectId].name}</h3>
                    <div className={styles.description}>{learnSubjects[subjectId].description}</div>
                    <div className={styles.action}>{L_LESSONS_NUMBER(getTotalLessons(subjectId))} →</div>
                </div>
            </a></Link>
            :
            null
    );
}
