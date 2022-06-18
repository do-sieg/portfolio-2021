import Link from "next/link";
import { useLang } from "../../../utils/lang";
import { renderDate } from "../../../utils/time";
import styles from "./BlogCategoryCard.module.css";

export default function BlogCategoryCard({ category, featuredPosts, totalPosts }) {
    const { dateFormat, shortMonths } = useLang("common");
    const { categoryNames, readingTime, morePostsCtg, actionSeeAllPosts } = useLang("blog");

    return (
        <div className={styles.container}>
            <h3>
                {`${morePostsCtg} `}
                <Link href={`/blog/category/${category}`}><a>
                    {categoryNames[category]}
                </a></Link>
            </h3>

            <ul>
                {featuredPosts.map((post) => {
                    return (
                        <li key={post.slug}>
                            <Link href={`/blog/${post.slug}`}><a>
                                <h4>{post.data.title}</h4>
                                <span>{renderDate(post.data.date, dateFormat, shortMonths)} – {post.data.readingTime} {readingTime}</span>
                            </a></Link>
                        </li>
                    );
                })}
            </ul>

            <Link href={`/blog/category/${category}`}><a>
                {actionSeeAllPosts(totalPosts)} →
            </a></Link>
        </div>
    );
}
