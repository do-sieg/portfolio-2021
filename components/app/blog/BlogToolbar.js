import { useRouter } from "next/router";
import { BLOG_CATEGORIES } from "../../../data/constants";
import { useLang } from "../../../utils/lang";
import styles from "./BlogToolbar.module.css";

export default function BlogToolbar({ category }) {
    const router = useRouter();
    const { categoryNames, allPosts } = useLang("blog");

    function handleChangeCategory(e) {
        const category = e.target.value;
        if (!["all", ...BLOG_CATEGORIES].includes(category)) {
            return;
        }
        let path = `/blog/`;
        if (category !== "all") {
            path = `/blog/category/${category}`;
        }
        router.push(path);
    }

    return (
        <div className={styles.container}>
            <div className={styles.selectorContainer}>
                <select value={category ? category : "all"} onChange={handleChangeCategory}>
                    <option value="all">{allPosts}</option>
                    {BLOG_CATEGORIES.map((category) => {
                        return <option key={category} value={category}>{categoryNames[category]}</option>
                    })}
                </select>
            </div>
        </div>
    );
}
