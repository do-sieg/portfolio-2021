import Link from "next/link";
import { useContext } from "react";
import { FaChalkboardTeacher, FaCode, FaGraduationCap, FaHome, FaRocket, FaUser } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import { useLangTerm } from "../../utils/lang";
import { BurgerContext } from "../core/BurgerMenu";
import styles from "./AppNav.module.css";

export default function AppNav({ asideWrap = false }) {
    const L_NAV_HOME = useLangTerm("NAV_HOME");
    const L_NAV_BLOG = useLangTerm("NAV_BLOG");
    const L_NAV_PROJECTS = useLangTerm("NAV_PROJECTS");
    const L_NAV_TEACH = useLangTerm("NAV_TEACH");
    const L_NAV_LEARN = useLangTerm("NAV_LEARN");

    const burger = useContext(BurgerContext);

    function renderLinks() {

        const links = [
            { url: "/", icon: <FaHome />, text: L_NAV_HOME },
            { url: "/blog", icon: <RiArticleFill />, text: L_NAV_BLOG },
            { url: "/teach", icon: <FaChalkboardTeacher />, text: L_NAV_TEACH },
            { url: "/learn", icon: <FaGraduationCap />, text: L_NAV_LEARN },
            { url: "/projects", icon: <FaRocket />, text: L_NAV_PROJECTS },
        ];

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