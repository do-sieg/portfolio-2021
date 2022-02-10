import BurgerMenu from "../core/BurgerMenu";
import AppNav from "./AppNav";
import LangBar from "./LangBar";
import styles from "./AppBurgerMenu.module.css";

export default function AppBurgerMenu() {
    return (
        <BurgerMenu customStyles={styles}>
            <LangBar />
            <AppNav />
        </BurgerMenu>
    );
}
