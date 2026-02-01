'use client';

import React from "react";
import { motion } from "framer-motion";
import { styles } from "@/lib/styles";
import SectionWrapper from "./SectionWrapper";
import { slideIn } from "@/lib/motion";

const Contact = () => {
    return (
        <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}>
            <motion.div
                variants={slideIn("left", "tween", 0.2, 1)}
                className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
            >
                <p className={styles.sectionSubText}>Get in touch</p>
                <h3 className={styles.sectionHeadText}>Contact Details.</h3>

                <div className='mt-10 flex flex-col gap-6'>

                    {/* Email Card */}
                    <div className='bg-tertiary p-5 rounded-2xl flex items-center gap-5 hover:bg-white/5 transition-colors group cursor-pointer' onClick={() => window.location.href = 'mailto:karthikeyanprabhu8@gmail.com'}>
                        <div className='w-12 h-12 rounded-full bg-black-200 flex items-center justify-center group-hover:scale-110 transition-transform'>
                            <span className="text-2xl">📧</span>
                        </div>
                        <div>
                            <p className='text-secondary text-sm font-semibold'>Email</p>
                            <p className='text-white text-lg font-medium break-all'>karthikeyanprabhu8@gmail.com</p>
                        </div>
                    </div>

                    {/* Phone Card */}
                    <div className='bg-tertiary p-5 rounded-2xl flex items-center gap-5 hover:bg-white/5 transition-colors group cursor-pointer' onClick={() => window.location.href = 'tel:+916380217451'}>
                        <div className='w-12 h-12 rounded-full bg-black-200 flex items-center justify-center group-hover:scale-110 transition-transform'>
                            <span className="text-2xl">📱</span>
                        </div>
                        <div>
                            <p className='text-secondary text-sm font-semibold'>Phone</p>
                            <p className='text-white text-lg font-medium'>+91 63802 17451</p>
                        </div>
                    </div>

                    {/* LinkedIn Card */}
                    <div className='bg-tertiary p-5 rounded-2xl flex items-center gap-5 hover:bg-white/5 transition-colors group cursor-pointer' onClick={() => window.open('https://linkedin.com/in/karthikeyan-prabhu', '_blank')}>
                        <div className='w-12 h-12 rounded-full bg-black-200 flex items-center justify-center group-hover:scale-110 transition-transform'>
                            <span className="text-2xl">💼</span>
                        </div>
                        <div>
                            <p className='text-secondary text-sm font-semibold'>LinkedIn</p>
                            <p className='text-white text-lg font-medium'>karthikeyan-prabhu</p>
                        </div>
                    </div>

                    {/* Resume Download Button */}
                    <a
                        href="/Resume_Karthikeyan-prabhu.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className='bg-gradient-to-r from-blue-600 to-indigo-600 py-4 px-8 rounded-xl outline-none w-full text-white font-bold shadow-md shadow-primary hover:shadow-lg hover:shadow-blue-500/20 transition-all active:scale-95 flex items-center justify-center gap-3 mt-4'
                    >
                        <span>📄</span>
                        Download Resume
                    </a>

                </div>
            </motion.div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px] bg-tertiary rounded-2xl flex items-center justify-center overflow-hidden relative'
            >
                {/* Decorative Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20" />

                <div className="text-center p-10 relative z-10">
                    <div className="w-40 h-40 mx-auto bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center animate-pulse shadow-[0_0_50px_rgba(59,130,246,0.5)] mb-8">
                        <span className="text-6xl">🚀</span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-4">Let&apos;s Work Together!</h3>
                    <p className="text-secondary max-w-sm mx-auto">
                        I&apos;m currently available for freelance projects and full-time opportunities.
                    </p>
                </div>
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact, "contact");
