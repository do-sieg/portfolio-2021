import AppLayout from "../../components/app/AppLayout";
import AppHead from "../../components/app/AppHead";
import BlogPostItem from "../../components/app/BlogPostItem";
import BlogToolbar from "../../components/app/BlogToolbar";
import { getPosts } from "../../utils/static-blog";
import { SITE_TITLE } from "../../data/constants";
import { useLangTerm } from "../../utils/lang";
import styles from "../../styles/pages/common.module.css";
import ownStyles from "../../styles/pages/blog.module.css";

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
        <AppLayout className={styles.container}>
            <AppHead title={`${SITE_TITLE} - ${L_NAV_BLOG}`} />

            <BlogToolbar />

            <h1>{L_NAV_BLOG}</h1>

            {L_BLOG_INTRO}

            <section className={ownStyles.postListContainer}>
                {posts.length > 0 ?
                    <div className={ownStyles.postList}>
                        {posts.map((post, index) => {
                            return <BlogPostItem key={index} post={post} featured={index == 0} />;
                        })}
                    </div>
                    :
                    <p>{L_BLOG_NO_ARTICLES}</p>
                }
            </section>

        </AppLayout>
    );
}