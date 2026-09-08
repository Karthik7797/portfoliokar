'use client';

import { motion } from "framer-motion";
import { styles } from "@/lib/styles";
import { staggerContainer } from "@/lib/motion";

const SectionWrapper = (Component: React.FC, idName: string) =>
    function HOC() {
        return (
            <motion.section
                id={idName}
                variants={staggerContainer(0.08)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                className={`${styles.padding} max-w-[1280px] mx-auto relative z-0`}
            >
                <Component />
            </motion.section>
        );
    };

export default SectionWrapper;
