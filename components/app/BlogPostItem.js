import Link from "next/link";
import ownStyles from "../../styles/pages/blog.module.css";
import BlogPostInfo from "./BlogPostInfo";

export default function BlogPostItem({ post, featured = false }) {

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
                <h3>{post.metaData.title}</h3>
                <p>{post.metaData.description}</p>
                <BlogPostInfo post={post} />
            </a></Link>
        </div>
    );
}