import { DEV_EMAIL } from "../../data/constants";
import { useLangTerm } from "../../utils/lang";
import styles from "./AppFooter.module.css";

export default function AppFooter() {
    const L_DEV_NAME = useLangTerm("DEV_NAME");

    return (
        <footer className={styles.container}>
            <span>© {new Date().getFullYear()} {L_DEV_NAME}</span>
            <a href={'mailto:' + DEV_EMAIL}>{DEV_EMAIL}</a>
        </footer>
    );
}
