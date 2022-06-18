import { useRouter } from "next/router";

// To be used server-side
export function getLang(locale, filename) {
    return require(`../lang/${locale}/${filename}.js`).default;
}

// To be used client-side
export function useLang(filename) {
    const { locale } = useRouter();
    return getLang(locale, filename);
}
