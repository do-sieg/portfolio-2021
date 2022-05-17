import AppLayout from "../components/app/AppLayout";
import AppHead from "../components/app/AppHead";
import { useLangTerm } from "../utils/lang";
import { SITE_TITLE } from "../data/constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { ProjectCard } from "../components/app/ProjectCard";
import pageStyles from "../styles/pages/Page.module.css";
import styles from "../styles/pages/Projects.module.css";

export default function Projects() {
    const router = useRouter();
    const [projects, setProjects] = useState([]);
    const L_PROJECTS_TITLE = useLangTerm('PROJECTS_TITLE');
    const L_CLIENT_PROJECTS = useLangTerm('CLIENT_PROJECTS');
    const L_OWN_PROJECTS = useLangTerm('OWN_PROJECTS');
    const L_DEMO_PROJECTS = useLangTerm('DEMO_PROJECTS');
    const L_OLD_PROJECTS = useLangTerm('OLD_PROJECTS');

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
            <AppHead title={`${SITE_TITLE} - ${L_PROJECTS_TITLE}`} />

            <h1>{L_PROJECTS_TITLE}</h1>

            <section>
                <h2>{L_CLIENT_PROJECTS}</h2>
                <div className={styles.container}>
                    <ProjectCard data={projects["armenianz"]} />
                    <ProjectCard data={projects["kentia"]} />
                    <ProjectCard data={projects["saleth"]} />
                    <ProjectCard data={projects["biochem"]} />
                </div>
            </section>

            <section>
                <h2>{L_OWN_PROJECTS}</h2>
                <div className={styles.container}>
                    <ProjectCard data={projects["do-blog"]} />
                    <ProjectCard data={projects["arpege"]} />
                    <ProjectCard data={projects["scriptmanager"]} />
                    <ProjectCard data={projects["xpal"]} />
                </div>
            </section>

            <section>
                <h2>{L_DEMO_PROJECTS}</h2>
                <div className={styles.container}>
                    <ProjectCard data={projects["oc2"]} />
                    <ProjectCard data={projects["oc3"]} />
                    <ProjectCard data={projects["oc4"]} />
                    <ProjectCard data={projects["oc6"]} />
                    <ProjectCard data={projects["oc7"]} />
                </div>
            </section>

            <section>
                <h2>{L_OLD_PROJECTS}</h2>
                <div className={styles.container}>
                    <ProjectCard data={projects["coursjs"]} />
                </div>
            </section>

        </AppLayout>
    );
}