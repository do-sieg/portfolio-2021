import { getPosts } from "../../utils/static-blog";

export default async (req, res) => {
    try {
        const { pathname, locale, category } = req.body;
        const data = await getPosts({ pathname, locale, category });

        res.status(200).json({ data });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ data: {} });
    }
}
