import Head from "next/head";
import BurgerMenu from "./BurgerMenu";
import LangBar from "./app/LangBar";
import AppNav from "./app/AppNav";

export default function AppWrapper({ children }) {

    return (
        <>
            <Head>
                <link rel="preconnect" href="https://fonts.gstatic.com"></link>
                <link href="https://fonts.googleapis.com/css2?family=Kufam:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet"></link>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;0,900;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet"></link>
            </Head>

            <Head>
                <title>PORTFOLIO V2</title>
            </Head>
            
            <BurgerMenu>
                <LangBar />
                <AppNav />
            </BurgerMenu>

            {children}
        </>
    );
}