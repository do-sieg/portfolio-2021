import Link from "next/link";
import { useLangTerm } from "../../utils/lang";
import dataTechs from "../../data/tech";
import { FaDoorOpen, FaExternalLinkAlt } from "react-icons/fa";
import styles from "../../styles/pages/Projects.module.css";

export function ProjectCard({ data }) {
    const L_ACTION_VISIT = useLangTerm('ACTION_VISIT');
    const L_ACTION_VIEW_CODE = useLangTerm('ACTION_VIEW_CODE');

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
                                {L_ACTION_VISIT} <FaDoorOpen />
                            </a></Link>}
                        {data.url &&
                            <a className={styles.promptBtn} href={data.url} target="_blank">
                                {L_ACTION_VISIT} <FaExternalLinkAlt />
                            </a>}
                        {data.repository &&
                            <a className={styles.promptBtn} href={data.repository} target="_blank">
                                {L_ACTION_VIEW_CODE} <FaExternalLinkAlt />
                            </a>}
                    </div>
                </div>
            </div>
            : null
    );
}
