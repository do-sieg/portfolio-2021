import AppLayout from "../../components/app/AppLayout";
import AppHead from "../../components/app/AppHead";
import { SITE_TITLE, SITE_URL } from "../../data/constants";
import { getPost, getPosts } from "../../utils/blog";
import BlogPostInfo from "../../components/app/BlogPostInfo";
import styles from "../../styles/pages/common.module.css";
import ownStyles from "../../styles/pages/blog-post.module.css";
import "highlight.js/styles/vs2015.css";

export async function getStaticProps({ params, locale }) {
    console.log(params.slug);
    const data = await getPost(locale, params.slug);
    const props = {
        // slug: params.slug,
        metaData: data.data,
        htmlContent: data.htmlContent,
    };
    return { props };
}

export async function getStaticPaths({ locales }) {
    const paths = [];
    for (const locale of locales) {
        const posts = await getPosts(locale);
        paths.push(...posts.map(post => `/blog/${post.slug}`));
    }
    return { paths, fallback: false };
}

export default function BlogPost({ metaData, htmlContent }) {
    return (
        <AppLayout className={styles.container + " " + ownStyles.container}>

            <AppHead
                title={`${metaData.title} - ${SITE_TITLE}`}
                description={metaData.description}
                imageUrl={metaData.coverImage.path ? SITE_URL + metaData.coverImage.path : null}
                type="article"
            />

            {/* category */}
            <h1>{metaData.title}</h1>
            <p>{metaData.description}</p>
            <BlogPostInfo post={{ metaData }} />

            {metaData.coverImage.path &&
                <img className={ownStyles.coverImage} src={metaData.coverImage.path} alt={metaData.title} />
            }

            <div dangerouslySetInnerHTML={{ __html: htmlContent }} />

        </AppLayout>
    );
}
