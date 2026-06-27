"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageSquare } from 'lucide-react';

const ContactClient = () => {
    return (
        <div className="w-full overflow-hidden bg-slate-50 font-body">
            {/* HERO SECTION */}
            <section className="relative pt-[180px] lg:pt-[240px] pb-20 lg:pb-28 bg-white overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-40 bg-[size:40px_40px] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]"></div>

                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-accent font-bold tracking-widest text-sm uppercase mb-4 block">Get In Touch</span>
                        <h1 className="font-heading text-5xl lg:text-7xl font-bold text-primary mb-6">
                            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-slate-500">Support.</span>
                        </h1>
                        <p className="text-textSecondary text-xl max-w-2xl mx-auto leading-relaxed">
                            Have a question about our services or need a custom quote? We are here to assist you 24/7.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* CONTACT CARDS & FORM SECTION */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16">

                        {/* LEFT: INFO CARDS */}
                        <div className="lg:w-1/3 space-y-6">
                            {/* Card 1: Main Office */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.15 }}
                                transition={{ duration: 0.6 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
                            >
                                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                                    <MapPin size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-2">Headquarters</h3>
                                <p className="text-slate-500 leading-relaxed">
                                    13 Dayalji Park, Parvat Patiya,<br />
                                    Surat - 395010, Gujarat,<br />
                                    India
                                </p>
                            </motion.div>

                            {/* Card 2: Communication */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.15 }}
                                transition={{ duration: 0.6, delay: 0.1 }}
                                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200"
                            >
                                <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-6">
                                    <MessageSquare size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-4">Direct Lines</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-4">
                                        <Phone size={18} className="text-slate-400" />
                                        <a href="tel:+919558555447" className="text-primary font-medium hover:text-accent transition-colors">+91 95585 55447</a>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Mail size={18} className="text-slate-400" />
                                        <span className="text-primary font-medium">info@eteoninternational.com</span>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Card 3: Hours */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.15 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-primary text-white p-8 rounded-2xl shadow-xl relative overflow-hidden"
                            >
                                {/* Bg Graphic */}
                                <Clock className="absolute -bottom-6 -right-6 text-white/5 w-32 h-32" />

                                <h3 className="text-xl font-bold mb-4 relative z-10">Business Hours</h3>
                                <div className="space-y-2 relative z-10 text-slate-300">
                                    <div className="flex justify-between">
                                        <span>Mon - Fri</span>
                                        <span className="text-white font-bold">9:00 AM - 6:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Saturday</span>
                                        <span className="text-white font-bold">10:00 AM - 2:00 PM</span>
                                    </div>
                                    <div className="flex justify-between">
                                        <span>Sunday</span>
                                        <span className="text-accent">Closed</span>
                                    </div>
                                </div>
                            </motion.div>

                        </div>

                        {/* RIGHT: CONTACT FORM */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: false, amount: 0.15 }}
                            transition={{ duration: 0.7 }}
                            className="lg:w-2/3"
                        >
                            <div className="bg-white p-8 lg:p-12 rounded-[2rem] shadow-xl shadow-slate-200/50 border border-slate-100">
                                <h2 className="text-3xl font-heading font-bold text-primary mb-8">Send us a Message</h2>

                                <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary ml-1">Full Name</label>
                                            <input type="text" placeholder="John Doe" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary ml-1">Email Address</label>
                                            <input type="email" placeholder="john@company.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary ml-1">Phone Number</label>
                                            <input type="tel" placeholder="+1 (555) 000-0000" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary ml-1">Subject</label>
                                            <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all text-slate-500">
                                                <option>General Inquiry</option>
                                                <option>Import/Export Quote</option>
                                                <option>Partnership</option>
                                                <option>Compliance Support</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-primary ml-1">Message</label>
                                        <textarea rows="5" placeholder="Tell us about your requirements..." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-3 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"></textarea>
                                    </div>

                                    <button className="w-full bg-primary text-white font-bold text-lg py-4 rounded-xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
                                        <Send size={20} /> Send Message
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactClient;
