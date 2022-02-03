import Link from "next/link";
import { useLangTerm } from "../../utils/lang";
import BlogPostMeta from "./BlogPostMeta";
import styles from "./BlogPostCard.module.css";

export default function BlogPostCard({ post, featured = false }) {
    const L_BLOG_CATEGORY_NAMES = useLangTerm("BLOG_CATEGORY_NAMES");

    return (
        <div className={styles.container + " " + (featured ? styles.featured : "")}>
            <div className={styles.coverContainer}>
                {post.metaData?.coverImage?.path &&
                    <Link href={`/blog/${post.slug}`}><a>
                        <img src={post.metaData.coverImage.path} alt={post.metaData.title} />
                    </a></Link>
                }
            </div>
            <div className={styles.sidePanel}>
                <div className={styles.categoryLink}>
                    <Link href={`/blog/category/${post.metaData.category}`}><a>
                        {L_BLOG_CATEGORY_NAMES[post.metaData.category]}
                    </a></Link>
                </div>
                <Link href={`/blog/${post.slug}`}><a className={styles.info}>
                    <h3>{post.metaData.title}</h3>
                    <p className={styles.description}>{post.metaData.description}</p>
                </a></Link>
                <BlogPostMeta post={post} />
            </div>
        </div>
    );
}
