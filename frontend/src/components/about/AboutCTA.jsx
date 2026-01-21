import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const AboutCTA = () => {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="bg-slate-50 rounded-[2.5rem] p-8 md:p-12 lg:p-0 overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50">
                    <div className="flex flex-col lg:flex-row items-center">

                        {/* Left: Content */}
                        <div className="lg:w-1/2 lg:p-16">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                            >
                                <span className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">Next Steps</span>
                                <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                                    Partner with <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-500">Industry Leaders.</span>
                                </h2>
                                <p className="text-textSecondary text-lg mb-8 leading-relaxed">
                                    Ready to optimize your supply chain with a partner that prioritizes compliance and quality? Let's discuss your specific requirements today.
                                </p>

                                <div className="flex flex-wrap gap-4 mb-8">
                                    <Link
                                        to="/contact"
                                        className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold transition-all hover:bg-primary/90 hover:scale-105 shadow-lg shadow-primary/20"
                                    >
                                        Get a Quote <ArrowRight size={18} />
                                    </Link>
                                    <a
                                        href="mailto:contact@eteon.com"
                                        className="inline-flex items-center gap-2 bg-white text-primary border border-slate-200 px-8 py-4 rounded-full font-bold transition-all hover:bg-slate-50 hover:border-slate-300"
                                    >
                                        <Mail size={18} /> Email Us
                                    </a>
                                </div>

                                <div className="flex items-center gap-2 text-sm text-slate-400 font-medium">
                                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Currently accepting new partners for FY 2024-25
                                </div>
                            </motion.div>
                        </div>

                        {/* Right: Image */}
                        <div className="lg:w-1/2 h-full min-h-[400px] w-full relative group">
                            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500 z-10 mix-blend-multiply pointer-events-none"></div>
                            <img
                                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2670&auto=format&fit=crop"
                                alt="Business Team"
                                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                            />
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCTA;
