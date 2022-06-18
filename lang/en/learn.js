import Link from "next/link";

export default {
    titleLearn: "Courses",
    titleWebLanguages: "Web Languages",

    learnLevels: {
        basic: "Basic",
        intermediate: "Intermediate",
        advanced: "Advanced",
    },

    subjectTitle: (name) => `${name} Lessons`,
    lessonsNumber: (n) => n === 1 ? `${n} lesson` : `${n} lessons`,

    introLearn: (
        <>
            <p>
                When I give training courses or private lessons,
                I often have to explain things in great detail.
                But that's <strong>a lot to memorize</strong>.
            </p>
            <p>
                The courses made available here are broken down
                to <strong>be concise</strong> and <strong>get to the point</strong>.
                I try to use <strong>understandable</strong> language, explaining technical terms.
            </p>
            <p>
                My long term goal will be to cover several languages and frameworks,
                in the most complete way possible.
                The courses will be regularly <strong>updated</strong> to reflect
                new developments in the various subjects.
            </p>
            <p>Enjoy your reading!</p>
            <sub style={{ fontWeight: 300 }}>
                <i>Photo: <a href="https://unsplash.com/@nickmorrison" target="_blank">Nick Morrison</a></i>
            </sub>
        </>
    ),

    noLessons: "No lessons yet. Coming soon.",

    learnSignature: (
        <>
            <p>I am a web developer and trainer, with a passion for all things code-related.</p>
            <p>I make these courses available to everyone to learn or review concepts as simply and clearly as possible.</p>
            <p>Check <Link href="/learn"><a>all the courses here</a></Link>.</p>
        </>
    ),
}
