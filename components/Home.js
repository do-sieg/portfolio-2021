import { useLangContext, useLangTerm } from "../utils/lang";
import Link from "next/link";
import PageLayout from "./PageLayout";
import Timeline from "./Timeline";

export default function Home() {

    const pageLang = useLangContext();

    const L_HOME_INTRO = useLangTerm('HOME_INTRO');

    return (
        <PageLayout>
            DESCRIPTION {pageLang}

            <p className="info-text">{L_HOME_INTRO}</p>

            <div>
                <Link href="/dev"><a>DEV</a></Link>
                <Link href="/tutoring"><a>MENT</a></Link>
                <Link href="/translation"><a>TRAD</a></Link>
            </div>

            <Timeline />
        </PageLayout>
    );
}