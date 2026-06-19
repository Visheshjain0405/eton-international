"use client";

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowLeft,
    AlertCircle,
    Globe,
    ChevronRight,
    Mail
} from 'lucide-react';
import { useQuote } from '../../context/QuoteContext';
const ProductDetailClient = ({ product }) => {
    const { openQuoteModal } = useQuote();

    const specRows = [];
    if (product) {
        // Map specs directly from the product's defined data
        product.specs?.forEach(s => {
            specRows.push({ label: s.label, value: s.value });
        });
    }

    if (!product) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 px-4">
                <div className="text-center">
                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertCircle size={40} className="text-slate-300" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-primary mb-3">Product Not Found</h2>
                    <Link href="/products" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold">
                        <ArrowLeft size={18} /> Back to Catalog
                    </Link>
                </div>
            </div>
        );
    }


    return (
        <div className="bg-white min-h-screen font-body">
            {/* BREADCRUMBS */}
            <div className="bg-slate-50 border-b border-slate-200 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Link href="/" className="hover:text-primary">Home</Link>
                        <ChevronRight size={14} />
                        <Link href="/products" className="hover:text-primary">Products</Link>
                        <ChevronRight size={14} />
                        <span className="text-primary font-semibold">{product.name}</span>
                    </div>
                </div>
            </div>

            {/* PRODUCT TITLE BANNER */}
            <div className="bg-slate-50 border-y border-slate-200/60 py-12 text-center">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-heading font-semibold text-primary tracking-tight">
                        {product.name}
                    </h1>
                </div>
            </div>

            {/* PRODUCT HERO / DETAILS SECTION */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 items-start">
                        {/* LEFT COLUMN: PRODUCT IMAGE */}
                        <motion.div 
                            initial={{ opacity: 0, x: -60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="relative rounded-[2rem] overflow-hidden bg-slate-50 border border-slate-200 p-8 flex items-center justify-center shadow-sm">
                                <img 
                                    src={product.image} 
                                    alt={product.name} 
                                    className="w-full h-auto object-contain max-h-[500px] rounded-2xl" 
                                />
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary border border-white/20">
                                    Premium Product
                                </div>
                            </div>
                        </motion.div>

                        {/* RIGHT COLUMN: TECHNICAL SPECIFICATIONS TABLE */}
                        <motion.div 
                            initial={{ opacity: 0, x: 60 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: false, amount: 0.1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="w-full lg:w-1/2"
                        >
                            <div className="w-full border border-slate-200 rounded-2xl overflow-hidden bg-white shadow-sm">
                                <table className="w-full text-left border-collapse">
                                    <thead>
                                        <tr className="border-b border-slate-200 bg-white">
                                            <th colSpan="2" className="py-5 px-8 text-center text-xl font-bold text-slate-800 border-b border-slate-200">
                                                {product.name}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {specRows.map((row, i) => (
                                            <tr 
                                                key={i} 
                                                className={`${
                                                    i % 2 === 0 ? 'bg-slate-50/50' : 'bg-white'
                                                } border-b border-slate-200/60 hover:bg-slate-50 transition-colors`}
                                            >
                                                <td className="py-4 px-8 font-bold text-slate-700 text-sm w-1/3 border-r border-slate-200/60">
                                                    {row.label}
                                                </td>
                                                <td className="py-4 px-8 text-slate-600 text-sm whitespace-pre-line font-medium">
                                                    {row.value}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Export Inquiry CTA Button directly below Table */}
                            <div className="mt-8 flex flex-wrap gap-4">
                                <button
                                    onClick={openQuoteModal}
                                    className="bg-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-accent transition-all w-full sm:w-fit"
                                >
                                    <Mail size={20} /> Request Export Inquiry
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetailClient;
