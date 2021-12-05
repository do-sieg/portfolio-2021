import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { BurgerContext } from "../core/BurgerMenu";
import LangBar from "./LangBar";
import Link from "next/link";
import { useLangTerm } from "../../utils/lang";
import styles from "./AppHeader.module.css";

export default function AppHeader() {
    const burger = useContext(BurgerContext);
    const L_DEV_NAME = useLangTerm("DEV_NAME");
    const L_DEV_JOB_TITLES = useLangTerm("DEV_JOB_TITLES");

    return (
        <header className={styles.container}>
            {!burger.isOpen &&
                <button className={styles.menuBtn} onClick={burger.open}><FaBars /></button>
            }

            <Link href="/">
                <a className={styles.main}>
                    <div className={styles.siteName}>{L_DEV_NAME}</div>
                    <div className={styles.siteDescription}>{L_DEV_JOB_TITLES}</div>
                </a>
            </Link>

            <div className={styles.langBar}>
                <LangBar />
            </div>
        </header>
    );
}