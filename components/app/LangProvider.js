import { useRouter } from "next/router";
import { createContext, useEffect, useState } from "react";

export const LangContext = createContext();

// Used to wrap the App component
export function LangProvider({ children, pageProps }) {
    const { locale, asPath } = useRouter();
    const [langLinks, setLangLinks] = useState({});

    useEffect(() => {
        setLangLinks(pageProps.pageLangLinks ?? {});
    }, [locale, asPath]);

    return (
        <LangContext.Provider value={{ langLinks }}>
            {children}
        </LangContext.Provider>
    );
}


