// * PageLayout
// 
// This component uses the CSS display grid properties to compose a simple
// layout.
// The header, aside, main and footer elements will be set in the right spots.

// To set a side panel to the right, change its style like this:
// <aside style={{ gridArea: "right" }}>...</aside>


import styles from "./PageLayout.module.css";

export default function PageLayout({ children }) {
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
}
