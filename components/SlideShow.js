import { useEffect, useRef, useState } from "react";
import styles from './SlideShow.module.css';

export default function SlideShow({ slideList, renderSlide, customStyles, autoNextTime = 0 }) {

    const [slideIndex, setSlideIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (autoNextTime) {
            timeoutRef.current = setTimeout(handleNext, autoNextTime * 1000);
        }
        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };
    }, [slideIndex]);

    function handleChangeSlide(n) {
        let newIndex = n;
        if (newIndex < 0) { newIndex = slideList.length - 1 }
        if (newIndex > slideList.length - 1) { newIndex = 0 }
        setSlideIndex(newIndex);
    }

    function handlePrevious() {
        handleChangeSlide(slideIndex - 1);
    }

    function handleNext() {
        handleChangeSlide(slideIndex + 1);
    }

    return (
        <div className={`${styles.container} ${customStyles.container || ''}`}>
            {slideList.map((obj, index) => {
                return (
                    <div key={index} style={{ display: slideIndex === index ? 'block' : 'none' }}>
                        {renderSlide(obj, index)}
                    </div>
                );
            })}
            <button className={`${styles.navButton} ${styles.left} ${customStyles.prevBtn || ''}`} onClick={handlePrevious}>&#10094;</button>
            <button className={`${styles.navButton} ${styles.right} ${customStyles.nextBtn || ''}`} onClick={handleNext}>&#10095;</button>
            <div className={styles.navDots}>
                {slideList.map((obj, index) => {
                    return (
                        <span
                            key={index}
                            className={`${styles.navDot} ${slideIndex === index ? styles.active : ''}`}
                            onClick={() => handleChangeSlide(index)}
                        />
                    );
                })}
            </div>
        </div >
    );
}









// Step 2) Add CSS:



// /* Caption text */
// .text {
//   color: #f2f2f2;
//   font-size: 15px;
//   padding: 8px 12px;
//   position: absolute;
//   bottom: 8px;
//   width: 100%;
//   text-align: center;
// }

// /* Number text (1/3 etc) */
// .numbertext {
//   color: #f2f2f2;
//   font-size: 12px;
//   padding: 8px 12px;
//   position: absolute;
//   top: 0;
// }

// /* The dots/bullets/indicators */



// /* Fading animation */
// .fade {
//   -webkit-animation-name: fade;
//   -webkit-animation-duration: 1.5s;
//   animation-name: fade;
//   animation-duration: 1.5s;
// }

// @-webkit-keyframes fade {
//   from {opacity: .4}
//   to {opacity: 1}
// }

// @keyframes fade {
//   from {opacity: .4}
//   to {opacity: 1}
// }








// Step 3) Add JavaScript:
