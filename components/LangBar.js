import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../styles/LangBar.module.css";

export default function LangBar() {
    const router = useRouter();

    return (
        <div className={`${styles.container} lang-bar-container`}>
            {router.locales.map((loc) => {
                const shortLoc = loc.substr(0, 2).toUpperCase();
                return (
                    <Link key={loc} href={router.asPath} locale={loc}>
                        <a className={loc === router.locale ? `${styles.current} lang-bar-current` : ""}>
                            {shortLoc}
                        </a>
                    </Link>
                );
            })}
        </div>
    );
}