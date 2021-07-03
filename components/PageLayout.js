import { useLangTerm } from "../utils/lang";
import AppHead from "./AppHead";
import { FaBars } from "react-icons/fa";
import Footer from "./Footer";
import { useContext } from "react";
import LangBar from "./LangBar";
import NavLinks from "./NavLinks";
import { BurgerContext } from "./BurgerMenu";
import styles from "../styles/PageLayout.module.css";


export default function PageLayout({ children }) {
    const L_DEV_NAME = useLangTerm("DEV_NAME");
    const L_DEV_JOB_TITLES = useLangTerm("DEV_JOB_TITLES");

    const burger = useContext(BurgerContext);

    // useEffect(() => {
    //     document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
    // }, [menuOpen]);

    return (
        <>
            <AppHead />

            <header className={styles.header}>
                {!burger.isOpen &&
                    <button className={`${styles.menuButton} menu-btn`} onClick={burger.open}><FaBars /></button>
                }

                <h1>{L_DEV_NAME}</h1>
                <p className="jobs">{L_DEV_JOB_TITLES}</p>
                <LangBar />
            </header>

            <div className="container">
                <div className="side-panel">
                    <NavLinks />
                </div>
                <div className="main-panel">
                    <main>{children}</main>
                    <Footer />
                </div>
            </div>
        </>
    );
}
