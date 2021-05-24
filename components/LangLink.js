import Link from "next/link";
import { useRouter } from "next/router";
import { getLangPrefix, useLangContext } from "../utils/lang";

export default function LangLink({ children, href = '/', lang = null }) {

    const router = useRouter();

    lang = lang || useLangContext();
    let prefix = '';
    prefix = getLangPrefix(lang);

    const scroll = !`${prefix}${href}` === router.asPath;

    return (
        <Link href={`${prefix}${href}`} scroll={scroll}>{children}</Link>
    );
}
