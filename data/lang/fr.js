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
    LANGUAGES: "Langages",
    PROJECTS: "Projets",
    TOOLS: "Outils",
    LEARN_MORE: "En savoir plus",
    LEARN_MORE_DEV: "Voir mon profil",
    YEARS: (n) => n <= 1 ? "an" : "ans",
    MONTHS: (n) => "mois",

    HOME_INTRO_DEV: (
        <>
            <p><strong>Bienvenue</strong> sur mon site.</p>
            <p>Je mets mon expertise de <strong>développeur web</strong> à votre service. Vous montez une équipe pour votre entreprise&nbsp;? Vous cherchez un professionnel pour réaliser un site&nbsp;? Je suis là pour vous accompagner des débuts de vos projets jusqu'à leur mise en service.</p>
            <p>Ayant travaillé en entreprise et en free-lance, je m'intéresse à divers types de projets et je sais m'adapter aux besoins des clients.</p>
        </>
    ),
    HOME_INTRO_TEACH: (
        <p>J'interviens également en tant que <strong>formateur et mentor</strong> en développement. En groupes ou lors de cours particuliers, j'aide des développeurs à réaliser leur potentiel.</p>
    ),
    HOME_INTRO_SIGNATURE: (
        <p>Bonne navigation !</p>
    ),

    HOME_INTRO_3: (
        <>

        {/* <p>N'hésitez pas à me contacter pour tout renseignement.</p> */ }
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