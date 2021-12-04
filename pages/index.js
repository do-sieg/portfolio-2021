import Head from "next/head";
import Link from "next/link";
import { useLangTerm } from "../utils/lang";
// import Timeline, { mapEventsFromData } from "../components/Timeline";
// import events from "../data/events";
import AppLayout from "../components/app/AppLayout";
import Skillset from "../components/app/Skillset";
import { RESUME_PATHS, SITE_TITLE } from "../data/constants";
import Hero from "../components/app/Hero";
import { useRouter } from "next/router";
import styles from "../styles/pages/common.module.css";

export default function Home() {
    const { locale } = useRouter();
    const L_HOME_TITLE = useLangTerm('HOME_TITLE');
    const L_HOME_INTRO_DEV = useLangTerm('HOME_INTRO_DEV');
    const L_HOME_INTRO_TEACH = useLangTerm('HOME_INTRO_TEACH');
    // const L_TIMELINE = useLangTerm('TIMELINE');
    // const L_HOME_SLIDE_PROMPT_1 = useLangTerm('HOME_SLIDE_PROMPT_1');
    // const L_HOME_SLIDE_PROMPT_2 = useLangTerm('HOME_SLIDE_PROMPT_2');
    // const L_HOME_SLIDE_PROMPT_3 = useLangTerm('HOME_SLIDE_PROMPT_3');
    const L_LEARN_MORE = useLangTerm('LEARN_MORE');
    const L_VIEW_PROJECTS = useLangTerm('VIEW_PROJECTS');
    const L_DOWNLOAD_RESUME = useLangTerm('DOWNLOAD_RESUME');
    const L_SKILLS_MAIN = useLangTerm('SKILLS_MAIN');
    const L_SKILLS_OTHER = useLangTerm('SKILLS_OTHER');

    return (
        <AppLayout className={styles.container}>
            <Head>
                <title>{SITE_TITLE} - {L_HOME_TITLE}</title>
            </Head>

            <Hero />

            <h1>{L_HOME_TITLE}</h1>

            <section>
                {L_HOME_INTRO_DEV}
                <div className={styles.promptBox}>
                    <Link href="./projects">
                        <a className={styles.promptBtn}>{L_VIEW_PROJECTS}</a>
                    </Link>
                    <Link href={RESUME_PATHS[locale]}>
                        <a className={styles.promptBtn} target="_blank">{L_DOWNLOAD_RESUME}</a>
                    </Link>
                </div>

                {L_HOME_INTRO_TEACH}
                <div className={styles.promptBox}>
                    <Link href="./teach">
                        <a className={styles.promptBtn}>{L_LEARN_MORE}</a>
                    </Link>
                </div>
            </section >

            <section>
                <h2>{L_SKILLS_MAIN}</h2>
                <Skillset skills={[
                    "html",
                    "css",
                    "js",
                    "reactjs",
                    "nodejs",
                    "nextjs",
                    "mysql",
                ]} />
            </section>

            <section>
                <h2>{L_SKILLS_OTHER}</h2>
                <Skillset skills={[
                    "php",
                    "ruby",
                    "gdscript",
                    "mongodb",
                    "sass",
                    "less",
                    "git",
                    "seo",
                ]} />
            </section>

            {/* <section>
                <h2>NEWS</h2>
            </section> */}

            {/* <section>
                <h2>AVIS</h2>
            </section> */}

            {/* <section>
                <SlideShow
                    customStyles={{
                        container: "base-slideshow-container",
                        prevBtn: "base-slide-nav-btn left",
                        nextBtn: "base-slide-nav-btn right",
                    }}
                    autoNextTime={4}
                    slideList={[
                        { text: L_HOME_SLIDE_PROMPT_1, link: "/dev" },
                        { text: L_HOME_SLIDE_PROMPT_2, link: "/teach" },
                        { text: L_HOME_SLIDE_PROMPT_3, link: "/translation" },
                    ]}
                    renderSlide={(obj, index) => {
                        return (
                            <div className="base-slide home-slide">
                                <p>{obj.text}</p>
                                <Link href={obj.link}><a>{L_LEARN_MORE}</a></Link>
                            </div>
                        );
                    }}
                />
            </section> */}


            <section>
                {/* <h2>{L_TIMELINE}</h2> */}
                {/* <Timeline events={mapEventsFromData(events)
                    .sort((a, b) => b.startDate - a.startDate)}
                /> */}
            </section>
        </AppLayout>
    );
}