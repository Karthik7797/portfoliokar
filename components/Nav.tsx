'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { EASE } from "@/lib/motion";

const links = [
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Stack" },
    { id: "projects", label: "Work" },
    { id: "contact", label: "Contact" },
];

export default function Nav() {
    const { scrollY } = useScroll();
    const [visible, setVisible] = useState(false);
    const [active, setActive] = useState<string | null>(null);

    // Reveal once the reader has left the hero
    useMotionValueEvent(scrollY, "change", (y) => {
        setVisible(y > window.innerHeight * 0.6);
    });

    // Track which section is in the middle of the viewport
    useEffect(() => {
        const sections = links
            .map((l) => document.getElementById(l.id))
            .filter((el): el is HTMLElement => el !== null);

        const observer = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (entry.isIntersecting) setActive(entry.target.id);
                }
            },
            { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
        );

        sections.forEach((s) => observer.observe(s));
        return () => observer.disconnect();
    }, []);

    return (
        <motion.header
            initial={false}
            animate={{ y: visible ? 0 : -24, opacity: visible ? 1 : 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            style={{ pointerEvents: visible ? "auto" : "none", zIndex: "var(--z-nav)" as unknown as number }}
            className="fixed inset-x-0 top-0"
        >
            <div className="mx-auto max-w-[1280px] px-6 sm:px-10 lg:px-16">
                <nav
                    aria-label="Primary"
                    className="mt-4 flex items-center justify-between rounded-full border border-line bg-background/70 px-5 py-2.5 backdrop-blur-xl"
                >
                    <a href="#top" className="flex items-center gap-3 group">
                        <span className="grid h-7 w-7 place-items-center rounded-md bg-accent font-mono text-[11px] font-semibold text-accent-ink">
                            KP
                        </span>
                        <span className="hidden sm:inline text-sm font-medium text-txt-main group-hover:text-accent-2 transition-colors">
                            Karthikeyan Prabhu
                        </span>
                    </a>

                    <ul className="flex items-center gap-1">
                        {links.map((l) => {
                            const isActive = active === l.id;
                            return (
                                <li key={l.id} className={l.id === "contact" ? "" : "hidden md:block"}>
                                    <a
                                        href={`#${l.id}`}
                                        aria-current={isActive ? "true" : undefined}
                                        className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors duration-300 ${
                                            isActive ? "text-txt-main" : "text-txt-sub hover:text-txt-main"
                                        }`}
                                    >
                                        {isActive && (
                                            <motion.span
                                                layoutId="nav-pill"
                                                transition={{ duration: 0.5, ease: EASE }}
                                                className="absolute inset-0 rounded-full bg-white/[0.06]"
                                            />
                                        )}
                                        <span className="relative">{l.label}</span>
                                    </a>
                                </li>
                            );
                        })}
                        <li className="ml-1 hidden md:block">
                            <Link
                                href="/about"
                                className="rounded-full px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-txt-muted hover:text-accent transition-colors"
                            >
                                About
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </motion.header>
    );
}
