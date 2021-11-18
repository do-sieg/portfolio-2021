import styles from "./Skillset.module.css";

export function SkillItem({ name, icon }) {
    return (
        <div className={styles.skillItem}>{icon ? icon() : null}<span>{name}</span></div>
    );
}

export default function Skillset({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}
