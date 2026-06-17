import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, FileText, Globe, Package, Plane, ChevronRight, ArrowRight } from "lucide-react";

const steps = [
    {
        id: 1,
        title: "Inquiry & Consultation",
        desc: "It starts with your vision. Connect with our experts to discuss product specifications, target markets, and volume requirements. We ensure we understand your needs perfectly.",
        icon: MessageSquare,
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    {
        id: 2,
        title: "Detailed Proposal",
        desc: "We analyze the market and logistics to provide a comprehensive, transparent quote. No hidden costs—just clear pricing including shipping, insurance, and compliance.",
        icon: FileText,
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    {
        id: 3,
        title: "Contract & Compliance",
        desc: "Once approved, we handle the heavy lifting. From commercial invoices to certificates of origin and health certificates, our legal team ensures 100% compliance.",
        icon: Globe,
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    {
        id: 4,
        title: "Premium Packaging",
        desc: "Your goods are inspected and packed using international-grade materials. Whether palletized or loose, we guarantee safety during transit.",
        icon: Package,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    },
    {
        id: 5,
        title: "Global Dispatch",
        desc: "We coordinate with top-tier logistics partners for air or sea freight. You receive real-time tracking updates until the shipment arrives at your warehouse.",
        icon: Plane,
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
    }
];

const ExportProcess = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [progress, setProgress] = useState(0);

    // Auto-rotate steps every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="py-24 bg-surface relative overflow-hidden">
            <div className="container mx-auto px-4">

                <div className="text-center mb-16">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-3 block">
                        How We Work
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-primary leading-tight">
                        The <span className="relative inline-block">
                            <span className="text-accent relative z-10">Eteon</span>
                            {/* Decorative Underline - Made more visible */}
                            <svg className="absolute w-[110%] h-3 -bottom-0 left-0 text-accent" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 8 Q 50 0 100 8" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.4" />
                            </svg>
                        </span> Export Process
                    </h2>
                    <p className="text-textSecondary mt-4 text-lg max-w-2xl mx-auto">
                        Precision, compliance, and speed. See how we deliver excellence at every step.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">

                    {/* Left Side: Navigation List */}
                    <div className="lg:col-span-5 flex flex-col gap-3">
                        {steps.map((step, idx) => {
                            const isLeft = idx % 2 === 0;
                            const variants = {
                                hidden: { opacity: 0, x: isLeft ? -50 : 50 },
                                visible: { opacity: 1, x: 0 }
                            };

                            return (
                                <motion.div
                                    key={step.id}
                                    onClick={() => setActiveStep(idx)}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: false, amount: 0.4 }}
                                    variants={variants}
                                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                                    className={`group cursor-pointer p-4 rounded-xl border transition-all duration-300 items-center flex gap-4 ${activeStep === idx
                                        ? "bg-white border-transparent shadow-xl z-10 scale-[1.02]"
                                        : "bg-transparent border-transparent hover:bg-slate-50"
                                        }`}
                                >
                                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors duration-300 flex-shrink-0 ${activeStep === idx
                                        ? "bg-accent text-white shadow-lg shadow-accent/20"
                                        : "bg-white text-slate-400 border border-slate-100 group-hover:border-accent/30 group-hover:text-accent"
                                        }`}>
                                        <step.icon size={22} strokeWidth={2} />
                                    </div>

                                    <div className="flex-1 min-w-0">
                                        <h3 className={`font-bold text-lg truncate transition-colors ${activeStep === idx ? "text-primary" : "text-slate-500 group-hover:text-primary"
                                            }`}>
                                            {step.title}
                                        </h3>
                                        {/* Active Phase Indicator */}
                                        {activeStep === idx && (
                                            <motion.p
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                className="text-xs font-bold text-accent mt-1"
                                            >
                                                Step 0{step.id} — Active Phase
                                            </motion.p>
                                        )}
                                    </div>

                                    <div className="text-slate-300">
                                        <ChevronRight size={20} className={`transition-transform duration-300 ${activeStep === idx ? "text-accent translate-x-1" : "group-hover:translate-x-1"
                                            }`} />
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                    {/* Right Side: Image Display Carousel */}
                    <div className="lg:col-span-7 h-[500px] relative rounded-3xl overflow-hidden shadow-2xl bg-slate-900 group">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeStep}
                                initial={{ opacity: 0, scale: 1.05 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.5 }}
                                className="absolute inset-0 w-full h-full"
                            >
                                <img
                                    src={steps[activeStep].image}
                                    alt={steps[activeStep].title}
                                    className="w-full h-full object-cover opacity-60"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />

                                <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-2xl">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                                                Step 0{steps[activeStep].id}
                                            </span>
                                        </div>
                                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                                            {steps[activeStep].title}
                                        </h3>
                                        <p className="text-lg text-slate-200 leading-relaxed mb-8">
                                            {steps[activeStep].desc}
                                        </p>
                                        <button className="flex items-center gap-2 text-white font-bold hover:text-accent transition-colors">
                                            Learn More <ArrowRight size={20} />
                                        </button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ExportProcess;
