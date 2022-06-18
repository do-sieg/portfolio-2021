import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DEV_LINKEDIN } from "../../data/constants";

export default {
    titleBlogHome: "Blog",
    titleRecentPosts: "Derniers articles",

    categoryNames: {
        git: "Git",
        javascript: "JavaScript",
        jobs: "Emploi",
    },

    introBlogHome: (
        <>
            <p>Mes derniers articles sur la programmation, les technos, la vie de développeur... et d'autres sujets aussi.</p>
            <p>N'hésitez pas à me suivre sur <a href={DEV_LINKEDIN} target="_blank">LinkedIn <FaExternalLinkAlt style={{ display: "inline" }} /></a> pour recevoir des notifications sur le nouveau contenu.</p>
        </>
    ),

    draft: "Brouillon",
    readingTime: "min de lecture",
    blogPhotoCredits: "Photo(s) :",
    allPosts: "Tous les articles",
    noPosts: "Pas encore d'article. Ils arrivent bientôt.",
    morePostsCtg: "Articles dans",
    morePostsAuthor: (authorLink) => {
        return <span>Lire <Link href={authorLink}><a rel="author">plus d'articles</a></Link> de cet auteur</span>;
    },
    actionSeeAllPosts: (n) => n === 1 ? `${n} article` : `Voir les ${n} articles`,
}
