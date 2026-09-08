'use client';

import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import SectionHeading from "./SectionHeading";
import { fadeIn } from "@/lib/motion";

const education = [
    {
        school: "De Montfort University, Singapore",
        degree: "Bachelor of Engineering — Mechatronics Engineering",
        year: "2015 — 2019",
    },
    {
        school: "Auston Institute of Technology, Singapore",
        degree: "Diploma — Electronics Engineering",
        year: "2016 — 2017",
    },
    {
        school: "Cornerstone International College, Chennai, India",
        degree: "Diploma — Automobile Engineering",
        year: "2015 — 2016",
    },
];

const Education = () => {
    return (
        <>
            <SectionHeading
                index="06"
                eyebrow="Education"
                title={<>Where I <em>studied</em></>}
            />

            <ol className="hairline">
                {education.map((edu, index) => (
                    <motion.li
                        key={edu.school}
                        variants={fadeIn("up", index * 0.08, 0.8)}
                        className="group grid grid-cols-[3rem_1fr] items-baseline gap-x-4 gap-y-2 border-b border-line py-7 transition-colors duration-500 hover:bg-white/[0.02] md:grid-cols-[4rem_1fr_auto] md:gap-x-8 md:py-8"
                    >
                        <span className="font-mono text-xs tabular-nums text-accent">
                            {(index + 1).toString().padStart(2, "0")}
                        </span>
                        <div>
                            <h3 className="text-lg font-semibold tracking-[-0.01em] text-txt-main md:text-xl">{edu.school}</h3>
                            <p className="mt-1.5 text-[15px] text-txt-sub">{edu.degree}</p>
                        </div>
                        <p className="col-start-2 font-mono text-xs tabular-nums text-txt-muted md:col-start-3 md:text-right">
                            {edu.year}
                        </p>
                    </motion.li>
                ))}
            </ol>
        </>
    );
};

export default SectionWrapper(Education, "education");
