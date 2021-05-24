import { useLangTerm } from "../utils/lang";
import AppHead from "./AppHead";
import { FaCode, FaEnvelope, FaGraduationCap, FaHome, FaLanguage, FaUser } from "react-icons/fa";
import Footer from "./Footer";
import LangLink from "./LangLink";

export default function PageLayout({ children }) {
    const L_DEV_NAME = useLangTerm("DEV_NAME");
    const L_DEV_JOB_TITLES = useLangTerm("DEV_JOB_TITLES");
    const L_NAV_HOME = useLangTerm("NAV_HOME");
    const L_NAV_ABOUT = useLangTerm("NAV_ABOUT");
    const L_NAV_DEV = useLangTerm("NAV_DEV");
    const L_NAV_TEACH = useLangTerm("NAV_TEACH");
    const L_NAV_TRANSLATION = useLangTerm("NAV_TRANSLATION");
    const L_NAV_CONTACT = useLangTerm("NAV_CONTACT");

    return (
        <>
            <AppHead />
            <header>
                <h1>{L_DEV_NAME}</h1>
                <p className="jobs">{L_DEV_JOB_TITLES}</p>
                <div className="lang-bar">
                    <LangLink lang="en"><a>EN</a></LangLink>
                    <LangLink lang="fr"><a>FR</a></LangLink>
                </div>
            </header>
            <div className="container">
                <div className="side-panel">
                    <nav>
                        <LangLink href="/"><a><FaHome />{L_NAV_HOME}</a></LangLink>
                        {/* <LangLink href="/about"><a><FaUser />{L_NAV_ABOUT}</a></LangLink> */}
                        {/* <LangLink href="/dev"><a><FaCode />{L_NAV_DEV}</a></LangLink> */}
                        {/* <LangLink href="/tutoring"><a><FaGraduationCap />{L_NAV_TEACH}</a></LangLink> */}
                        {/* <LangLink href="/translation"><a><FaLanguage />{L_NAV_TRANSLATION}</a></LangLink> */}
                        {/* <LangLink href="/contact"><a><FaEnvelope />{L_NAV_CONTACT}</a></LangLink> */}
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
