import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { BurgerContext } from "../BurgerMenu";
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
                <button className={styles.burgerBtn} onClick={burger.open}><FaBars /></button>
            }

            <Link href="/">
                <a className={styles.main}>
                    <div className={styles.devName}>{L_DEV_NAME}</div>
                    <div className={styles.devJobTitles}>{L_DEV_JOB_TITLES}</div>
                </a>
            </Link>

            <LangBar />
        </header>
    );
}