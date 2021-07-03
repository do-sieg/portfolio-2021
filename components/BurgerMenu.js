import React, { useContext, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import styles from "../styles/BurgerMenu.module.css";

export const BurgerContext = React.createContext({
    isOpen: false, open: null, close: null
});


export function useBurgerState() {
    const [isOpen, setIsOpen] = useState(false);

    function open() {
        setIsOpen(true);
    }

    function close() {
        console.log("CLOSE MENU");
        setIsOpen(false);
    }

    return { isOpen, open, close };
}


export default function BurgerMenu({ children }) {
    const burger = useContext(BurgerContext);

    return (
        <>
            {burger.isOpen &&
                <div className={`${styles.overlay} lateral-menu-overlay`} onClick={burger.close}></div>
            }
            <div className={`${styles.container} lateral-menu-container` + (burger.isOpen ? ` ${styles.open} open` : "")}>
                <button className={`${styles.closeButton} close-btn`} onClick={burger.close}><FaTimes /></button>
                {children}
            </div>
        </>
    );
}