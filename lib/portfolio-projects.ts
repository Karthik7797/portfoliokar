export interface Project {
    name: string;
    description: string;
    tags: string[];
    image: string;
    link?: string;
}

export const featuredProjects: Project[] = [
    {
        name: "ALKHEMY",
        description: "Product site for ALKHEMY’s ionised water, with scroll-led storytelling and interactive product details.",
        tags: ["Product website", "Interactive storytelling"],
        image: "/assets/alkhemy.jpg",
        link: "https://alkhemy.vercel.app/",
    },
    {
        name: "Student ID CRM",
        description: "A demo CRM workspace for student leads, follow-ups, mentoring sessions and application workflows.",
        tags: ["CRM", "Dashboard", "Student workflows"],
        image: "/assets/student-id-crm.jpg",
        link: "https://studentidcrm.vercel.app/",
    },
    {
        name: "MELD",
        description: "A design studio website with bold typography, featured work and a focused contact experience.",
        tags: ["Studio website", "Brand identity", "Web experience"],
        image: "/assets/meld.png",
        link: "https://itsmeld.com/",
    },
];

export const projects: Project[] = [
    ...featuredProjects,
    {
        name: "Dhaksha Travels",
        description: "Web-based platform for searching and booking car rentals from various providers, providing an efficient transportation solution.",
        tags: ["React", "MongoDB", "Tailwind"],
        image: "/assets/Project.png",
        link: "https://maduraidhakshatoursandtravels.com/",
    },
    {
        name: "AI Acme",
        description: "Job search application with salary estimation and location-based job tracking, optimized for high user engagement.",
        tags: ["React", "REST API", "SCSS"],
        image: "/assets/project_1.png",
        link: "https://www.aiacme.ai/",
    },
    {
        name: "Brugu IO",
        description: "Travel booking and destinations platform with curated recommendations.",
        tags: ["Next.js", "Supabase", "CSS"],
        image: "/assets/project_2.png",
        link: "https://brugu.io/",
    },
    {
        name: "Roboto 360",
        description: "Enterprise car rental and management dashboard providing comprehensive tracking and efficient provider solutions.",
        tags: ["React", "MongoDB", "Tailwind"],
        image: "/assets/project_3.png",
        link: "https://www.roboto360.com/",
    },
    {
        name: "Yashini Homestays",
        description: "Travel booking platform for homestays, featuring efficient management and user-centric navigation.",
        tags: ["React", "MongoDB", "Tailwind"],
        image: "/assets/project_4.png",
        link: "https://yashinihomestays.in/",
    },
    {
        name: "Blue Horse",
        description: "Web platform for industrial solutions, focused on transportation and provider management.",
        tags: ["React", "MongoDB", "Tailwind"],
        image: "/assets/project_5.png",
        link: "https://bluehorseindustry.com/",
    },
    {
        name: "AI Being",
        description: "AI-based platform for search and management, optimized for performance and production-ready architecture.",
        tags: ["React", "MongoDB", "Tailwind"],
        image: "/assets/project_6.png",
        link: "https://ai-being.com/home/",
    },
    {
        name: "Crypco Brugu",
        description: "Cryptocurrency management and search platform focused on the modern web ecosystem and data optimization.",
        tags: ["React", "MongoDB", "Tailwind"],
        image: "/assets/Project_7.png",
        link: "https://crypco.brugu.io",
    },
    {
        name: "Yaal Homestay",
        description: "Hospitality platform for homestays, featuring professional booking workflows and responsive UI.",
        tags: ["React", "MongoDB", "Tailwind"],
        image: "/assets/Project_8.png",
        link: "https://yaalhomestay.in/",
    },
];

export const ownProjects: Project[] = [
    {
        name: "Normie Agency",
        description: "Agency management platform architected for modern service-based business workflows.",
        tags: ["React", "MongoDB", "Tailwind"],
        image: "/assets/ownproject_1.png",
        link: "https://agency-orpin-three.vercel.app/",
    },
    {
        name: "Normie AI",
        description: "AI-integrated utility suite providing automation and interactive user tools.",
        tags: ["React", "AI", "Tailwind"],
        image: "/assets/ownproject_2.png",
        link: "https://normieai.vercel.app/",
    },
    {
        name: "Crygo App",
        description: "Cryptocurrency tracking and analysis application with reactive charts and real-time data.",
        tags: ["React", "Crypto APIs", "Tailwind"],
        image: "/assets/ownproject_3.png",
        link: "https://crygo-kk49.vercel.app/",
    },
];

export const mobileApp: Project = {
    name: "Mobile App Store",
    description: "A custom mobile distribution portal. App discovery and direct QR-based installation for iOS and Android.",
    tags: ["React Native", "iOS", "Android"],
    image: "/assets/mobile_ui.png",
};
