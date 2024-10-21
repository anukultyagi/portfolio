import { portfolioThumbnail, ipAddressTrackerThumbnail, noteTakrThumbnail, chromeVaultThumbnail, translatorThumbnail, bankingthumbnail } from "./assets";

export const brandName = '<anukul />';

export const workData = [
    {
        id: 1,
        title: "Portfolio",
        description: "A personal portfolio showcasing my projects, skills, and experience.",
        tags: ["Next.js", "Tailwind", "Framer Motion", "Email.js"],
        imageUrl: portfolioThumbnail,
        link: "https://anukultyagi-me.netlify.app/",
        repo: false,
    },
    {
        id: 2,
        title: "Chrome Vault",
        description: "A web app showcasing various Chrome extensions along with their download links and details.",
        tags: ["React.js", "Tailwind", "React-router", "Chrome Extension"],
        imageUrl: chromeVaultThumbnail,
        link: "https://chromevault.netlify.app/",
        repo: false,
    },
    {
        id: 3,
        title: "IP Address Tracker",
        description: "A tool to track IP addresses on a map, using Leaflet for interactive map display.",
        tags: ["React.js", "Tailwind", "Leaflet"],
        imageUrl: ipAddressTrackerThumbnail,
        link: "https://ip-address-tracker-new.netlify.app/",
        repo: false,
    },
    {
        id: 4,
        title: "Note Takrr",
        description: "A simple note-taking application built with HTML, CSS, vanilla JavaScript and local storage.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageUrl: noteTakrThumbnail,
        link: "https://note-takrr.netlify.app/",
        repo: false,
    },
    {
        id: 5,
        title: "The Translator",
        description: "A translation app supporting multiple languages using JavaScript, memory API and Web API.",
        tags: ["HTML", "CSS", "JavaScript"],
        imageUrl: translatorThumbnail,
        link: "https://the-translator.netlify.app/",
        repo: false,
    },
    {
        id: 6,
        title: "The Hoo Bank ",
        description: "A Banking landing page made using React.js and Tailwind. Responsive and well maintained",
        tags: ["React", "Tailwind"],
        imageUrl: bankingthumbnail,
        link: "https://banking-page.netlify.app/",
        repo: false,
    },
];
