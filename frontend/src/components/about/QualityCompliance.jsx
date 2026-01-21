import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ClipboardCheck, ShieldCheck, Scale, FileCheck, CheckCircle2, Globe2, ChevronLeft, ChevronRight, Microscope, PackageCheck } from 'lucide-react';

const QualityCompliance = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const slides = [
        {
            title: "Physical Inspection",
            subtitle: "On-Ground Verification",
            desc: "Before any cargo is loaded, our certified inspectors verify quantity, packaging condition, and visual quality parameters directly at the sourcing point.",
            icon: ClipboardCheck,
            image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Lab Testing",
            subtitle: "Scientific Validation",
            desc: "We don't guess; we test. Samples are sent to accredited laboratories to verify chemical composition, purity, and adherence to specific safety standards.",
            icon: Microscope,
            image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=2670&auto=format&fit=crop"
        },
        {
            title: "Packaging Integrity",
            subtitle: "Transit Safety",
            desc: "From moisture-proof barriers to heavy-duty crating, our audit ensures your goods withstand oceanic transit and arrive in pristine condition.",
            icon: PackageCheck,
            image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2670&auto=format&fit=crop"
        }
    ];

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    const contentVariants = {
        hidden: { opacity: 0, x: 20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                staggerChildren: 0.1,
                duration: 0.5
            }
        },
        exit: { opacity: 0, x: -20, transition: { duration: 0.3 } }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <>
            {/* SECTION 1: PREMIUM QUALITY CAROUSEL */}
            <section className="py-24 bg-slate-50 relative overflow-hidden">
                {/* Subtle Background Pattern */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                    <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-slate-100 to-transparent"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    {/* Header with Navigation */}
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-xl">
                            <span className="text-accent font-bold tracking-widest text-sm uppercase mb-3 block">Process Precision</span>
                            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary leading-tight">
                                Rigorous <br />
                                <span className="text-secondary">Quality Control</span>
                            </h2>
                        </div>

                        {/* Custom Navigation Pills */}
                        <div className="flex bg-white rounded-full p-1 shadow-sm border border-slate-200">
                            {slides.map((_, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`relative px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${activeIndex === idx ? 'text-white' : 'text-slate-500 hover:text-primary'
                                        }`}
                                >
                                    {activeIndex === idx && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute inset-0 bg-primary rounded-full shadow-lg"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                    <span className="relative z-10">0{idx + 1}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Main Feature Card */}
                    <div className="relative h-[600px] lg:h-[550px] w-full bg-white rounded-[2rem] shadow-2xl shadow-slate-200/50 overflow-hidden border border-slate-100">
                        <AnimatePresence mode='wait'>
                            <motion.div
                                key={activeIndex}
                                variants={contentVariants}
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="absolute inset-0 flex flex-col lg:flex-row h-full"
                            >
                                {/* Text Content Area */}
                                <div className="lg:w-[45%] p-10 lg:p-16 flex flex-col justify-center relative order-2 lg:order-1">
                                    {/* Animated Progress Bar at Top of Card */}
                                    <motion.div
                                        initial={{ width: "0%" }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 5, ease: "linear" }}
                                        className="absolute top-0 left-0 h-1 bg-accent"
                                    />

                                    <motion.div variants={itemVariants} className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-accent/20">
                                        {React.createElement(slides[activeIndex].icon, { size: 32 })}
                                    </motion.div>

                                    <motion.h3 variants={itemVariants} className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-3">
                                        {slides[activeIndex].title}
                                    </motion.h3>

                                    <motion.div variants={itemVariants} className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-widest rounded-md mb-6 w-fit">
                                        {slides[activeIndex].subtitle}
                                    </motion.div>

                                    <motion.p variants={itemVariants} className="text-lg text-textSecondary leading-relaxed">
                                        {slides[activeIndex].desc}
                                    </motion.p>
                                </div>

                                {/* Image Area */}
                                <motion.div
                                    className="lg:w-[55%] h-full relative order-1 lg:order-2 overflow-hidden"
                                >
                                    <motion.img
                                        initial={{ scale: 1.1 }}
                                        animate={{ scale: 1 }}
                                        transition={{ duration: 5 }}
                                        src={slides[activeIndex].image}
                                        alt={slides[activeIndex].title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/10 lg:to-transparent"></div>

                                    {/* Glass Overlay Tag on Image */}
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 }}
                                        className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-xl text-white max-w-xs hidden lg:block"
                                    >
                                        <div className="flex items-center gap-3">
                                            <CheckCircle2 size={20} className="text-accent" />
                                            <span className="font-bold text-sm">Certified Procedure</span>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </section>

            {/* SECTION 2: GLOBAL COMPLIANCE CREDIBILITY */}
            <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center pointer-events-none"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-[#0F172A] via-transparent to-[#0F172A]"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 border-b border-white/10 pb-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-3 mb-4">
                                <Scale className="text-accent" size={28} />
                                <span className="text-accent font-bold tracking-widest text-xs uppercase">Regulatory Assurance</span>
                            </div>
                            <h2 className="font-heading text-3xl lg:text-4xl font-bold mb-4">Global Compliance Framework</h2>
                            <p className="text-slate-400 text-lg leading-relaxed">
                                We navigate the complexities of international trade law with absolute precision. Eteon International is a fully licensed, audited, and compliant entity.
                            </p>
                        </div>
                        <div className="shrink-0">
                            <div className="flex items-center gap-3 bg-green-500/10 border border-green-500/20 rounded-xl px-6 py-4 backdrop-blur-sm">
                                <div className="relative">
                                    <div className="w-3 h-3 rounded-full bg-green-500 animate-ping absolute inset-0 opacity-75"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500 relative z-10"></div>
                                </div>
                                <div>
                                    <div className="text-green-400 font-bold text-sm uppercase tracking-wider">Status: Active</div>
                                    <div className="text-white text-xs opacity-60">Verified Exporter Entity</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            {
                                label: "Legal Entity",
                                value: "Registered Exporter",
                                sub: "Official IEC Code Compliant",
                                icon: ShieldCheck,
                                color: "bg-blue-500"
                            },
                            {
                                label: "Documentation",
                                value: "100% Traceable",
                                sub: "End-to-End Digital Records",
                                icon: FileCheck,
                                color: "bg-purple-500"
                            },
                            {
                                label: "Intl Standards",
                                value: "Global Norms",
                                sub: "US / EU / Asia Compliant",
                                icon: Globe2,
                                color: "bg-emerald-500"
                            }
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="group relative bg-[#151E32] rounded-xl overflow-hidden hover:-translate-y-1 transition-all duration-300 shadow-lg"
                            >
                                {/* Colored Accent Bar */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1 ${stat.color} group-hover:w-2 transition-all duration-300`}></div>

                                <div className="p-8 pl-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="p-3 bg-white/5 rounded-lg text-white group-hover:bg-white/10 transition-colors">
                                            <stat.icon size={28} />
                                        </div>
                                        <div className="opacity-0 group-hover:opacity-100 transition-opacity text-white/20">
                                            <CheckCircle2 size={32} />
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">{stat.value}</h3>
                                    <p className="text-slate-400 text-sm mb-4">{stat.sub}</p>

                                    <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                                        <span className={`w-1.5 h-1.5 rounded-full ${stat.color}`}></span>
                                        <span className="text-xs font-bold uppercase tracking-wider text-slate-500 group-hover:text-slate-300 transition-colors">{stat.label}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default QualityCompliance;
