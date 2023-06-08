import {
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    angular,
    pampam,
    itop1000,
    spotifyBG,
    spotify,
    threejs,
    portfolio,
    logo
} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Web Developer",
        icon: web,
    },
    // {
    //     title: "React Native Developer",
    //     icon: mobile,
    // },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Game Designer",
        icon: creator,
    },
];

const technologies = [
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "TypeScript",
        icon: typescript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Angular",
        icon: angular,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
];

const experiences = [
    {
        title: "Game Designer",
        company_name: "Pam Pam",
        icon: pampam,
        iconBg: "#FFFFFF",
        date: "March 2019 - April 2020",
        points: [
            "I created and came up with a plot, map design for super casual games.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality games.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "React Developer",
        company_name: "ITOP 1000",
        icon: itop1000,
        iconBg: "#000000",
        date: "Jun 2022 - Present",
        points: [
            "Developing and maintaining web applications using React and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participate in code review and accept constructive feedback from other developers.",
        ],
    }
];

const projects = [
    {
        name: "Spotify 2.0",
        description:
            "You can look at the improved version of Spotify. With a modern homepage, a full-fledged music player, search, lyrics, song exploration features, search, popular music around you, global top charts, and more",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "RapidAPI",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: spotifyBG,
        BGforLink: spotify,
        source_code_link: "https://github.com/dem1ess/Spotify-2.0",
        site_link: "https://spotify-dem1ess.netlify.app/",
    },
    {
        name: "Portfolio",
        description:
            "You can look at the improved version of Spotify. With a modern homepage, a full-fledged music player, search, lyrics, song exploration features, search, popular music around you, global top charts, and more",
        tags: [
            {
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "ThreeJs",
                color: "green-text-gradient",
            },
            {
                name: "framer-motion",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: portfolio,
        BGforLink: logo,
        source_code_link: "https://github.com/dem1ess/Portfolio",
        site_link: "https://portfolio-dem1ess.netlify.app/",
    },
];

export {services, technologies, experiences, projects};