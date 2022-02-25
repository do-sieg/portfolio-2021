import { BurgerProvider } from '../components/core/BurgerMenu';
import { LangContext, useLangState } from '../utils/lang';
import AppBurgerMenu from '../components/app/AppBurgerMenu';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  const langState = useLangState();

  langState.useLangEffect(pageProps);

  return (
    <BurgerProvider>
      <LangContext.Provider value={langState}>
        <AppBurgerMenu />
        <Component {...pageProps} />
      </LangContext.Provider>
    </BurgerProvider>
  );
}
