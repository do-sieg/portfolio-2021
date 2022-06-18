import Link from "next/link";

export default {
    titleLearn: "Les Cours",
    titleWebLanguages: "Les Langages du Web",

    learnLevels: {
        basic: "Basique",
        intermediate: "Intermédiaire",
        advanced: "Avancé",
    },

    subjectTitle: (name) => `Cours ${name}`,
    lessonsNumber: (n) => `${n} cours`,

    introLearn: (
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

    noLessons: "Pas encore de cours. Ils arrivent bientôt.",

    learnSignature: (
        <>
            <p>Je suis développeur web et formateur, passionné par tout ce qui touche au code.</p>
            <p>Je mets ces cours à disposition de tous pour apprendre ou réviser des notions le plus simplement et clairement possible.</p>
            <p>Retrouvez <Link href="/learn"><a>tous les cours ici</a></Link>.</p>
        </>
    ),
}
