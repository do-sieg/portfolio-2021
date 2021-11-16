
import PageLayout from "../core/PageLayout";
import AppHeader from "./AppHeader";
import AppFooter from "./AppFooter";
import AppNav from "./AppNav";

export default function AppLayout({ children }) {

    return (
        <PageLayout>
            <AppHeader />

            <AppNav asideWrap />

            <main>{children}</main>

            <AppFooter />
        </PageLayout>
    );
}