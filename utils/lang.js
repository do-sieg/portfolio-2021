import React, { useContext } from "react";

const DEFAULT_LANG = "en";
const LANG_PREFIXES = {
    en: '',
    fr: '/fr',
};

const LangContext = React.createContext({
    en: 'en',
    fr: 'fr',
});

export function getLangPrefix(lang) {
    return LANG_PREFIXES[lang];
}

export function cleanLangUrl(url) {
    let cleanUrl = url;
    // console.log("START", cleanUrl);
    Object.values(LANG_PREFIXES).forEach(prefix => {
        // console.log("iTERATE prefix", prefix);
        if (cleanUrl.startsWith(prefix)) {
            cleanUrl = cleanUrl.replace(prefix, "");
            // console.log("iTERATE startsWith prefix", prefix);
            // console.log("iTERATE cleanUrl", cleanUrl);
        }
    });
    // console.log("END", cleanUrl);
    return cleanUrl;
}

[
    "/test",
    "/fr/test",
    "/",
    "/fr",
].forEach(value => console.log(value, cleanLangUrl(value), value.startsWith("/fr")));

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
