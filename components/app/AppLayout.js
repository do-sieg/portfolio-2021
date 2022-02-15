import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import PageLayout from "../core/PageLayout";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import AppNav from "./AppNav";
import AppBackground from "./AppBackground";

export default function AppLayout({ children, className = "" }) {
    const router = useRouter();
    const scrollRef = useRef(null);
    const mainRef = useRef(null);

    useEffect(() => {
        scrollRef.current.scrollTo(0, 0);
        mainRef.current.scrollTo(0, 0);
        mainRef.current.focus();
    }, [router.asPath]);

    return (
        <PageLayout>
            <div ref={scrollRef} />
            <AppBackground />
            <AppHeader />
            <AppNav asideWrap />

            <div ref={mainRef} tabIndex={0} style={{ gridArea: "main", display: "flex", flexDirection: "column", overflow: "auto", outline: "none" }}>
                <main className={className} style={{ gridArea: "unset", flex: "1", width: "100%" }}>
                    {children}
                </main>
                <AppFooter />
            </div>

        </PageLayout>
    );
}