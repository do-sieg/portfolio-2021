import Link from "next/link";
import AppLayout from "../components/app/AppLayout";
import AppHead from "../components/app/AppHead";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useLang } from "../utils/lang";
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
    const { actionDownloadResume, reviews } = useLang("common");
    const { titleTeach, introTeach, introTraining, introCourses, introPrivate, actionViewCourses } = useLang("teach");

    return (
        <AppLayout className={pageStyles.container}>
            <AppHead title={`${SITE_TITLE} - ${titleTeach}`} />

            <h1>{titleTeach}</h1>

            <section>
                {introTeach}
                {introTraining}
                <div className={pageStyles.promptBox}>
                    <Link href={RESUME_PATHS[locale]}>
                        <a className={pageStyles.promptBtn} target="_blank">{actionDownloadResume}</a>
                    </Link>
                </div>
                {introCourses}
                <div className={pageStyles.promptBox}>
                    <Link href="/learn">
                        <a className={pageStyles.promptBtn}>{actionViewCourses}</a>
                    </Link>
                </div>
            </section>

            <section>
                {introPrivate}
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
                <h2>{reviews}</h2>
                <SlideShowReviews autoNextTime={9000} />
            </section>
        </AppLayout>
    );
}