import { DEV_FIRST_NAME, DEV_LAST_NAME } from "../../data/constants";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <div className={styles.container}>
            <img src="./images/profile/profile_03.jpg" alt="Daniel Orchanian" />
            <div className={styles.typography}>
                <div className={styles.firstName}>{DEV_FIRST_NAME}</div>
                <div className={styles.lastName}>{DEV_LAST_NAME}</div>
            </div>
        </div>
    );
}