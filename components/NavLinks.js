import Link from "next/link";
import { useContext } from "react";
import { FaGraduationCap, FaHome } from "react-icons/fa";
import { useLangTerm } from "../utils/lang";
import { BurgerContext } from "./BurgerMenu";

export default function NavLinks() {
    const L_NAV_HOME = useLangTerm("NAV_HOME");
    const L_NAV_ABOUT = useLangTerm("NAV_ABOUT");
    const L_NAV_DEV = useLangTerm("NAV_DEV");
    const L_NAV_TEACH = useLangTerm("NAV_TEACH");
    const L_NAV_TRANSLATION = useLangTerm("NAV_TRANSLATION");
    const L_NAV_CONTACT = useLangTerm("NAV_CONTACT");

    const burger = useContext(BurgerContext);

    return (
        <nav>
            <Link href="/"><a onClick={burger.close}><FaHome />{L_NAV_HOME}</a></Link>
            {/* <Link href="/about"><a><FaUser />{L_NAV_ABOUT}</a></Link> */}
            {/* <Link href="/dev"><a><FaCode />{L_NAV_DEV}</a></Link> */}
            <Link href="/teach"><a onClick={burger.close}><FaGraduationCap />{L_NAV_TEACH}</a></Link>
            {/* <Link href="/translation"><a><FaLanguage />{L_NAV_TRANSLATION}</a></Link> */}
            {/* <Link href="/contact"><a><FaEnvelope />{L_NAV_CONTACT}</a></Link> */}
        </nav>
    );
}