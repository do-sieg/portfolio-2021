import React, { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "../styles/BurgerMenu.module.css";

// Use this context to wrap the App component
export const BurgerContext = React.createContext({
    isOpen: false, open: null, close: null
});

// This hook has to be called in the App component and pass as the value prop
// for BurgerContext
export function useBurgerState() {
    const [isOpen, setIsOpen] = useState(false);

    function open() {
        console.log("OPEN !");
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }

    return { isOpen, open, close };
}

// This is the menu component that can be called on pages, etc.
export default function BurgerMenu({ children }) {
    const burger = useContext(BurgerContext);

    return (
        <>
            {burger.isOpen &&
                <div className={`${styles.overlay} burger-menu-overlay`} onClick={burger.close}></div>
            }
            <div className={`${styles.container} burger-menu-container` + (burger.isOpen ? ` ${styles.open} open` : "")}>
                <button className={`${styles.closeButton} close-btn`} onClick={burger.close}><FaTimes /></button>
                {children}
            </div>
        </>
    );
}