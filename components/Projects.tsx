'use client';

import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "@/lib/styles";
import SectionWrapper from "./SectionWrapper";
import { fadeIn, textVariant } from "@/lib/motion";

const projects = [
    {
        name: "Dhaksha Travels",
        description: "Web-based platform for searching and booking car rentals from various providers, providing an efficient transportation solution.",
        tags: [
            { name: "react", color: "text-blue-400" },
            { name: "mongodb", color: "text-green-400" },
            { name: "tailwind", color: "text-pink-400" },
        ],
        image: "/assets/Project.png",
        source_code_link: "https://maduraidhakshatoursandtravels.com/",
    },
    {
        name: "AI Acme",
        description: "Web application for job search with salary estimation and location-based job tracking, optimized for high user engagement.",
        tags: [
            { name: "react", color: "text-blue-400" },
            { name: "restapi", color: "text-green-400" },
            { name: "scss", color: "text-pink-400" },
        ],
        image: "/assets/project_1.png",
        source_code_link: "https://www.aiacme.ai/",
    },
    {
        name: "Brugu IO",
        description: "Comprehensive travel booking and destinations platform with curated recommendations and seamless UI integration.",
        tags: [
            { name: "nextjs", color: "text-blue-400" },
            { name: "supabase", color: "text-green-400" },
            { name: "css", color: "text-pink-400" },
        ],
        image: "/assets/project_2.png",
        source_code_link: "https://brugu.io/",
    },
    {
        name: "Roboto 360",
        description: "Enterprise car rental and management dashboard providing comprehensive tracking and efficient provider solutions.",
        tags: [
            { name: "react", color: "text-blue-400" },
            { name: "mongodb", color: "text-green-400" },
            { name: "tailwind", color: "text-pink-400" },
        ],
        image: "/assets/project_3.png",
        source_code_link: "https://www.roboto360.com/",
    },
    {
        name: "Yashini Homestays",
        description: "Modern travel booking platform for homestays, featuring efficient management and user-centric navigation.",
        tags: [
            { name: "react", color: "text-blue-400" },
            { name: "mongodb", color: "text-green-400" },
            { name: "tailwind", color: "text-pink-400" },
        ],
        image: "/assets/project_4.png",
        source_code_link: "https://yashinihomestays.in/",
    },
    {
        name: "Blue Horse",
        description: "Web platform for industrial solutions, focused on efficient transportation and provider management integration.",
        tags: [
            { name: "react", color: "text-blue-400" },
            { name: "mongodb", color: "text-green-400" },
            { name: "tailwind", color: "text-pink-400" },
        ],
        image: "/assets/project_5.png",
        source_code_link: "https://bluehorseindustry.com/",
    },
    {
        name: "AI Being",
        description: "Innovative AI-based platform for search and management, optimized for performance and production-ready architecture.",
        tags: [
            { name: "react", color: "text-blue-400" },
            { name: "mongodb", color: "text-green-400" },
            { name: "tailwind", color: "text-pink-400" },
        ],
        image: "/assets/project_6.png",
        source_code_link: "https://ai-being.com/home/",
    },
    {
        name: "Crypco Brugu",
        description: "Cryptocurrency management and search platform focused on the modern web ecosystem and data optimization.",
        tags: [
            { name: "react", color: "text-blue-400" },
            { name: "mongodb", color: "text-green-400" },
            { name: "tailwind", color: "text-pink-400" },
        ],
        image: "/assets/Project_7.png",
        source_code_link: "https://crypco.brugu.io",
    },
    {
        name: "Yaal Homestay",
        description: "Tailored hospitality platform for homestays, featuring professional booking workflows and responsive UI.",
        tags: [
            { name: "react", color: "text-blue-400" },
            { name: "mongodb", color: "text-green-400" },
            { name: "tailwind", color: "text-pink-400" },
        ],
        image: "/assets/Project_8.png",
        source_code_link: "https://yaalhomestay.in/",
    },
];

const ownprojects = [
    {
        name: "Normie Agency",
        description: "A sleek agency management platform architected for modern service-based business workflows.",
        tags: [
            { name: "react", color: "text-blue-400" },
            { name: "mongodb", color: "text-green-400" },
            { name: "tailwind", color: "text-pink-400" },
        ],
        image: "/assets/ownproject_1.png",
        source_code_link: "https://agency-orpin-three.vercel.app/",
    },
    {
        name: "Normie AI",
        description: "AI-integrated utility suite providing powerful automation and interactive user tools.",
        tags: [
            { name: "react", color: "text-blue-400" },
            { name: "ai", color: "text-green-400" },
            { name: "tailwind", color: "text-pink-400" },
        ],
        image: "/assets/ownproject_2.png",
        source_code_link: "https://normieai.vercel.app/",
    },
    {
        name: "Crygo App",
        description: "Cryptocurrency tracking and analysis application featuring high-end reactive charts and real-time data.",
        tags: [
            { name: "react", color: "text-blue-400" },
            { name: "crypto", color: "text-green-400" },
            { name: "tailwind", color: "text-pink-400" },
        ],
        image: "/assets/ownproject_3.png",
        source_code_link: "https://crygo-kk49.vercel.app/",
    },
];

