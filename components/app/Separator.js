import styles from "./Separator.module.css";

export default function Separator({ top = 20, bottom = 20 }) {
    return <div className={styles.container} style={{
        marginTop: top,
        marginBottom: bottom,
    }}></div>
}
