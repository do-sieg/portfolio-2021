export default {
    DEV_JOB_TITLES: "Développeur & Formateur Web",

    NAV_HOME: "Accueil",
    // NAV_ABOUT: "About Me",
    NAV_DEV: "Dév Web",
    NAV_TEACH: "Cours",
    NAV_TRANSLATION: "Traduction",

    SHORT_MONTHS: [
        "JAN", "FÉV", "MAR", "AVR",
        "MAI", "JUN", "JUL", "AOU",
        "SEP", "OCT", "NOV", "DÉC",
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
                Vous <b>recrutez</b> pour une entreprise&nbsp;? Vous cherchez un professionnel pour <strong>réaliser un site</strong>&nbsp;?
                Je vous accompagne dès la <b>création</b> de votre projet jusqu'à son <b>déploiement</b>.
            </p>
        </>
    ),
    HOME_INTRO_TEACH: (
        <p>
            J'interviens également en tant que <strong>formateur</strong> et <strong>mentor</strong>.
            En groupe ou par cours particuliers, je vous aide à réaliser votre potentiel.
        </p>
    ),

    HOME_INTRO_3: (
        <>

            {/* <p>N'hésitez pas à me contacter pour tout renseignement.</p> */}
            {/* 

N'hésitez pas à me contacter pour tout renseignement en cliquant sur la petite bulle en haut à droite... 

... ou tout simplement en m'écrivant un email à d.orchanian@gmail.com.

Bonne navigation ! */}


            <h2>HOME</h2>
            <ul>
                <li>MESSAGE DE PRES + PROMPT ABOUT</li>
                <li>SKILLS/LANGAGES/FRAMEWORKS</li>
                <li>DERNIERES ACTUS/PROJ EN COURS</li>
                <li>DERNIERS ARTICLES + LIEN BLOG</li>
            </ul>

            <h2>ABOUT</h2>
            <ul>
                <li>PRES LONGUE, PHOTOS</li>
                <li>TIMELINE</li>
            </ul>
        </>
    ),








    TEACH_INTRO: (
        <>
            <h2>Bienvenue</h2>
            <p>Bonjour, je suis Daniel, développeur web et enseignant, passionné par tout ce qui touche au code.</p>
            <p>Je mets des cours à disposition des débutants pour les aider à s'y retrouver un peu. Ils sont le fruit de mes expériences en développement, et tiennent compte des plus récentes mises à jour.</p>
            <p>Je donne également des cours particuliers. Vérifiez mes disponibilités sur les sites suivants ou contactez-moi directement.</p>

            <p>CONTACT INFO</p>
        </>
    ),
}