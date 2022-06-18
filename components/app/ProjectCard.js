import Link from "next/link";
import { useLang } from "../../utils/lang";
import dataTechs from "../../data/tech";
import { FaDoorOpen, FaExternalLinkAlt } from "react-icons/fa";
import styles from "../../styles/pages/Projects.module.css";

export function ProjectCard({ data }) {
    const { actionVisit, actionViewCode } = useLang("projects");

    function renderTechIcons() {
        return (
            <>
                {data.tech.map((id, index) => {
                    return dataTechs[id] ?
                        <div key={index} className={styles.techWrapper}>
                            {dataTechs[id].icon}
                            <span className={styles.tooltip}>{dataTechs[id].name}</span>
                        </div>
                        : null;
                })}
            </>
        );
    }

    return (
        data ?
            <div className={styles.card}>
                <div className={styles.info}>
                    <span className={styles.title}>
                        {data.name}
                    </span>
                    <span className={styles.description}>
                        {data.description}
                    </span>
                    <span className={styles.techs}>
                        {data.tech && renderTechIcons()}
                    </span>
                </div>

                <div className={styles.preview}>
                    <div className={styles.thumbnail}>
                        {data.imagePath && <img src={data.imagePath} alt={data.name} />}
                    </div>
                    <div className={styles.actions}>
                        {data.link &&
                            <Link href={data.link}><a className={styles.promptBtn}>
                                {actionVisit} <FaDoorOpen />
                            </a></Link>}
                        {data.url &&
                            <a className={styles.promptBtn} href={data.url} target="_blank">
                                {actionVisit} <FaExternalLinkAlt />
                            </a>}
                        {data.repository &&
                            <a className={styles.promptBtn} href={data.repository} target="_blank">
                                {actionViewCode} <FaExternalLinkAlt />
                            </a>}
                    </div>
                </div>
            </div>
            : null
    );
}
