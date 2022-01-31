import { BLOG_CATEGORIES } from "../../data/constants";
import { getPosts } from "../../utils/blog";

export default async function (req, res) {
    const { locale, category } = req.body;
    try {
        if (category && !BLOG_CATEGORIES.includes(category)) {
            res.status(404).json({ message: "No such category." });
        } else {
            const posts = await getPosts({ locale, category });
            res.status(200).json({ posts });
        }
    } catch (error) {
        res.status(500).json({ message: "An error occurred. Please try later." });
    }
}
