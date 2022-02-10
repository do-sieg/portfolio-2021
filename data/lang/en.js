import Link from "next/link";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DEV_LINKEDIN } from "../constants";

export default {
    ERROR: "Error",
    ERR_MESSAGES: {
        0: "An error occurred.",
        400: "Bad Request.",
        401: "Unauthorized.",
        403: "Forbidden.",
        404: "This page could not be found.",
        500: "Internal Server Error.",
        502: "Bad Gateway.",
        504: "Gateway Timeout.",
    },

    DEV_JOB_TITLES: "Web Developer & Trainer",

    SITE_DESCRIPTION: "Web developer and trainer, I put my expertise at your service to create websites to help your company maximize its results.",

    NAV_HOME: "Home",
    NAV_PROJECTS: "Projects",
    NAV_TEACH: "Teaching",
    NAV_BLOG: "Blog",

    PHOTO_CREDITS: "Photo Credits",
    BACKGROUND_IMAGES: "Background Images",

    ACTION_VISIT: "Visit",
    ACTION_VIEW_CODE: "Code",
    ACTION_BACK_HOME: "Return to the home page",

    DATE_FORMAT: "MM DD, YY",
    SHORT_MONTHS: [
        "JAN", "FEB", "MAR", "APR",
        "MAY", "JUN", "JUL", "AUG",
        "SEP", "OCT", "NOV", "DEC",
    ],
    DAYS: [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ],

    ALL: "All",
    TIMELINE: "Activity",
    REVIEWS: "Reviews",
    ONGOING: "Ongoing",
    // LANGUAGES: "Languages",
    PROJECTS: "Projects",
    // TOOLS: "Tools",
    SKILLS_MAIN: "Main Skills",
    SKILLS_OTHER: "Other Skills",
    LEARN_MORE: "Learn More",
    VIEW_PROJECTS: "View my projects",
    DOWNLOAD_RESUME: "Download my resume",
    YEARS: (n) => n <= 1 ? "year" : "years",
    MONTHS: (n) => n <= 1 ? "month" : "months",


    HOME_TITLE: "Welcome",
    HOME_INTRO_DEV: (
        <>
            <p>
                I put my expertise as a <strong>web developer</strong> at your service.
                My experience in <b>companies</b> and as a <strong>freelance</strong> has taught me to meet all kinds of needs,
                for all types of projects.
            </p>
            <p>
                <b>Hiring</b> for a company? Looking for a professional to build a website helping you <strong>maximize your results</strong>?
                I help you from the <b>start</b> of your project to its <b>deployment</b>.
            </p>
        </>
    ),
    HOME_INTRO_TEACH: (
        <p>
            I also work as a <strong>teacher</strong> and <strong>mentor</strong>.
            In group or in private sessions, I help you achieve your potential.
        </p>
    ),

    PROJECTS_TITLE: "Projects",
    CLIENT_PROJECTS: "Client Projects",
    OWN_PROJECTS: "Personal Projects",
    DEMO_PROJECTS: "Demos",
    OLD_PROJECTS: "Old Projects",

    TEACH_TITLE: "Teaching",
    TEACH_INTRO: (
        <>
            <h2>Pass on knowledge</h2>
            <p>
                In addition to being a developer, my other passion is <strong>teaching</strong>.
            </p>
        </>
    ),
    TEACH_TRAINING: (
        <p>
            After six years of teaching in high school, I decide to put this experience to good use in the world of <strong>web development training</strong>.
            I give lessons on various topics: programming languages, frameworks, tools...
        </p>
    ),
    TEACH_COURSES: (
        <p>
            I plan to make <strong>courses</strong> available for beginners to help them get a handle on things.
            {/* I provide classes for beginners to help them find their way around. */}
        </p>
    ),
    TEACH_PRIVATE: (
        <>
            <h2>Lead to success</h2>
            <p>
                I also give <strong>private lessons</strong> based on my availability.
                A project to complete, notions that seem confusing, or simply a desire to learn...
                I am here to support you.
            </p>
            <p>
                You can contact me on one of the following platforms, or directly by e-mail.
            </p>
        </>
    ),

    BLOG_INTRO: <p>My latest articles on life as a developer, technology, etc...</p>,
    
    BLOG_INTRO: (
        <>
            <p>My latest articles about programming, technologies, developer's life... and a lot of other things.</p>
            <p>Be sure to follow me on <a href={DEV_LINKEDIN} target="_blank">LinkedIn <FaExternalLinkAlt style={{ display: "inline" }} /></a> to receive notifications on new content.</p>
        </>
    ),
    BLOG_NO_ARTICLES: "No articles yet. Coming soon.",
    // BLOG_SELECT_CATEGORY: "Select a category",
    BLOG_ALL_ARTICLES: "All articles",
    BLOG_READING_TIME: "min read",
    BLOG_MORE_POSTS_AUTHOR: (authorLink) => {
        return <span>Read <Link href={authorLink}><a>more posts</a></Link> from this author</span>;
    },
    BLOG_PHOTO_CREDITS: "Photo:",
    BLOG_CATEGORY_NAMES: {
        javascript: "JavaScript",
        jobs: "Jobs",
    },
    BLOG_CATEGORY_MORE: "More in",
    BLOG_CATEGORY_SEE_ALL_POSTS: (n) => n === 1 ? `${n} article` : `See all ${n} articles`,

    // HOME_SLIDE_PROMPT_1: "Need a website?",
    // HOME_SLIDE_PROMPT_2: "Need lessons?",
    // HOME_SLIDE_PROMPT_3: "Looking for a translator?",


}
