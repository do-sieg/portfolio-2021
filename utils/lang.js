import React, { useContext } from "react";

const LangContext = React.createContext({
    en: 'en',
    fr: 'fr',
});

export function LangProvider({ children, lang }) {
    return (
        <LangContext.Provider value={lang}>
            {children}
        </LangContext.Provider>
    );
}

export function useLangContext() {
    return useContext(LangContext);
}