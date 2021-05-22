import { useLangContext, useLangTerm } from "../utils/lang";
import Link from "next/link";
import PageLayout from "./PageLayout";
import Timeline from "./Timeline";

export default function Home() {

    const L_HOME_INTRO = useLangTerm('HOME_INTRO');

    return (
        <PageLayout>

            <section>
                <p className="info-text">{L_HOME_INTRO}</p>
            </section>

            <section>
                <Link href="/dev"><a>DEV</a></Link>
                <Link href="/tutoring"><a>MENT</a></Link>
                <Link href="/translation"><a>TRAD</a></Link>

                <button>Test</button>
            </section>

            <section>
                <Timeline />
            </section>
        </PageLayout>
    );
}