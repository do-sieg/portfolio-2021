import { useRouter } from "next/router";
import AppLayout from "../../components/app/AppLayout";
import AppHead from "../../components/app/AppHead";
import Separator from "../../components/app/Separator";
import BlogPostCard from "../../components/app/blog/BlogPostCard";
import BlogToolbar from "../../components/app/blog/BlogToolbar";
import { SITE_TITLE } from "../../data/constants";
import { useLangTerm } from "../../utils/lang";
import { useStaticBlogPosts } from "../../utils/static-blog-hooks";
import pageStyles from "../../styles/pages/Page.module.css";
import styles from "../../styles/pages/BlogHome.module.css";

export default function BlogHome() {
    const { locale } = useRouter();
    const { posts } = useStaticBlogPosts({ pathname: `/data/blog_posts/${locale}`, locale });

    const L_NAV_BLOG = useLangTerm("NAV_BLOG");
    const L_BLOG_INTRO = useLangTerm("BLOG_INTRO");
    const L_BLOG_NO_ARTICLES = useLangTerm("BLOG_NO_ARTICLES");
    const L_BLOG_RECENT_POSTS = useLangTerm("BLOG_RECENT_POSTS");

    return (
        <AppLayout className={pageStyles.container}>
            <AppHead title={`${SITE_TITLE} - ${L_NAV_BLOG}`} />

            <BlogToolbar />

            <h1>{L_NAV_BLOG}</h1>

            <section>{L_BLOG_INTRO}</section>

            <Separator top="2rem" bottom="2rem" />

            <section>
                <h2>{L_BLOG_RECENT_POSTS}</h2>


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