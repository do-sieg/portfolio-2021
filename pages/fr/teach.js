import Teach from "../../components/pages/Teach";
import { LangProvider } from "../../utils/lang";

export default function TeachFr() {
    return (
        <LangProvider lang="fr">
            <Teach />
        </LangProvider>
    );
}