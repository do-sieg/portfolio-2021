import Link from "next/link";
import { renderDate, useLangTerm } from "../../../utils/lang";
import styles from "./BlogCategoryCard.module.css";

export default function BlogCategoryCard({ category, featuredPosts, totalPosts }) {
    const L_BLOG_CATEGORY_NAMES = useLangTerm("BLOG_CATEGORY_NAMES");
    const L_BLOG_CATEGORY_MORE = useLangTerm("BLOG_CATEGORY_MORE");
    const L_BLOG_CATEGORY_SEE_ALL_POSTS = useLangTerm("BLOG_CATEGORY_SEE_ALL_POSTS");
    const L_BLOG_READING_TIME = useLangTerm("BLOG_READING_TIME");
    const L_DATE_FORMAT = useLangTerm("DATE_FORMAT");
    const L_SHORT_MONTHS = useLangTerm("SHORT_MONTHS");

    return (
        <div className={styles.container}>
            <h3>
                {`${L_BLOG_CATEGORY_MORE} `}
                <Link href={`/blog/category/${category}`}><a>
                    {L_BLOG_CATEGORY_NAMES[category]}
                </a></Link>
            </h3>

            <ul>
                {featuredPosts.map((post) => {
                    return (
                        <li key={post.slug}>
                            <Link href={post.slug}><a>
                                <h4>{post.metaData.title}</h4>
                                <span>{renderDate(post.metaData.date, L_DATE_FORMAT, L_SHORT_MONTHS)} – {post.metaData.readingTime} {L_BLOG_READING_TIME}</span>
                            </a></Link>
                        </li>
                    );
                })}
            </ul>

            <Link href={`/blog/category/${category}`}><a>
                {L_BLOG_CATEGORY_SEE_ALL_POSTS(totalPosts)} →
            </a></Link>
        </div>
    );
}
