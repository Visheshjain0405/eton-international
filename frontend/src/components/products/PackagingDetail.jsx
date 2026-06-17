"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    CheckCircle2,
    Zap,
    ShieldCheck,
    Package,
    Globe2,
    ShoppingCart,
    Truck,
    Factory,
    Shovel,
    Building2,
    Search,
    Home,
    ChevronDown
} from 'lucide-react';

const IconMap = {
    Zap,
    ShieldCheck,
    Package,
    Globe2,
    ShoppingCart,
    Truck,
    Factory,
    Shovel,
    Building2,
    Search,
    Home
};

const PackagingDetail = ({ product }) => {
    const [openFaq, setOpenFaq] = useState(null);
    // Category-specific content
    const categoryContent = {
        features: [
            { title: "High Tensile Strength", desc: "Crafted from premium virgin polymers for maximum load-bearing capacity.", icon: "Zap" },
            { title: "UV Protection", desc: "Treated with specialized additives to ensure long life under direct sunlight.", icon: "ShieldCheck" },
            { title: "Moisture Resistance", desc: "Expert lamination options to keep contents dry and protected during shipping.", icon: "Package" },
            { title: "Eco-Conscious", desc: "100% recyclable materials contributing to a circular global economy.", icon: "Globe2" }
        ],
        whyChoose: [
            { title: "Export-Grade Quality", text: "Manufactured to meet the most rigorous international packaging standards." },
            { title: "Custom Branding", text: "High-resolution flexo and rotogravure printing for your brand identity." },
            { title: "Bulk Handling Efficiency", text: "Designed for seamless integration into automated filling lines." },
            { title: "Competitive Global Pricing", text: "Direct factory rates optimized for high-volume international orders." }
        ],
        industries: [
            { name: "Agriculture", icon: "Shovel" },
            { name: "Construction", icon: "Building2" },
            { name: "Chemicals", icon: "Factory" },
            { name: "Retail", icon: "ShoppingCart" },
            { name: "Logistics", icon: "Truck" }
        ]
    };

    const content = {
        features: product.features || categoryContent.features,
        whyChoose: product.whyChoose || categoryContent.whyChoose,
        industries: product.industries || categoryContent.industries
    };

    return (
        <div className="space-y-20">
            {/* USES BY INDUSTRIES (High Impact) */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-primary mb-12 text-center lg:text-left underline decoration-accent/30 underline-offset-8">Uses by Industries</h2>
                    <div className="flex flex-wrap justify-center lg:justify-start gap-10">
                        {content.industries.map((industry, i) => {
                            const IndustryIcon = IconMap[industry.icon] || Factory;
                            return (
                                <div key={i} className="flex flex-col items-center gap-4 w-28 text-center group">
                                    <div className="w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:border-primary group-hover:text-primary group-hover:bg-primary/5 transition-all duration-500 bg-white shadow-sm">
                                        <IndustryIcon size={28} strokeWidth={1.2} />
                                    </div>
                                    <span className="text-[11px] font-bold text-slate-500 uppercase tracking-tight group-hover:text-primary transition-colors duration-300">
                                        {industry.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            {/* TECHNICAL SPECIFICATIONS TABLE */}
            <section id="specs" className="py-20 bg-slate-50 rounded-[4rem]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4 flex items-center justify-center gap-4">
                            Technical Specification
                        </h2>
                        <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-5xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200 p-3">
                        <div className="rounded-[1.5rem] border border-slate-100 overflow-hidden">
                            <table className="w-full text-left border-collapse">
                                <tbody>
                                    {product.specs?.map((spec, i) => (
                                        <tr key={i} className={`${i % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'} border-b border-slate-50 hover:bg-accent/5 transition-colors`}>
                                            <td className="py-5 px-10 font-bold text-primary uppercase text-[12px] tracking-[0.15em] w-1/3 border-r border-slate-100 bg-slate-50/30">
                                                {spec.label}
                                            </td>
                                            <td className="py-5 px-10 font-semibold text-slate-700 text-base leading-relaxed">
                                                {spec.value}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES & BENEFITS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 underline decoration-accent/20 decoration-8 underline-offset-8">Product Features</h2>
                        <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {content.features.map((item, i) => {
                            const IconComponent = IconMap[item.icon] || Zap;
                            return (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                                >
                                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
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

            {/* DETAILED OVERVIEW & WHY CHOOSE */}
            {(product.longDescription || product.applicationsText) && (
                <section className="py-20 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-heading font-bold text-primary">Why Choose PP/HDPE Bags?</h2>
                                    <div className="w-20 h-1 bg-accent rounded-full"></div>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed font-medium">
                                    {product.longDescription}
                                </p>
                            </div>
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h2 className="text-3xl font-heading font-bold text-primary">Applications Of PP/HDPE Woven Bags</h2>
                                    <div className="w-20 h-1 bg-accent rounded-full"></div>
                                </div>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {product.applicationsText}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* USAGE GRID (4x4) */}
            {product.applicationItems && (
                <section className="py-20 bg-slate-50 border-y border-slate-100">
                    <div className="container mx-auto px-4">
                        <h3 className="text-2xl font-bold text-primary mb-12 text-center">Extensively used for packing:</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
                            {product.applicationItems.map((item, i) => (
                                <div key={i} className="bg-white p-4 border border-slate-200 flex items-center gap-3 group hover:border-primary transition-colors">
                                    <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform"></div>
                                    <span className="font-bold text-slate-700 text-sm tracking-tight">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* FEATURES & BENEFITS (Bullet Points) */}
            {product.detailedBenefits && (
                <section className="py-24 bg-white">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto space-y-12">
                            <h2 className="text-3xl font-heading font-bold text-primary text-center">Features & Benefit of Our Woven Bag</h2>
                            <div className="grid grid-cols-1 gap-6">
                                {product.detailedBenefits.map((benefit, i) => (
                                    <div key={i} className="flex gap-4 items-start p-6 rounded-2xl bg-slate-50 border-l-4 border-primary hover:shadow-md transition-shadow">
                                        <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                                        <p className="text-slate-700 font-semibold leading-relaxed">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* FAQ SECTION */}
            {product.faqs && (
                <section className="py-24 bg-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="max-w-3xl mx-auto space-y-12">
                            <div className="text-center space-y-4">
                                <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary">Frequently Asked Questions</h2>
                                <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
                            </div>

                            <div className="space-y-4">
                                {product.faqs.map((faq, i) => (
                                    <div key={i} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === i ? null : i)}
                                            className="w-full px-8 py-6 flex items-center justify-between text-left group"
                                        >
                                            <span className="font-bold text-lg text-primary group-hover:text-accent transition-colors">
                                                {faq.question}
                                            </span>
                                            <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center transition-transform duration-300 ${openFaq === i ? 'rotate-180 bg-accent text-white' : 'text-primary'}`}>
                                                <ChevronDown size={20} />
                                            </div>
                                        </button>

                                        <AnimatePresence>
                                            {openFaq === i && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: 'auto', opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="px-8 pb-8 pt-0 text-slate-600 font-medium leading-relaxed border-t border-slate-50 mt-[-1px]">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>
            )}

            {/* CALL TO ACTION / PROCESS */}
            <section className="py-24 bg-slate-900 text-white rounded-[4rem] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2 space-y-8">
                            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
                                Ready to partner with <br />
                                <span className="text-accent">Eteon International?</span>
                            </h2>
                            <p className="text-xl text-white/70">
                                Experience crafting excellence for your premium packaging needs. Get in touch today for global export solutions.
                            </p>
                            <div className="space-y-4">
                                {product.processSteps?.map((step, i) => (
                                    <div key={i} className="flex items-center gap-4">
                                        <div className="w-8 h-8 rounded-full bg-accent flex items-center justify-center font-bold text-white text-sm">
                                            {i + 1}
                                        </div>
                                        <span className="text-lg font-medium text-white/90">{step}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-8">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-5 bg-accent hover:bg-accent/90 text-white font-bold rounded-full shadow-2xl transition-all uppercase tracking-widest text-sm"
                                >
                                    Enquire for Quotation
                                </motion.button>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="bg-white/10 backdrop-blur-md p-10 rounded-[3rem] border border-white/20">
                                <h3 className="text-2xl font-bold mb-6 text-accent">Minimum Order Info</h3>
                                <p className="text-white/80 text-lg mb-8 italic">
                                    "We cater to global container-load requirements with strictly controlled lead times and manufacturing excellence."
                                </p>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-4 border-b border-white/10">
                                        <span className="text-white/60 font-bold uppercase text-xs">Minimum Quantity</span>
                                        <span className="text-white font-bold">20 FCL (10-12 MT)</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 border-b border-white/10">
                                        <span className="text-white/60 font-bold uppercase text-xs">Standard Weight</span>
                                        <span className="text-white font-bold">40 - 160 GSM</span>
                                    </div>
                                    <div className="flex justify-between items-center py-4 text-accent">
                                        <span className="font-bold uppercase text-xs">Market Reach</span>
                                        <span className="font-bold">Global Export</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PackagingDetail;
