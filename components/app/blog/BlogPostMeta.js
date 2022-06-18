import { renderDate, useLangTerm } from "../../../utils/lang";
import styles from "./BlogPostMeta.module.css";

export default function BlogPostMeta({ post }) {
    const L_READING_TIME = useLangTerm("READING_TIME");
    const L_DATE_FORMAT = useLangTerm("DATE_FORMAT");
    const L_SHORT_MONTHS = useLangTerm("SHORT_MONTHS");

    return (
        <div className={styles.container}>
            <img src={post.data.author.picture} alt={post.data.author.name} />
            <div className={styles.texts}>
                <div className={styles.authorName}>{post.data.author.name}</div>
                <div>
                    <span className={styles.publicationDate}>{renderDate(post.data.date, L_DATE_FORMAT, L_SHORT_MONTHS)} - </span>
                    <span className={styles.readingTime}>{post.data.readingTime} {L_READING_TIME}</span>
                </div>
            </div>
        </div>
    );
}
