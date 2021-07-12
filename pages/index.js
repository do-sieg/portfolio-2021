import Link from "next/link";
import { useLangTerm } from "../utils/lang";
import PageLayout from "../components/PageLayout";
import SlideShow from "../components/SlideShow";
import Timeline, { mapEventsFromData } from "../components/Timeline";
import events from "../data/events";

export default function Home() {
    const L_HOME_WELCOME = useLangTerm('HOME_WELCOME');
    const L_HOME_INTRO_DEV = useLangTerm('HOME_INTRO_DEV');
    const L_HOME_INTRO_TEACH = useLangTerm('HOME_INTRO_TEACH');
    const L_HOME_INTRO_SIGNATURE = useLangTerm('HOME_INTRO_SIGNATURE');
    const L_TIMELINE = useLangTerm('TIMELINE');
    const L_HOME_SLIDE_PROMPT_1 = useLangTerm('HOME_SLIDE_PROMPT_1');
    const L_HOME_SLIDE_PROMPT_2 = useLangTerm('HOME_SLIDE_PROMPT_2');
    const L_HOME_SLIDE_PROMPT_3 = useLangTerm('HOME_SLIDE_PROMPT_3');
    const L_LEARN_MORE = useLangTerm('LEARN_MORE');
    const L_LEARN_MORE_DEV = useLangTerm('LEARN_MORE_DEV');

    return (
        <PageLayout contentClass="page-content home-page">

            <section>
                <h2>{L_HOME_WELCOME}</h2>
                {L_HOME_INTRO_DEV}
                <Link href="./dev"><a className="prompt-btn">{L_LEARN_MORE_DEV}</a></Link>
                {L_HOME_INTRO_TEACH}
                <Link href="./teach"><a className="prompt-btn">{L_LEARN_MORE}</a></Link>
                {L_HOME_INTRO_SIGNATURE}
            </section >

            <section>
                <SlideShow
                    customStyles={{
                        container: "base-slideshow-container",
                        prevBtn: "base-slide-nav-btn left",
                        nextBtn: "base-slide-nav-btn right",
                    }}
                    autoNextTime={4}
                    slideList={[
                        { text: L_HOME_SLIDE_PROMPT_1, link: "/dev" },
                        { text: L_HOME_SLIDE_PROMPT_2, link: "/teach" },
                        { text: L_HOME_SLIDE_PROMPT_3, link: "/translation" },
                    ]}
                    renderSlide={(obj, index) => {
                        return (
                            <div className="base-slide home-slide">
                                <p>{obj.text}</p>
                                <Link href={obj.link}><a>{L_LEARN_MORE}</a></Link>
                            </div>
                        );
                    }}
                />
            </section>


            <section>
                <h2>{L_TIMELINE}</h2>
                <Timeline events={mapEventsFromData(events)
                    .sort((a, b) => b.startDate - a.startDate)}
                />
            </section>
        </PageLayout >
    );
}