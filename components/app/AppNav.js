import Link from "next/link";
import { useContext } from "react";
import { FaCode, FaGraduationCap, FaHome, FaRocket, FaUser } from "react-icons/fa";
import { useLangTerm } from "../../utils/lang";
import { BurgerContext } from "../BurgerMenu";
import styles from "./AppNav.module.css";

export default function AppNav({ asideWrap = false }) {
    const L_NAV_HOME = useLangTerm("NAV_HOME");
    const L_NAV_ABOUT = useLangTerm("NAV_ABOUT");
    const L_NAV_DEV = useLangTerm("NAV_DEV");
    const L_NAV_TEACH = useLangTerm("NAV_TEACH");
    const L_NAV_TRANSLATION = useLangTerm("NAV_TRANSLATION");
    const L_NAV_CONTACT = useLangTerm("NAV_CONTACT");

    const burger = useContext(BurgerContext);

    function renderLinks() {

        const links = [
            { url: "/", icon: <FaHome />, text: L_NAV_HOME },
            { url: "/dev", icon: <FaCode />, text: L_NAV_DEV },
            { url: "/teach", icon: <FaGraduationCap />, text: L_NAV_TEACH },
        ];

        // <nav>
        //     {/* <Link href="/projects"><a onClick={burger.close}><FaRocket />{L_NAV_DEV}</a></Link> */}
        //     {/* <Link href="/about"><a><FaUser />{L_NAV_ABOUT}</a></Link> */}
        //     {/* <Link href="/translation"><a><FaLanguage />{L_NAV_TRANSLATION}</a></Link> */}
        //     {/* <Link href="/contact"><a><FaEnvelope />{L_NAV_CONTACT}</a></Link> */}
        // </nav>

        return (
            <>
                {links.map((element, index) => {
                    return (
                        <Link key={index} href={element.url}>
                            <a onClick={burger.close}>{element.icon}{element.text}</a>
                        </Link>
                    );
                })}
            </>
        );
    }

    return (
        asideWrap ?
            <aside className={styles.aside}>
                <nav className={styles.nav}>{renderLinks()}</nav>
            </aside>
            :
            <nav className={styles.nav}>{renderLinks()}</nav>
    );
}