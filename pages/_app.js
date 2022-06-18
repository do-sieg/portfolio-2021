import { BurgerProvider } from '../components/core/BurgerMenu';
import { LangProvider } from '../components/app/LangProvider';
import AppBurgerMenu from '../components/app/AppBurgerMenu';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <BurgerProvider>
      <LangProvider pageProps={pageProps}>
        <AppBurgerMenu />
        <Component {...pageProps} />
      </LangProvider>
    </BurgerProvider>
  );
}
