
import PageLayout from "../core/PageLayout";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import AppNav from "./AppNav";

export default function AppLayout({ children, className = "" }) {

    return (
        <PageLayout>
            <AppHeader />

            <AppNav asideWrap />

            <div style={{ gridArea: "main", display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
                <main className={className} style={{ gridArea: "unset" }}>
                    {children}
                </main>
                <AppFooter />
            </div>

        </PageLayout>
    );
}