import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./LangBar.module.css";

export default function LangBar() {
    const router = useRouter();

    return (
        <div className={`${styles.container} lang-bar-container`}>
            {router.locales.map((locale) => {
                const short = locale.substr(0, 2).toUpperCase();
                return (
                    <Link key={locale} href={router.asPath} locale={locale}>
                        <a className={locale === router.locale ? `${styles.current} lang-bar-current` : ""}>
                            {short}
                        </a>
                    </Link>
                );
            })}
        </div>
    );
}