const mobileApps = [
    {
        name: "Mobile App Store",
        description: "Our custom mobile distribution portal. Features seamless app discovery and direct QR-based installation workflows.",
        tags: [
            { name: "react-native", color: "text-blue-400" },
            { name: "mobile", color: "text-green-400" },
            { name: "ios/android", color: "text-pink-400" },
        ],
        image: "/assets/mobile_ui.png",
    },
];

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
}: any) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
            <Tilt
                options={{ max: 25, scale: 1, speed: 450 }}
                className='bg-tertiary p-6 rounded-3xl sm:w-[380px] w-full border border-white/5 hover:border-white/10 transition-all group'
            >
                <div className='relative w-full h-[220px]'>
                    <img
                        src={image}
                        alt={name}
                        className='w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500'
                    />
                    <div className='absolute inset-0 flex justify-end m-3'>
                        <div
                            onClick={() => source_code_link && window.open(source_code_link, "_blank")}
                            className='bg-primary/80 backdrop-blur-md w-12 h-12 rounded-full flex justify-center items-center cursor-pointer border border-white/10 hover:border-blue-500/50 transition-all'
                        >
                            <img src="/assets/linkicon.png" alt='link' className='w-1/2 h-1/2 object-contain' />
                        </div>
                    </div>
                </div>

                <div className='mt-6'>
                    <h3 className='text-txt-main text-2xl font-bold mb-2'>{name}</h3>
                    <p className='text-txt-sub text-sm leading-relaxed min-h-[60px]'>{description}</p>
                </div>

                <div className='mt-5 flex flex-wrap gap-3'>
                    {tags.map((tag: any) => (
                        <span key={tag.name} className={`text-xs font-medium px-2 py-1 bg-white/5 rounded-md ${tag.color}`}>
                            #{tag.name}
                        </span>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const MobileProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
}: any) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.2, 0.75)}>
            <Tilt
                options={{ max: 25, scale: 1, speed: 450 }}
                className='bg-tertiary p-6 rounded-3xl sm:w-[380px] w-full border border-white/5 hover:border-white/10 transition-all group relative'
            >
                <div className='relative w-full h-[220px]'>
                    <img
                        src={image}
                        alt={name}
                        className='w-full h-full object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-500'
                    />

                    <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 rounded-2xl backdrop-blur-sm'>
                        <div className='bg-white p-2 rounded-lg transform scale-90 group-hover:scale-100 transition-transform duration-300'>
                            <img src="/assets/qr_code.png" alt='qrcode' className='w-28 h-28 object-contain' />
                            <p className="text-black text-[10px] text-center mt-1 font-bold italic tracking-tighter">Scan to Install</p>
                        </div>
                    </div>
                </div>

                <div className='mt-6'>
                    <h3 className='text-txt-main text-2xl font-bold mb-2'>{name}</h3>
                    <p className='text-txt-sub text-sm leading-relaxed min-h-[60px]'>{description}</p>
                </div>

                <div className='mt-5 flex flex-wrap gap-3'>
                    {tags.map((tag: any) => (
                        <span key={tag.name} className={`text-xs font-medium px-2 py-1 bg-white/5 rounded-md ${tag.color}`}>
                            #{tag.name}
                        </span>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <div id="projects">
            <motion.div variants={textVariant(0)}>
                <p className="text-secondary text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-2">
                    Professional Case Studies
                </p>
                <h2 className="text-txt-main text-4xl md:text-6xl font-bold mb-10">
                    Selected Work.
                </h2>
            </motion.div>

            <div className='flex flex-wrap gap-8 justify-center'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>

            <motion.div variants={textVariant(0)} className="mt-24">
                <p className="text-secondary text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-2">
                    R&D and Side Projects
                </p>
                <h2 className="text-txt-main text-4xl md:text-6xl font-bold mb-10">
                    Personal Builds.
                </h2>
            </motion.div>

            <div className='flex flex-wrap gap-8 justify-center mb-24'>
                {ownprojects.map((project, index) => (
                    <ProjectCard key={`own-${index}`} index={index + 3} {...project} />
                ))}
            </div>

            <motion.div variants={textVariant(0)}>
                <p className="text-secondary text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-2">
                    Mobile Ecosystem
                </p>
                <h2 className="text-txt-main text-4xl md:text-6xl font-bold mb-10">
                    App Store.
                </h2>
            </motion.div>

            <div className='flex flex-wrap gap-8 justify-center'>
                {mobileApps.map((project, index) => (
                    <MobileProjectCard key={`mobile-${index}`} index={index + 6} {...project} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Projects, "projects");
