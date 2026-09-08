'use client';

import React from "react";
import { motion } from "framer-motion";
import { PiArrowUpRight, PiEnvelopeSimple, PiFileArrowDown, PiLinkedinLogo, PiPhone } from "react-icons/pi";

import SectionWrapper from "./SectionWrapper";
import { fadeIn, textVariant } from "@/lib/motion";
import { styles } from "@/lib/styles";

const channels = [
    {
        label: "Email",
        value: "karthikeyanprabhu8@gmail.com",
        href: "mailto:karthikeyanprabhu8@gmail.com",
        icon: PiEnvelopeSimple,
        external: false,
    },
    {
        label: "Phone",
        value: "+91 63802 17451",
        href: "tel:+916380217451",
        icon: PiPhone,
        external: false,
    },
    {
        label: "LinkedIn",
        value: "in/karthikeyan-prabhu",
        href: "https://linkedin.com/in/karthikeyan-prabhu",
        icon: PiLinkedinLogo,
        external: true,
    },
];

const Contact = () => {
    return (
        <div className="grid gap-16 lg:grid-cols-[1.1fr_1fr] lg:gap-24">
            {/* Left: the ask */}
            <motion.div variants={textVariant(0)}>
                <div className="mb-6 flex items-center gap-4">
                    <span className="font-mono text-xs text-accent tabular-nums">08</span>
                    <span aria-hidden className="h-px w-8 bg-line-strong" />
                    <span className="eyebrow">Get in touch</span>
                </div>

                <h2 className={`${styles.sectionHeadText} [&_em]:display-italic [&_em]:text-accent [&_em]:font-normal`}>
                    Let&apos;s build<br />something <em>good</em>.
                </h2>

                <p className="mt-8 max-w-[46ch] text-base leading-relaxed text-txt-sub md:text-lg">
                    I take on freelance projects and full-time roles. If you have a product that needs a front-end
                    that feels considered, I&apos;d like to hear about it.
                </p>

                <div className="mt-10 flex items-center gap-3">
                    <span className="pulse-dot h-2 w-2 rounded-full bg-accent" />
                    <span className="font-mono text-xs uppercase tracking-[0.14em] text-txt-muted">
                        Available now — India, remote-friendly
                    </span>
                </div>
            </motion.div>

            {/* Right: the channels */}
            <motion.div variants={fadeIn("up", 0.1, 0.9)} className="flex flex-col">
                <ul className="hairline">
                    {channels.map((c) => (
                        <li key={c.label}>
                            <a
                                href={c.href}
                                target={c.external ? "_blank" : undefined}
                                rel={c.external ? "noopener noreferrer" : undefined}
                                className="group grid grid-cols-[2.5rem_1fr_auto] items-center gap-4 border-b border-line py-6 transition-colors duration-500 hover:bg-white/[0.02] md:py-7"
                            >
                                <span className="grid h-10 w-10 place-items-center rounded-full border border-line text-txt-sub transition-colors duration-500 group-hover:border-accent group-hover:text-accent">
                                    <c.icon className="h-[18px] w-[18px]" />
                                </span>
                                <span className="min-w-0">
                                    <span className="eyebrow block">{c.label}</span>
                                    <span className="mt-1 block truncate text-base font-medium text-txt-main md:text-lg">{c.value}</span>
                                </span>
                                <PiArrowUpRight className="h-5 w-5 text-txt-muted transition-all duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                            </a>
                        </li>
                    ))}
                </ul>

                <a
                    href="/Resume_Karthikeyan-prabhu.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center justify-center gap-3 self-start rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-ink shadow-[0_12px_40px_-12px_rgba(227,161,90,0.55)] transition-all duration-500 ease-[var(--ease-out-expo)] hover:bg-accent-2 hover:-translate-y-0.5 hover:shadow-[0_18px_48px_-12px_rgba(227,161,90,0.65)] active:translate-y-0 active:scale-[0.98]"
                >
                    <PiFileArrowDown className="h-[18px] w-[18px]" />
                    Download résumé
                </a>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
