import { useLangTerm } from "../utils/lang";
import AppHead from "./AppHead";

export default function PageLayout({ children }) {

    const L_DEV_NAME = useLangTerm("DEV_NAME");
    const L_DEV_JOB_TITLES = useLangTerm("DEV_JOB_TITLES");

    return (
        <>
            <AppHead />
            <header>
                <h1>{L_DEV_NAME}</h1>
                <p className="jobs">{L_DEV_JOB_TITLES}</p>
            </header>
            <main>{children}</main>
            <footer>FOOTER</footer>
        </>
    );
}
