import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { useSlides } from "../../utils/slides";
import styles from "./SlideShowReviews.module.css";

const reviews = [
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
];

export default function SlideShowReviews({ noControls = false, autoNextTime = 0 }) {
    const [slideIndex, setSlide, prevSlide, nextSlide] = useSlides(reviews.length, autoNextTime);

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
            {reviews.map((review, index) => {
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
                {reviews.map((review, index) => {
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
