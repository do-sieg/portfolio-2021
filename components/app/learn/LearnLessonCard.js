import Link from "next/link";
import { useLangTerm } from "../../../utils/lang";
import styles from "./LearnLessonCard.module.css";

export default function LearnLessonCard({ subjectId, subjectName, post }) {
    const L_LESSONS_LEVEL_TITLES = useLangTerm("LESSONS_LEVEL_TITLES");

    return (
        <Link href={`/learn/${subjectId}/${post.slug}`}><a>
            <div className={`${styles.container} ${styles[post.data.level]}`}>
                <h3>
                    {subjectName} {post.data.number}
                    <span className={styles.levelTag}>{L_LESSONS_LEVEL_TITLES[post.data.level]}</span>
                </h3>
                <div className={styles.title}>{post.data.title}&nbsp;→</div>
            </div>
        </a></Link>
    );
}
