import { useLangDate, useLangTerm } from "../../utils/lang";
import styles from "./BlogPostMeta.module.css";

export default function BlogPostMeta({ post }) {
    const renderDate = useLangDate();
    const L_BLOG_READING_TIME = useLangTerm("BLOG_READING_TIME");

    return (
        <div className={styles.container}>
            <img src={post.metaData.author.picture} alt={post.metaData.author.name} />
            <div className={styles.texts}>
                <div className={styles.authorName}>{post.metaData.author.name}</div>
                <div>
                    <span className={styles.publicationDate}>{renderDate(post.metaData.date)} - </span>
                    <span className={styles.readingTime}>{post.metaData.readingTime} {L_BLOG_READING_TIME}</span>
                </div>
            </div>
        </div>
    );
}
