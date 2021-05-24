import { useState } from 'react';
import { FaGraduationCap, FaRocket, FaSuitcase } from 'react-icons/fa';
import { useLangContext, useLangTerm } from '../utils/lang';


// données en dur ici dans un premier temps, puis json
// voir la disposition
// chargements successif (scroll ou bouton)

// cartes avec nom, icone pour types (projet, mission, expérience, diplome)
// + pays sur carte
// + commentaire sur la carte
// + lien sur la carte



const events = [
    {
        type: "degree",
        group: "",
        name: { en: "???", fr: "Baccalauréat" },
        description: {
            en: "???",
            fr: (() => (
                <>
                    Baccalauréat Scientifique (spécialité mathématiques)<br />— Valence
                </>
            ))(),
        },
        "happened": "2005-06",
    },

    {
        type: "degree",
        group: "",
        name: { en: "???", fr: "Études supérieures" },
        description: {
            en: "???",
            fr: (() => (
                <>
                    Licence en droit général<br />
                    Maîtrise de droit privé<br />— UPMF, Grenoble
                </>
            ))(),
        },
        "happened": "2006-09",
    },

    {
        type: "degree",
        group: "dev",
        name: { en: "???", fr: "Formation" },
        description: {
            en: "???",
            fr: (() => (
                <>
                    Formation Développeur web<br />— OpenClassrooms
                </>
            ))(),
        },
        "started": "2021-03",
        "ended": "2021-05",
    },

    {
        type: "job",
        group: "teach",
        name: { en: "???", fr: "Enseignant FLE" },
        description: {
            en: "???",
            fr: (() => (
                <>
                    Français Langue Étrangère (collège-lycée)<br />— Logos School, Chypre
                </>
            ))(),
        },
        "started": "2013-09",
        "ended": "2018-09",
    },
    {
        type: "job",
        group: "teach",
        name: { en: "???", fr: "Enseignant Info/FLE" },
        description: {
            en: "???",
            fr: (() => (
                <>
                    Informatique (collège)<br />
                    Français Langue Étrangère (collège-lycée)<br />— Logos School, Chypre
                </>
            ))(),
        },
        "started": "2019-09",
        "ended": "2020-09",
    },

    {
        type: "job",
        group: "dev",
        name: { en: "???", fr: "Développeur fullstack" },
        description: {
            en: "???",
            fr: (() => (
                <>
                    Conception d’applications backend, APIs, sites e-commerce (NodeJS)<br />
                    Conception d’applications web frontend (ReactJS)<br />— Ubicross, Arménie
                </>
            ))(),
        },
        "started": "2018-09",
        "ended": "2019-09",
    },

    {
        type: "job",
        group: "dev",
        name: { en: "???", fr: "Développeur web free-lance" },
        description: {
            en: "???",
            fr: (() => (
                <>
                    Conception de sites vitrines multi-langues<br />
                    Support client (documentations, conseil)
                </>
            ))(),
        },
        "started": "2018-11",
    },

    {
        type: "job",
        group: "teach",
        name: { en: "???", fr: "Mentor développement" },
        description: {
            en: "???",
            fr: (() => (
                <>
                    Accompagnement d’élèves en formation<br />
                    Aide à la réalisation de projets pour développeurs de niveaux débutant à confirmé.<br />— Cours en ligne
                </>
            ))(),
        },
        "started": "2020-10",
    },

    {
        type: "job",
        group: "translate",
        name: { en: "???", fr: "Traducteur/Relecteur" },
        description: {
            en: "???",
            fr: (() => (
                <>
                    Traduction et correction de données, textes, manuels d’utilisation et fichiers informatiques.<br />
                    Anglais vers français.<br />— Faithlife, LLC
                </>
            ))(),
        },
        "started": "2020-11",
    },

    {
        type: "project",
        group: "dev",
        name: { en: "???", fr: "Agence Kentia" },
        description: {
            en: "???",
            fr: (() => (
                <>
                    Implémentation de fonctionnalités pour un site web et intégration de contenu.<br />— Agence Kentia
                </>
            ))(),
        },
        "started": "2020-11",
        "ended": "2021-02",
    },
];

// biochem
// saleth


function getShortDate(dateStr) {
    const L_SHORT_MONTHS = useLangTerm('SHORT_MONTHS');
    const date = new Date(dateStr);
    return `${L_SHORT_MONTHS[date.getMonth()]} ${date.getFullYear()}`;
}

