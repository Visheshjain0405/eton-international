import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AboutHero = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Changed from Y translation (which caused gaps) to Scale (zooms in slightly)
    const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const textY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const fadeUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <section ref={containerRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-primary">
            {/* Background with Scale Parallax */}
            <motion.div
                style={{ scale: heroScale }}
                className="absolute inset-0 z-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
                    alt="Global Strategy"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent"></div>
                {/* Animated Grid Pattern Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
            </motion.div>

            <div className="container mx-auto px-4 z-10 text-center relative">
                <motion.div
                    style={{ y: textY, opacity: textOpacity }}
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-4xl mx-auto"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        <span className="text-white text-xs font-bold tracking-widest uppercase">Since 2008</span>
                    </motion.div>

                    <motion.h1 variants={fadeUp} className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight pb-2">
                        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-emerald-200">Eteon.</span>
                    </motion.h1>

                    <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-200 font-light max-w-2xl mx-auto leading-relaxed">
                        Simplifying global trade through integrity, compliance, and strategic execution.
                    </motion.p>
                </motion.div>
            </div>

            {/* Scrolldown indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[1px] h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0 hidden md:block"
            >
                <motion.div
                    animate={{ y: [0, 64, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-1/2 bg-white"
                ></motion.div>
            </motion.div>
        </section>
    );
};

export default AboutHero;
