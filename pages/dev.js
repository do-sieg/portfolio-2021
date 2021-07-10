import { FaCss3Alt, FaHtml5, FaJsSquare, FaLess, FaNodeJs, FaPhp, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { DiRuby } from "react-icons/di";
import { SiGodotengine, SiNextDotJs } from "react-icons/si";
import PageLayout from "../components/PageLayout";
import { useLangTerm } from "../utils/lang";
import styles from "../styles/Dev.module.css";
import Timeline, { mapEventsFromData } from "../components/Timeline";
import events from "../data/events";

export default function Dev() {
    const L_LANGUAGES = useLangTerm('LANGUAGES');
    const L_TOOLS = useLangTerm('TOOLS');
    const L_PROJECTS = useLangTerm('PROJECTS');
    const L_TIMELINE = useLangTerm('TIMELINE');

    function Skill({ name, icon }) {
        return (
            <div className={`${styles.skillItem} skill-item`}>
                {icon}<span>{name}</span>
            </div>
        );
    }

    return (
        <PageLayout contentClass="page-content dev-page">

            <section>
                <h2>{L_LANGUAGES}</h2>
                <div className={`${styles.skillsContainer} skills-container`}>
                    <Skill name="HTML" icon={<FaHtml5 />} />
                    <Skill name="CSS" icon={<FaCss3Alt />} />
                    <Skill name="JavaScript" icon={<FaJsSquare />} />
                    <Skill name="PHP" icon={<FaPhp />} />
                    <Skill name="Ruby" icon={<DiRuby />} />
                    <Skill name="GDScript" icon={<SiGodotengine />} />
                </div>
            </section>

            <section>
                <h2>{L_TOOLS}</h2>
                <div className={`${styles.skillsContainer} skills-container`}>
                    <Skill name="ReactJS" icon={<FaReact />} />
                    <Skill name="NodeJS" icon={<FaNodeJs />} />
                    <Skill name="NextJS" icon={<SiNextDotJs />} />
                    <Skill name="MySQL" icon={<GrMysql />} />
                    <Skill name="LESS" icon={<FaLess />} />
                </div>
            </section>

            <section>
                <h2>{L_PROJECTS}</h2>

            </section>

        </PageLayout>
    );
}