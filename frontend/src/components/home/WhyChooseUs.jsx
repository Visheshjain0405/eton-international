import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Calendar, Users, Award, CheckCircle2, TrendingUp, Globe, ArrowRight } from "lucide-react";

const pillars = [
    {
        title: "Rigorous Quality Assurance",
        desc: "We don't compromise. Every shipment adheres to strict international safety standards (ISO, HACCP) with comprehensive pre-shipment inspections.",
        icon: ShieldCheck,
    },
    {
        title: "Seamless Global Logistics",
        desc: "Mastery of cross-border trade regulations in 50+ countries. We handle the paperwork so you experience zero customs delays.",
        icon: Globe,
    },
    {
        title: "Dedicated Partnership",
        desc: "You're not just a client. Enjoy 24/7 access to dedicated account managers who provide transparent updates and proactive solutions.",
        icon: Users,
    }
];

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background Blob */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container mx-auto px-4 relative z-10">

                {/* Section Header - Centered & Big */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="inline-block py-1 px-3 rounded-full bg-accent/10 text-accent font-bold tracking-widest text-xs uppercase mb-4"
                    >
                        The Eteon Advantage
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight"
                    >
                        Why Leading Brands <br />
                        <span className="text-accent relative whitespace-nowrap">
                            Choose Eteon.
                            {/* Optional subtle underline decoration */}
                            <svg className="absolute w-[110%] h-3 -bottom-2 -right-1 text-accent/20 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5 L 100 10 L 0 10 Z" fill="currentColor" />
                            </svg>
                        </span>
                    </motion.h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column: Visuals (5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 relative"
                    >
                        <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
                            <img
                                src="https://i.pinimg.com/736x/ee/06/99/ee0699cd44ee2628b13522f083eb00d6.jpg"
                                alt="Global Logistics Ship"
                                className="w-full aspect-[4/5] object-cover hover:scale-105 transition-transform duration-700 ease-out"
                            />
                            {/* Overlay Gradient at bottom for text readability if needed */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60"></div>
                        </div>

                        {/* Decorative Dot Pattern */}
                        <div className="absolute -bottom-8 -left-8 -z-10">
                            <div className="w-32 h-32 opacity-20" style={{ backgroundImage: 'radial-gradient(#1e293b 2px, transparent 2px)', backgroundSize: '16px 16px' }} />
                        </div>
                    </motion.div>

                    {/* Right Column: Content (7 cols) */}
                    <div className="lg:col-span-7 flex flex-col justify-center h-full pt-4">
                        <div className="space-y-8">
                            {pillars.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 + (idx * 0.1) }}
                                    className="group flex gap-6 p-6 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50 transition-all duration-300"
                                >
                                    <div className="flex-shrink-0">
                                        <div className="w-14 h-14 bg-white border border-slate-100 rounded-xl flex items-center justify-center text-primary shadow-sm group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                            <item.icon size={28} strokeWidth={1.5} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="font-heading text-xl font-bold text-primary mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-textSecondary leading-relaxed text-base">
                                            {item.desc}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="mt-12 pl-6"
                        >
                            <button className="group bg-primary text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:-translate-y-1 transition-all">
                                Partner With Us
                                <div className="bg-white/20 p-1 rounded-full group-hover:translate-x-1 transition-transform">
                                    <ArrowRight size={16} />
                                </div>
                            </button>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
