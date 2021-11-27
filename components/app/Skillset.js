import dataTechs from "../../data/tech";
import styles from "./Skillset.module.css";

export default function Skillset({ skills = [] }) {
    return (
        <div className={styles.container}>
            {skills.map((id, index) => {
                const data = dataTechs[id];
                return data ?
                    <div key={index} className={styles.skillItem}>
                        {data.icon}<span>{data.name}</span>
                    </div>
                    : null
            })}
        </div>
    );
}
