import React, { useContext } from "react";

const DEFAULT_LANG = "en";

const LangContext = React.createContext({
    en: 'en',
    fr: 'fr',
});

export function getLangPrefix(lang) {
    return {
        en: '',
        fr: '/fr',
    }[lang];
}

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

function getLangTerm(termKey, lang) {
    const langTermFiles = {
        en: "en",
        fr: "fr",
    };

    if (!Object.keys(langTermFiles).includes(lang)) {
        throw new Error(`Lang: '${lang}' is not an accepted language.`);
    }

    const langTerms = require(`../data/lang/${langTermFiles[lang]}.js`).default;
    if (!langTerms[termKey]) {
        if (lang !== DEFAULT_LANG) {
            // console.warn(`Lang: '${termKey}' doesn't exist for '${lang}'. Trying default language.`);
            return getLangTerm(termKey, DEFAULT_LANG);
        } else {
            throw new Error(`Lang: '${termKey}' doesn't exist for '${lang}'.`);
        }

    }
    return langTerms[termKey];
}

export function useLangTerm(termKey) {
    const contextLang = useLangContext();
    try {
        return getLangTerm(termKey, contextLang);
    } catch (err) {
        console.error(err.message);
        return "";
    }
}
