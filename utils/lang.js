import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

// Use this context to wrap the App component
export const LangContext = createContext({
    langLinks: {},
    setLangLinks: () => { },
});

// This hook has to be called in the App component and be passed as the value prop
// for LangContext
export function useLangState() {
    const { locale, asPath } = useRouter();
    const [langLinks, setLangLinks] = useState({});

    // This hook must be called in the App component to use custom lang links
    // as page props
    function useLangEffect(pageProps) {
        return useEffect(() => {
            setLangLinks(pageProps.pageLangLinks ?? {});
        }, [locale, asPath]);
    }

    return {
        langLinks,
        useLangEffect,
    };
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
