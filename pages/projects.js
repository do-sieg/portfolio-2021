import Head from "next/head";
import AppLayout from "../components/app/AppLayout";
import { useLangTerm } from "../utils/lang";
import { SITE_TITLE } from "../data/constants";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dataTechs from "../data/tech";
import { FaExternalLinkAlt } from "react-icons/fa";
import styles from "../styles/pages/common.module.css";
import ownStyles from "../styles/pages/projects.module.css";

function ProjectCard({ data }) {
    const L_ACTION_VISIT = useLangTerm('ACTION_VISIT');
    const L_ACTION_VIEW_CODE = useLangTerm('ACTION_VIEW_CODE');

    function renderTechIcons() {
        return (
            <>
                {data.tech.map((id, index) => {
                    return dataTechs[id] ?
                        <div key={index} className={ownStyles.techWrapper}>
                            {dataTechs[id].icon}
                            <span className={ownStyles.tooltip}>{dataTechs[id].name}</span>
                        </div>
                        : null
                })}
            </>
        );
    }

    return (
        data ?
            <div className={ownStyles.card}>
                <div className={ownStyles.info}>
                    <span className={ownStyles.title}>
                        {data.name}
                    </span>
                    <span className={ownStyles.description}>
                        {data.description}
                    </span>
                    <span className={ownStyles.techs}>
                        {data.tech && renderTechIcons()}
                    </span>
                </div>

                <div className={ownStyles.preview}>
                    <div className={ownStyles.thumbnail}>
                        {data.imagePath && <img src={data.imagePath} alt={data.name} />}
                    </div>
                    <div className={ownStyles.actions}>
                        {data.url &&
                            <a className={styles.promptBtn} href={data.url} target="_blank">
                                {L_ACTION_VISIT} <FaExternalLinkAlt />
                            </a>
                        }
                        {data.repository &&
                            <a className={styles.promptBtn} href={data.repository} target="_blank">
                                {L_ACTION_VIEW_CODE} <FaExternalLinkAlt />
                            </a>
                        }
                    </div>
                </div>
            </div>
            : null
    );
}

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
        <AppLayout className={styles.container}>
            <Head>
                <title>{SITE_TITLE} - {L_PROJECTS_TITLE}</title>
            </Head>

            <h1>{L_PROJECTS_TITLE}</h1>

            <section>
                <h2>{L_CLIENT_PROJECTS}</h2>
                <div className={ownStyles.container}>
                    <ProjectCard data={projects["kentia"]} />
                    <ProjectCard data={projects["saleth"]} />
                    <ProjectCard data={projects["biochem"]} />
                </div>
            </section>

            <section>
                <h2>{L_OWN_PROJECTS}</h2>
                <div className={ownStyles.container}>
                    <ProjectCard data={projects["scriptmanager"]} />
                    <ProjectCard data={projects["xpal"]} />
                </div>
            </section>

            <section>
                <h2>{L_DEMO_PROJECTS}</h2>
                <div className={ownStyles.container}>
                    <ProjectCard data={projects["oc2"]} />
                    <ProjectCard data={projects["oc3"]} />
                    <ProjectCard data={projects["oc4"]} />
                    <ProjectCard data={projects["oc6"]} />
                    <ProjectCard data={projects["oc7"]} />
                </div>
            </section>

            <section>
                <h2>{L_OLD_PROJECTS}</h2>
                <div className={ownStyles.container}>
                    <ProjectCard data={projects["coursjs"]} />
                </div>
            </section>

        </AppLayout>
    );
}