import { Variants } from "framer-motion";

/**
 * One expressive ease used everywhere. Short travel distances + a long
 * settle read as "weighty" instead of "bouncy".
 */
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const textVariant = (delay: number = 0): Variants => ({
    hidden: { y: 28, opacity: 0, filter: "blur(6px)" },
    show: {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: { duration: 0.9, delay, ease: EASE },
    },
});

export const fadeIn = (
    direction: "left" | "right" | "up" | "down" | "" = "up",
    delay: number = 0,
    duration: number = 0.8,
): Variants => ({
    hidden: {
        x: direction === "left" ? 32 : direction === "right" ? -32 : 0,
        y: direction === "up" ? 32 : direction === "down" ? -32 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration, delay, ease: EASE },
    },
});

export const zoomIn = (delay: number = 0, duration: number = 0.8): Variants => ({
    hidden: { scale: 0.96, opacity: 0 },
    show: {
        scale: 1,
        opacity: 1,
        transition: { duration, delay, ease: EASE },
    },
});

export const slideIn = (
    direction: "left" | "right" | "up" | "down" | "" = "left",
    delay: number = 0,
    duration: number = 0.9,
): Variants => ({
    hidden: {
        x: direction === "left" ? -40 : direction === "right" ? 40 : 0,
        y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
        opacity: 0,
    },
    show: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: { duration, delay, ease: EASE },
    },
});

export const staggerContainer = (staggerChildren: number = 0.08, delayChildren: number = 0): Variants => ({
    hidden: {},
    show: {
        transition: { staggerChildren, delayChildren },
    },
});

/** Masked line reveal — wrap in an overflow-hidden parent. */
export const maskReveal = (delay: number = 0): Variants => ({
    hidden: { y: "110%" },
    show: {
        y: "0%",
        transition: { duration: 1.1, delay, ease: EASE },
    },
});
