import { FaGraduationCap, FaRocket, FaSuitcase } from 'react-icons/fa';
import { useLangTerm } from '../utils/lang';
import { useRouter } from 'next/router';
import styles from "../styles/Timeline.module.css";


class Event {
    constructor({ type, group, name, description, dates }) {
        this.type = type || "none";
        this.group = group || "none";
        this.name = name || "";
        this.description = description || "";
        if (dates) {
            this.startDate = dates[0] ? new Date(dates[0]) : null;
            if (dates[1]) {
                this.endDate = new Date(dates[1]);
            } else if (dates[1] === null) {
                this.endDate = null;
            }
        }
    }

    getDuration() {
        const diffTime = Math.abs(this.endDate - this.startDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        let months = parseInt(diffDays / 30, 10) % 12;
        let years = parseInt(diffDays / 365, 10);

        return { years, months };
    }

    isOneShot() {
        return this.startDate && this.endDate === undefined;
    }

    isOngoing() {
        return this.endDate === null;
    }
}


export function mapEventsFromData(list) {
    return list.map(data => new Event(data));
}


export default function Timeline({ events = [] }) {
    const { locale } = useRouter();
    const L_YEARS = useLangTerm('YEARS');
    const L_MONTHS = useLangTerm('MONTHS');
    const L_SHORT_MONTHS = useLangTerm('SHORT_MONTHS');
    const L_ONGOING = useLangTerm('ONGOING');

    function getEventDurationStr(event) {
        const duration = event.getDuration();
        let durationStr = "~";
        if (duration.years > 0) durationStr += `${duration.years} ${L_YEARS(duration.years)}`;
        if (duration.months > 0) durationStr += ` ${duration.months} ${L_MONTHS(duration.months)}`;
        return durationStr;
    }

    function renderTypeIcon(type) {
        return {
            "project": <FaRocket />,
            "job": <FaSuitcase />,
            "degree": <FaGraduationCap />,
        }[type] || "";
    }

    return (
        <div className={`${styles.container} timeline-container`}>
            {events.map((event, index) => {

                return (
                    <div key={index} className={`${styles.eventContainer} event-container`}>

                        <time>
                            {event.startDate ?
                                `${L_SHORT_MONTHS[event.startDate.getMonth()]} ${event.startDate.getFullYear()}`
                                : "---"
                            }
                        </time>

                        <div className={`${styles.cardContainer} card-container ${event.type || ''}`}>

                            <div className={`${styles.cardHead} card-head`}>
                                {renderTypeIcon(event.type)}
                                <h3>{event.name[locale] || ""}</h3>
                            </div>

                            <div className={`${styles.cardBody} card-body`}>
                                <p>{event.description[locale] || ''}</p>

                                {!event.isOneShot() &&
                                    (event.isOngoing() ?
                                        <span className={`${styles.duration} ${styles.ongoing} duration ongoing`}>{L_ONGOING}</span>
                                        :
                                        <span className={`${styles.duration} duration`}>{getEventDurationStr(event)}</span>
                                    )
                                }
                            </div>
                        </div>

                    </div>
                );
            })}
        </div>
    );
}


