import Link from "next/link";
import axios from "axios";
import AppLayout from "../../components/app/AppLayout";
import AppHead from "../../components/app/AppHead";
import Separator from "../../components/app/Separator";
import { SITE_TITLE, SITE_URL } from "../../data/constants";
import { getPost, getPosts } from "../../utils/static-blog";
import BlogPostMeta from "../../components/app/blog/BlogPostMeta";
import BlogCategoryCard from "../../components/app/blog/BlogCategoryCard";
import BlogPostCard from "../../components/app/blog/BlogPostCard";
import MarkdownContent from "../../components/app/MarkdownContent";
import { useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import { LangContext, useLangTerm } from "../../utils/lang";
import { FaExternalLinkAlt } from "react-icons/fa";
import pageStyles from "../../styles/pages/Page.module.css";
import styles from "../../styles/pages/BlogPost.module.css";
import AuthorSignature from "../../components/app/AuthorSignature";

export async function getStaticPaths({ locales }) {
    const paths = [];
    for (const locale of locales) {
        const posts = await getPosts({ locale });
        paths.push(...posts.map(post => `/${locale}/blog/${post.slug}`));
    }
    return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
    const { slug } = params;
    const data = await getPost({ locale, slug });

    const featuredCtgPosts = await getPosts({ locale, category: data.data.category, limit: 3 });
    const totalCtgPosts = await getPosts({ locale, category: data.data.category });

    const props = {
        locale,
        slug,
        metaData: data.data,
        htmlContent: data.htmlContent,
        featuredCtgPosts,
        totalCtgPosts: totalCtgPosts.length,
    };

    return { props };
}

export default function BlogPost({ locale, slug, metaData, htmlContent, featuredCtgPosts, totalCtgPosts }) {
    const router = useRouter();
    const { setLangLinks, clearLangLinks } = useContext(LangContext);
    const [featuredPosts, setFeaturedPosts] = useState([]);
    const L_BLOG_CATEGORY_NAMES = useLangTerm("BLOG_CATEGORY_NAMES");
    const L_BLOG_MORE_POSTS_AUTHOR = useLangTerm("BLOG_MORE_POSTS_AUTHOR");
    const L_BLOG_PHOTO_CREDITS = useLangTerm("BLOG_PHOTO_CREDITS");

    useEffect(() => {
        clearLangLinks();
        if (metaData.translations) {
            Object.entries(metaData.translations).forEach(([lang, slug]) => {
                setLangLinks(lang, slug);
            });
        }
    }, [router.asPath]);

    useEffect(async () => {
        try {
            const response = await axios.post("/api/blog", { locale, limit: 2, current: slug });
            setFeaturedPosts(response.data.posts);
        } catch (err) {
            setFeaturedPosts([]);
        }
    }, [router.asPath]);

    return (
        <AppLayout className={`${pageStyles.container} ${styles.container}`}>

            <AppHead
                title={`${metaData.title} - ${SITE_TITLE}`}
                description={metaData.description}
                imageUrl={metaData?.coverImage?.path ? SITE_URL + metaData.coverImage.path : null}
                type="article"
            />

            <div className={styles.postCategory}>
                <Link href={`/blog/category/${metaData.category}`}><a>
                    {L_BLOG_CATEGORY_NAMES[metaData.category]}
                </a></Link>
            </div>

            <h1>{metaData.title}</h1>
            <p className={styles.postDescription}>{metaData.description}</p>
            <BlogPostMeta post={{ metaData }} />

            {metaData?.coverImage?.path &&
                <img className={styles.coverImage} src={metaData.coverImage.path} alt={metaData.title} />
            }

            <article>
                <MarkdownContent content={htmlContent} />
            </article>

            <Separator top="4rem" bottom="2rem" />

            <AuthorSignature imagePath={metaData.author.picture} name={metaData.author.name}>
                {metaData.author.id &&
                    <>
                        {/* {L_BLOG_MORE_POSTS_AUTHOR(`/blog/author/${metaData.author.id}`)} */}
                        {L_BLOG_MORE_POSTS_AUTHOR(`/blog`)}
                    </>
                }
            </AuthorSignature>

            {metaData?.coverImage?.authorName &&
                <div className={styles.coverImageAuthor}>
                    {L_BLOG_PHOTO_CREDITS} {metaData.coverImage.authorName}
                    {metaData.coverImage.authorUrl &&
                        <a href={metaData.coverImage.authorUrl} target="_blank"><FaExternalLinkAlt /></a>
                    }
                </div>
            }

            <Separator top="4rem" bottom="2rem" />

            <div className={styles.postFooter}>
                <BlogCategoryCard
                    category={metaData.category}
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
