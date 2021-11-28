import { useRouter } from "next/router";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { useSlides } from "../../utils/slides";
import styles from "./SlideShowReviews.module.css";

const reviews = {
    en: [
        {
            name: "Assel D.",
            text: "Daniel helped me a lot with the Java and JavaScript courses. His explanations are clear and I am satisfied. I highly recommend him! Thank you very much, Daniel, for your help!",
            score: 5,
        },
        {
            name: "Mickael S.",
            text: "Daniel is calm, friendly and very educational.",
            score: 5,
        },
        {
            name: "Jordan V.",
            text: "Competent teacher, pedagogue, concerned with the success of his students! The stage is set... Lessons go very well, the concepts which have difficulty in being understood will be reviewed as many times as necessary, with examples and explanations in a relaxed atmosphere. Mr. Daniel will provide you with technical updates related to your subject in addition to the lessons. I highly recommend.",
            score: 5,
        },
        {
            name: "Diane",
            text: "Very clear and patient, Daniel knows how to find the right examples.",
            score: 4,
        },
        {
            name: "Fabien",
            text: "Perfect.",
            score: 5,
        },
    ],
    fr: [
        {
            name: "Assel D.",
            text: "Daniel m'a beaucoup aidé avec les cours Java et JavaScript. Ses explications sont claires et j'en suis satisfaite. Je recommande vivement ! Merci beaucoup, Daniel, pour ton aide !",
            score: 5,
        },
        {
            name: "Mickael S.",
            text: "Daniel est posé, sympathique et très pédagogue.",
            score: 5,
        },
        {
            name: "Jordan V.",
            text: "Professeur compétent, pédagogue, soucieux de la réussite de ses élèves ! Le décor est planté... Les cours se passent très bien, les notions qui ont du mal à être comprises seront revues autant de fois que nécessaire, avec des exemples et explications dans le calme. M. Daniel vous fournira de la veille technologique en rapport avec votre sujet en plus des cours. Je recommande chaudement.",
            score: 5,
        },
        {
            name: "Diane",
            text: "Très clair et patient, Daniel sait trouver les bons exemples.",
            score: 4,
        },
        {
            name: "Fabien",
            text: "Parfait.",
            score: 5,
        },
    ]
};

export default function SlideShowReviews({ noControls = false, autoNextTime = 0 }) {
    const { locale } = useRouter();
    const [slideIndex, setSlide, prevSlide, nextSlide] = useSlides(reviews[locale].length, autoNextTime);

    function renderUserReview(score) {
        const scoreArrayFull = [...Array(score)];
        const scoreArrayEmpty = [...Array(5 - score)];

        return (
            <>
                {scoreArrayFull.map((element, index) => {
                    return <FaStar className={styles.fullStar} key={index} />
                })}
                {scoreArrayEmpty.map((element, index) => {
                    return <FaStar className={styles.emptyStar} key={index} />
                })}
            </>
        );
    }

    return (
        <div className={styles.container}>
            {reviews[locale] && reviews[locale].map((review, index) => {
                return (
                    <div key={index}
                        className={styles.slide + " " + (index === slideIndex ? styles.visibleSlide : "")}
                    >
                        <blockquote><FaQuoteLeft /> {review.text} <FaQuoteRight /></blockquote>
                        <div className={styles.score}>{renderUserReview(review.score)}</div>
                        <div className={styles.name}> — {review.name}</div>
                    </div>
                );
            })}

            {!noControls &&
                <>
                    <button className={styles.navButton + " " + styles.left} onClick={prevSlide}>&#10094;</button>
                    <button className={styles.navButton + " " + styles.right} onClick={nextSlide}>&#10095;</button>
                </>
            }
            <div className={styles.navDots}>
                {reviews[locale] && reviews[locale].map((review, index) => {
                    return (
                        <button
                            key={index}
                            className={styles.navDot + " " + (index === slideIndex ? styles.activeDot : "")}
                            onClick={() => setSlide(index)}
                            disabled={noControls}
                        >
                            &#11044;
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
