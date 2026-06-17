import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, CheckCircle2, Package, Globe, User, Mail, Building2, MessageSquare, ShieldCheck, ArrowRight, ChevronDown } from "lucide-react";
import { products } from "../../data/products";

const QuoteModal = ({ isOpen, onClose }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);
    const [mainCategory, setMainCategory] = useState("Packaging");

    // Dynamically generate sub-products from products.js
    const subProducts = products.reduce((acc, product) => {
        const category = product.category || "Other";
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product.name);
        return acc;
    }, { "Other": ["General Sourcing Inquiry"] });

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = 'var(--scrollbar-width, 0px)';
        } else {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        }
        return () => {
            document.body.style.overflow = '';
            document.body.style.paddingRight = '';
        };
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            setIsSubmitted(true);
        }, 1500);
    };

    if (!isOpen && !isSubmitted) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] grid place-items-center p-4 md:p-6 overflow-hidden">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-primary/70 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 30 }}
                        className="relative w-full max-w-6xl bg-white rounded-[2rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.5)] flex flex-col md:flex-row h-full max-h-[90vh] z-20 overflow-hidden"
                    >
                        {/* Close Button */}
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 p-2 rounded-xl hover:bg-slate-100 text-slate-400 hover:text-primary transition-all z-50 bg-white/90 backdrop-blur border border-slate-100 shadow-sm"
                        >
                            <X size={24} />
                        </button>

                        {!isSubmitted ? (
                            <>
                                {/* Left Side - Brand & Trust - Optimized for Desktop */}
                                <div className="hidden md:flex md:w-[28%] bg-primary p-12 text-white flex-col justify-between relative overflow-hidden shrink-0">
                                    <div className="relative z-10">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/20 rounded-full text-accent text-[11px] font-bold uppercase tracking-[0.2em] mb-8 border border-white/10">
                                            <Globe size={12} /> Trade Division
                                        </div>
                                        <h2 className="text-4xl lg:text-5xl font-heading font-black mb-8 leading-[1.1] tracking-tight text-white">
                                            Get Your <br />
                                            <span className="text-accent underline decoration-accent/30 underline-offset-8">Quote</span>
                                        </h2>
                                        <p className="text-slate-300 text-base leading-relaxed mb-12 font-medium opacity-90">
                                            Premium quality sourcing and seamless global logistics.
                                        </p>

                                        <div className="space-y-8">
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-accent border border-white/5 shrink-0">
                                                    <Package size={24} />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-white text-base">Bulk Supply</p>
                                                    <p className="text-slate-400 text-sm">Direct Manufacturer</p>
                                                </div>
                                            </div>
                                            <div className="flex items-start gap-4">
                                                <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-accent border border-white/5 shrink-0">
                                                    <ShieldCheck size={24} />
                                                </div>
                                                <div>
                                                    <p className="font-bold text-white text-base">Quality First</p>
                                                    <p className="text-slate-400 text-sm">ISO Standards</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mt-12 pt-8 border-t border-white/10">
                                        <div className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-1">Entity</div>
                                        <div className="text-white font-extrabold text-sm">ETEON INTERNATIONAL</div>
                                    </div>
                                </div>

                                {/* Right Side - Form Container */}
                                <div className="flex-1 h-full overflow-y-auto custom-scrollbar bg-white p-8 md:p-14 pb-24">
                                    <div className="shrink-0 mb-10 border-b border-slate-100 pb-8">
                                        <div className="flex items-center gap-3 mb-2 text-accent font-bold text-xs uppercase tracking-[0.2em]">
                                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Secure Inquiry Line
                                        </div>
                                        <h3 className="text-3xl font-bold text-primary mb-2 tracking-tight">Requirement Details</h3>
                                        <p className="text-slate-500 font-medium text-lg">Detailed and accurate specifications for an optimized quote.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-8">
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                            <div className="space-y-2.5">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name *</label>
                                                <input required type="text" placeholder="e.g. Robert Smith" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-base font-bold text-primary focus:outline-none focus:border-accent focus:bg-white transition-all placeholder:text-slate-300 shadow-sm" />
                                            </div>
                                            <div className="space-y-2.5">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Work Email *</label>
                                                <input required type="email" placeholder="robert@company.com" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-base font-bold text-primary focus:outline-none focus:border-accent focus:bg-white transition-all placeholder:text-slate-300 shadow-sm" />
                                            </div>
                                        </div>

                                        <div className="space-y-2.5">
                                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Company / Organization</label>
                                            <input required type="text" placeholder="Your Organization Name" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-base font-bold text-primary focus:outline-none focus:border-accent focus:bg-white transition-all placeholder:text-slate-300 shadow-sm" />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-slate-50 p-7 rounded-[2rem] border border-slate-100 shadow-inner">
                                            <div className="space-y-2.5">
                                                <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Main Category</label>
                                                <div className="relative">
                                                    <select
                                                        value={mainCategory}
                                                        onChange={(e) => setMainCategory(e.target.value)}
                                                        className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-4 text-base font-black text-primary focus:outline-none focus:border-accent transition-all appearance-none cursor-pointer shadow-sm"
                                                    >
                                                        {Object.keys(subProducts).map(cat => (
                                                            <option key={cat} value={cat}>
                                                                {cat === "Packaging" ? "Packaging Solutions" :
                                                                    cat === "Agriculture" ? "Agricultural Products" :
                                                                        cat === "Medical" ? "Medical Supplies" : cat === "Other" ? "Others" : cat}
                                                            </option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                                                </div>
                                            </div>
                                            <div className="space-y-2.5">
                                                <label className="text-xs font-bold text-primary uppercase tracking-widest ml-1">Specific Product</label>
                                                <div className="relative">
                                                    <select className="w-full bg-white border-2 border-slate-100 rounded-2xl px-6 py-4 text-base font-black text-primary focus:outline-none focus:border-accent transition-all appearance-none cursor-pointer shadow-sm">
                                                        {subProducts[mainCategory].map(product => (
                                                            <option key={product} value={product}>{product}</option>
                                                        ))}
                                                    </select>
                                                    <ChevronDown className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={20} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                            <div className="md:col-span-1 space-y-2.5">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Est. Quantity</label>
                                                <input type="text" placeholder="e.g. 5000 MT" className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-base font-bold text-primary focus:outline-none focus:border-accent focus:bg-white transition-all shadow-sm" />
                                            </div>
                                            <div className="md:col-span-2 space-y-2.5">
                                                <label className="text-xs font-bold text-slate-400 uppercase tracking-widest ml-1">Special Requirements</label>
                                                <textarea rows="2" placeholder="Tell us about specific sizes, destinations, colors, or deadlines..." className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 text-base font-bold text-primary focus:outline-none focus:border-accent focus:bg-white transition-all resize-none shadow-sm"></textarea>
                                            </div>
                                        </div>

                                        <button
                                            disabled={loading}
                                            type="submit"
                                            className="w-full bg-primary text-white font-black text-xl py-6 rounded-2xl hover:bg-opacity-95 transition-all shadow-2xl shadow-primary/20 flex items-center justify-center gap-4 group relative overflow-hidden active:scale-[0.98]"
                                        >
                                            {loading ? (
                                                <div className="w-8 h-8 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    Generate Custom Quote Request <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
                                                </>
                                            )}
                                        </button>
                                    </form>

                                    <div className="flex items-center justify-center gap-6 mt-12 mb-6">
                                        <div className="h-px bg-slate-100 flex-grow" />
                                        <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.3em] whitespace-nowrap">
                                            Secure Trade Inquiry Line
                                        </p>
                                        <div className="h-px bg-slate-100 flex-grow" />
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col items-center justify-center p-16 md:p-24 bg-white">
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    className="w-28 h-28 bg-emerald-100 text-emerald-600 rounded-3xl flex items-center justify-center mx-auto mb-10 shadow-xl shadow-emerald-500/10"
                                >
                                    <CheckCircle2 size={56} />
                                </motion.div>
                                <h2 className="text-5xl font-heading font-black text-primary mb-6 tracking-tight">Request Received!</h2>
                                <p className="text-slate-500 text-xl max-w-sm mx-auto mb-10 leading-relaxed font-medium">
                                    Thank you for your interest in <span className="text-primary font-bold underline decoration-accent decoration-2 underline-offset-4">Eteon International</span>. One of our experts will contact you shortly.
                                </p>
                                <button
                                    onClick={() => {
                                        setIsSubmitted(false);
                                        onClose();
                                    }}
                                    className="bg-primary text-white px-14 py-5 rounded-2xl font-black text-lg hover:shadow-2xl hover:shadow-primary/20 transition-all active:scale-95"
                                >
                                    Done
                                </button>
                            </div>
                        )}
                    </motion.div>

                    <style>{`
                        .custom-scrollbar::-webkit-scrollbar {
                            width: 10px;
                        }
                        .custom-scrollbar::-webkit-scrollbar-track {
                            background: #f1f5f9;
                            border-radius: 10px;
                        }
                        .custom-scrollbar::-webkit-scrollbar-thumb {
                            background: #cbd5e1;
                            border-radius: 10px;
                            border: 3px solid #f1f5f9;
                            transition: all 0.2s ease;
                        }
                        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                            background: #94a3b8;
                        }
                        /* Ensure the form doesn't scroll the body on mobile devices */
                        .overscroll-contain {
                            overscroll-behavior: contain;
                        }
                    `}</style>
                </div>
            )}
        </AnimatePresence>
    );
};

export default QuoteModal;
