// Composant head

export default function PageLayout({ children }) {
    return (
        <>
            <header>HEADER</header>
            <main>{children}</main>
            <footer>FOOTER</footer>
        </>
    );
}
