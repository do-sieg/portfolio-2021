import Link from "next/link";
import { useLang } from "../../../utils/lang";
import styles from "./LearnLessonCard.module.css";

export default function LearnLessonCard({ subjectId, subjectName, post }) {
    const { learnLevels } = useLang("learn");

    return (
        <Link href={`/learn/${subjectId}/${post.slug}`}><a>
            <div className={`${styles.container} ${styles[post.data.level]}`}>
                <h3>
                    {subjectName} {post.data.number}
                    <span className={styles.levelTag}>{learnLevels[post.data.level]}</span>
                </h3>
                <div className={styles.title}>{post.data.title}&nbsp;→</div>
            </div>
        </a></Link>
    );
}
