
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

export default function Timeline() {
    return (
        <div className="timeline">
            <h2>TIMELINE</h2>

            {events.map((event, index) => {
                return (
                    <div key={index} className="card">
                        <h3>{event.name}</h3>
                        {event.type}
                        {event.started}
                        {event.ended || "---"}
                    </div>
                );
            })}
        </div>
    );
}