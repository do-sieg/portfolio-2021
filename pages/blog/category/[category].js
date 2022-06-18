import { useRouter } from "next/router";
import AppLayout from "../../../components/app/AppLayout";
import AppHead from "../../../components/app/AppHead";
import BlogPostCard from "../../../components/app/blog/BlogPostCard";
import BlogToolbar from "../../../components/app/blog/BlogToolbar";
import { BLOG_CATEGORIES, SITE_TITLE } from "../../../data/constants";
import { useLangTerm } from "../../../utils/lang";
import { useStaticBlogPosts } from "../../../utils/static-blog-hooks";
import pageStyles from "../../../styles/pages/Page.module.css";
import styles from "../../../styles/pages/BlogHome.module.css";

export async function getStaticPaths({ locales }) {
    const paths = [];
    for (const locale of locales) {
        paths.push(...BLOG_CATEGORIES.map(category => `/${locale}/blog/category/${category}`));
    }
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    return { props: {category: params.category} };
}

export default function Blog({ category }) {
    const { locale } = useRouter();
    const { posts } = useStaticBlogPosts({ pathname: `/data/blog_posts/${locale}`, locale, category });

    const L_BLOG_NO_ARTICLES = useLangTerm("BLOG_NO_ARTICLES");
    const L_BLOG_CATEGORY_NAMES = useLangTerm("BLOG_CATEGORY_NAMES");

    return (
        <AppLayout className={pageStyles.container}>
            <AppHead title={`${L_BLOG_CATEGORY_NAMES[category]} - ${SITE_TITLE}`} />

            <BlogToolbar category={category} />

            <h1>{L_BLOG_CATEGORY_NAMES[category]}</h1>

            <section className={styles.postListContainer}>
                {posts !== null &&
                    (posts.length > 0 ?
                        <div className={styles.postList}>
                            {posts.map((post, index) => {
                                return <BlogPostCard key={index} post={post} featured={index == 0} />;
                            })}
                        </div>
                        :
                        <p>{L_BLOG_NO_ARTICLES}</p>
                    )
                }
            </section>

        </AppLayout>
    );
}