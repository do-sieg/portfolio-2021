import { useLangContext, useLangTerm } from "../utils/lang";
import Link from "next/link";
import PageLayout from "./PageLayout";
import Timeline from "./Timeline";
import SlideShow from "./SlideShow";

export default function Home() {

    const L_HOME_INTRO = useLangTerm('HOME_INTRO');
    const L_TIMELINE = useLangTerm('TIMELINE');
    const L_HOME_SLIDE_PROMPT_1 = useLangTerm('HOME_SLIDE_PROMPT_1');
    const L_HOME_SLIDE_PROMPT_2 = useLangTerm('HOME_SLIDE_PROMPT_2');
    const L_HOME_SLIDE_PROMPT_3 = useLangTerm('HOME_SLIDE_PROMPT_3');
    const L_LEARN_MORE = useLangTerm('LEARN_MORE');

    return (
        <PageLayout>

            <section>
                <div className="info-text">{L_HOME_INTRO}</div>
            </section>

            <hr />

            <section>
                <SlideShow
                    slideList={[
                        { text: L_HOME_SLIDE_PROMPT_1, link: "/dev" },
                        { text: L_HOME_SLIDE_PROMPT_2, link: "/tutoring" },
                        { text: L_HOME_SLIDE_PROMPT_3, link: "/translation" },
                    ]}
                    renderSlideText={(obj, index, styles) => {
                        return (
                            <div className="home-slide-container">
                                <p>{obj.text}</p>
                                <Link href={obj.link}><a>{L_LEARN_MORE}</a></Link>
                            </div>
                        );
                    }}
                    customStyles={{
                        container: "home-slideshow-container",
                        prevBtn: "home-slide-nav-btn left",
                        nextBtn: "home-slide-nav-btn right",
                    }}
                    autoNextTime={4}
                />
            </section>

            <hr />

            <section>
                <h2>{L_TIMELINE}</h2>
                <Timeline />
            </section>
        </PageLayout>
    );
}