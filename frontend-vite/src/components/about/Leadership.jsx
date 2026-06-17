import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter, Quote } from 'lucide-react';

const Leadership = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">

            <div className="container mx-auto px-4">

                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-accent font-bold tracking-widest text-sm uppercase mb-3 block">Executive Board</span>
                    <h2 className="font-heading text-4xl font-bold text-primary mb-4">Our Leadership</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">

                    {/* LEADER 1 - CEO */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                    >
                        {/* Full background Image */}
                        <img
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2574&auto=format&fit=crop"
                            alt="CEO"
                            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Dark Gradient Overlay - Permanent */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                        {/* Content Content positioned at bottom */}
                        <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <div className="flex justify-between items-end mb-2">
                                <div>
                                    <h3 className="text-2xl font-heading font-bold mb-1">Rajesh Kumar</h3>
                                    <div className="text-accent font-bold text-sm uppercase tracking-wider">Chief Executive Officer</div>
                                </div>
                                {/* Social Icons */}
                                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-accent transition-colors"><Linkedin size={16} /></a>
                                    <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-accent transition-colors"><Twitter size={16} /></a>
                                </div>
                            </div>

                            <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                                <p className="text-slate-200 text-sm italic mt-4 border-l-2 border-accent pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    "We are building more than a company; we are building a legacy of trust in international trade."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* LEADER 2 - CFO */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer"
                    >
                        {/* Full background Image */}
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2576&auto=format&fit=crop"
                            alt="CFO"
                            className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Dark Gradient Overlay - Permanent */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>

                        {/* Content Content positioned at bottom */}
                        <div className="absolute bottom-0 left-0 w-full p-8 text-white z-10 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                            <div className="flex justify-between items-end mb-2">
                                <div>
                                    <h3 className="text-2xl font-heading font-bold mb-1">Priya Sharma</h3>
                                    <div className="text-accent font-bold text-sm uppercase tracking-wider">Chief Financial Officer</div>
                                </div>
                                {/* Social Icons */}
                                <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-accent transition-colors"><Linkedin size={16} /></a>
                                    <a href="#" className="p-2 bg-white/20 backdrop-blur-md rounded-full hover:bg-accent transition-colors"><Twitter size={16} /></a>
                                </div>
                            </div>

                            <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                                <p className="text-slate-200 text-sm italic mt-4 border-l-2 border-accent pl-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    "Financial integrity is the backbone of our operations. We ensure every transaction is transparent."
                                </p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Leadership;
