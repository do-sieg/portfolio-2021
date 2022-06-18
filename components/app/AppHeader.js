import Link from "next/link";
import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { BurgerContext } from "../core/BurgerMenu";
import LangBar from "./LangBar";
import { useLang } from "../../utils/lang";
import styles from "./AppHeader.module.css";

export default function AppHeader() {
    const burger = useContext(BurgerContext);
    const { devName, devJobTitles } = useLang("common");

    return (
        <header className={styles.container}>
            {!burger.isOpen &&
                <button className={styles.menuBtn} onClick={burger.open}><FaBars /></button>
            }

            <Link href="/">
                <a className={styles.main}>
                    <div className={styles.siteName}>{devName}</div>
                    <div className={styles.siteDescription}>{devJobTitles}</div>
                </a>
            </Link>

            <div className={styles.langBar}>
                <LangBar />
            </div>
        </header>
    );
}