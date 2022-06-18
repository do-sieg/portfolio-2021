import AppHead from "../../components/app/AppHead";
import AppLayout from "../../components/app/AppLayout";
import { SITE_TITLE, SITE_URL } from "../../data/constants";
import { getSubject, getSubjects } from "../../utils/subjects";
import { getPosts, getSinglePost } from "../../utils/static-blog";
import { useLang } from "../../utils/lang";
import Separator from "../../components/app/Separator";
import AuthorSignature from "../../components/app/AuthorSignature";
import LearnNav from "../../components/app/learn/LearnNav";
import MarkdownContent from "../../components/app/MarkdownContent";
import pageStyles from "../../styles/pages/Page.module.css";
import styles from "../../styles/pages/LearnLesson.module.css";

export async function getStaticPaths({ locales }) {
    const paths = [];

    for (const locale of locales) {
        const subjects = getSubjects(locale);
        for (const subjectId of Object.keys(subjects)) {
            const { posts } = await getPosts({ pathname: `/data/lessons/${locale}/${subjectId}`, locale, subjectId });
            paths.push(...posts.map(post => `/${locale}/learn/${subjectId}/${post.slug}`));
        }
    }
    return { paths, fallback: false };
}

export async function getStaticProps({ params, locale }) {
    const [subjectId, slug] = params.slug;
    const subject = getSubject(locale, subjectId);

    const data = await getSinglePost({ pathname: `/data/lessons/${locale}/${subjectId}`, locale, slug });
    data.slug = slug;

    const { intro, coverImagePath } = getSubject(locale, subjectId);
    data.data.description = intro;
    data.data.coverImagePath = coverImagePath;

    const props = {
        post: JSON.parse(JSON.stringify(data)), // serialization fix
        subjectId,
        coverImagePath: subject.coverImagePath,
    };
    return { props };
}

export default function LearnLesson({ post, subjectId, coverImagePath }) {
    const { updated } = useLang("common");
    const { readingTime } = useLang("blog");
    const { learnSignature } = useLang("learn");

    return (
        <AppLayout className={pageStyles.container}>
            <AppHead
                title={`${post.data.title} - ${SITE_TITLE}`}
                description={post.data.description}
                imageUrl={post.data?.coverImagePath ? SITE_URL + post.data.coverImagePath : null}
                type="article"
            />

            <LearnNav
                subjectId={subjectId}
                lessonSlug={post.slug}
                lessonNumber={post.data.number}
                lessonTitle={post.data.title}
            />

            <div className={styles.lessonMeta}>
                {/* {L_BY} {post.data.author.name}<br /> */}
                {updated} {post.data.updated}<br />
                {post.data.readingTime} {readingTime}
            </div>

            <h1>{post.data.title}</h1>

            <img className={styles.coverImage} src={coverImagePath} alt={post.data.title} />

            <article>
                <MarkdownContent content={post.htmlContent} />
            </article>

            <Separator top="4rem" bottom="2rem" />

            <AuthorSignature imagePath={post.data.author.picture} name={post.data.author.name}>
                <div>{learnSignature}</div>
            </AuthorSignature>

        </AppLayout>
    );
}
