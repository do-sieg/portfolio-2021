import Link from "next/link";
import styles from "./LearnLessonCard.module.css";

export default function LearnLessonCard({ index, subjectId, subjectName, level, data }) {
    return (
        <Link href={`/learn/${subjectId}/${data.slug}`}><a>
            <div className={`${styles.container} ${styles[level]}`}>
                <h3>{subjectName} {index + 1}</h3>
                <div className={styles.title}>{data.metaData.title} →</div>
            </div>
        </a></Link>
    );
}
