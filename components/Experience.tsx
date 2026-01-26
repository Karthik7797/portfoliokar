'use client';

import React from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "@/lib/styles";
import SectionWrapper from "./SectionWrapper";
import { textVariant } from "@/lib/motion";

const experiences = [
    {
        title: "Senior Front-end Developer",
        company_name: "BrainCert",
        icon: "BC",
        iconBg: "#1d1836",
        date: "Nov 2024 – Present",
        points: [
            "Architected and developed high-performance web and mobile interfaces using React stack.",
            "Engineered scalable component libraries and integrated complex RESTful architectures.",
            "Optimized rendering pipelines and state management strategies for enterprise-grade applications."
        ],
    },
    {
        title: "UI Developer",
        company_name: "Elroi Software Solutions",
        icon: "EL",
        iconBg: "#1d1836",
        date: "Nov 2022 – Oct 2024",
        points: [
            "Engineered interactive dashboards and enterprise CRM modules with React.js.",
            "Established and maintained rigorous design systems across multiple product lines.",
            "Managed frontend-to-backend data flows utilizing Redux and Zustand architectures."
        ],
    },
    {
        title: "UI Developer",
        company_name: "KitKat Software Solutions",
        icon: "KK",
        iconBg: "#1d1836",
        date: "Aug 2021 – Sep 2022",
        points: [
            "Transformed high-fidelity Figma prototypes into pixel-perfect technical implementations.",
            "Ensured cross-browser performance and localized UI consistency for global web applications."
        ],
    },
];

const ExperienceCard = ({ experience }: { experience: any }) => {
    return (
        <VerticalTimelineElement
            contentStyle={{
                background: "#1d1836",
                color: "#fff",
                boxShadow: "0 10px 30px -15px rgba(2, 6, 23, 0.5)",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.05)"
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            visible={true}
            icon={
                <div className='flex justify-center items-center w-full h-full text-blue-400 font-bold text-base tracking-widest'>
                    {experience.icon}
                </div>
            }
        >
            <div>
                <h3 className='text-txt-main text-xl md:text-2xl font-bold mb-1'>{experience.title}</h3>
                <p className='text-blue-400 text-sm md:text-base font-semibold tracking-wide uppercase'>
                    {experience.company_name}
                </p>
            </div>

            <ul className='mt-6 list-disc ml-5 space-y-3'>
                {experience.points.map((point: string, index: number) => (
                    <li
                        key={`experience-point-${index}`}
                        className='text-txt-sub text-sm md:text-base leading-relaxed pl-1'
                    >
                        {point}
                    </li>
                ))}
            </ul>
        </VerticalTimelineElement>
    );
};

const Experience = () => {
    return (
        <>
            <motion.div variants={textVariant(0)}>
                <p className="text-secondary text-sm md:text-base font-semibold uppercase tracking-[0.2em] text-center mb-2">
                    Professional Path
                </p>
                <h2 className="text-txt-main text-4xl md:text-6xl font-bold text-center mb-16">
                    Work Experience.
                </h2>
            </motion.div>

            <div className='mt-10 flex flex-col'>
                <VerticalTimeline lineColor="rgba(255,255,255,0.05)">
                    {experiences.map((experience, index) => (
                        <ExperienceCard
                            key={`experience-${index}`}
                            experience={experience}
                        />
                    ))}
                </VerticalTimeline>
            </div>
        </>
    );
};

export default SectionWrapper(Experience, "experience");
