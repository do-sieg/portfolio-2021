import { getPosts } from "../../utils/static-blog";

export default async (req, res) => {
    const { locale, category = null, limit = 0, current = "" } = req.body;
    const posts = await getPosts({ locale, category, limit, current });
    res.status(200).json({ posts });
}
