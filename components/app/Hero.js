import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <div className={styles.container}>
            <img src="./images/profile/profile_01.jpg" alt="Daniel Orchanian" />
            <div className={styles.typography}>
                <div className={styles.firstName}>Daniel</div>
                <div className={styles.lastName}>Orchanian</div>
            </div>
        </div>
    );
}