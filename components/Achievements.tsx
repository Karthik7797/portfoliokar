'use client';

import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/lib/styles";
import SectionWrapper from "./SectionWrapper";
import { fadeIn, textVariant } from "@/lib/motion";

const achievements = [
    {
        title: "IBM Full Stack Development Certification",
        description: "MERN stack covering React.js, Node.js, Express.js, MongoDB, and Tailwind CSS."
    },
    {
        title: "freeCodeCamp Responsive Web Design Certification",
        description: "HTML, CSS, Bootstrap, and responsive layout principles."
    },
    {
        title: "HackerRank JavaScript Certification",
        description: "Core JavaScript concepts, problem solving, and language fundamentals."
    },
    {
        title: "Best Performer Award (Elroi)",
        description: "Recognized for outstanding contribution to the CRM module development."
    }
];

const Achievements = () => {
    return (
        <div className="flex flex-col gap-10">
            <motion.div variants={textVariant(0)}>
                <p className={`${styles.sectionSubText}`}>My Accomplishments</p>
                <h2 className={`${styles.sectionHeadText}`}>Achievements.</h2>
            </motion.div>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-7">
                {achievements.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                        className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full border border-white/5"
                    >
                        <div className="mt-1">
                            <h4 className="text-white font-bold text-[20px]">{item.title}</h4>
                            <p className="mt-3 text-secondary text-[14px] leading-[24px]">
                                {item.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default SectionWrapper(Achievements, "achievements");
