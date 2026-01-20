import React from "react";
import { CheckCircle, ArrowRight, Globe, Award, Users } from "lucide-react";
import { motion } from "framer-motion";

const AboutCompany = () => {
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // Stagger effect for children
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.8, ease: "easeOut" },
        },
    };

    return (
        <section className="py-section bg-white overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row items-center gap-16">

                    {/* Left Column - Images */}
                    <motion.div
                        className="w-full lg:w-1/2 relative"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={imageVariants}
                    >
                        <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl group">
                            <motion.img
                                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                                alt="Warehouse operations"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                whileHover={{ scale: 1.05 }}
                            />
                            {/* Shine Effect Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                        </div>

                        {/* Overlay Card - Floating Animation */}
                        <motion.div
                            className="absolute -bottom-10 -right-10 z-20 hidden lg:block bg-white p-6 rounded-xl shadow-card border border-slate-100 max-w-xs"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false }}
                            transition={{ delay: 0.5, duration: 0.6 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-center gap-4 mb-4">
                                <div className="bg-primary/10 p-3 rounded-full text-primary">
                                    <Award size={32} />
                                </div>
                                <div>
                                    <h4 className="font-bold text-3xl text-primary">25+</h4>
                                    <p className="text-sm text-textSecondary font-medium">Years of Experience</p>
                                </div>
                            </div>
                            <p className="text-textMuted text-sm leading-relaxed">
                                delivering excellence in international logistics and supply chain management.
                            </p>
                        </motion.div>

                        {/* Decorative pattern */}
                        <motion.div
                            className="absolute -top-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl -z-10"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
                            transition={{ duration: 5, repeat: Infinity }}
                        ></motion.div>
                        <motion.div
                            className="absolute bottom-10 right-10 w-60 h-60 bg-primary/5 rounded-full blur-3xl -z-10"
                            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 7, repeat: Infinity, delay: 1 }}
                        ></motion.div>
                    </motion.div>

                    {/* Right Column - Content */}
                    <motion.div
                        className="w-full lg:w-1/2"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        variants={containerVariants}
                    >
                        <motion.div variants={itemVariants} className="inline-block px-3 py-1 mb-6 border border-accent/20 bg-accent/5 rounded-full text-accent font-medium text-sm tracking-wide uppercase">
                            About Eteon International
                        </motion.div>

                        <motion.h2 variants={itemVariants} className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                            Bridging Borders, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Building Futures.</span>
                        </motion.h2>

                        <motion.p variants={itemVariants} className="text-textSecondary text-lg mb-8 leading-relaxed">
                            At Eteon International, we specialize in simplifying the complexities of global trade. From sourcing and procurement to customs clearance and final delivery, we act as your strategic partner in navigating the international marketplace.
                        </motion.p>

                        <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6 mb-10">
                            {[
                                { icon: Globe, title: "Global Network", text: "Partners across 50+ countries" },
                                { icon: Users, title: "Expert Team", text: "Dedicated specialists for every sector" },
                                { icon: CheckCircle, title: "Compliance Ready", text: "Example handling of customs & regulations" },
                                { icon: Award, title: "Quality Assured", text: "ISO certified processes & safety" },
                            ].map((item, idx) => (
                                <div key={idx} className="flex gap-4 group cursor-pointer">
                                    <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white rounded-xl transition-colors duration-300 bg-accent/10">
                                        <item.icon size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-heading font-bold text-primary text-base mb-1 group-hover:text-accent transition-colors">{item.title}</h4>
                                        <p className="text-sm text-textMuted">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <button className="group bg-primary text-white px-8 py-3.5 rounded-lg font-medium hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/30 flex items-center gap-2">
                                Learn About Our Story
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default AboutCompany;
