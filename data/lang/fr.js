export default {
    DEV_JOB_TITLES: "Développeur web & formateur",

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
    TIMELINE: "Activité",
    REVIEWS: "Avis",
    ONGOING: "En cours",
    LEARN_MORE: "En savoir plus",
    YEARS: (n) => n <= 1 ? "an" : "ans",
    MONTHS: (n) => "mois",

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