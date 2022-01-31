import Link from "next/link";
import { useLangTerm } from "../../utils/lang";
import BlogPostInfo from "./BlogPostInfo";
import ownStyles from "../../styles/pages/blog.module.css";

export default function BlogPostItem({ post, featured = false }) {
    const L_BLOG_CATEGORY_NAMES = useLangTerm("BLOG_CATEGORY_NAMES");

    return (
        <div className={ownStyles.postItem + " " + (featured ? ownStyles.featuredPost : "")}>
            <div className={ownStyles.postCover}>
                {post.metaData.coverImage.path &&
                    <Link href={"blog/" + post.slug}><a>
                        <img className={ownStyles.coverImage} src={post.metaData.coverImage.path} alt={post.metaData.title} />
                    </a></Link>
                }
            </div>
            <Link href={"blog/" + post.slug}><a className={ownStyles.postData}>
                <div className={ownStyles.postCategory}>{L_BLOG_CATEGORY_NAMES[post.metaData.category]}</div>
                <h3>{post.metaData.title}</h3>
                <p>{post.metaData.description}</p>
                <BlogPostInfo post={post} />
            </a></Link>
        </div>
    );
}