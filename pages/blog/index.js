import { useRouter } from "next/router";
import AppLayout from "../../components/app/AppLayout";
import AppHead from "../../components/app/AppHead";
import Separator from "../../components/app/Separator";
import BlogPostCard from "../../components/app/blog/BlogPostCard";
import BlogToolbar from "../../components/app/blog/BlogToolbar";
import { SITE_TITLE } from "../../data/constants";
import { useLang } from "../../utils/lang";
import { useStaticBlogPosts } from "../../utils/static-blog-hooks";
import pageStyles from "../../styles/pages/Page.module.css";
import styles from "../../styles/pages/BlogHome.module.css";

export default function BlogHome() {
    const { locale } = useRouter();
    const { posts } = useStaticBlogPosts({ pathname: `/data/blog_posts/${locale}`, locale });
    const { titleBlogHome, titleRecentPosts, introBlogHome, noPosts } = useLang("blog");

    return (
        <AppLayout className={pageStyles.container}>
            <AppHead title={`${SITE_TITLE} - ${titleBlogHome}`} />

            <BlogToolbar />

            <h1>{titleBlogHome}</h1>

            <section>{introBlogHome}</section>

            <Separator top="2rem" bottom="2rem" />

            <section>
                <h2>{titleRecentPosts}</h2>


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