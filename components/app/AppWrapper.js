import BurgerMenu from "../core/BurgerMenu";
import LangBar from "./LangBar";
import AppNav from "./AppNav";

export default function AppWrapper({ children }) {

    return (
        <>
            <BurgerMenu>
                <LangBar />
                <AppNav />
            </BurgerMenu>

            {children}
        </>
    );
}