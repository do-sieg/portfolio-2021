import AppLayout from "../../components/app/AppLayout";
import AppHead from "../../components/app/AppHead";
import Separator from "../../components/app/Separator";
import BlogPostCard from "../../components/app/blog/BlogPostCard";
import BlogToolbar from "../../components/app/blog/BlogToolbar";
import { getPosts } from "../../utils/static-blog";
import { SITE_TITLE } from "../../data/constants";
import { useLangTerm } from "../../utils/lang";
import pageStyles from "../../styles/pages/Page.module.css";
import styles from "../../styles/pages/Blog.module.css";

export async function getStaticProps({ locale }) {
    const posts = await getPosts({ locale });
    const props = { posts };
    return { props };
}

export default function Blog({ posts }) {
    const L_NAV_BLOG = useLangTerm("NAV_BLOG");
    const L_BLOG_INTRO = useLangTerm("BLOG_INTRO");
    const L_BLOG_NO_ARTICLES = useLangTerm("BLOG_NO_ARTICLES");

    return (
        <AppLayout className={pageStyles.container}>
            <AppHead title={`${SITE_TITLE} - ${L_NAV_BLOG}`} />

            <BlogToolbar />

            <h1>{L_NAV_BLOG}</h1>

            {L_BLOG_INTRO}

            <Separator top="2rem" bottom="2rem" />

            <section>
                {posts.length > 0 ?
                    <div className={styles.postList}>
                        {posts.map((post, index) => {
                            return <BlogPostCard key={index} post={post} featured={index == 0} />;
                        })}
                    </div>
                    :
                    <p>{L_BLOG_NO_ARTICLES}</p>
                }
            </section>

        </AppLayout>
    );
}