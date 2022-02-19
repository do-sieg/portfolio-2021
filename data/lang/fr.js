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
    NAV_TEACH: "Mentorat",
    NAV_LEARN: "Cours",
    NAV_BLOG: "Blog",

    PHOTO_CREDITS: "Crédits photo",
    BACKGROUND_IMAGES: "Images d'arrière-plan",

    ACTION_START: "Commencer",
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
    BY: "Par",
    UPDATED: "Mise à jour :",
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
    VIEW_COURSES: "Accéder aux cours",
    YEARS: (n) => n <= 1 ? "an" : "ans",
    MONTHS: (n) => "mois",
    READING_TIME: "min de lecture",

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
            Je mets des <strong>cours</strong> à disposition des débutants pour les aider à s'y retrouver un peu.
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
    BLOG_RECENT_POSTS: "Derniers articles",
    // BLOG_SELECT_CATEGORY: "Sélectionnez une catégorie",
    BLOG_ALL_ARTICLES: "Tous les articles",
    BLOG_MORE_POSTS_AUTHOR: (authorLink) => {
        return <span>Lire <Link href={authorLink}><a rel="author">plus d'articles</a></Link> de cet auteur</span>;
    },
    BLOG_PHOTO_CREDITS: "Photo(s) :",
    BLOG_CATEGORY_NAMES: {
        javascript: "JavaScript",
        jobs: "Emploi",
    },
    BLOG_CATEGORY_MORE: "Articles dans",
    BLOG_CATEGORY_SEE_ALL_POSTS: (n) => n === 1 ? `${n} article` : `Voir les ${n} articles`,

    LESSONS_TITLE: "Les Cours",
    LESSONS_LEVEL_TITLES: {
        basic: "Basique",
        intermediate: "Intermédiaire",
        advanced: "Avancé",
    },
    LESSONS_INTRO: (
        <>
            <p>
                Quand j'interviens en formation ou lors de cours particuliers,
                je dois souvent expliquer certains sujets dans leurs moindres détails.
                Mais cela fait <strong>beaucoup de choses à mémoriser</strong>.
            </p>
            <p>
                Les cours que je mets à disposition ici sont découpés de façon à <strong>être
                concis</strong> et <strong>aller à l'essentiel</strong>.
                J'essaie d'utiliser un langage <strong>clair</strong>, en expliquant le jargon technique.
            </p>
            <p>
                Mon objectif à long terme sera de couvrir plusieurs langages et frameworks,
                de la façon la plus complète possible.
                Les cours seront régulièrement <strong>mis à jour</strong> pour refléter
                les nouveautés des différents sujets.
            </p>
            <p>Bonne lecture !</p>
            <sub style={{ fontWeight: 300 }}>
                <i>Photo : <a href="https://unsplash.com/@nickmorrison" target="_blank">Nick Morrison</a></i>
            </sub>
        </>
    ),
    LEARN_NO_LESSONS: "Pas encore de cours. Ils arrivent bientôt.",
    LESSONS_SUBJECT_TITLE: (name) => `Cours ${name}`,
    LESSONS_NUMBER: (n) => `${n} cours`,
    LESSONS_SIGNATURE: (
        <>
            <p>Je suis développeur web et formateur, passionné par tout ce qui touche au code.</p>
            <p>Je mets ces cours à disposition de tous pour apprendre ou réviser des notions le plus simplement et clairement possible.</p>
            <p>Retrouvez <Link href="/learn"><a>tous les cours ici</a></Link>.</p>
        </>
    ),
    LESSONS_CTG_WEB_LANGUAGES: "Les Langages du Web",
}
