import Home from "../components/Home";
import { LangProvider } from "../utils/lang";

export default function HomeEn() {
  return (
    <LangProvider lang="en">
      <Home />
    </LangProvider>
  );
}