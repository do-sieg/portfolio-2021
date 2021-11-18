import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { DEV_EMAIL, DEV_GITHUB, DEV_LINKEDIN } from "../../data/constants";
import { useLangTerm } from "../../utils/lang";
import styles from "./AppFooter.module.css";

export default function AppFooter() {
    const L_DEV_NAME = useLangTerm("DEV_NAME");

    return (
        <footer className={styles.container}>
            <div className={styles.contactLinks}>
                <a href={DEV_LINKEDIN} target="_blank"><FaLinkedin /></a>
                <a href={DEV_GITHUB} target="_blank"><FaGithubSquare /></a>
                <a href={'mailto:' + DEV_EMAIL} target="_blank"><FaEnvelopeSquare /></a>
            </div>
            <div>© {new Date().getFullYear()} {L_DEV_NAME}</div>
        </footer>
    );
}
