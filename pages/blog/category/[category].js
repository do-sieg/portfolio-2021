import AppLayout from "../../../components/app/AppLayout";
import AppHead from "../../../components/app/AppHead";
import BlogPostItem from "../../../components/app/BlogPostItem";
import { getPosts } from "../../../utils/blog";
import { BLOG_CATEGORIES, SITE_TITLE } from "../../../data/constants";
import { useLangTerm } from "../../../utils/lang";
import styles from "../../../styles/pages/common.module.css";
import ownStyles from "../../../styles/pages/blog.module.css";


export async function getStaticPaths({ locales }) {
    const paths = [];
    for (const locale of locales) {
        paths.push(...BLOG_CATEGORIES.map(category => `/${locale}/blog/category/${category}`));
    }
    return { paths, fallback: false };
}

export async function getStaticProps({ locale, params }) {
    const { category } = params;
    const posts = await getPosts({ category, locale });
    const props = { category, posts };
    return { props };
}

export default function Blog({ category, posts }) {
    const L_BLOG_NO_ARTICLES = useLangTerm("BLOG_NO_ARTICLES");
    const L_BLOG_CATEGORY_NAMES = useLangTerm("BLOG_CATEGORY_NAMES");

    return (
        <AppLayout className={styles.container}>
            <AppHead title={`${L_BLOG_CATEGORY_NAMES[category]} - ${SITE_TITLE}`} />

            <h1>{L_BLOG_CATEGORY_NAMES[category]}</h1>

            <section className={ownStyles.postListContainer}>
                {posts.length > 0 ?
                    <div className={ownStyles.postList}>
                        {posts.map((post, index) => {
                            return <BlogPostItem key={index} post={post} featured={index == 0} />;
                        })}
                        {posts.map((post, index) => {
                            return <BlogPostItem key={index} post={post} />;
                        })}
                        {posts.map((post, index) => {
                            return <BlogPostItem key={index} post={post} />;
                        })}
                        {posts.map((post, index) => {
                            return <BlogPostItem key={index} post={post} />;
                        })}
                        {posts.map((post, index) => {
                            return <BlogPostItem key={index} post={post} />;
                        })}
                    </div>
                    :
                    <p>{L_BLOG_NO_ARTICLES}</p>
                }
            </section>

        </AppLayout>
    );
}