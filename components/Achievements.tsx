'use client';

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { fadeIn } from "@/lib/motion";

const achievements = [
    {
        title: "IBM Full Stack Development",
        kind: "Certification",
        description: "MERN stack covering React.js, Node.js, Express.js, MongoDB and Tailwind CSS.",
    },
    {
        title: "freeCodeCamp Responsive Web Design",
        kind: "Certification",
        description: "HTML, CSS, Bootstrap and responsive layout principles.",
    },
    {
        title: "HackerRank JavaScript",
        kind: "Certification",
        description: "Core JavaScript concepts, problem solving and language fundamentals.",
    },
    {
        title: "Best Performer Award",
        kind: "Elroi Software Solutions",
        description: "Recognised for outstanding contribution to the CRM module.",
    },
];

const Achievements = () => {
    return (
        <>
            <SectionHeading
                index="07"
                eyebrow="Certifications & awards"
                title={<>Paper <em>trail</em></>}
            />

            <ul className="grid gap-x-16 md:grid-cols-2">
                {achievements.map((item, index) => (
                    <motion.li
                        key={item.title}
                        variants={fadeIn("up", index * 0.06, 0.8)}
                        className="group grid grid-cols-[3rem_1fr] gap-x-4 border-t border-line py-7 md:py-8"
                    >
                        <span className="font-mono text-xs tabular-nums text-accent pt-1">
                            {(index + 1).toString().padStart(2, "0")}
                        </span>
                        <div>
                            <p className="eyebrow mb-2">{item.kind}</p>
                            <h3 className="text-lg font-semibold tracking-[-0.01em] text-txt-main md:text-xl">{item.title}</h3>
                            <p className="mt-2 max-w-[44ch] text-[15px] leading-relaxed text-txt-sub">{item.description}</p>
                        </div>
                    </motion.li>
                ))}
            </ul>
        </>
    );
};

export default SectionWrapper(Achievements, "achievements");
