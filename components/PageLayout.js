import { useLangTerm } from "../utils/lang";
import AppHead from "./AppHead";
import { FaBars, FaCode, FaEnvelope, FaGraduationCap, FaHome, FaLanguage, FaTimes, FaUser } from "react-icons/fa";
import Footer from "./Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function PageLayout({ children }) {
    const L_DEV_NAME = useLangTerm("DEV_NAME");
    const L_DEV_JOB_TITLES = useLangTerm("DEV_JOB_TITLES");
    const L_NAV_HOME = useLangTerm("NAV_HOME");
    const L_NAV_ABOUT = useLangTerm("NAV_ABOUT");
    const L_NAV_DEV = useLangTerm("NAV_DEV");
    const L_NAV_TEACH = useLangTerm("NAV_TEACH");
    const L_NAV_TRANSLATION = useLangTerm("NAV_TRANSLATION");
    const L_NAV_CONTACT = useLangTerm("NAV_CONTACT");

    const router = useRouter();
    console.log(router);

    const [menuOpen, setMenuOpen] = useState(false);
    // useEffect(() => {
    //     document.body.style.overflow = menuOpen ? 'hidden' : 'unset';
    // }, [menuOpen]);

    function handleOpenMenu(e) {
        e.preventDefault();
        setMenuOpen(true);
    }

    function handleCloseMenu() {
        // No event prevent default here for links
        setMenuOpen(false);
    }

    function MenuLink({ href, icon, text }) {
        return <Link href={href}><a onClick={handleCloseMenu}>{icon}{text}</a></Link>;
    }

    function renderMenuLinks() {
        return (
            <>
                <MenuLink href="/" icon={<FaHome />} text={L_NAV_HOME} />
                {/* <Link href="/about"><a><FaUser />{L_NAV_ABOUT}</a></Link> */}
                {/* <Link href="/dev"><a><FaCode />{L_NAV_DEV}</a></Link> */}
                <MenuLink href="/teach" icon={<FaGraduationCap />} text={L_NAV_TEACH} />
                {/* <Link href="/translation"><a><FaLanguage />{L_NAV_TRANSLATION}</a></Link> */}
                {/* <Link href="/contact"><a><FaEnvelope />{L_NAV_CONTACT}</a></Link> */}
            </>
        );
    }

    return (
        <>
            <AppHead />
            <div className={`menu-overlay ${menuOpen ? "open" : ""}`} onScroll={(e) => {
                console.log(e);
            }}>
                {menuOpen && <button className="close-btn" onClick={handleCloseMenu}><FaTimes /></button>}
                <nav>{renderMenuLinks()}</nav>
            </div>


            <header>
                {!menuOpen &&
                    <button className="menu-btn" onClick={handleOpenMenu}><FaBars /></button>
                }

                <h1>{L_DEV_NAME}</h1>
                <p className="jobs">{L_DEV_JOB_TITLES}</p>
                <div className="lang-bar">
                    {router.locales.map((loc) => {
                        const shortLoc = loc.substr(0, 2).toUpperCase();
                        return (
                            <Link key={loc} href={router.asPath} locale={loc}>
                                <a className={loc === router.locale ? "current" : ""}>{shortLoc}</a>
                            </Link>
                        );
                    })}
                </div>
            </header>
            <div className="container">
                <div className="side-panel">
                    <nav>
                        {renderMenuLinks()}
                    </nav>
                </div>
                <div className="main-panel">
                    <main>{children}</main>
                    <Footer />
                </div>
            </div>
        </>
    );
}
