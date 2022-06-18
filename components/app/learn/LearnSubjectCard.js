import Link from "next/link";
import { useRouter } from "next/router";
import { useLang } from "../../../utils/lang";
import { getSubject } from "../../../utils/subjects";
import styles from "./LearnSubjectCard.module.css";

export default function LearnSubjectCard({ subjectId }) {
    const { locale } = useRouter();
    const { lessonsNumber } = useLang("learn");
    const subject = getSubject(locale, subjectId);

    function getTotalLessons() {
        const total = Object.values(subject.sections).reduce((acc, element) => acc + element.length, 0);
        return total;
    }

    return (
        subject && getTotalLessons(subjectId) > 0 ?
            <Link href={`/learn/${subjectId}`}><a>
                <div className={styles.container}>
                    <h3>{subject.name}</h3>
                    <div className={styles.description}>{subject.description}</div>
                    <div className={styles.action}>{lessonsNumber(getTotalLessons(subjectId))} →</div>
                </div>
            </a></Link>
            : null
    );
}
