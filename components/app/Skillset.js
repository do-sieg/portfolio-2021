import dataTechs from "../../data/tech";
import styles from "./Skillset.module.css";

export default function Skillset({ skills = [] }) {
    return (
        <div className={styles.container}>
            {skills.map((id) => {
                const data = dataTechs[id];
                return data ?
                    <div className={styles.skillItem}>
                        {data.icon}<span>{data.name}</span>
                    </div>
                    : null
            })}
        </div>
    );
}
