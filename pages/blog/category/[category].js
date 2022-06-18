import { useRouter } from "next/router";
import AppLayout from "../../../components/app/AppLayout";
import AppHead from "../../../components/app/AppHead";
import BlogPostCard from "../../../components/app/blog/BlogPostCard";
import BlogToolbar from "../../../components/app/blog/BlogToolbar";
import { BLOG_CATEGORIES, SITE_TITLE } from "../../../data/constants";
import { useLang } from "../../../utils/lang";
import { getPosts } from "../../../utils/static-blog";
// import { useStaticBlogPosts } from "../../../utils/static-blog-hooks";
import pageStyles from "../../../styles/pages/Page.module.css";
import styles from "../../../styles/pages/BlogHome.module.css";

export async function getStaticPaths({ locales }) {
    const paths = [];
    for (const locale of locales) {
        paths.push(...BLOG_CATEGORIES.map(category => `/${locale}/blog/category/${category}`));
    }
    return { paths, fallback: false };
}

export async function getStaticProps({ locale, params }) {
    const { category } = params;
    const { posts } = await getPosts({ pathname: `/data/blog_posts/${locale}`, locale, category });
    return { props: { category, posts } };
}

export default function Blog({ category, posts }) {
    // const { locale } = useRouter();
    // const { posts } = useStaticBlogPosts({ pathname: `/data/blog_posts/${locale}`, locale, category });
    const { categoryNames, noPosts } = useLang("blog");

    return (
        <AppLayout className={pageStyles.container}>
            <AppHead title={`${categoryNames[category]} - ${SITE_TITLE}`} />

            <BlogToolbar category={category} />

            <h1>{categoryNames[category]}</h1>

            <section className={styles.postListContainer}>
                {posts !== null &&
                    (posts.length > 0 ?
                        <div className={styles.postList}>
                            {posts.map((post, index) => {
                                return <BlogPostCard key={index} post={post} featured={index == 0} />;
                            })}
                        </div>
                        :
                        <p>{noPosts}</p>
                    )
                }
            </section>

        </AppLayout>
    );
}