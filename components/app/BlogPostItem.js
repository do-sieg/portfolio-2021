import Link from "next/link";
import { useLangTerm } from "../../utils/lang";
import BlogPostInfo from "./BlogPostInfo";
import styles from "../../styles/pages/blog.module.css";

export default function BlogPostItem({ post, featured = false }) {
    const L_BLOG_CATEGORY_NAMES = useLangTerm("BLOG_CATEGORY_NAMES");

    return (
        <div className={styles.postItem + " " + (featured ? styles.featuredPost : "")}>
            <div className={styles.postCover}>
                {post.metaData.coverImage.path &&
                    <Link href={`/blog/${post.slug}`}><a>
                        <img className={styles.coverImage} src={post.metaData.coverImage.path} alt={post.metaData.title} />
                    </a></Link>
                }
            </div>
            <div className={styles.postData}>
                <div className={styles.postCategory}>
                    <Link href={`/blog/category/${post.metaData.category}`}><a>
                        {L_BLOG_CATEGORY_NAMES[post.metaData.category]}
                    </a></Link>
                </div>
                <Link href={`/blog/${post.slug}`}><a>
                    <h3>{post.metaData.title}</h3>
                    <p className={styles.postDescription}>{post.metaData.description}</p>
                </a></Link>
                <BlogPostInfo post={post} />
            </div>
        </div>
    );
}
