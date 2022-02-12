import Link from "next/link";
import { useLangTerm } from "../../../utils/lang";
import styles from "./LearnLessonCard.module.css";

export default function LearnLessonCard({ index, subjectId, subjectName, data }) {
    const L_LESSONS_LEVEL_TITLES = useLangTerm("LESSONS_LEVEL_TITLES");

    return (
        <Link href={`/learn/${subjectId}/${data.slug}`}><a>
            <div className={`${styles.container} ${styles[data.metaData.level]}`}>
                <h3>
                    {subjectName} {index + 1}
                    <span className={styles.levelTag}>{L_LESSONS_LEVEL_TITLES[data.metaData.level]}</span>
                </h3>
                <div className={styles.title}>{data.metaData.title}&nbsp;→</div>
            </div>
        </a></Link>
    );
}
