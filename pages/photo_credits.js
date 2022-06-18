import AppLayout from "../components/app/AppLayout";
import AppHead from "../components/app/AppHead";
import { SITE_TITLE } from "../data/constants";
import { useLang } from "../utils/lang";
import backgrounds from "../data/backgrounds.json";
import pageStyles from "../styles/pages/Page.module.css";
import styles from "../styles/pages/PhotoCredits.module.css";

export default function PhotoCredits() {
    const { days, photoCredits, backgroundImages } = useLang("common");

    return (
        <AppLayout className={pageStyles.container}>
            <AppHead title={`${SITE_TITLE} - ${photoCredits}`} />

            <h1>{photoCredits}</h1>

            <section>
                <h2>{backgroundImages}</h2>
                <div className={styles.container}>
                    {[1, 2, 3, 4, 5, 6, 0].map((index) => {
                        const data = backgrounds[index];
                        return (
                            <div key={index} className={styles.item}>
                                <img src={data.thumbnail} alt={days[index]} />
                                <span>({days[index]}) {data.author}</span>
                            </div>
                        );
                    })}
                </div>
            </section>
        </AppLayout>
    );
}