import { BurgerContext, useBurgerState } from '../components/core/BurgerMenu';
import AppWrapper from '../components/app/AppWrapper';
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
