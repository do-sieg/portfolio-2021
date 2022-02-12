import Link from "next/link";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import { useLangTerm } from "../../../utils/lang";
import { GoChevronRight } from "react-icons/go";
import styles from "./LearnNav.module.css";

export default function LearnNav({ subjectId, lessonSlug = "", lessonNumber = null, lessonTitle = "" }) {
    const { locale } = useRouter();
    const L_LESSONS_TITLE = useLangTerm("LESSONS_TITLE");
    const L_LESSONS_SUBJECT_TITLE = useLangTerm("LESSONS_SUBJECT_TITLE");
    const [links, setLinks] = useState([]);

    useEffect(() => {
        const newLinks = [];
        const learnSubjects = require(`../../../data/learn_subjects_${locale}`).learnSubjects;
        newLinks.push({ text: L_LESSONS_SUBJECT_TITLE(learnSubjects[subjectId].name), path: `/learn/${subjectId}` });
        if (lessonSlug && lessonTitle) {
            let text = lessonTitle;
            if (lessonNumber) text = `[${lessonNumber}] ${text}`;
            newLinks.push({ text, path: `/learn/${subjectId}/${lessonSlug}` });
        }
        setLinks(newLinks);
    }, []);

    return (
        <div className={styles.container}>
            <Link href={"/learn"}><a>{L_LESSONS_TITLE}</a></Link>
            {links.map(({ text, path }, index) => {
                return (
                    <Fragment key={index}>
                        <GoChevronRight />
                        <Link key={index} href={path}><a>{text}</a></Link>
                    </Fragment>
                );
            })}
        </div>
    );
}
