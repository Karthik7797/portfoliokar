'use client';

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { PiArrowUpRight, PiDeviceMobile } from "react-icons/pi";

import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { fadeIn } from "@/lib/motion";

interface Project {
    name: string;
    description: string;
    tags: string[];
    image: string;
    link?: string;
}

const projects: Project[] = [
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

const ownProjects: Project[] = [
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

const mobileApp: Project = {
    name: "Mobile App Store",
    description: "A custom mobile distribution portal. App discovery and direct QR-based installation for iOS and Android.",
    tags: ["React Native", "iOS", "Android"],
    image: "/assets/mobile_ui.png",
};

/** Track the cursor for the spotlight utility. */
const useSpotlight = () =>
    React.useCallback((e: React.MouseEvent<HTMLElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
        e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
    }, []);

const Tags = ({ tags }: { tags: string[] }) => (
    <ul className="flex flex-wrap gap-x-4 gap-y-1">
        {tags.map((t) => (
            <li key={t} className="font-mono text-[11px] uppercase tracking-[0.14em] text-txt-muted">
                {t}
            </li>
        ))}
    </ul>
);

const cardClass =
    "spotlight group flex h-full flex-col rounded-2xl bg-surface p-3 transition-colors duration-500 hover:bg-surface-2";

const ProjectCard = ({ project, index, wide }: { project: Project; index: number; wide: boolean }) => {
    const onMove = useSpotlight();

    const body = (
        <>
            <div className={`relative w-full overflow-hidden rounded-xl bg-background ${wide ? "aspect-[16/10]" : "aspect-[4/3] md:aspect-[4/5]"}`}>
                <Image
                    src={project.image}
                    alt={`${project.name} — screenshot`}
                    fill
                    sizes={wide ? "(min-width: 768px) 60vw, 100vw" : "(min-width: 768px) 30vw, 100vw"}
                    className="object-cover object-top transition-[transform,filter] duration-[900ms] ease-[var(--ease-out-expo)] md:grayscale md:group-hover:grayscale-0 group-hover:scale-[1.04]"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-surface/70 via-transparent to-transparent" />
            </div>

            <div className="flex flex-1 flex-col px-3 pb-3 pt-5">
                <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-semibold tracking-[-0.02em] text-txt-main md:text-2xl">
                        {project.name}
                    </h3>
                    {project.link && (
                        <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-full border border-line text-txt-sub transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:border-accent group-hover:bg-accent group-hover:text-accent-ink">
                            <PiArrowUpRight className="h-4 w-4 transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </span>
                    )}
                </div>
                <p className="mt-2 max-w-[48ch] text-[15px] leading-relaxed text-txt-sub">{project.description}</p>
                <div className="mt-auto pt-5">
                    <Tags tags={project.tags} />
                </div>
            </div>
        </>
    );

    return (
        <motion.li
            variants={fadeIn("up", (index % 2) * 0.06, 0.9)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className={wide ? "md:col-span-4" : "md:col-span-2"}
        >
            {project.link ? (
                <a href={project.link} target="_blank" rel="noopener noreferrer" onMouseMove={onMove} className={cardClass}>
                    {body}
                </a>
            ) : (
                <div onMouseMove={onMove} className={cardClass}>
                    {body}
                </div>
            )}
        </motion.li>
    );
};

const MobileCard = ({ project }: { project: Project }) => {
    const onMove = useSpotlight();
    return (
        <motion.li
            variants={fadeIn("up", 0, 0.9)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="md:col-span-6"
        >
            <div
                onMouseMove={onMove}
                className="spotlight group grid gap-6 rounded-2xl bg-surface p-3 transition-colors duration-500 hover:bg-surface-2 md:grid-cols-[1.2fr_1fr]"
            >
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xl bg-background md:aspect-auto md:min-h-[320px]">
                    <Image
                        src={project.image}
                        alt={`${project.name} — screenshot`}
                        fill
                        sizes="(min-width: 768px) 55vw, 100vw"
                        className="object-cover object-top transition-transform duration-[900ms] ease-[var(--ease-out-expo)] group-hover:scale-[1.03]"
                    />
                </div>

                <div className="flex flex-col justify-between gap-8 px-3 pb-3 pt-2 md:py-6 md:pr-6">
                    <div>
                        <div className="mb-4 flex items-center gap-2 text-accent">
                            <PiDeviceMobile className="h-4 w-4" />
                            <span className="eyebrow text-accent">iOS / Android</span>
                        </div>
                        <h3 className="text-2xl font-semibold tracking-[-0.02em] text-txt-main md:text-3xl">{project.name}</h3>
                        <p className="mt-3 max-w-[44ch] text-[15px] leading-relaxed text-txt-sub">{project.description}</p>
                    </div>

                    <div className="flex items-center gap-5">
                        <div className="rounded-xl bg-white p-2.5">
                            <Image
                                src="/assets/qr_code.png"
                                alt="QR code to install the app"
                                width={88}
                                height={88}
                                className="h-[88px] w-[88px] object-contain"
                            />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-txt-main">Scan to install</p>
                            <p className="mt-1 text-sm text-txt-muted">Opens the store page on your phone.</p>
                            <div className="mt-3">
                                <Tags tags={project.tags} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.li>
    );
};

/** Zig-zag: rows of [4,2], [2,4], [4,2] … on a 6-column grid. */
const isWide = (i: number) => i % 4 === 0 || i % 4 === 3;

const Projects = () => {
    return (
        <>
            <SectionHeading
                index="03"
                eyebrow="Client work"
                title={<>Selected <em>work</em></>}
            />

            <ul className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
                {projects.map((project, index) => (
                    <ProjectCard key={project.name} project={project} index={index} wide={isWide(index)} />
                ))}
            </ul>

            <SectionHeading
                index="04"
                eyebrow="Labs & side projects"
                title={<>Things I built for <em>myself</em></>}
                className="mt-28 md:mt-40"
            />

            <ul className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
                {ownProjects.map((project, index) => (
                    <ProjectCard key={project.name} project={project} index={index} wide={false} />
                ))}
            </ul>

            <SectionHeading
                index="05"
                eyebrow="Mobile"
                title={<>On the <em>phone</em>, too</>}
                className="mt-28 md:mt-40"
            />

            <ul className="grid grid-cols-1 gap-4 md:grid-cols-6 md:gap-5">
                <MobileCard project={mobileApp} />
            </ul>
        </>
    );
};

export default SectionWrapper(Projects, "projects");
