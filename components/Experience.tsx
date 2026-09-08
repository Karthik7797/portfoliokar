'use client';

import React from "react";
import { motion } from "framer-motion";

import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { fadeIn } from "@/lib/motion";

const experiences = [
    {
        title: "Senior Front-end Developer",
        company_name: "BrainCert",
        date: "Nov 2024 — Present",
        points: [
            "Architected and developed high-performance web and mobile interfaces using the React stack.",
            "Engineered scalable component libraries and integrated complex RESTful architectures.",
            "Optimized rendering pipelines and state management strategies for enterprise-grade applications.",
        ],
    },
    {
        title: "UI Developer",
        company_name: "Elroi Software Solutions",
        date: "Nov 2022 — Oct 2024",
        points: [
            "Engineered interactive dashboards and enterprise CRM modules with React.js.",
            "Established and maintained rigorous design systems across multiple product lines.",
            "Managed frontend-to-backend data flows utilizing Redux and Zustand architectures.",
        ],
    },
    {
        title: "UI Developer",
        company_name: "KitKat Software Solutions",
        date: "Aug 2021 — Sep 2022",
        points: [
            "Transformed high-fidelity Figma prototypes into pixel-perfect technical implementations.",
            "Ensured cross-browser performance and localized UI consistency for global web applications.",
        ],
    },
];

type Experience = (typeof experiences)[number];

const ExperienceRow = ({ experience, index, isLast }: { experience: Experience; index: number; isLast: boolean }) => (
    <motion.li
        variants={fadeIn("up", index * 0.08, 0.9)}
        className="group relative grid gap-6 py-10 md:grid-cols-[220px_1fr] md:gap-12 md:py-14"
    >
        {/* Timeline rail */}
        <span
            aria-hidden
            className={`absolute left-0 top-0 hidden w-px bg-line md:block ${isLast ? "h-[calc(100%-1rem)]" : "h-full"}`}
        />
        <span
            aria-hidden
            className="absolute -left-[3px] top-[4.1rem] hidden h-[7px] w-[7px] rounded-full bg-accent ring-4 ring-background transition-transform duration-500 group-hover:scale-150 md:block"
        />

        {/* Left column: when + where */}
        <div className="md:pl-10">
            <p className="font-mono text-xs tabular-nums text-txt-muted">{experience.date}</p>
            <p className="mt-2 text-base font-medium text-txt-main">{experience.company_name}</p>
        </div>

        {/* Right column: what */}
        <div>
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-txt-main md:text-3xl">
                {experience.title}
            </h3>
            <ul className="mt-6 flex max-w-[62ch] flex-col gap-3">
                {experience.points.map((point, i) => (
                    <li key={i} className="flex gap-4 text-[15px] leading-relaxed text-txt-sub md:text-base">
                        <span aria-hidden className="mt-[0.8em] h-px w-4 shrink-0 bg-accent/60" />
                        <span>{point}</span>
                    </li>
                ))}
            </ul>
        </div>
    </motion.li>
);

const Experience = () => {
    return (
        <>
            <SectionHeading
                index="01"
                eyebrow="Professional path"
                title={<>Work <em>experience</em></>}
            />

            <ol className="hairline">
                {experiences.map((experience, index) => (
                    <React.Fragment key={experience.company_name}>
                        <ExperienceRow experience={experience} index={index} isLast={index === experiences.length - 1} />
                        {index < experiences.length - 1 && <li aria-hidden className="hairline" />}
                    </React.Fragment>
                ))}
            </ol>
        </>
    );
};

export default SectionWrapper(Experience, "experience");
