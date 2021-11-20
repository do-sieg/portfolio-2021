import { BurgerContext, useBurgerState } from '../components/BurgerMenu';
import AppWrapper from '../components/AppWrapper';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const burgerState = useBurgerState();

  return (
    <BurgerContext.Provider value={burgerState}>
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </BurgerContext.Provider>
  );
}

export default MyApp
