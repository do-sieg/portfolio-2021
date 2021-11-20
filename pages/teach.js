import Head from "next/head";
import Link from "next/link";
import AppLayout from "../components/app/AppLayout";
import { FaExternalLinkAlt, FaQuoteLeft, FaQuoteRight, FaRegStar, FaStar } from "react-icons/fa";
import { useLangTerm } from "../utils/lang";
import SlideShow from "../components/SlideShow";
import { SITE_TITLE } from "../data/constants";
import styles from "../styles/pages.module.css";

const teachLinks = [
    { text: "Kelprof", url: "https://www.kelprof.com/cours-particuliers/programmation/cours-particulier-developpement-web-professionnel-762600.html" },
    { text: "Superprof", url: "https://www.superprof.fr/cours-distance-developpement-web-frameworks-javascript-reactjs-nodejs.html" },
];

const reviews = [
    {
        name: "Jordan V.",
        text: "Professeur compétent, pédagogue, soucieux de la réussite de ses élèves ! Le décor est planté... Les cours se passent très bien, les notions qui ont du mal à être comprises seront revues autant de fois que nécessaire, avec des exemples et explications dans le calme. M. Daniel vous fournira de la veille technologique en rapport avec votre sujet en plus des cours. Je recommande chaudement.",
        score: 5,
    },
    {
        name: "Mickael S.",
        text: "Daniel est posé, sympathique et très pédagogue.",
        score: 5,
    },
    {
        name: "Assel D.",
        text: "Daniel m'a beaucoup aidé avec les cours Java et JavaScript. Ses explications sont claires et j'en suis satisfaite. Je recommande vivement ! Merci beaucoup, Daniel, pour ton aide !",
        score: 5,
    },
    {
        name: "Diane",
        text: "Très clair et patient, Daniel sait trouver les bons exemples.",
        score: 4,
    },
    {
        name: "Fabien",
        text: "Parfait.",
        score: 5,
    },
];

export default function Teach() {
    const L_TEACH_TITLE = useLangTerm('TEACH_TITLE');
    const L_TEACH_INTRO = useLangTerm('TEACH_INTRO');
    const L_TEACH_TRAINING = useLangTerm('TEACH_TRAINING');
    const L_TEACH_COURSES = useLangTerm('TEACH_COURSES');
    const L_TEACH_PRIVATE = useLangTerm('TEACH_PRIVATE');
    const L_DOWNLOAD_RESUME = useLangTerm('DOWNLOAD_RESUME');
    const L_REVIEWS = useLangTerm('REVIEWS');

    function renderUserReview(score) {

        const scoreArrayFull = [...Array(score)];
        // const scoreArrayEmpty = [...Array(5 - score)];

        return (
            <>
                {scoreArrayFull.map((element, index) => {
                    return <FaStar key={index} />
                })}
                {/* {scoreArrayEmpty.map((element, index) => {
                    return <FaStar className="empty" key={index} />
                })} */}
            </>
        );
    }

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
                    <Link href="./projects">
                        <a className={styles.promptBtn}>{L_DOWNLOAD_RESUME}</a>
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

            {/* 

            <section className="reviews">
                <h2>{L_REVIEWS}</h2>

                {reviews.map((obj, index) => {
                    return (
                        <div className="review" key={index}>
                            <blockquote><FaQuoteLeft /> {obj.text} <FaQuoteRight /></blockquote>
                            <div className="score">{renderUserReview(obj.score)}</div>
                            <div className="name"> — {obj.name}</div>
                        </div>
                    );
                })}
            </section> */}
        </AppLayout>
    );
}