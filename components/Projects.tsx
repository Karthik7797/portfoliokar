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
    image,
    source_code_link,
}: any) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="w-full"
        >
            <Tilt
                options={{ max: 15, scale: 1.02, speed: 450 }}
                className='bg-tertiary/40 backdrop-blur-sm p-5 rounded-3xl w-full border border-white/5 hover:border-white/20 transition-all group h-full flex flex-col'
            >
                <div className='relative w-full h-[230px] overflow-hidden rounded-2xl'>
                    <img
                        src={image}
                        alt={name}
                        className='w-full h-full object-cover grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-110'
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-tertiary/80 via-transparent to-transparent opacity-60" />

                    <div className='absolute top-3 right-3 flex justify-end'>
                        <div
                            onClick={() => source_code_link && window.open(source_code_link, "_blank")}
                            className='bg-black/50 backdrop-blur-xl w-10 h-10 rounded-full flex justify-center items-center cursor-pointer border border-white/20 hover:border-blue-500/50 hover:bg-blue-500/20 transition-all duration-300 group/link'
                        >
                            <img
                                src="/assets/linkicon.png"
                                alt='link'
                                className='w-5 h-5 object-contain group-hover/link:scale-110 transition-transform'
                            />
                        </div>
                    </div>
                </div>

                <div className='mt-5 flex-1 flex flex-col'>
                    <h3 className='text-txt-main text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors'>{name}</h3>
                    <p className='text-txt-sub text-[15px] leading-relaxed mb-4 line-clamp-3'>{description}</p>
                </div>
            </Tilt>
        </motion.div>
    );
};

const MobileProjectCard = ({
    index,
    name,
    description,
    image,
}: any) => {
    return (
        <motion.div
            variants={fadeIn("up", "spring", index * 0.2, 0.75)}
            className="w-full"
        >
            <Tilt
                options={{ max: 15, scale: 1.02, speed: 450 }}
                className='bg-tertiary/40 backdrop-blur-sm p-5 rounded-3xl w-full border border-white/5 hover:border-white/20 transition-all group h-full flex flex-col'
            >
                <div className='relative w-full h-[230px] overflow-hidden rounded-2xl'>
                    <img
                        src={image}
                        alt={name}
                        className='w-full h-full object-cover grayscale-0 md:grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out transform group-hover:scale-110'
                    />

                    <div className='absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/80 backdrop-blur-md'>
                        <div className='bg-white p-3 rounded-2xl transform scale-90 group-hover:scale-100 transition-all duration-300 shadow-2xl shadow-white/10'>
                            <img src="/assets/qr_code.png" alt='qrcode' className='w-24 h-24 object-contain' />
                            <p className="text-black text-[10px] text-center mt-2 font-bold uppercase tracking-tight">Scan to Install</p>
                        </div>
                    </div>
                </div>

                <div className='mt-5 flex-1 flex flex-col'>
                    <h3 className='text-txt-main text-2xl font-bold mb-3 group-hover:text-blue-400 transition-colors'>{name}</h3>
                    <p className='text-txt-sub text-[15px] leading-relaxed mb-4 line-clamp-3'>{description}</p>
                </div>
            </Tilt>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <div className="py-12 md:py-20 lg:py-24">
            <motion.div variants={textVariant(0)}>
                <p className="text-secondary text-sm md:text-base font-semibold uppercase tracking-[0.3em] mb-2">
                    Professional Case Studies
                </p>
                <h2 className="text-txt-main text-5xl md:text-7xl font-extrabold mb-12">
                    Selected Work<span className="text-blue-500">.</span>
                </h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch'>
                {projects.map((project, index) => (
                    <ProjectCard key={`project-${index}`} index={index} {...project} />
                ))}
            </div>

            <motion.div variants={textVariant(0)} className="mt-32">
                <p className="text-secondary text-sm md:text-base font-semibold uppercase tracking-[0.3em] mb-2">
                    Labs & Side Projects
                </p>
                <h2 className="text-txt-main text-5xl md:text-7xl font-extrabold mb-12">
                    Open Source<span className="text-purple-500">.</span>
                </h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch mb-32'>
                {ownprojects.map((project, index) => (
                    <ProjectCard key={`own-${index}`} index={index} {...project} />
                ))}
            </div>

            <motion.div variants={textVariant(0)}>
                <p className="text-secondary text-sm md:text-base font-semibold uppercase tracking-[0.3em] mb-2">
                    Mobile Innovation
                </p>
                <h2 className="text-txt-main text-5xl md:text-7xl font-extrabold mb-12">
                    App Store<span className="text-pink-500">.</span>
                </h2>
            </motion.div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch'>
                {mobileApps.map((project, index) => (
                    <MobileProjectCard key={`mobile-${index}`} index={index} {...project} />
                ))}
            </div>
        </div>
    );
};

export default SectionWrapper(Projects, "projects");
