'use client';

import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Overlay from './Overlay';
import { SEQUENCE_Config } from '@/lib/constants';

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [loadedCount, setLoadedCount] = useState(0);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, SEQUENCE_Config.frameCount - 1]);

    useEffect(() => {
        const loadImages = async () => {
            const promises = Array.from({ length: SEQUENCE_Config.frameCount }).map((_, i) => {
                return new Promise<HTMLImageElement>((resolve) => {
                    const img = new Image();
                    const frameIndex = i.toString().padStart(SEQUENCE_Config.pad, '0');
                    img.src = `${SEQUENCE_Config.path}${SEQUENCE_Config.prefix}${frameIndex}${SEQUENCE_Config.extension}`;

                    const done = () => {
                        setLoadedCount((c) => c + 1);
                        resolve(img);
                    };
                    img.onload = done;
                    img.onerror = () => {
                        console.warn(`Failed to load frame ${frameIndex}`);
                        done();
                    };
                });
            });

            const results = await Promise.all(promises);
            setImages(results);
            setIsLoaded(true);
        };

        loadImages();
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = images[index];

        if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        // object-fit: cover
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useMotionValueEvent(currentIndex, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;
        const frameIndex = Math.floor(latest);
        const safeIndex = Math.min(Math.max(frameIndex, 0), images.length - 1);
        requestAnimationFrame(() => renderFrame(safeIndex));
    });

    useEffect(() => {
        if (!isLoaded || images.length === 0) return;

        renderFrame(0);

        const handleResize = () => {
            const frameIndex = Math.floor(currentIndex.get());
            const safeIndex = Math.min(Math.max(frameIndex, 0), images.length - 1);
            renderFrame(safeIndex);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoaded, images]);

    const progress = Math.round((loadedCount / SEQUENCE_Config.frameCount) * 100);

    return (
        <div id="top" ref={containerRef} className="h-[500vh] relative bg-background">
            <div className="sticky top-0 h-dvh w-full overflow-hidden">
                <canvas ref={canvasRef} className="w-full h-full block" />

                {/* Vignette + bottom fade so the hero dissolves into the page instead of ending on a hard edge */}
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 z-[5]"
                    style={{
                        background:
                            "radial-gradient(120% 90% at 50% 40%, transparent 40%, rgba(7,9,18,0.55) 100%), linear-gradient(to bottom, rgba(7,9,18,0.35) 0%, transparent 25%, transparent 55%, rgba(7,9,18,0.75) 80%, #070912 92%)",
                    }}
                />

                <Overlay scrollYProgress={scrollYProgress} ready={isLoaded} />

                {/* Loader — a real progress readout, not a spinner */}
                <AnimatePresence>
                    {!isLoaded && (
                        <motion.div
                            key="loader"
                            exit={{ opacity: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }}
                            style={{ zIndex: "var(--z-loader)" as unknown as number }}
                            className="absolute inset-0 flex flex-col items-center justify-center bg-background"
                        >
                            <div className="flex items-end gap-3 font-mono text-txt-muted">
                                <span className="text-5xl font-medium tabular-nums text-txt-main leading-none">
                                    {progress.toString().padStart(2, "0")}
                                </span>
                                <span className="text-sm pb-1">%</span>
                            </div>
                            <div className="mt-6 h-px w-40 overflow-hidden bg-white/10">
                                <div
                                    className="h-full bg-accent transition-[width] duration-200 ease-out"
                                    style={{ width: `${progress}%` }}
                                />
                            </div>
                            <span className="eyebrow mt-4">Loading sequence</span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
