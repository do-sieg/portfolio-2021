import Home from "../../components/pages/Home";
import { LangProvider } from "../../utils/lang";

export default function HomeFr() {
    return (
        <LangProvider lang="fr">
            <Home />
        </LangProvider>
    );
}
