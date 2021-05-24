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
        type: "project",
        group: "dev",
        name: { en: "Project", fr: "Projet" },
        description: { en: "Some project I did some time ago. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!" },
        "started": "2020-03-31",
    },
    {
        type: "job",
        group: "teach",
        name: { en: "Job", fr: "Emploi" },
        description: { en: "I used to do this job. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!" },
        "started": "2020-01-01",
        "ended": "2021-02-08",
    },
    {
        type: "degree",
        group: "translation",
        name: { en: "Degree", fr: "Diplôme" },
        description: { en: "I graduated from some university. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!" },
        "started": "2019-12-17",
    },
];

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
                    <p>{data.description[lang]}</p>
                    {data.ended ?
                        <p className="duration">{getDuration(data)}</p>
                        :
                        <p className="duration ongoing">{L_ONGOING}</p>
                    }
                </div>
            </div>

            <time>
                {getShortDate(data.started)}
            </time>
        </div>
    );
}

export default function Timeline() {

    return (
        <div className="timeline-container">
            <div className="timeline">
                {events.map((event, index) => {
                    return <EventCard key={index} index={index} data={event} />
                })}
            </div>
        </div>
    );
}