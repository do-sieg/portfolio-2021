import AppLayout from "../components/app/AppLayout";
import AppHead from "../components/app/AppHead";
import { SITE_TITLE } from "../data/constants";
import { useLangTerm } from "../utils/lang";
import backgrounds from "../data/backgrounds.json";
import styles from "../styles/pages/common.module.css";
import ownStyles from "../styles/pages/photo_credits.module.css";

export default function PhotoCredits() {
    const L_PHOTO_CREDITS = useLangTerm("PHOTO_CREDITS");
    const L_BACKGROUND_IMAGES = useLangTerm("BACKGROUND_IMAGES");
    const L_DAYS = useLangTerm("DAYS");

    return (
        <AppLayout className={styles.container}>
            <AppHead title={`${SITE_TITLE} - ${L_PHOTO_CREDITS}`} />

            <h1>{L_PHOTO_CREDITS}</h1>

            <section>
                <h2>{L_BACKGROUND_IMAGES}</h2>
                <div className={ownStyles.container}>
                    {[1, 2, 3, 4, 5, 6, 0].map((index) => {
                        const data = backgrounds[index];
                        return (
                            <div key={index} className={ownStyles.item}>
                                <img src={data.thumbnail} alt={L_DAYS[index]} />
                                <span>({L_DAYS[index]}) {data.author}</span>
                            </div>
                        );
                    })}
                </div>
            </section>
        </AppLayout>
    );
}