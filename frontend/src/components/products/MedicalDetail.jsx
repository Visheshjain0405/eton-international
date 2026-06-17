"use client";

import React from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    Zap,
    ShieldCheck,
    Microscope,
    Users,
    Building2,
    Factory,
    Truck,
    Search,
    Globe2,
    Package
} from 'lucide-react';

const IconMap = {
    Zap,
    ShieldCheck,
    Microscope,
    Users,
    Building2,
    Factory,
    Truck,
    Search,
    Globe2,
    Package
};

const MedicalDetail = ({ product }) => {
    // Category-specific content
    const categoryContent = {
        features: [
            { title: "Surgical Precision", desc: "Manufactured in controlled environments to ensure absolute sterility.", icon: "Microscope" },
            { title: "Hypoallergenic", desc: "Skin-friendly materials designed for long-duration medical use.", icon: "ShieldCheck" },
            { title: "Fluid Barrier", desc: "High-level protection against blood, fluids, and airborne particles.", icon: "Zap" },
            { title: "Ergonomic Design", desc: "Anatomically shaped for comfort during intensive medical procedures.", icon: "Users" }
        ],
        whyChoose: [
            { title: "CE & ISO Certified", text: "Fully compliant with international healthcare safety regulations." },
            { title: "Sterile Packaging", text: "Advanced sealing techniques to maintain product integrity till use." },
            { title: "Reliable Bio-Protection", text: "Tested for high filtration efficiency and barrier strength." },
            { title: "Global Health Supply", text: "Consistent supply chain supporting hospitals worldwide." }
        ],
        industries: [
            { name: "Hospitals", icon: "Building2" },
            { name: "Laboratories", icon: "Microscope" },
            { name: "Pharmaceuticals", icon: "Factory" },
            { name: "Emergency Care", icon: "Truck" },
            { name: "Dental Clinics", icon: "ShieldCheck" }
        ]
    };

    const content = {
        features: product.features || categoryContent.features,
        whyChoose: product.whyChoose || categoryContent.whyChoose,
        industries: product.industries || categoryContent.industries
    };

    return (
        <div className="space-y-24">
            {/* TECHNICAL SPECIFICATIONS TABLE */}
            <section id="specs" className="py-20 bg-slate-50 border-y border-slate-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4 flex items-center justify-center gap-4">
                            Technical Data Sheet
                        </h2>
                        <div className="w-24 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                        <table className="w-full text-left border-collapse">
                            <tbody>
                                {product.specs?.map((spec, i) => (
                                    <tr key={i} className={`${i % 2 === 0 ? 'bg-blue-50/20' : 'bg-white'} border-b border-slate-100 hover:bg-blue-50 transition-colors`}>
                                        <td className="py-6 px-10 font-bold text-blue-900 uppercase text-xs tracking-wider w-1/3 border-r border-slate-100">
                                            {spec.label}
                                        </td>
                                        <td className="py-6 px-10 font-semibold text-slate-700">
                                            {spec.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FEATURES & BENEFITS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Medical Performance Features</h2>
                        <div className="w-20 h-1.5 bg-blue-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {content.features.map((item, i) => {
                            const IconComponent = IconMap[item.icon] || Zap;
                            return (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.02, y: -5 }}
                                    className="bg-white p-8 rounded-3xl border border-blue-50 shadow-sm hover:shadow-xl transition-all"
                                >
                                    <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                                        <IconComponent size={28} />
                                    </div>
                                    <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE THIS PRODUCT */}
            <section className="py-24 bg-gradient-to-br from-slate-900 to-blue-900 text-white rounded-[5rem] overflow-hidden relative shadow-inner">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <div className="inline-block px-4 py-1.5 bg-blue-500/20 rounded-full border border-blue-500/30 text-blue-400 font-bold text-xs tracking-widest uppercase mb-8">
                                Trusted by Healthcare
                            </div>
                            <h2 className="text-4xl font-heading font-bold mb-8 leading-tight">
                                Reliable Bio-Protection <br />
                                <span className="text-blue-400">for Healthcare Experts.</span>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {content.whyChoose.map((reason, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                                        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center">
                                            <CheckCircle2 size={16} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1 leading-tight">{reason.title}</h4>
                                            <p className="text-slate-400 text-sm">{reason.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="aspect-square rounded-[3rem] overflow-hidden relative group">
                                <img src={product.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply flex items-center justify-center"></div>
                                <div className="absolute inset-x-0 bottom-0 p-12 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent">
                                    <h3 className="text-white font-bold text-3xl mb-4">Sterling Purity</h3>
                                    <p className="text-slate-300 text-lg">Our medical supplies are sterilized and approved for global hospital use under strict quality control.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* USED BY INDUSTRIES */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-primary">Industries We Protect</h2>
                    <div className="flex flex-wrap justify-center gap-8">
                        {content.industries.map((industry, i) => {
                            const IndustryIcon = IconMap[industry.icon] || Building2;
                            return (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="p-8 bg-slate-50 border border-slate-100 rounded-3xl flex flex-col items-center justify-center gap-4 hover:bg-blue-600 hover:text-white transition-all text-center w-full sm:w-56 group"
                                >
                                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-blue-600 mb-2 shadow-sm group-hover:bg-blue-500 group-hover:text-white transition-all">
                                        <IndustryIcon size={32} />
                                    </div>
                                    <span className="font-bold text-sm tracking-wide uppercase">{industry.name}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MedicalDetail;
