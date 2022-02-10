import { useRouter } from "next/router";
import { createContext, useState } from "react";

// Use this context to wrap the App component
export const LangContext = createContext({
    langLinks: {},
    setLangLinks: () => { },
});

// This hook has to be called in the App component and be passed as the value prop
// for LangContext
export function useLangState() {
    const [langLinks, setLangLinks] = useState({});

    function setLinks(lang, slug) {
        setLangLinks((prevLinks) => {
            return { ...prevLinks, ...{ [lang]: slug } }
        });
    }

    function clearLangLinks() { setLangLinks({}) }

    return { langLinks, setLangLinks: setLinks, clearLangLinks };
}

export function useLangTerm(termKey) {
    const { locales, locale, defaultLocale } = useRouter();
    if (!locales.includes(locale)) {
        throw new Error(`Lang: '${locale}' is not an accepted language.`);
    }

    let term = getTerm(termKey, locale);
    if (term === undefined) {
        if (locale !== defaultLocale) {
            term = getTerm(termKey, defaultLocale);
        } else {
            throw new Error(`Lang: '${termKey}' doesn't exist for '${locale}'.`);
        }
    }

    return term;
}

function getTerm(termKey, locale) {
    const terms = require(`../data/lang/${locale}.js`).default;
    return terms[termKey];
}

export function renderDate(dateString, format, months) {
    const d = new Date(dateString);
    let str = format;
    str = str.replace(/dd/gi, d.getDate());
    str = str.replace(/mm/gi, months[d.getMonth()]);
    str = str.replace(/yy/gi, d.getFullYear());
    return str;
}
