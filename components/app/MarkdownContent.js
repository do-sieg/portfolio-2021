import styles from "./MarkdownContent.module.css";
import "highlight.js/styles/vs2015.css";

export default function MarkdownContent({ content }) {
    return (
        <div
            className={styles.container}
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
