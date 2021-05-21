import { FaGraduationCap, FaRocket, FaSuitcase } from 'react-icons/fa';
import { useLangTerm } from '../utils/lang';


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
        name: "Project",
        description: "Some project I did some time ago. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!",
        "started": "2020-03-31",
    },
    {
        type: "job",
        name: "Job",
        description: "I used to do this job. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!",
        "started": "2020-01-01",
        "ended": "2021-02-08",
    },
    {
        type: "diploma",
        name: "Diploma",
        description: "I graduated from some university. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, nam! Nam eveniet ut aliquam ab asperiores, accusamus iure veniam corporis incidunt reprehenderit accusantium id aut architecto harum quidem dolorem in!",
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

    console.log(str);

    return str;
}

function EventCard({ index, data }) {

    function renderTypeIcon(type) {
        return {
            "project": <FaRocket />,
            "job": <FaSuitcase />,
            "diploma": <FaGraduationCap />,
        }[type] || "";
    }

    return (
        <div className={`event-container ${index % 2 == 1 ? "right" : "left"}`}>
            <div className="card">
                <div className="card-head">
                    {renderTypeIcon(data.type)}<h3>{data.name}</h3>
                </div>
                <div className="card-body">
                    <p>{data.description}</p>
                    {data.ended ?
                        <p className="duration">{getDuration(data)}</p>
                        :
                        <p className="duration ongoing">ONGOING</p>
                    }
                </div>
                <time>
                    {getShortDate(data.started)}
                </time>
            </div>
        </div>
    );
}

export default function Timeline() {
    return (
        <>
            <h2>TIMELINE</h2>
            <div className="timeline-container">
                <div className="timeline">
                    {events.map((event, index) => {
                        return <EventCard key={index} index={index} data={event} />
                    })}
                </div>
            </div>
        </>
    );
}