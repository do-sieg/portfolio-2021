import styles from "./AuthorSignature.module.css";

export default function AuthorSignature({ imagePath, name, children }) {
    return (
        <div className={styles.container}>
            <img src={imagePath} alt={name} />
            <div>
                <div className={styles.name}>{name}</div>
                <div className={styles.lines}>{children}</div>
            </div>
        </div>
    );
}
