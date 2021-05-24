import Home from "../components/pages/Home";
import { LangProvider } from "../utils/lang";

export default function HomeEn() {
  return (
    <LangProvider lang="en">
      <Home />
    </LangProvider>
  );
}