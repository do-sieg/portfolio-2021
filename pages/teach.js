import Head from "next/head";
import Link from "next/link";
import AppLayout from "../components/app/AppLayout";
import { FaExternalLinkAlt, FaQuoteLeft, FaQuoteRight, FaRegStar, FaStar } from "react-icons/fa";
import { useLangTerm } from "../utils/lang";
import { RESUME_PATHS, SITE_TITLE } from "../data/constants";
import { useSlides } from "../utils/slides";
import { useEffect } from "react";
import SlideShowReviews from "../components/app/SlideShowReviews";
import { useRouter } from "next/router";
import styles from "../styles/pages.module.css";

const teachLinks = [
    { text: "Kelprof", url: "https://www.kelprof.com/cours-particuliers/programmation/cours-particulier-developpement-web-professionnel-762600.html" },
    { text: "Superprof", url: "https://www.superprof.fr/cours-distance-developpement-web-frameworks-javascript-reactjs-nodejs.html" },
];

export default function Teach() {
    const { locale } = useRouter();
    const L_TEACH_TITLE = useLangTerm('TEACH_TITLE');
    const L_TEACH_INTRO = useLangTerm('TEACH_INTRO');
    const L_TEACH_TRAINING = useLangTerm('TEACH_TRAINING');
    const L_TEACH_COURSES = useLangTerm('TEACH_COURSES');
    const L_TEACH_PRIVATE = useLangTerm('TEACH_PRIVATE');
    const L_DOWNLOAD_RESUME = useLangTerm('DOWNLOAD_RESUME');
    const L_REVIEWS = useLangTerm('REVIEWS');

    return (
        <AppLayout className={styles.container}>
            <Head>
                <title>{SITE_TITLE} - {L_TEACH_TITLE}</title>
            </Head>

            <h1>{L_TEACH_TITLE}</h1>

            <section>
                {L_TEACH_INTRO}
                {L_TEACH_TRAINING}
                <div className={styles.promptBox}>
                    <Link href={RESUME_PATHS[locale]}>
                        <a className={styles.promptBtn} target="_blank">{L_DOWNLOAD_RESUME}</a>
                    </Link>
                </div>
                {L_TEACH_COURSES}
                {L_TEACH_PRIVATE}
                <div className={styles.promptBox}>
                    {teachLinks.map((obj, index) => {
                        return (
                            <a key={index} className={styles.promptBtn} href={obj.url} target="_blank">
                                {obj.text} <FaExternalLinkAlt />
                            </a>
                        );
                    })}
                </div>
            </section>

            <section>
                <h2>{L_REVIEWS}</h2>
                <SlideShowReviews autoNextTime={8000} />
            </section>
        </AppLayout>
    );
}