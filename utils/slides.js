import { useEffect, useRef, useState } from "react";

export function useSlides(max, autoNextTime = false) {
    const [slideIndex, setSlideIndex] = useState(0);
    const timeoutRef = useRef(null);

    useEffect(() => {
        function cleanup() {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };

        cleanup();
        if (autoNextTime) {
            timeoutRef.current = setTimeout(nextSlide, autoNextTime);
        }

        return cleanup;
    }, [slideIndex]);

    function setSlide(n) {
        let newSlideIndex = n;
        if (newSlideIndex < 0) { newSlideIndex = max - 1 }
        if (newSlideIndex > max - 1) { newSlideIndex = 0 }
        setSlideIndex(newSlideIndex);
    }

    function prevSlide() { setSlide(slideIndex - 1) }
    function nextSlide() { setSlide(slideIndex + 1) }

    return [slideIndex, setSlide, prevSlide, nextSlide];
}