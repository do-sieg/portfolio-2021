
import PageLayout from "../core/PageLayout";
import AppHeader from "./AppHeader";

export default function AppLayout({ children }) {

    return (
        <PageLayout>
            <AppHeader />
            

            <aside>APP LEFT ASIDE</aside>
            <aside style={{ gridArea: "right" }}>APP RIGHT ASIDE</aside>

            <main>
                {children}
            </main>

            <footer>FOOTER</footer>
        </PageLayout>
    );
}