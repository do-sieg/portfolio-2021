import { BurgerContext, useBurgerState } from '../components/core/BurgerMenu';
import { LangContext, useLangState } from '../utils/lang';
import AppWrapper from '../components/app/AppWrapper';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  const burgerState = useBurgerState();
  const langState = useLangState();

  return (
    <BurgerContext.Provider value={burgerState}>
      <LangContext.Provider value={langState}>
        <AppWrapper>
          <Component {...pageProps} />
        </AppWrapper>
      </LangContext.Provider>
    </BurgerContext.Provider>
  );
}
