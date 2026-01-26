'use client';

import { useEffect, useRef, useState } from 'react';
import { useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import Overlay from './Overlay';
import { SEQUENCE_Config } from '@/lib/constants';

export default function ScrollyCanvas() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // Monitor scroll of the container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Map 0-1 scroll to 0-(frameCount-1)
    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, SEQUENCE_Config.frameCount - 1]);

    useEffect(() => {
        const loadImages = async () => {
            const promises = Array.from({ length: SEQUENCE_Config.frameCount }).map((_, i) => {
                return new Promise<HTMLImageElement>((resolve, reject) => {
                    const img = new Image();
                    const frameIndex = i.toString().padStart(SEQUENCE_Config.pad, '0');

                    // Construct path using config
                    img.src = `${SEQUENCE_Config.path}${SEQUENCE_Config.prefix}${frameIndex}${SEQUENCE_Config.extension}`;

                    img.onload = () => resolve(img);
                    img.onerror = () => {
                        console.warn(`Failed to load frame ${frameIndex}`);
                        resolve(img); // Resolve anyway to avoid breaking entire Promise.all
                    };
                });
            });

            try {
                const results = await Promise.all(promises);
                // filter out broken images if any
                setImages(results);
                setIsLoaded(true);
            } catch (error) {
                console.error("Critical error loading sequence", error);
            }
        };

        loadImages();
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || !images[index]) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = images[index];

        // Ensure canvas internal resolution matches display size for sharpness
        if (canvas.width !== window.innerWidth || canvas.height !== window.innerHeight) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }

        // "object-fit: cover" logic for Canvas
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Listen to scroll changes and paint the appropriate frame
    useMotionValueEvent(currentIndex, "change", (latest) => {
        if (!isLoaded || images.length === 0) return;
        const frameIndex = Math.floor(latest);
        const safeIndex = Math.min(Math.max(frameIndex, 0), images.length - 1);
        requestAnimationFrame(() => renderFrame(safeIndex));
    });

    // Initial render and resize handling
    useEffect(() => {
        if (!isLoaded || images.length === 0) return;

        // Draw first frame immediately
        renderFrame(0);

        const handleResize = () => {
            // Re-draw current frame
            const currentScroll = currentIndex.get();
            const frameIndex = Math.floor(currentScroll);
            const safeIndex = Math.min(Math.max(frameIndex, 0), images.length - 1);
            renderFrame(safeIndex);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded, images]);

    return (
        <div ref={containerRef} className="h-[500vh] relative bg-[#050816]">
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="w-full h-full block" />

                {/* Pass scroll progress to overlay for sync animations */}
                <Overlay scrollYProgress={scrollYProgress} />

                {/* Loading Spinner */}
                {!isLoaded && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#050816] z-50 text-white">
                        <div className="w-10 h-10 border-4 border-white/20 border-t-white rounded-full animate-spin mb-4" />
                        <span className="text-sm uppercase tracking-widest text-white/50">Loading Experience</span>
                    </div>
                )}
            </div>
        </div>
    );
}
