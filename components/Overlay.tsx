'use client';

import { MotionValue, motion, useTransform } from 'framer-motion';
import { EASE, maskReveal } from '@/lib/motion';

interface OverlayProps {
    scrollYProgress: MotionValue<number>;
    ready: boolean;
}

export default function Overlay({ scrollYProgress, ready }: OverlayProps) {
    // Beat 1: 0% - 20%
    const opacity1 = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -40]);

    // Beat 2: 25% - 50%
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.55], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.55], [40, -40]);

    // Beat 3: 55% - 85%
    const opacity3 = useTransform(scrollYProgress, [0.5, 0.6, 0.8, 0.9], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.5, 0.9], [40, -40]);

    const fadeOut = useTransform(scrollYProgress, [0.9, 1], [1, 0]);

    return (
        <motion.div
            style={{ opacity: fadeOut }}
            className="absolute inset-0 z-10 pointer-events-none text-txt-main"
        >
            {/* Beat 1 — name, right-aligned, masked line reveal on load */}
            <motion.div
                style={{ opacity: opacity1, y: y1 }}
                className="absolute inset-0 flex items-center justify-end px-6 sm:px-10 lg:px-20"
            >
                <motion.div
                    initial="hidden"
                    animate={ready ? "show" : "hidden"}
                    className="flex flex-col items-end text-right max-w-4xl"
                >
                    <div className="overflow-hidden">
                        <motion.p
                            variants={maskReveal(0)}
                            className="eyebrow mb-5"
                        >
                            Senior front-end engineer — BrainCert
                        </motion.p>
                    </div>

                    <h1 className="font-semibold text-[clamp(3rem,10vw,7.5rem)] leading-[0.92] tracking-[-0.04em]">
                        <span className="block overflow-hidden pb-[0.06em]">
                            <motion.span variants={maskReveal(0.08)} className="block">
                                Karthikeyan
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden pb-[0.06em]">
                            <motion.span variants={maskReveal(0.18)} className="block">
                                Prabhu
                            </motion.span>
                        </span>
                    </h1>

                    <motion.div
                        variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1, transition: { duration: 1.2, delay: 0.5, ease: EASE } } }}
                        className="my-7 h-px w-24 origin-right bg-accent"
                    />

                    <div className="overflow-hidden">
                        <motion.p
                            variants={maskReveal(0.4)}
                            className="display-italic text-accent text-[clamp(1.5rem,3vw,2.5rem)] leading-tight"
                        >
                            Design-driven interfaces, built to last.
                        </motion.p>
                    </div>
                </motion.div>
            </motion.div>

            {/* Beat 2 — left */}
            <motion.div
                style={{ opacity: opacity2, y: y2 }}
                className="absolute inset-0 flex items-center justify-start px-6 sm:px-10 lg:px-20"
            >
                <h2 className="max-w-2xl text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
                    Four years turning Figma
                    <br />
                    <span className="display-italic text-txt-sub">into production React.</span>
                </h2>
            </motion.div>

            {/* Beat 3 — right */}
            <motion.div
                style={{ opacity: opacity3, y: y3 }}
                className="absolute inset-0 flex items-center justify-end px-6 sm:px-10 lg:px-20"
            >
                <h2 className="max-w-2xl text-right text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[1.02] tracking-[-0.03em]">
                    Web and mobile apps that
                    <br />
                    <span className="display-italic text-txt-sub">stay fast at scale.</span>
                </h2>
            </motion.div>

            {/* Scroll cue */}
            <motion.div
                style={{ opacity: opacity1 }}
                initial={{ opacity: 0 }}
                animate={ready ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="absolute bottom-8 left-6 sm:left-10 lg:left-20 flex items-center gap-4"
            >
                <span className="relative block h-12 w-px overflow-hidden bg-white/10">
                    <span className="scroll-line absolute inset-0 bg-accent" />
                </span>
                <span className="eyebrow">Scroll</span>
            </motion.div>
        </motion.div>
    );
}
