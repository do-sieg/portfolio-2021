
import PageLayout from "../core/PageLayout";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import AppNav from "./AppNav";
import AppBackground from "./AppBackground";

export default function AppLayout({ children, className = "" }) {

    return (
        <PageLayout>
            <AppBackground />
            <AppHeader />
            <AppNav asideWrap />

            <div style={{ gridArea: "main", display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
                <main className={className} style={{ gridArea: "unset", flex: "1", width: "100%" }}>
                    {children}
                </main>
                <AppFooter />
            </div>

        </PageLayout>
    );
}