import { renderDate, useLangTerm } from "../../../utils/lang";
import styles from "./BlogPostMeta.module.css";

export default function BlogPostMeta({ post }) {
    const L_READING_TIME = useLangTerm("READING_TIME");
    const L_DATE_FORMAT = useLangTerm("DATE_FORMAT");
    const L_SHORT_MONTHS = useLangTerm("SHORT_MONTHS");

    return (
        <div className={styles.container}>
            <img src={post.metaData.author.picture} alt={post.metaData.author.name} />
            <div className={styles.texts}>
                <div className={styles.authorName}>{post.metaData.author.name}</div>
                <div>
                    <span className={styles.publicationDate}>{renderDate(post.metaData.date, L_DATE_FORMAT, L_SHORT_MONTHS)} - </span>
                    <span className={styles.readingTime}>{post.metaData.readingTime} {L_READING_TIME}</span>
                </div>
            </div>
        </div>
    );
}
