'use client';

import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker } from "react-icons/fa";
import {
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiRedux,
    SiMongodb,
    SiFigma,
    SiAngular,
    SiThreedotjs,
} from "react-icons/si";
import { PiArrowDownRight } from "react-icons/pi";

import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { fadeIn } from "@/lib/motion";

const skills = [
    { name: "React", icon: FaReact, brand: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, brand: "#ffffff" },
    { name: "TypeScript", icon: SiTypescript, brand: "#3178C6" },
    { name: "JavaScript", icon: SiJavascript, brand: "#F7DF1E" },
    { name: "Tailwind", icon: SiTailwindcss, brand: "#06B6D4" },
    { name: "Redux", icon: SiRedux, brand: "#764ABC" },
    { name: "Node.js", icon: FaNodeJs, brand: "#339933" },
    { name: "MongoDB", icon: SiMongodb, brand: "#47A248" },
    { name: "Figma", icon: SiFigma, brand: "#F24E1E" },
    { name: "Git", icon: FaGitAlt, brand: "#F05032" },
    { name: "React Native", icon: FaReact, brand: "#61DAFB" },
    { name: "Angular", icon: SiAngular, brand: "#DD0031" },
    { name: "Three.js", icon: SiThreedotjs, brand: "#ffffff" },
    { name: "Docker", icon: FaDocker, brand: "#2496ED" },
];

const Skills = () => {
    return (
        <>
            <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
                <SectionHeading
                    index="02"
                    eyebrow="Tech stack"
                    title={<>Tools I <em>build</em> with</>}
                    lede="Four years of React, Next.js and TypeScript in production — plus the mobile, backend and design tools that keep a product moving."
                    className="mb-0"
                />
                <motion.a
                    variants={fadeIn("up", 0.1, 0.8)}
                    href="#projects"
                    className="group inline-flex items-center gap-3 self-start text-sm font-medium text-txt-main lg:mb-2"
                >
                    <span className="border-b border-line-strong pb-0.5 transition-colors group-hover:border-accent">
                        See the work
                    </span>
                    <PiArrowDownRight className="h-4 w-4 text-accent transition-transform duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
                </motion.a>
            </div>

            {/* Gapless hairline grid — 7×2 on desktop, so nothing orphans */}
            <ul className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4 lg:grid-cols-7 md:mt-20">
                {skills.map((skill, index) => (
                    <motion.li
                        key={skill.name}
                        variants={fadeIn("up", index * 0.03, 0.7)}
                        style={{ "--brand": skill.brand } as React.CSSProperties}
                        className="skill-tile spotlight group flex aspect-square flex-col items-center justify-center gap-4 bg-background transition-colors duration-500 hover:bg-surface"
                        tabIndex={0}
                    >
                        <skill.icon className="skill-icon h-9 w-9 text-txt-muted transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:-translate-y-0.5" />
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-txt-muted transition-colors duration-500 group-hover:text-txt-sub">
                            {skill.name}
                        </span>
                    </motion.li>
                ))}
            </ul>
        </>
    );
};

export default SectionWrapper(Skills, "skills");
