import Teach from "../components/pages/Teach";
import { LangProvider } from "../utils/lang";

export default function TeachEn() {
    return (
        <LangProvider lang="en">
            <Teach />
        </LangProvider>
    );
}
