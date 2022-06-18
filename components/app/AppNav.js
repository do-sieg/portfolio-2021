import Link from "next/link";
import { useContext } from "react";
import { FaChalkboardTeacher, FaGraduationCap, FaHome, FaRocket } from "react-icons/fa";
import { RiArticleFill } from "react-icons/ri";
import { useLang } from "../../utils/lang";
import { BurgerContext } from "../core/BurgerMenu";
import styles from "./AppNav.module.css";

export default function AppNav({ asideWrap = false }) {
    const burger = useContext(BurgerContext);
    const { navHome, navBlog, navProjects, navTeach, navLearn } = useLang("common");

    function renderLinks() {

        const links = [
            { url: "/", icon: <FaHome />, text: navHome },
            { url: "/blog", icon: <RiArticleFill />, text: navBlog },
            { url: "/teach", icon: <FaChalkboardTeacher />, text: navTeach },
            { url: "/learn", icon: <FaGraduationCap />, text: navLearn },
            { url: "/projects", icon: <FaRocket />, text: navProjects },
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