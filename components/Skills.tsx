'use client';

import React from "react";
import { motion } from "framer-motion";
import {
    FaReact,
    FaNodeJs,
    FaGitAlt,
    FaDocker
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTypescript,
    SiJavascript,
    SiTailwindcss,
    SiRedux,
    SiMongodb,
    SiFigma,
    SiAngular,
    SiThreedotjs
} from "react-icons/si";

import { styles } from "@/lib/styles";
import SectionWrapper from "./SectionWrapper";
import { textVariant, fadeIn } from "@/lib/motion";

const skills = [
    { name: "React.js", icon: FaReact, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
    { name: "Redux", icon: SiRedux, color: "text-[#764ABC]" },
    { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
    { name: "Figma", icon: SiFigma, color: "text-[#F24E1E]" },
    { name: "Git", icon: FaGitAlt, color: "text-[#F05032]" },
    { name: "React Native", icon: FaReact, color: "text-[#61DAFB]" },
    { name: "Angular", icon: SiAngular, color: "text-[#DD0031]" },
    { name: "Three.js", icon: SiThreedotjs, color: "text-white" },
    { name: "Docker", icon: FaDocker, color: "text-[#2496ED]" },
];

const Skills = () => {
    return (
        <section className="relative w-full">
            <motion.div
                variants={textVariant(0)}
                className="w-full bg-[#100d25] rounded-[48px] p-10 md:p-20 border border-white/5 flex flex-col xl:flex-row gap-16 items-center overflow-hidden"
            >
                {/* Left Side: Text Content */}
                <div className="flex-1 flex flex-col items-start z-10 w-full">
                    <p className="text-[#aaa6c3] text-sm font-bold uppercase tracking-widest mb-4">
                        My Tech Stack
                    </p>
                    <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
                        Modern Expertise<br />
                        Powerful Results
                    </h2>
                    <p className="text-[#aaa6c3] text-lg leading-relaxed max-w-lg mb-12">
                        I specialize in building high-performance web and mobile applications using a carefully selected stack of modern technologies.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button
                            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                            className="bg-white text-[#050816] px-10 py-4 rounded-full font-bold text-lg hover:bg-[#aaa6c3] transition-all transform active:scale-95 shadow-xl"
                        >
                            Browse Projects
                        </button>
                    </div>
                </div>

                {/* Right Side: Grid of Icons */}
                <div className="flex-1 w-full max-w-xl">
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 md:gap-6">
                        {skills.map((skill, index) => (
                            <motion.div
                                key={skill.name}
                                variants={fadeIn("up", "spring", index * 0.05, 0.5)}
                                initial="hidden"
                                whileInView="show"
                                viewport={{ once: true }}
                                className="aspect-square bg-[#1d1836] rounded-[24px] flex flex-col items-center justify-center p-6 hover:bg-[#232631] transition-all border border-white/5 group shadow-2xl relative overflow-hidden"
                            >
                                {/* Decorative gradient on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <skill.icon className={`w-12 h-12 text-white/50 group-hover:${skill.color} transition-all duration-300 filter group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] z-10`} />

                                <span className="absolute bottom-2 text-[10px] font-medium text-[#aaa6c3] opacity-0 group-hover:opacity-100 transition-all transform translate-y-1 group-hover:translate-y-0 z-10">
                                    {skill.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </motion.div>
        </section>
    );
};

export default SectionWrapper(Skills, "skills");
