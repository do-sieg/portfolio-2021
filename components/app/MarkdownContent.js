import reactDom from "react-dom";
import React, { useEffect, useRef, useState } from "react";
import ImageModal from "./ImageModal";
import styles from "./MarkdownContent.module.css";
import "highlight.js/styles/vs2015.css";

export default function MarkdownContent({ content, children }) {
    const [currentImageSrc, setCurrentImageSrc] = useState("");
    const [currentImageAlt, setCurrentImageAlt] = useState("");

    useEffect(() => {
        try {
            // Put each expandable image in its own div
            for (const img of document.querySelectorAll("img[alt^='_expand_' i]")) {
                const div = document.createElement("div");
                div.style.display = "inline-flex";
                div.appendChild(img.cloneNode(true));
                img.parentElement.replaceChild(div, img);
            }
            // Replace the images by new elements
            for (const img of document.querySelectorAll("img[alt^='_expand_' i]")) {
                let alt = img.alt.replace(/_expand_/i, "");
                reactDom.render(
                    <>
                        <a className={styles.expandSmallScreen} href={img.src} target="_blank"><img src={img.src} alt={alt} /></a>
                        <img className={styles.expandLargeScreen} src={img.src} alt={alt} onClick={handleOpenImageModal} />
                    </>,
                    img.parentElement
                );
            }
        } catch (err) {
            console.log("Failed to replace image(s): ", err);
        }
    }, [content]);

    function handleOpenImageModal(e) {
        setCurrentImageSrc(e.target.src);
        setCurrentImageAlt(e.target.alt);
    }

    function handleCloseImageModal() {
        setCurrentImageSrc("");
        setCurrentImageAlt("");
    }

    return (
        <>
            <div
                className={styles.container}
                dangerouslySetInnerHTML={{ __html: content }}
            />
            <ImageModal
                imgSrc={currentImageSrc}
                imgAlt={currentImageAlt}
                onClose={handleCloseImageModal}
            />
        </>
    );
}
