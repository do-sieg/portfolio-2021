import styles from "./ImageModal.module.css";

export default function ImageModal({ imgSrc = "", imgAlt = "", onClose = null }) {
    return (
        imgSrc &&
        <>
            <div className={styles.overlay} onClick={onClose}></div>
            <div className={styles.container} onClick={onClose}>
                <img src={imgSrc} alt={imgAlt} draggable />
            </div>
        </>
    );
}
