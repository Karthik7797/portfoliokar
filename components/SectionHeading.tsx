'use client';

import { motion } from "framer-motion";
import { textVariant } from "@/lib/motion";
import { styles } from "@/lib/styles";

interface SectionHeadingProps {
    index: string;
    eyebrow: string;
    /** Pass JSX so one word can be set in the serif italic: <>Work <em>experience</em></> */
    title: React.ReactNode;
    lede?: string;
    className?: string;
}

export default function SectionHeading({ index, eyebrow, title, lede, className = "" }: SectionHeadingProps) {
    return (
        <motion.div variants={textVariant(0)} className={`mb-14 md:mb-20 ${className}`}>
            <div className="flex items-center gap-4 mb-6">
                <span className="font-mono text-xs text-accent tabular-nums">{index}</span>
                <span aria-hidden className="h-px w-8 bg-line-strong" />
                <span className="eyebrow">{eyebrow}</span>
            </div>
            <h2 className={`${styles.sectionHeadText} [&_em]:display-italic [&_em]:text-accent [&_em]:font-normal`}>
                {title}
            </h2>
            {lede && (
                <p className="mt-6 max-w-[58ch] text-txt-sub text-base md:text-lg leading-relaxed">
                    {lede}
                </p>
            )}
        </motion.div>
    );
}
