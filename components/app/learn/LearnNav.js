import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useLangTerm } from "../../../utils/lang";
import { getSubject } from "../../../utils/subjects";
import { GoChevronRight } from "react-icons/go";
import styles from "./LearnNav.module.css";

export default function LearnNav({ subjectId, lessonSlug = "", lessonNumber = null, lessonTitle = "" }) {
    const { locale } = useRouter();
    const L_LESSONS_TITLE = useLangTerm("LESSONS_TITLE");
    const L_LESSONS_SUBJECT_TITLE = useLangTerm("LESSONS_SUBJECT_TITLE");
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const newLinks = [];
        const subject = getSubject(locale, subjectId);
        newLinks.push({ text: L_LESSONS_SUBJECT_TITLE(subject.name), path: `/learn/${subjectId}` });
        if (lessonSlug && lessonTitle) {
            let text = lessonTitle;
            if (lessonNumber) text = `[${lessonNumber}] ${text}`;
            newLinks.push({ text, path: `/learn/${subjectId}/${lessonSlug}` });
        }
        setLinks(newLinks);
    }, [locale]);

    return (
        <div className={styles.container}>
            <Link href={"/learn"}><a>{L_LESSONS_TITLE}</a></Link>
            {links.map(({ text, path }, index) => {
                return (
                    <div key={index} className={styles.linkContainer}>
                        <GoChevronRight />
                        <Link key={index} href={path}><a>{text}</a></Link>
                    </div>
                );
            })}
        </div>
    );
}
