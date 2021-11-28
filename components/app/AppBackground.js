import backgrounds from "../../data/backgrounds.json";
import styles from "./AppBackground.module.css";

export default function AppBackground() {
    return (
        <div
            className={styles.container}
            style={{ backgroundImage: `linear-gradient(135deg, rgb(255 255 255 /50%), rgb(255 255 255 /80%)), url(..${backgrounds[new Date().getDay()].path})` }}
        />
    );
}
