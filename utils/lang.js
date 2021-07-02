import { useRouter } from "next/router";

export function useLangTerm(termKey, forceLocale = null) {
    try {
        let { locales, locale, defaultLocale } = useRouter();
        if (forceLocale) {
            locale = forceLocale;
        }

        if (!locales.includes(locale)) {
            throw new Error(`Lang: '${locale}' is not an accepted language.`);
        }

        const langTerms = require(`../data/lang/${locale}.js`).default;
        if (!langTerms[termKey]) {
            if (locale !== defaultLocale) {
                // console.warn(`Lang: '${termKey}' doesn't exist for '${locale}'. Trying default language.`);
                return useLangTerm(termKey, defaultLocale);
            } else {
                throw new Error(`Lang: '${termKey}' doesn't exist for '${locale}'.`);
            }
        }
        return langTerms[termKey];

    } catch (err) {
        console.error(err.message);
        return "";
    }
}
