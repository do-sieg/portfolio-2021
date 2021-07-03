import LangBar from '../components/LangBar';
import BurgerMenu, { BurgerContext, useBurgerState } from '../components/BurgerMenu';
import NavLinks from '../components/NavLinks';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {

  const burgerState = useBurgerState();

  return (
    <BurgerContext.Provider value={burgerState}>

      <BurgerMenu>
        <LangBar />
        <NavLinks />
      </BurgerMenu>

      <Component {...pageProps} />
    </BurgerContext.Provider>
  );
}

export default MyApp
