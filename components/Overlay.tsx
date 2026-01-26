'use client';

import { MotionValue, motion, useTransform } from 'framer-motion';

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
}

export default function Overlay({ scrollYProgress }: OverlayProps) {
    // Section 1: 0% - 20%
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // Section 2: 25% - 50%
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.55], [50, -50]);

    // Section 3: 55% - 85%
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.9], [50, -50]);

    // Helper to standard animations
    const fadeOut = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

    return (
        <motion.div
            style={{ opacity: fadeOut }}
            className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center text-white p-10 md:p-20"
        >

            {/* Section 1 - Right Side */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex items-center justify-end p-10 md:pr-24 text-right"
            >
                <div className="flex flex-col items-end max-w-3xl">
                    <h1 className="text-5xl md:text-[5.5rem] font-bold tracking-tighter mb-6 leading-[0.9] text-txt-main">
                        Karthikeyan<br /> Prabhu
                    </h1>
                    <div className="h-[2px] w-24 bg-blue-500 mb-8 rounded-full" />
                    <p className="text-xl md:text-3xl text-txt-sub font-light tracking-[0.05em] uppercase">
                        Senior Front-end Engineer
                    </p>
                </div>
            </motion.div>

            {/* Section 2 - Left */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex items-center justify-start p-10 md:pl-20"
            >
                <h2 className="text-4xl md:text-6xl font-semibold max-w-2xl leading-tight">
                    Expert in UI Engineering<br />
                    <span className="text-gray-400">&amp; Design-Driven Development.</span>
                </h2>
            </motion.div>

            {/* Section 3 - Right */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex items-center justify-end p-10 md:pr-20"
            >
                <h2 className="text-4xl md:text-6xl font-semibold max-w-2xl text-right leading-tight">
                    Building Scalable,<br />
                    <span className="text-gray-400">High-Performance Web Apps.</span>
                </h2>
            </motion.div>

        </motion.div>
    );
}
