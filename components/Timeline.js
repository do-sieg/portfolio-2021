import { FaGraduationCap, FaRocket, FaSuitcase } from 'react-icons/fa';


// données en dur ici dans un premier temps, puis json
// voir la disposition
// chargements successif (scroll ou bouton)

// cartes avec nom, icone pour types (projet, mission, expérience, diplome)
// + pays sur carte
// + commentaire sur la carte
// + lien sur la carte



const events = [
    {
        name: "Project",
        type: "project",
        "started": "2020-03-31",
    },
    {
        name: "Job",
        type: "job",
        "started": "2020-01-01",
        "ended": "2020-02-08",
    },
    {
        name: "Diploma",
        type: "diploma",
        "started": "2019-12-17",
    },
];

function EventCard({ data }) {

    function renderTypeIcon(type) {
        switch (type) {
            case "project":
                return <FaRocket />;
                break;
            case "job":
                return <FaSuitcase />;
                break;
            case "diploma":
                return <FaGraduationCap />;
                break;
            default:
                break;
        }
        return
    }

    return (
        <div className="card">
            <h3>{data.name}</h3>
            {renderTypeIcon(data.type)}
            {data.started}
            {data.ended || "---"}
        </div>
    );
}

export default function Timeline() {
    return (
        <>
            <h2>TIMELINE</h2>
            <div className="timeline-container">
                <div className="timeline"></div>
                <div className="timeline-events">
                    {events.map((event, index) => {
                        return <EventCard key={index} data={event} />
                    })}
                </div>
            </div>
        </>
    );
}