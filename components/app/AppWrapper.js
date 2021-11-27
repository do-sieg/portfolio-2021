import BurgerMenu from "../BurgerMenu";
import LangBar from "./LangBar";
import AppHead from "./AppHead";
import AppNav from "./AppNav";

export default function AppWrapper({ children }) {

    return (
        <>
            <AppHead />

            <BurgerMenu>
                <LangBar />
                <AppNav />
            </BurgerMenu>

            {children}
        </>
    );
}