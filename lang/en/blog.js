import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DEV_LINKEDIN } from "../../data/constants";

export default {
    titleBlogHome: "Blog",
    titleRecentPosts: "Latest Posts",

    categoryNames: {
        git: "Git",
        javascript: "JavaScript",
        jobs: "Jobs",
    },

    introBlogHome: (
        <>
            <p>My latest articles about programming, technologies, developer's life... and a lot of other things.</p>
            <p>Be sure to follow me on <a href={DEV_LINKEDIN} target="_blank">LinkedIn <FaExternalLinkAlt style={{ display: "inline" }} /></a> to receive notifications on new content.</p>
        </>
    ),

    draft: "Draft",
    readingTime: "min read",
    blogPhotoCredits: "Photo(s):",
    allPosts: "All articles",
    noPosts: "No articles yet. Coming soon.",
    morePostsCtg: "More in",
    morePostsAuthor: (authorLink) => {
        return <span>Read <Link href={authorLink}><a rel="author">more posts</a></Link> from this author</span>;
    },
    actionSeeAllPosts: (n) => n === 1 ? `${n} article` : `See all ${n} articles`,
}
