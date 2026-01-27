'use client';

import { motion } from "framer-motion";
import { styles } from "@/lib/styles";
import { staggerContainer } from "@/lib/motion";
import { JSX } from "react";

const SectionWrapper = (Component: React.FC<any>, idName: string) =>
    function HOC() {
        return (
            <motion.section
                variants={staggerContainer()}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, amount: 0.1 }}
                className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className='hash-span' id={idName}>
                    &nbsp;
                </span>

                <Component />
            </motion.section>
        );
    };

export default SectionWrapper;
