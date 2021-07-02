import Link from "next/link";
import { useLangTerm } from "../utils/lang";
import PageLayout from "../components/PageLayout";
import SlideShow from "../components/SlideShow";
import Timeline from "../components/Timeline";

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
                <Timeline />
            </section>
        </PageLayout>
    );
}