
import PageLayout from "../core/PageLayout";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import AppNav from "./AppNav";

export default function AppLayout({ children, className = "" }) {

    return (
        <PageLayout>
            <AppHeader />

            <AppNav asideWrap />

            <main className={className}>
                {children}
                <AppFooter />
            </main>

        </PageLayout>
    );
}