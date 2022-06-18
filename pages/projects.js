import AppLayout from "../components/app/AppLayout";
import AppHead from "../components/app/AppHead";
import { useLang } from "../utils/lang";
import { SITE_TITLE } from "../data/constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProjectCard } from "../components/app/ProjectCard";
import pageStyles from "../styles/pages/Page.module.css";
import styles from "../styles/pages/Projects.module.css";

export default function Projects() {
    const router = useRouter();
    const [projects, setProjects] = useState([]);
    const { titleProjects, titleClientProjects, titleOwnProjects, titleDemoProjects, titleOldProjects } = useLang("projects");

    useEffect(() => {
        try {
            const data = require(`../data/projects_${router.locale}.json`);
            setProjects(data);
        } catch (err) {
            console.error(err);
        }
    }, [router.locale]);

    return (
        <AppLayout className={pageStyles.container}>
            <AppHead title={`${SITE_TITLE} - ${titleProjects}`} />

            <h1>{titleProjects}</h1>

            <section>
                <h2>{titleClientProjects}</h2>
                <div className={styles.container}>
                    <ProjectCard data={projects["armenianz"]} />
                    <ProjectCard data={projects["kentia"]} />
                    <ProjectCard data={projects["saleth"]} />
                    <ProjectCard data={projects["biochem"]} />
                </div>
            </section>

            <section>
                <h2>{titleOwnProjects}</h2>
                <div className={styles.container}>
                    <ProjectCard data={projects["do-blog"]} />
                    <ProjectCard data={projects["arpege"]} />
                    <ProjectCard data={projects["scriptmanager"]} />
                    <ProjectCard data={projects["xpal"]} />
                </div>
            </section>

            <section>
                <h2>{titleDemoProjects}</h2>
                <div className={styles.container}>
                    <ProjectCard data={projects["oc2"]} />
                    <ProjectCard data={projects["oc3"]} />
                    <ProjectCard data={projects["oc4"]} />
                    <ProjectCard data={projects["oc6"]} />
                    <ProjectCard data={projects["oc7"]} />
                </div>
            </section>

            <section>
                <h2>{titleOldProjects}</h2>
                <div className={styles.container}>
                    <ProjectCard data={projects["coursjs"]} />
                </div>
            </section>

        </AppLayout>
    );
}