import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap } from 'lucide-react';

const VisionMission = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent font-bold tracking-widest text-sm uppercase mb-3 block">Corporate Purpose</span>
                    <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary">Driving Global Commerce</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24 relative">
                    {/* Center Divider Line (Desktop Only) */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-100 hidden md:block -translate-x-1/2"></div>

                    {/* VISION COLUMN */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="w-20 h-20 rounded-2xl bg-primary/5 flex items-center justify-center text-primary mb-8 relative group">
                            <Target size={40} strokeWidth={1.5} />
                            {/* Icon Hover Decor */}
                            <div className="absolute inset-0 border border-primary/20 rounded-2xl scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>
                        </div>

                        <h3 className="text-3xl font-heading font-bold text-primary mb-4">Our Vision</h3>
                        <p className="text-textSecondary text-lg leading-relaxed max-w-md">
                            To be the most reliable and preferred partner in the global supply chain, recognized not just for volume, but for the value, integrity, and efficiency we bring to every transaction.
                        </p>
                    </motion.div>

                    {/* MISSION COLUMN */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center text-center"
                    >
                        <div className="w-20 h-20 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-8 relative group">
                            <Zap size={40} strokeWidth={1.5} />
                            {/* Icon Hover Decor */}
                            <div className="absolute inset-0 border border-accent/20 rounded-2xl scale-110 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500"></div>
                        </div>

                        <h3 className="text-3xl font-heading font-bold text-primary mb-4">Our Mission</h3>
                        <p className="text-textSecondary text-lg leading-relaxed max-w-md">
                            To execute every order with precision, ensuring that quality products reach our clients on time, compliant with all regulations, and at a competitive cost.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;
