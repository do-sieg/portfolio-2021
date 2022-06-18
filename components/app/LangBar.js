import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";
import { LangContext } from "./LangProvider";
import styles from "./LangBar.module.css";

export default function LangBar() {
    const router = useRouter();
    const { langLinks } = useContext(LangContext);

    return (
        <div className={styles.container}>
            {router.locales.map((locale) => {
                const short = locale.substring(0, 2).toUpperCase();
                return (
                    <Link
                        key={locale}
                        locale={locale}
                        href={langLinks[locale] ? langLinks[locale] : router.asPath}
                    >
                        <a className={locale === router.locale ? styles.current : ""}>
                            {short}
                        </a>
                    </Link>
                );
            })}
        </div>
    );
}