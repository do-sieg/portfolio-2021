import { useLangTerm } from "../../utils/lang";
import styles from "./BlogPostInfo.module.css";

export default function BlogPostInfo({ post }) {
    const L_DATE_FORMAT = useLangTerm("DATE_FORMAT");
    const L_SHORT_MONTHS = useLangTerm("SHORT_MONTHS");
    const L_BLOG_READING_TIME = useLangTerm("BLOG_READING_TIME");

    function renderDate() {
        const d = new Date(post.metaData.date);
        let str = L_DATE_FORMAT;
        str = str.replace(/dd/gi, d.getDate());
        str = str.replace(/mm/gi, L_SHORT_MONTHS[d.getMonth()]);
        str = str.replace(/yy/gi, d.getFullYear());
        return str;
    }

    return (
        <div className={styles.container}>
            <img src={post.metaData.author.picture} alt={post.metaData.author.name} />
            <div className={styles.texts}>
                <div className={styles.authorName}>{post.metaData.author.name}</div>
                <div>
                    <span className={styles.publicationDate}>{renderDate()} - </span>
                    <span className={styles.readingTime}>{post.metaData.readingTime} {L_BLOG_READING_TIME}</span>
                </div>
            </div>
        </div>
    );
}
