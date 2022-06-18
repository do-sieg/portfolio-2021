import Link from "next/link";
import { useLang } from "../../../utils/lang";
import BlogPostMeta from "./BlogPostMeta";
import styles from "./BlogPostCard.module.css";

export default function BlogPostCard({ post, featured = false }) {
    const { categoryNames, draft } = useLang("blog");

    return (
        <div className={styles.container + " " + (featured ? styles.featured : "")}>
            {!post.data.published &&
                <div className={styles.draftTag}>{draft}</div>
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
                        {categoryNames[post.data.category]}
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
