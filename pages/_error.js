import Link from "next/link";
import { useLang } from "../utils/lang";
import AppLayout from "../components/app/AppLayout";
import AppHead from "../components/app/AppHead";
import pageStyles from "../styles/pages/Page.module.css";
import styles from "../styles/pages/Error.module.css";

function Error({ statusCode }) {
    const { error, errorMessages, actionBackHome } = useLang("common");

    return (
        <AppLayout className={styles.container}>
            <AppHead title={error} />

            <h1>{statusCode || error}</h1>
            <p>{errorMessages[statusCode || 0]}</p>
            <Link href="/">
                <a className={pageStyles.promptBtn}>{actionBackHome}</a>
            </Link>
        </AppLayout>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
}

export default Error;