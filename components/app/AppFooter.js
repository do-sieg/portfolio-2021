import Link from "next/link";
import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { DEV_EMAIL, DEV_GITHUB, DEV_LINKEDIN } from "../../data/constants";
import { useLangTerm } from "../../utils/lang";
import styles from "./AppFooter.module.css";

export default function AppFooter() {
    const L_DEV_NAME = useLangTerm("DEV_NAME");
    const L_PHOTO_CREDITS = useLangTerm("PHOTO_CREDITS");

    return (
        <footer className={styles.container}>
            <div className={styles.contactLinks}>
                <a href={DEV_LINKEDIN} target="_blank"><FaLinkedin /></a>
                <a href={DEV_GITHUB} target="_blank"><FaGithubSquare /></a>
                <a href={'mailto:' + DEV_EMAIL} target="_blank"><FaEnvelopeSquare /></a>
            </div>
            <div className={styles.credits}>
                <div>© {new Date().getFullYear()} {L_DEV_NAME}</div>
                <div className={styles.photoCredits}><Link href="/photo_credits"><a>{L_PHOTO_CREDITS}</a></Link></div>
            </div>
        </footer>
    );
}
