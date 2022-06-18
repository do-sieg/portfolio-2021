import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useLang } from "../../../utils/lang";
import { getSubject } from "../../../utils/subjects";
import { GoChevronRight } from "react-icons/go";
import styles from "./LearnNav.module.css";

export default function LearnNav({ subjectId, lessonSlug = "", lessonNumber = null, lessonTitle = "" }) {
    const { locale } = useRouter();
    const { titleLearn, subjectTitle } = useLang("learn");
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const newLinks = [];
        const subject = getSubject(locale, subjectId);
        newLinks.push({ text: subjectTitle(subject.name), path: `/learn/${subjectId}` });
        if (lessonSlug && lessonTitle) {
            let text = lessonTitle;
            if (lessonNumber) text = `[${lessonNumber}] ${text}`;
            newLinks.push({ text, path: `/learn/${subjectId}/${lessonSlug}` });
        }
        setLinks(newLinks);
    }, [locale]);

    return (
        <div className={styles.container}>
            <Link href={"/learn"}><a>{titleLearn}</a></Link>
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