function getDuration(eventData) {

    const date1 = new Date(eventData.started);
    const date2 = new Date(eventData.ended);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let str = "~";
    let months = parseInt(diffDays / 30, 10) % 12;
    let years = parseInt(diffDays / 365, 10);
    if (years > 0) str += `${years} year${years > 1 ? "s" : ""} `;
    if (months > 0) str += `${months} month${months > 1 ? "s" : ""} `;

    return str;
}

function EventCard({ index, data }) {

    const lang = useLangContext();
    const L_ONGOING = useLangTerm('ONGOING');

    function renderTypeIcon(type) {
        return {
            "project": <FaRocket />,
            "job": <FaSuitcase />,
            "degree": <FaGraduationCap />,
        }[type] || "";
    }

    return (
        <div className={`event-container ${index % 2 == 1 ? "right" : "left"}`}>
            <div className={`card ${data.group}`}>
                <div className="card-head">
                    {renderTypeIcon(data.type)}<h3>{data.name[lang]}</h3>
                </div>
                <div className="card-body">
                    {data.description && <p>{data.description[lang]}</p>}

                    {data.started &&
                        (data.ended ?
                            <p className="duration">{getDuration(data)}</p>
                            :
                            <p className="duration ongoing">{L_ONGOING}</p>
                        )
                    }
                </div>
            </div>

            <time>
                {getShortDate(data.started || data.happened)}
            </time>
        </div>
    );
}

export default function Timeline() {

    const [filterStatus, setFilterStatus] = useState(0);
    const [filterGroup, setFilterGroup] = useState(0);
    
    const [filterGroupDev, setFilterGroupDev] = useState(0);
    const [filterGroupTeach, setFilterGroupTeach] = useState(0);
    const [filterGroupTranslate, setFilterGroupTranslate] = useState(0);

    const L_ALL = useLangTerm("ALL");
    const L_NAV_DEV = useLangTerm("NAV_DEV");
    const L_NAV_TEACH = useLangTerm("NAV_TEACH");
    const L_NAV_TRANSLATION = useLangTerm("NAV_TRANSLATION");
    const L_ONGOING = useLangTerm('ONGOING');

    function handleToggleFilterStatus(e) {
        e.preventDefault();
        setFilterStatus(Math.abs(1 - filterStatus));
    }

    function handleToggleFilterGroupAll(e) {
        e.preventDefault();
        setFilterGroup(0);
    }

    function handleToggleFilterGroupDev(e) {
        e.preventDefault();
        setFilterGroup(1);
    }

    function handleToggleFilterGroupTeach(e) {
        e.preventDefault();
        setFilterGroup(2);
    }

    function handleToggleFilterGroupTranslate(e) {
        e.preventDefault();
        setFilterGroup(3);
    }

    return (
        <div className="timeline-container">

            <div class="filters">
                <button className={`all ${filterGroup === 0 ? 'active' : ''}`} onClick={handleToggleFilterGroupAll}>{L_ALL}</button>
                <button className={`dev ${filterGroup === 1 ? 'active' : ''}`} onClick={handleToggleFilterGroupDev}>{L_NAV_DEV}</button>
                <button className={`teach ${filterGroup === 2 ? 'active' : ''}`} onClick={handleToggleFilterGroupTeach}>{L_NAV_TEACH}</button>
                <button className={`translate ${filterGroup === 3 ? 'active' : ''}`} onClick={handleToggleFilterGroupTranslate}>{L_NAV_TRANSLATION}</button>
                <button className={`ongoing ${filterStatus === 1 ? 'active' : ''}`} onClick={handleToggleFilterStatus}>{L_ONGOING}</button>
            </div>

            <div className="timeline">
                {events
                    .filter((event) => {
                        let display = false;

                        if (filterGroup === 0) {
                            display = true;
                        }

                        if (filterGroup === 1 && event.group === "dev") {
                            display = true;
                        }
                        if (filterGroup === 2 && event.group === "teach") {
                            display = true;
                        }
                        if (filterGroup === 3 && event.group === "translate") {
                            display = true;
                        }
                        
                        if (filterStatus === 1) {
                            display = display && (event.started && !event.ended);
                        }
                        return display;
                    })
                    .sort((a, b) => {
                        const dateA = a.started || a.happened;
                        const dateB = b.started || b.happened;
                        return new Date(dateB) - new Date(dateA);
                    })
                    .map((event, index) => {
                        return <EventCard key={index} index={index} data={event} />
                    })}
            </div>
        </div>
    );
}