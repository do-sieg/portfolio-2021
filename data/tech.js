import { DiRuby } from "react-icons/di";
import { FaCss3Alt, FaGitAlt, FaHtml5, FaJsSquare, FaLess, FaNodeJs, FaPaperPlane, FaPhp, FaReact, FaSass, FaSearchengin, FaWordpress } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiGodotengine, SiMongodb, SiNextDotJs } from "react-icons/si";

export default {
    html: { name: "HTML", icon: <FaHtml5 /> },
    css: { name: "CSS", icon: <FaCss3Alt /> },
    sass: { name: "Sass", icon: <FaSass /> },
    less: { name: "Less", icon: <FaLess /> },
    js: { name: "JavaScript", icon: <FaJsSquare /> },
    reactjs: { name: "ReactJS", icon: <FaReact /> },
    nodejs: { name: "NodeJS", icon: <FaNodeJs /> },
    nextjs: { name: "NextJS", icon: <SiNextDotJs /> },
    mysql: { name: "MySQL", icon: <GrMysql /> },
    php: { name: "PHP", icon: <FaPhp /> },
    ruby: { name: "Ruby", icon: <DiRuby /> },
    mongodb: { name: "MongoDB", icon: <SiMongodb /> },
    gdscript: { name: "GDScript", icon: <SiGodotengine /> },
    git: { name: "Git", icon: <FaGitAlt /> },
    seo: { name: "SEO", icon: <FaSearchengin /> },
    wp: { name: "Wordpress", icon: <FaWordpress /> },
    nocode: { name: "No Code", icon: <FaPaperPlane /> },
};
