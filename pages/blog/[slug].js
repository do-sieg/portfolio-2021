import Link from "next/link";
import AppLayout from "../../components/app/AppLayout";
import AppHead from "../../components/app/AppHead";
import Separator from "../../components/app/Separator";
import { SITE_TITLE, SITE_URL } from "../../data/constants";
import { getPost, getPosts } from "../../utils/static-blog";
import BlogPostMeta from "../../components/app/BlogPostMeta";
import BlogCategoryCard from "../../components/app/BlogCategoryCard";
import { useLangTerm } from "../../utils/lang";
import styles from "../../styles/pages/common.module.css";
import ownStyles from "../../styles/pages/blog-post.module.css";
import "highlight.js/styles/vs2015.css";
import { FaExternalLinkAlt } from "react-icons/fa";

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

    const featuredPosts = await getPosts({ locale, category: data.data.category, limit: 3 });
    const totalPosts = await getPosts({ locale, category: data.data.category });

    const props = {
        metaData: data.data,
        htmlContent: data.htmlContent,
        featuredPosts,
        totalPosts: totalPosts.length,
    };

    return { props };
}

export default function BlogPost({ metaData, htmlContent, featuredPosts, totalPosts }) {
    const L_BLOG_CATEGORY_NAMES = useLangTerm("BLOG_CATEGORY_NAMES");
    const L_BLOG_MORE_POSTS_AUTHOR = useLangTerm("BLOG_MORE_POSTS_AUTHOR");
    const L_BLOG_PHOTO_CREDITS = useLangTerm("BLOG_PHOTO_CREDITS");

    return (
        <AppLayout className={styles.container + " " + ownStyles.container}>

            <AppHead
                title={`${metaData.title} - ${SITE_TITLE}`}
                description={metaData.description}
                imageUrl={metaData?.coverImage?.path ? SITE_URL + metaData.coverImage.path : null}
                type="article"
            />

            <div className={ownStyles.postCategory}>
                <Link href={`/blog/category/${metaData.category}`}><a>
                    {L_BLOG_CATEGORY_NAMES[metaData.category]}
                </a></Link>
            </div>

            <h1>{metaData.title}</h1>
            <p className={ownStyles.postDescription}>{metaData.description}</p>
            <BlogPostMeta post={{ metaData }} />

            {metaData?.coverImage?.path &&
                <img className={ownStyles.coverImage} src={metaData.coverImage.path} alt={metaData.title} />
            }

            <div className={ownStyles.postContent} dangerouslySetInnerHTML={{ __html: htmlContent }} />

            <Separator top="4rem" bottom="2rem" />

            <div className={ownStyles.authorSignature}>
                <img src={metaData.author.picture} alt={metaData.author.name} />
                <div className={ownStyles.texts}>
                    <div className={ownStyles.authorName}>{metaData.author.name}</div>
                    {metaData.author.id &&
                        <div className={ownStyles.authorLink}>
                            {/* {L_BLOG_MORE_POSTS_AUTHOR(`/blog/author/${metaData.author.id}`)} */}
                            {L_BLOG_MORE_POSTS_AUTHOR(`/blog`)}
                        </div>
                    }
                </div>
            </div>

            {metaData?.coverImage?.authorName &&
                <div className={ownStyles.coverImageAuthor}>
                    {L_BLOG_PHOTO_CREDITS} {metaData.coverImage.authorName}
                    {metaData.coverImage.authorUrl &&
                        <a href={metaData.coverImage.authorUrl} target="_blank"><FaExternalLinkAlt /></a>
                    }
                </div>
            }

            <Separator top="4rem" bottom="2rem" />

            <div className={ownStyles.postFooter}>
                <BlogCategoryCard
                    category={metaData.category}
                    featuredPosts={featuredPosts}
                    totalPosts={totalPosts}
                />
            </div>

        </AppLayout>
    );
}
