import Head from "next/head";
import Link from "next/link";
import AppLayout from "../../components/app/AppLayout";
import { SITE_TITLE } from "../../data/constants";
import { useLangTerm } from "../../utils/lang";
import { getPosts } from "../../utils/blog";
import styles from "../../styles/pages/common.module.css";
import ownStyles from "../../styles/pages/blog.module.css";

export async function getStaticProps({ locale }) {
    const posts = await getPosts(locale);
    const props = { posts };
    return { props };
}

// MOVE
export function BlogPost({ post, featured = false }) {
    const L_DATE_FORMAT = useLangTerm("DATE_FORMAT");
    const L_SHORT_MONTHS = useLangTerm("SHORT_MONTHS");

    function renderDate() {
        const d = new Date(post.metaData.date);
        let str = L_DATE_FORMAT;
        str = str.replaceAll("DD", d.getDate());
        str = str.replaceAll("MM", L_SHORT_MONTHS[d.getMonth()]);
        str = str.replaceAll("YY", d.getFullYear());
        return str;
    }

    return (
        <div className={ownStyles.postItem + " " + (featured ? ownStyles.featuredPost : "")}>
            <div className={ownStyles.postCover}>
                {post.metaData.coverImage.path &&
                    <Link href={"blog/" + post.slug}><a>
                        <img className={ownStyles.coverImage} src={post.metaData.coverImage.path} alt={post.metaData.title} />
                    </a></Link>
                }
            </div>
            <Link href={"blog/" + post.slug}><a className={ownStyles.postData}>
                <h3>{post.metaData.title}</h3>
                <p>{post.metaData.excerpt}</p>

                <div className={ownStyles.postInfo}>
                    <img src={post.metaData.author.picture} alt={post.metaData.author.name} />
                    <div className={ownStyles.postInfoText}>
                        <div className={ownStyles.authorName}>{post.metaData.author.name}</div>
                        <time>{renderDate()}</time>
                    </div>
                </div>
            </a></Link>
        </div>
    );
}

export default function Blog({ posts }) {
    const L_NAV_BLOG = useLangTerm("NAV_BLOG");
    const L_BLOG_INTRO = useLangTerm("BLOG_INTRO");
    const L_BLOG_NO_ARTICLES = useLangTerm("BLOG_NO_ARTICLES");

    return (
        <AppLayout className={styles.container}>

            <Head>
                <title>{SITE_TITLE} - {L_NAV_BLOG}</title>
            </Head>

            <h1>{L_NAV_BLOG}</h1>

            {L_BLOG_INTRO}

            <section className={ownStyles.postListContainer}>
                {posts.length > 0 ?
                    <div className={ownStyles.postList}>
                        {posts.map((post, index) => {
                            return <BlogPost key={index} post={post} featured={index == 0} />;
                        })}
                        {posts.map((post, index) => {
                            return <BlogPost key={index} post={post} />;
                        })}
                        {posts.map((post, index) => {
                            return <BlogPost key={index} post={post} />;
                        })}
                        {posts.map((post, index) => {
                            return <BlogPost key={index} post={post} />;
                        })}
                        {posts.map((post, index) => {
                            return <BlogPost key={index} post={post} />;
                        })}
                    </div>
                    :
                    <p>{L_BLOG_NO_ARTICLES}</p>
                }
            </section>

        </AppLayout>
    );
}