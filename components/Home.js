import { useLangContext } from "../utils/lang";
import Timeline from "./Timeline";

export default function Home() {

    const pageLang = useLangContext();


    return (
        <div>
            Home {pageLang}
            <Timeline />
        </div>
    );
}