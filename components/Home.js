import { useLangContext } from "../utils/lang";
import PageLayout from "./PageLayout";
import Timeline from "./Timeline";

export default function Home() {

    const pageLang = useLangContext();

    // hook de chargement de termes


    return (
        <PageLayout>
            Home {pageLang}
            <Timeline />
        </PageLayout>
    );
}