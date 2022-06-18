import Link from "next/link";
import { useLangTerm } from "../../../utils/lang";
import BlogPostMeta from "./BlogPostMeta";
import styles from "./BlogPostCard.module.css";

export default function BlogPostCard({ post, featured = false }) {
    const L_BLOG_DRAFT = useLangTerm("BLOG_DRAFT");
    const L_BLOG_CATEGORY_NAMES = useLangTerm("BLOG_CATEGORY_NAMES");

    return (
        <div className={styles.container + " " + (featured ? styles.featured : "")}>
            {!post.data.published &&
                <div className={styles.draftTag}>{L_BLOG_DRAFT}</div>
            }

            <div className={styles.coverContainer}>
                {post.data?.coverImage?.path &&
                    <Link href={`/blog/${post.slug}`}><a>
                        <img src={post.data.coverImage.path} alt={post.data.title} />
                    </a></Link>
                }
            </div>
            <div className={styles.sidePanel}>
                {post.data?.category && <div className={styles.categoryLink}>
                    <Link href={`/blog/category/${post.data.category}`}><a>
                        {L_BLOG_CATEGORY_NAMES[post.data.category]}
                    </a></Link>
                </div>}
                <Link href={`/blog/${post.slug}`}><a className={styles.info}>
                    <h3>{post.data.title}</h3>
                    <p className={styles.description}>{post.data.description}</p>
                </a></Link>
                <BlogPostMeta post={post} />
            </div>
        </div>
    );
}
