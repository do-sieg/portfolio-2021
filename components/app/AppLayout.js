import { useContext } from "react";
import { FaBars } from "react-icons/fa";
import { BurgerContext } from "../BurgerMenu";
import LangBar from "./LangBar";
import PageLayout from "../core/PageLayout";
import Link from "next/link";

export default function AppLayout({ children }) {
    const burger = useContext(BurgerContext);

    return (
        <PageLayout>
            <header>
                {!burger.isOpen &&
                    <button onClick={burger.open}><FaBars /></button>
                }

                <Link href="/">
                    <a>LOGO</a>
                </Link>

                <LangBar />
            </header>

            <aside>APP LEFT ASIDE</aside>
            <aside style={{ gridArea: "right" }}>APP RIGHT ASIDE</aside>

            <main>
                {children}
            </main>

            <footer>FOOTER</footer>
        </PageLayout>
    );
}