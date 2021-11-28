import Head from "next/head";
import AppLayout from "../components/app/AppLayout";
import { SITE_TITLE } from "../data/constants";
import { useLangTerm } from "../utils/lang";
import backgrounds from "../data/backgrounds.json";
import styles from "../styles/pages.module.css";
import creditStyles from "../styles/page_photo_credits.module.css";

export default function PhotoCredits() {
    const L_PHOTO_CREDITS = useLangTerm("PHOTO_CREDITS");
    const L_DAYS = useLangTerm("DAYS");

    return (
        <AppLayout className={styles.container}>

            <Head>
                <title>{SITE_TITLE} - {L_PHOTO_CREDITS}</title>
            </Head>

            <h1>{L_PHOTO_CREDITS}</h1>

            <div className={creditStyles.container}>
                {[1, 2, 3, 4, 5, 6, 0].map((index) => {
                    const data = backgrounds[index];
                    return (
                        <div key={index} className={creditStyles.item}>
                            <img src={data.thumbnail} alt={L_DAYS[index]} />
                            <span>({L_DAYS[index]}) {data.author}</span>
                        </div>
                    );
                })}
            </div>
        </AppLayout>
    );
}