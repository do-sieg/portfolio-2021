import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export function useStaticBlogPosts({ pathname, locale, category }) {
    const router = useRouter();
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        axios.post("/api/static-blog", { pathname, locale, category })
            .then((response) => {
                setPosts(response.data.data.posts);
            })
            .catch(err => console.error(err.message));
    }, [router.locale, category]);

    return { posts };
}
