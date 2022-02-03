import { useRouter } from "next/router";

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

export function useLangDate() {
    function renderDate(dateString) {
        const L_DATE_FORMAT = useLangTerm("DATE_FORMAT");
        const L_SHORT_MONTHS = useLangTerm("SHORT_MONTHS");

        const d = new Date(dateString);
        let str = L_DATE_FORMAT;
        str = str.replace(/dd/gi, d.getDate());
        str = str.replace(/mm/gi, L_SHORT_MONTHS[d.getMonth()]);
        str = str.replace(/yy/gi, d.getFullYear());
        return str;
    }

    return renderDate;
}


// export function useLangTerm(termKey, forceLocale = null) {
//     try {
//         let { locales, locale, defaultLocale } = useRouter();
//         if (forceLocale) {
//             locale = forceLocale;
//         }

//         const langTerms = require(`../data/lang/${locale}.js`).default;
//         if (!langTerms[termKey]) {
//             if (locale !== defaultLocale) {
//                 // console.warn(`Lang: '${termKey}' doesn't exist for '${locale}'. Trying default language.`);
//                 return useLangTerm(termKey, defaultLocale);
//             } else {
//                 throw new Error(`Lang: '${termKey}' doesn't exist for '${locale}'.`);
//             }
//         }
//         return langTerms[termKey];

//     } catch (err) {
//         console.error(err.message);
//         return "";
//     }
// }
