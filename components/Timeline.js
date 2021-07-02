import { useEffect, useState } from 'react';
import { FaGraduationCap, FaRocket, FaSuitcase } from 'react-icons/fa';
import { useLangTerm } from '../utils/lang';
import dataEvents from '../data/events';
import { useRouter } from 'next/router';


// données en dur ici dans un premier temps, puis json
// voir la disposition
// chargements successif (scroll ou bouton)

// cartes avec nom, icone pour types (projet, mission, expérience, diplome)
// + pays sur carte
// + commentaire sur la carte
// + lien sur la carte






export default function Timeline() {

    const { locale } = useRouter();

    const [events, setEvents] = useState([]);
    const [filterStatus, setFilterStatus] = useState(0);
    const [filterGroup, setFilterGroup] = useState(0);

    const L_SHORT_MONTHS = useLangTerm('SHORT_MONTHS');
    const L_YEARS = useLangTerm('YEARS');
    const L_MONTHS = useLangTerm('MONTHS');

    const L_ALL = useLangTerm("ALL");
    const L_NAV_DEV = useLangTerm("NAV_DEV");
    const L_NAV_TEACH = useLangTerm("NAV_TEACH");
    const L_NAV_TRANSLATION = useLangTerm("NAV_TRANSLATION");
    const L_ONGOING = useLangTerm('ONGOING');


    useEffect(() => {
        setEvents(dataEvents);
    }, []);

    function getDuration(eventData) {
        const date1 = new Date(eventData.started);
        const date2 = new Date(eventData.ended);
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        let months = parseInt(diffDays / 30, 10) % 12;
        let years = parseInt(diffDays / 365, 10);

        return { years, months };
    }

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

    function renderTypeIcon(type) {
        return {
            "project": <FaRocket />,
            "job": <FaSuitcase />,
            "degree": <FaGraduationCap />,
        }[type] || "";
    }

    return (
        <div className="timeline-container">

            <div className="filters">
                <button className={`all ${filterGroup === 0 ? 'active' : ''}`} onClick={handleToggleFilterGroupAll}>{L_ALL}</button>
                <button className={`dev ${filterGroup === 1 ? 'active' : ''}`} onClick={handleToggleFilterGroupDev}>{L_NAV_DEV}</button>
                <button className={`teach ${filterGroup === 2 ? 'active' : ''}`} onClick={handleToggleFilterGroupTeach}>{L_NAV_TEACH}</button>
                {/* <button className={`translate ${filterGroup === 3 ? 'active' : ''}`} onClick={handleToggleFilterGroupTranslate}>{L_NAV_TRANSLATION}</button> */}
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
                        // return <EventCard key={index} index={index} data={event} />

                        const displayedStartDate = new Date(event.started || event.happened);
                        const duration = getDuration(event);

                        let durationStr = "~";
                        if (duration.years > 0) durationStr += `${duration.years} ${L_YEARS(duration.years)}`;
                        if (duration.months > 0) durationStr += `${duration.months} ${L_MONTHS(duration.months)} `;

                        return (
                            <div key={index} className={`event-container ${index % 2 == 1 ? "right" : "left"}`}>
                                <div className={`card ${event.group || ''}`}>
                                    <div className="card-head">
                                        {renderTypeIcon(event.type)}<h3>{event.name[locale]}</h3>
                                    </div>
                                    <div className="card-body">
                                        {event.description && <p>{event.description[locale] || ''}</p>}
                                        {event.started &&
                                            (event.ended ?
                                                <p className="duration">{durationStr}</p>
                                                :
                                                <p className="duration ongoing">{L_ONGOING}</p>
                                            )
                                        }
                                    </div>
                                </div>

                                <time>
                                    {`${L_SHORT_MONTHS[displayedStartDate.getMonth()]} ${displayedStartDate.getFullYear()}`}
                                </time>
                            </div>
                        );
                    })
                }
            </div>
        </div>
    );
}


