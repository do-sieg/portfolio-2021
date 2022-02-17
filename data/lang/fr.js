import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DEV_LINKEDIN } from "../constants";

export default {
    ERROR: "Erreur",
    ERR_MESSAGES: {
        0: "Une erreur s'est produite.",
        400: "Requête invalide.",
        401: "Accès non autorisé.",
        403: "Accès interdit.",
        404: "Page introuvable.",
        500: "Erreur interne du serveur.",
        // 502: "Bad Gateway.",
        // 504: "Gateway Timeout.",
    },

    DEV_NAME: "Daniel Orchanian",
    DEV_JOB_TITLES: "Développeur & Formateur Web",

    SITE_DESCRIPTION: "Développeur et formateur web, je mets mon expertise à votre service pour créer des sites web qui aideront votre entreprise de maximiser ses résultats.",

    NAV_HOME: "Accueil",
    // NAV_ABOUT: "About Me",
    NAV_PROJECTS: "Projets",
    NAV_TEACH: "Cours",
    NAV_BLOG: "Blog",

    PHOTO_CREDITS: "Crédits photo",
    BACKGROUND_IMAGES: "Images d'arrière-plan",

    ACTION_VISIT: "Visiter",
    ACTION_VIEW_CODE: "Code",
    ACTION_BACK_HOME: "Revenir à la page d'accueil",

    DATE_FORMAT: "DD MM YY",
    SHORT_MONTHS: [
        "JAN", "FÉV", "MAR", "AVR",
        "MAI", "JUN", "JUL", "AOU",
        "SEP", "OCT", "NOV", "DÉC",
    ],
    DAYS: [
        "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"
    ],

    ALL: "Tous",
    TIMELINE: "Parcours",
    REVIEWS: "Avis",
    ONGOING: "En cours",
    // LANGUAGES: "Langages",
    PROJECTS: "Projets",
    // TOOLS: "Outils",
    SKILLS_MAIN: "Compétences principales",
    SKILLS_OTHER: "Autres compétences",
    LEARN_MORE: "En savoir plus",
    VIEW_PROJECTS: "Voir mes projets",
    DOWNLOAD_RESUME: "Télécharger mon CV",
    YEARS: (n) => n <= 1 ? "an" : "ans",
    MONTHS: (n) => "mois",


    HOME_TITLE: "Bienvenue",
    HOME_INTRO_DEV: (
        <>
            <p>
                Je mets mon expertise de <strong>développeur web</strong> à votre service.
                Mon <strong>expérience</strong> en <b>entreprise</b> et en <strong>free-lance</strong> m'a appris à répondre à toutes sortes de besoins,
                pour tous types de projets.
            </p>
            <p>
                Vous <b>recrutez</b> pour une entreprise&nbsp;? Vous cherchez un professionnel pour réaliser un site qui vous aidera à <strong>maximiser vos résultats</strong>&nbsp;?
                Je vous accompagne dès la <b>création</b> de votre projet jusqu'à son <b>déploiement</b>.
            </p>
        </>
    ),
    HOME_INTRO_TEACH: (
        <p>
            J'interviens également en tant que <strong>formateur</strong> et <strong>mentor</strong>.
            En groupe ou en cours particuliers, je vous aide à réaliser votre potentiel.
        </p>
    ),

    PROJECTS_TITLE: "Projets",
    CLIENT_PROJECTS: "Projets clients",
    OWN_PROJECTS: "Projets personnels",
    DEMO_PROJECTS: "Démos",
    OLD_PROJECTS: "Anciens projets",

    TEACH_TITLE: "Cours",
    TEACH_INTRO: (
        <>
            <h2>Transmettre un savoir</h2>
            <p>
                En plus de mon activité de développeur, mon autre passion est d'<strong>enseigner</strong>.
            </p>
        </>
    ),
    TEACH_TRAINING: (
        <p>
            Après six ans d'enseignement en secondaire, je mets à profit mon expérience dans le monde de la <strong>formation</strong>.
            J'interviens dans divers domaines touchant le web : langages, frameworks, outils...
        </p>
    ),
    TEACH_COURSES: (
        <p>
            Je projette de mettre des <strong>cours</strong> à disposition des débutants pour les aider à s'y retrouver un peu.
            {/* Je mets des cours à disposition des débutants pour les aider à s'y retrouver un peu. */}
        </p>
    ),
    TEACH_PRIVATE: (
        <>
            <h2>Guider vers la réussite</h2>
            <p>
                Je donne également des <strong>cours particuliers</strong> selon mes disponibilités.
                Un projet à complèter, des notions qui vous échappent, ou tout simplement un désir d'apprendre...
                je suis là pour vous accompagner.
            </p>
            <p>
                Vous pouvez me contacter sur une des plate-formes suivantes, ou directement par e-mail.
            </p>
        </>
    ),

    BLOG_INTRO: (
        <>
            <p>Mes derniers articles sur la programmation, les technos, la vie de développeur... et d'autres sujets aussi.</p>
            <p>N'hésitez pas à me suivre sur <a href={DEV_LINKEDIN} target="_blank">LinkedIn <FaExternalLinkAlt style={{ display: "inline" }} /></a> pour recevoir des notifications sur le nouveau contenu.</p>
        </>
    ),
    BLOG_NO_ARTICLES: "Pas encore d'article. Ils arrivent bientôt.",
    // BLOG_SELECT_CATEGORY: "Sélectionnez une catégorie",
    BLOG_ALL_ARTICLES: "Tous les articles",
    BLOG_READING_TIME: "min de lecture",
    BLOG_MORE_POSTS_AUTHOR: (authorLink) => {
        return <span>Lire <Link href={authorLink}><a>plus d'articles</a></Link> de cet auteur</span>;
    },
    BLOG_PHOTO_CREDITS: "Photo(s) :",
    BLOG_CATEGORY_NAMES: {
        javascript: "JavaScript",
        jobs: "Emploi",
    },
    BLOG_CATEGORY_MORE: "Articles dans",
    BLOG_CATEGORY_SEE_ALL_POSTS: (n) => n === 1 ? `${n} article` : `Voir les ${n} articles`,
}
