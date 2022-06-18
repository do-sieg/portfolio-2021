import Link from "next/link";
import AppLayout from "../../components/app/AppLayout";
import AppHead from "../../components/app/AppHead";
import Separator from "../../components/app/Separator";
import { SITE_TITLE, SITE_URL } from "../../data/constants";
import { getPosts, getSinglePost } from "../../utils/static-blog";
import BlogPostMeta from "../../components/app/blog/BlogPostMeta";
import BlogCategoryCard from "../../components/app/blog/BlogCategoryCard";
import BlogPostCard from "../../components/app/blog/BlogPostCard";
import MarkdownContent from "../../components/app/MarkdownContent";
import { Fragment } from "react";
import { useLangTerm } from "../../utils/lang";
import { FaExternalLinkAlt } from "react-icons/fa";
import pageStyles from "../../styles/pages/Page.module.css";
import styles from "../../styles/pages/BlogPost.module.css";
import AuthorSignature from "../../components/app/AuthorSignature";

export async function getStaticPaths({ locales }) {
    const paths = [];
    for (const locale of locales) {
        const { posts } = await getPosts({ pathname: `/data/blog_posts/${locale}`, locale });
        paths.push(...posts.map(post => `/${locale}/blog/${post.slug}`));
    }
    return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
    const { slug } = params;
    const data = await getSinglePost({ pathname: `/data/blog_posts/${locale}`, locale, slug });
    data.slug = slug;

    const { posts: featuredCtgPosts, totalPosts: totalCtgPosts } = await getPosts({ pathname: `/data/blog_posts/${locale}`, locale, category: data.data.category, limit: 3 });

    const { posts: featuredPosts } = await getPosts({ pathname: `/data/blog_posts/${locale}`, locale, limit: 2 });

    const props = {
        pageLangLinks: { [locale]: slug, ...data.data.translations },
        post: JSON.parse(JSON.stringify(data)), // serialization fix
        featuredCtgPosts,
        totalCtgPosts,
        featuredPosts,
    };

    return { props };
}

export default function BlogPost({ post, featuredCtgPosts, totalCtgPosts, featuredPosts }) {
    const L_BLOG_CATEGORY_NAMES = useLangTerm("BLOG_CATEGORY_NAMES");
    const L_BLOG_MORE_POSTS_AUTHOR = useLangTerm("BLOG_MORE_POSTS_AUTHOR");
    const L_BLOG_PHOTO_CREDITS = useLangTerm("BLOG_PHOTO_CREDITS");

    return (
        <AppLayout className={`${pageStyles.container} ${styles.container}`}>

            <AppHead
                title={`${post.data.title} - ${SITE_TITLE}`}
                description={post.data.description}
                imageUrl={post.data?.coverImage?.path ? SITE_URL + post.data.coverImage.path : null}
                type="article"
            />

            <div className={styles.postCategory}>
                <Link href={`/blog/category/${post.data.category}`}><a>
                    {L_BLOG_CATEGORY_NAMES[post.data.category]}
                </a></Link>
            </div>

            <h1>{post.data.title}</h1>
            <p className={styles.postDescription}>{post.data.description}</p>
            <BlogPostMeta post={post} />

            {post.data?.coverImage?.path &&
                <img className={styles.coverImage} src={post.data.coverImage.path} alt={post.data.title} />
            }

            <article>
                <MarkdownContent content={post.htmlContent} />
            </article>

            <Separator top="4rem" bottom="2rem" />

            <AuthorSignature imagePath={post.data.author.picture} name={post.data.author.name}>
                {post.data.author.id &&
                    <>
                        {/* {L_BLOG_MORE_POSTS_AUTHOR(`/blog/author/${post.data.author.id}`)} */}
                        {L_BLOG_MORE_POSTS_AUTHOR(`/blog`)}
                    </>
                }
            </AuthorSignature>

            {post.data?.coverImage?.authorName &&
                <div className={styles.coverImageAuthor}>
                    {L_BLOG_PHOTO_CREDITS}
                    {post.data.coverImage.authorName.split(",").map((name, index) => {
                        return (
                            <Fragment key={index}>
                                {index > 0 ? "," : ""}
                                {` ${name.trim()}`}
                                {post.data.coverImage.authorUrl &&
                                    <a href={post.data.coverImage.authorUrl.split(",")[index].trim()} target="_blank"><FaExternalLinkAlt /></a>
                                }
                            </Fragment>
                        );
                    })}
                </div>
            }

            <Separator top="4rem" bottom="2rem" />

            <div className={styles.postFooter}>
                <BlogCategoryCard
                    category={post.data.category}
                    featuredPosts={featuredCtgPosts}
                    totalPosts={totalCtgPosts}
                />

                {featuredPosts.map((post) => {
                    return <BlogPostCard key={post.slug} post={post} />
                })}
            </div>

        </AppLayout>
    );
}
