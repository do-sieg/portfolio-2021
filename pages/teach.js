import Link from "next/link";
import AppLayout from "../components/app/AppLayout";
import AppHead from "../components/app/AppHead";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useLangTerm } from "../utils/lang";
import { RESUME_PATHS, SITE_TITLE } from "../data/constants";
import SlideShowReviews from "../components/app/SlideShowReviews";
import { useRouter } from "next/router";
import pageStyles from "../styles/pages/Page.module.css";

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
    const L_VIEW_COURSES = useLangTerm('VIEW_COURSES');
    const L_REVIEWS = useLangTerm('REVIEWS');

    return (
        <AppLayout className={pageStyles.container}>
            <AppHead title={`${SITE_TITLE} - ${L_TEACH_TITLE}`} />

            <h1>{L_TEACH_TITLE}</h1>

            <section>
                {L_TEACH_INTRO}
                {L_TEACH_TRAINING}
                <div className={pageStyles.promptBox}>
                    <Link href={RESUME_PATHS[locale]}>
                        <a className={pageStyles.promptBtn} target="_blank">{L_DOWNLOAD_RESUME}</a>
                    </Link>
                </div>
                {L_TEACH_COURSES}
                <div className={pageStyles.promptBox}>
                    <Link href="/learn">
                        <a className={pageStyles.promptBtn}>{L_VIEW_COURSES}</a>
                    </Link>
                </div>
            </section>

            <section>
                {L_TEACH_PRIVATE}
                <div className={pageStyles.promptBox}>
                    {teachLinks.map((obj, index) => {
                        return (
                            <a key={index} className={pageStyles.promptBtn} href={obj.url} target="_blank">
                                {obj.text} <FaExternalLinkAlt />
                            </a>
                        );
                    })}
                </div>
            </section>

            <section>
                <h2>{L_REVIEWS}</h2>
                <SlideShowReviews autoNextTime={9000} />
            </section>
        </AppLayout>
    );
}