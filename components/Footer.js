import { DEV_EMAIL } from "../data/constants";
import { useLangTerm } from "../utils/lang";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const L_DEV_NAME = useLangTerm("DEV_NAME");

    return (
        <footer>
            <span>© {currentYear} {L_DEV_NAME}</span>
            <a href={'mailto:' + DEV_EMAIL}>{DEV_EMAIL}</a>
        </footer>
    );
}
