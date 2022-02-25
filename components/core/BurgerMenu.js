import React, { useContext, useState } from "react";
import { FaTimes } from "react-icons/fa";
import styles from "./BurgerMenu.module.css";

export const BurgerContext = React.createContext();

// Used to wrap the App component
export function BurgerProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);
    function open() { setIsOpen(true); }
    function close() { setIsOpen(false); }

    return (
        <BurgerContext.Provider value={{ isOpen, open, close }}>
            {children}
        </BurgerContext.Provider>
    );
}

// This is the menu component that can be called on pages, etc.
// It is advised to create a component rendering this with custom styles
export function BurgerMenu({ children, customStyles = {} }) {
    const burger = useContext(BurgerContext);

    return (
        <>
            {burger.isOpen &&
                <div className={styles.overlay + (customStyles.overlay ? ` ${customStyles.overlay}` : "")} onClick={burger.close}></div>
            }
            <div className={styles.container + (customStyles.container ? ` ${customStyles.container}` : "") + (burger.isOpen ? ` ${styles.open}` : "")}>
                <button className={styles.closeBtn + (customStyles.closeBtn ? ` ${customStyles.closeBtn}` : "")} onClick={burger.close}><FaTimes /></button>
                {children}
            </div>
        </>
    );
}
