import Link from "next/link";
import { useLangTerm } from "../utils/lang";
import AppLayout from "../components/app/AppLayout";
import AppHead from "../components/app/AppHead";
import pageStyles from "../styles/pages/Page.module.css";
import styles from "../styles/pages/Error.module.css";

function Error({ statusCode }) {
    const L_ERROR = useLangTerm("ERROR");
    const L_ERR_MESSAGES = useLangTerm("ERR_MESSAGES");
    const L_ACTION_BACK_HOME = useLangTerm("ACTION_BACK_HOME");

    return (
        <AppLayout className={styles.container}>
            <AppHead title={L_ERROR} />

            <h1>{statusCode || L_ERROR}</h1>
            <p>{L_ERR_MESSAGES[statusCode || 0]}</p>
            <Link href="/">
                <a className={pageStyles.promptBtn}>{L_ACTION_BACK_HOME}</a>
            </Link>
        </AppLayout>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
}

export default Error;