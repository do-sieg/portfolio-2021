import Link from "next/link";
import { useLang } from "../utils/lang";
import AppLayout from "../components/app/AppLayout";
import AppHead from "../components/app/AppHead";
import Skillset from "../components/app/Skillset";
import { RESUME_PATHS, SITE_TITLE } from "../data/constants";
import Hero from "../components/app/Hero";
import { useRouter } from "next/router";
import pageStyles from "../styles/pages/Page.module.css";

export default function Home() {
    const { locale } = useRouter();
    const { devJobTitles, actionLearnMore, actionDownloadResume } = useLang("common");
    const { titleWelcome, titleMainSkills, titleOtherSkills, actionViewProjects, introDev, introTeach } = useLang("home");

    return (
        <AppLayout className={pageStyles.container}>
            <AppHead title={`${SITE_TITLE} - ${devJobTitles}`} />

            <Hero />

            <h1>{titleWelcome}</h1>

            <section>
                {introDev}
                <div className={pageStyles.promptBox}>
                    <Link href="/projects">
                        <a className={pageStyles.promptBtn}>{actionViewProjects}</a>
                    </Link>
                    <Link href={RESUME_PATHS[locale]}>
                        <a className={pageStyles.promptBtn} target="_blank">{actionDownloadResume}</a>
                    </Link>
                </div>

                {introTeach}
                <div className={pageStyles.promptBox}>
                    <Link href="/teach">
                        <a className={pageStyles.promptBtn}>{actionLearnMore}</a>
                    </Link>
                </div>
            </section >

            <section>
                <h2>{titleMainSkills}</h2>
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
                <h2>{titleOtherSkills}</h2>
                <Skillset skills={[
                    "php",
                    "ruby",
                    "gdscript",
                    "mongodb",
                    "wp",
                    "sass",
                    "less",
                    "git",
                    "seo",
                ]} />
            </section>
        </AppLayout>
    );
}