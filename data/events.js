export default [
    {
        type: "degree",
        name: { en: "Diploma", fr: "Baccalauréat" },
        description: {
            en: (() => (
                <>
                    High school Diploma, Science profile (specialty in mathematics)
                </>
            ))(),
            fr: (() => (
                <>
                    Baccalauréat Scientifique (spécialité mathématiques)
                </>
            ))(),
        },
        dates: ["2005-06"],
    },

    {
        type: "degree",
        name: { en: "Graduate studies", fr: "Études supérieures" },
        description: {
            en: (() => (
                <>
                    BA in General Law<br />
                    Master in Private Law<br />— UGA, Grenoble
                </>
            ))(),
            fr: (() => (
                <>
                    Licence en droit général<br />
                    Maîtrise de droit privé<br />— UGA, Grenoble
                </>
            ))(),
        },
        dates: ["2006-09"],
    },

    {
        type: "degree",
        name: { en: "Internship", fr: "Stage" },
        description: {
            en: (() => (
                <>
                    Junior Web Developer<br />— Ubicross, Armenia
                </>
            ))(),
            fr: (() => (
                <>
                    Développeur Web Junior<br />— Ubicross, Arménie
                </>
            ))(),
        },
        dates: ["2018-07", "2018-09"],
    },

    // {
    //     type: "degree",
    //     name: { en: "Training", fr: "Formation" },
    //     description: {
    //         en: (() => (
    //             <>
    //                 Web Developer Training<br />— OpenClassrooms
    //             </>
    //         ))(),
    //         fr: (() => (
    //             <>
    //                 Formation Développeur web<br />— OpenClassrooms
    //             </>
    //         ))(),
    //     },
    //     started: "2021-03",
    //     ended: "2021-05",
    // },

    {
        type: "job",
        name: { en: "French Teacher", fr: "Enseignant FLE" },
        description: {
            en: (() => (
                <>
                    French as a Foreign Language (secondary)<br />— Logos School, Cyprus
                </>
            ))(),
            fr: (() => (
                <>
                    Français Langue Étrangère (collège-lycée)<br />— Logos School, Chypre
                </>
            ))(),
        },
        dates: ["2013-09", "2018-09"],
    },

    {
        type: "job",
        name: { en: "IT/French Teacher", fr: "Enseignant Info/FLE" },
        description: {
            en: (() => (
                <>
                    Information Technology (secondary)<br />
                    French as a Foreign Language (secondary)<br />— Logos School, Cyprus
                </>
            ))(),
            fr: (() => (
                <>
                    Informatique (collège)<br />
                    Français Langue Étrangère (collège-lycée)<br />— Logos School, Chypre
                </>
            ))(),
        },
        dates: ["2019-09", "2020-09"],
    },

    {
        type: "job",
        name: { en: "Fullstack Developer", fr: "Développeur fullstack" },
        description: {
            en: (() => (
                <>
                    Backend server apps, APIs, e-commerce websites (NodeJS)<br />
                    Frontend web apps (ReactJS)<br />— Ubicross, Armenia
                </>
            ))(),
            fr: (() => (
                <>
                    Conception d’applications backend, APIs, sites e-commerce (NodeJS)<br />
                    Conception d’applications web frontend (ReactJS)<br />— Ubicross, Arménie
                </>
            ))(),
        },
        dates: ["2018-09", "2019-09"],
    },

    {
        type: "job",
        name: { en: "Freelance Developer", fr: "Développeur web free-lance" },
        description: {
            en: (() => (
                <>
                    Multilingual storefront website design<br />
                    Client support (documentations, counseling)
                </>
            ))(),
            fr: (() => (
                <>
                    Conception de sites vitrines multi-langues<br />
                    Support client (documentations, conseil)
                </>
            ))(),
        },
        dates: ["2018-11", null],
    },

    {
        type: "job",
        name: { en: "Web Dev Mentor", fr: "Mentor développement web" },
        description: {
            en: (() => (
                <>
                    Support for students learning web development.<br />
                    Help with projects for developers, from beginner to advanced levels.<br />— Online
                </>
            ))(),
            fr: (() => (
                <>
                    Accompagnement d’élèves dans leur apprentissage du web.<br />
                    Aide à la réalisation de projets pour développeurs de niveaux débutant à confirmé.<br />— Cours en ligne
                </>
            ))(),
        },
        dates: ["2020-10", null],
    },

    // // {
    // //     type: "job",
    // //     name: { en: "Translator/Proofreader", fr: "Traducteur/Relecteur" },
    // //     description: {
    // //         en: (() => (
    // //             <>
    // //                 Translation/correction for data entries, texts, user manuals and files.<br />
    // //                 English to French.<br />— Faithlife, LLC, USA
    // //             </>
    // //         ))(),
    // //         fr: (() => (
    // //             <>
    // //                 Traduction et correction de données, textes, manuels d’utilisation et fichiers informatiques.<br />
    // //                 Anglais vers français.<br />— Faithlife, LLC, USA
    // //             </>
    // //         ))(),
    // //     },
    // //     started: "2020-11",
    // // },

    {
        type: "job",
        name: { en: "Web Dev Trainer", fr: "Formateur développement web" },
        description: {
            en: (() => (
                <>
                    Lessons with small groups of students on JavaScript.<br />— ANDN Services
                </>
            ))(),
            fr: (() => (
                <>
                    Cours avec des petits groupes d'élèves sur le langage JavaScript.<br />— ANDN Services
                </>
            ))(),
        },
        dates: ["2021-06", null],
    },

    {
        type: "project",
        name: { en: "Biochem", fr: "Biochem" },
        description: {
            en: (() => (
                <>
                    Website for the National Institute of Biochemistry.<br />— Armenia
                </>
            ))(),
            fr: (() => (
                <>
                    Site vitrine pour l'Institut National de Biochimie.<br />— Arménie
                </>
            ))(),
        },
        dates: ["2018-12", "2019-02"],
    },

    {
        type: "project",
        name: { en: "Saleth", fr: "Saleth" },
        description: {
            en: (() => (
                <>
                    Website for an indie game development team.
                </>
            ))(),
            fr: (() => (
                <>
                    Site pour une équipe de développement de jeu indépendant.
                </>
            ))(),
        },
        dates: ["2020-04", "2020-06"],
    },

    {
        type: "project",
        name: { en: "Agence Kentia", fr: "Agence Kentia" },
        description: {
            en: (() => (
                <>
                    Functionality implementation for a website, and content integration.<br />— Agence Kentia, France
                </>
            ))(),
            fr: (() => (
                <>
                    Implémentation de fonctionnalités pour un site web et intégration de contenu.<br />— Agence Kentia
                </>
            ))(),
        },
        dates: ["2020-11", "2021-02"],
    },
];