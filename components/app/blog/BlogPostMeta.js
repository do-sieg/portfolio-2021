import { useLang } from "../../../utils/lang";
import { renderDate } from "../../../utils/time";
import styles from "./BlogPostMeta.module.css";

export default function BlogPostMeta({ post }) {
    const { dateFormat, shortMonths } = useLang("common");
    const { readingTime } = useLang("blog");

    return (
        <div className={styles.container}>
            <img src={post.data.author.picture} alt={post.data.author.name} />
            <div className={styles.texts}>
                <div className={styles.authorName}>{post.data.author.name}</div>
                <div>
                    <span className={styles.publicationDate}>{renderDate(post.data.date, dateFormat, shortMonths)} - </span>
                    <span className={styles.readingTime}>{post.data.readingTime} {readingTime}</span>
                </div>
            </div>
        </div>
    );
}
