import Link from "next/link";
import { useRouter } from "next/router";
import { cleanLangUrl, getLangPrefix, useLangContext } from "../utils/lang";

export default function LangLink({ children, href = '/', lang = null }) {

    const router = useRouter();
    const contextLang = useLangContext();

    lang = lang || contextLang;
    let prefix = '';
    prefix = getLangPrefix(lang);

    const scroll = !`${prefix}${href}` === router.asPath;

    console.log("LangLink", lang, href, cleanLangUrl(href));
    // BUGGE !

    return (
        <Link href={`${prefix}${cleanLangUrl(href)}`} scroll={scroll}>{children}</Link>
    );
}
