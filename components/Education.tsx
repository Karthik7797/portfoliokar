'use client';

import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/lib/styles";
import SectionWrapper from "./SectionWrapper";
import { fadeIn, textVariant } from "@/lib/motion";

const education = [
    {
        school: "De Montfort University, Singapore",
        degree: "Bachelor of Engineering (B.E) – Mechatronics Engineering",
        year: "2015 – 2019"
    },
    {
        school: "Auston Institute of Technology, Singapore",
        degree: "Diploma – Electronics Engineering",
        year: "2016 – 2017"
    },
    {
        school: "Cornerstone International College, Chennai, India",
        degree: "Diploma – Automobile Engineering",
        year: "2015 – 2016"
    }
];

const Education = () => {
    return (
        <div className="flex flex-col gap-10">
            <motion.div variants={textVariant(0)}>
                <p className={`${styles.sectionSubText}`}>What I have studied</p>
                <h2 className={`${styles.sectionHeadText}`}>Education.</h2>
            </motion.div>

            <div className="mt-10 flex flex-col gap-5">
                {education.map((edu, index) => (
                    <motion.div
                        key={index}
                        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
                    >
                        <div className="bg-tertiary rounded-[20px] py-6 px-12 min-h-[150px] flex justify-between items-center sm:flex-row flex-col">
                            <div className="flex flex-col">
                                <h3 className="text-white text-[20px] font-bold">{edu.school}</h3>
                                <p className="text-secondary text-[16px] mt-2 font-semibold">{edu.degree}</p>
                            </div>
                            <p className="text-secondary text-[14px] font-semibold mt-4 sm:mt-0 border border-secondary px-3 py-1 rounded-full">{edu.year}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default SectionWrapper(Education, "education");
