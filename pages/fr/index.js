import Home from "../../components/Home";
import { LangProvider } from "../../utils/lang";

export default function HomeFr() {
    return (
        <LangProvider lang="fr">
            <Home />
        </LangProvider>
    );
}
