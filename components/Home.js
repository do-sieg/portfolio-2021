import { useLangContext } from "../utils/lang";
import Link from "next/link";
import PageLayout from "./PageLayout";
import Timeline from "./Timeline";

export default function Home() {

    const pageLang = useLangContext();

    // hook de chargement de termes


    return (
        <PageLayout>
            DESCRIPTION {pageLang}

            <div>
                <Link href="/dev"><a>DEV</a></Link>
                <Link href="/tutoring"><a>MENT</a></Link>
                <Link href="/translation"><a>TRAD</a></Link>
            </div>

            {/* <Timeline /> */}
        </PageLayout>
    );
}