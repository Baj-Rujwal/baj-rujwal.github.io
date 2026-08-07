interface Projects {
    title: string;
    withLink: boolean;
    link?: string;
    description?: string[];
}

interface Experience {
    title: string;
    duration: string;
    description?: string[];
}

const PROJECTS: Projects[] = [
    {
        title: "Jobins AI Job Platform",
        withLink: true,
        link: "https://alata.ai",
    },
    {
        title: "Jobins Proprietary Job Platform",
        withLink: true,
        link: "http://jobins.jp"
    },
    {
        title: "SSB-Reisen",
        withLink: true,
        link: "https://www.ssbreisen.de"
    },
    {
        title: "Logistics and Fleet Management",
        withLink: true,
        link: "https://routecontrol.de/en/"
    },
    {
        title: "HR Portal",
        withLink: false,
    },
];

const EDUCATION: Experience[] = [
    {
        title: "Bachelor of Computer Engineering — Khwopa Engineering College",
        duration: "2016 - 2021",
    },
];

const EXPERIENCE: Experience[] = [
    {
        title: "Software Engineer - Jobins",
        duration: "JANUARY 2026 - PRESENT",
        description: [
            "Part of an ETL (Extract, Transform, and Load) pipeline team developing preparing data for AI job search platform which includes extracting validated \
            data from job texts, transforming it into the required format and storing into vertex search for semantic search.",
            "Maintained salary estimation system filling missing information through data analysis with pandas.",
            "Built automated web scraping pipeline with active expiry check feeding job data into ETL pipline for AI job search.",
            "Built features for proprietary job platform connecting agents and candidates to countles job posting from real companies."
        ]
    },
    {
        title: "Software Engineer - Diagonal Technologies",
        duration: "OCTOBER 2023 - DECEMBER 2025",
        description: [
            "Developed travel platform to book tours across Europe. Integrated third party services to maintain latest data, persist every step of the bookings from start to completion.",
            "Maintained logistics fleet ecosystem handling 150K tours daily.",
            "Maintained gymnastics session booking platform for kids helping enthusiastic kids connect with the right mentors."
        ],
    },
    {
        title: "Software Engineer Intern - Associate Software Engineer) - Diagonal Technologies",
        duration: "NOVEMBER 2021 - OCTOBER 2023",
        description: [
            "Developed a in-house HR solution helping maintain attendance, leaves, holidays and salary.",
        ],
    },
];

const SKILLS: Record<string, Omit<Projects, "description">[]> =
{
    "HARD_SKILLS": [
        {
            title: "PHP",
            withLink: true,
            link: "src/assets/icons/php-light.svg",
        },
        {
            title: "Typescript",
            withLink: true,
            link: "src/assets/icons/typescript.svg",
        },
        {
            title: "Python",
            withLink: true,
            link: "src/assets/icons/python-light.svg",
        },
        {
            title: "SQL",
            withLink: true,
            link: "src/assets/icons/database.svg",
        },
        {
            title: "Laravel",
            withLink: true,
            link: "src/assets/icons/laravel-light.svg",
        },
        {
            title: "NodeJS",
            withLink: true,
            link: "src/assets/icons/nodejs-light.svg",
        },
        {
            title: "React",
            withLink: true,
            link: "src/assets/icons/react-light.svg",
        },
        {
            title: "TailwindCSS",
            withLink: true,
            link: "src/assets/icons/tailwindcss-light.svg",
        },
        {
            title: "APIs",
            withLink: false,
        },
        {
            title: "Microservices",
            withLink: false,
        },
    ],
    "DB": [
        {
            title: "MySQL",
            withLink: true,
            link: "src/assets/icons/mysql-light.svg",
        },
        {
            title: "PostgreSQL",
            withLink: true,
            link: "src/assets/icons/postgresql-light.svg",
        },
        {
            title: "Redis",
            withLink: true,
            link: "src/assets/icons/redis-light.svg",
        },
        {
            title: "ORMs",
            withLink: false,
        },
    ],
    "TOOLS": [
        {
            title: "Git",
            withLink: true,
            link: "src/assets/icons/git.svg",
        },
        {
            title: "Docker",
            withLink: true,
            link: "src/assets/icons/docker.svg",
        },
        {
            title: "Linux",
            withLink: true,
            link: "src/assets/icons/linux.svg",
        },
    ],
    "AI": [
        {
            title: "LLM Integration",
            withLink: false,
        },
        {
            title: "Web Scraping",
            withLink: false,
        },
        {
            title: "Semantic Search",
            withLink: false,
        },
    ],
    "SOFT_SKILLS": [
        {
            title: "Agile/Scrum",
            withLink: false,
        },
        {
            title: "Code Review",
            withLink: false,
        },
        {
            title: "Technical Documentation",
            withLink: false,
        },
    ],
};

export {
    PROJECTS,
    EDUCATION,
    EXPERIENCE,
    SKILLS,
};