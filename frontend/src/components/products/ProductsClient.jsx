"use client";

import React, { useState, useEffect, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search, Box } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { products } from '../../data/products';

const categories = ["All", "Packaging", "Organic and Cowdung Fertilizer", "Surgical and Disposable"];

const ProductsContent = () => {
    const searchParams = useSearchParams();
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        window.scrollTo(0, 0);
        const categoryParam = searchParams.get('category');
        if (categoryParam && categories.includes(categoryParam)) {
            setActiveCategory(categoryParam);
        }
    }, [searchParams]);

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === "All" || product.group === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-white min-h-screen font-body text-slate-800">
            {/* HERO WITH IMAGE BACKGROUND */}
            <section className="relative pt-[180px] lg:pt-[240px] pb-[80px] lg:pb-[120px] flex items-center justify-center overflow-hidden bg-slate-900 border-b border-slate-100">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://salesplastics.com/wp-content/uploads/2025/08/Polypropylene-Bags-A-Versatile-Packaging-Solution.webp"
                        alt="Global Trade and Industrial Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    {/* Dark Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-slate-900/40"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl">
                        <div className="flex items-center gap-2 text-emerald-400 font-bold mb-6">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <span className="uppercase tracking-widest text-xs">Premium Inventory</span>
                        </div>

                        <h1 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                            Global Products <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-200">Catalog.</span>
                        </h1>

                        <p className="text-slate-300 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
                            A curated selection of high-grade commodities sourced for international trade. Certified quality, global standards.
                        </p>

                        {/* Search Bar Embedded in Hero */}
                        <div className="max-w-lg relative group">
                            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                                <Search className="text-slate-400 group-focus-within:text-emerald-400 transition-colors" size={20} />
                            </div>
                            <input
                                type="text"
                                placeholder="Search our global inventory..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl text-white placeholder-slate-400 focus:outline-none focus:bg-white/20 focus:border-emerald-500/50 transition-all font-medium shadow-xl"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* CATEGORY NAV */}
            <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-lg border-b border-slate-200 shadow-sm">
                <div className="container mx-auto px-4">
                    <div className="flex overflow-x-auto gap-8 py-4 no-scrollbar">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`text-sm font-bold uppercase tracking-wider whitespace-nowrap transition-colors relative py-2 ${activeCategory === cat
                                    ? "text-primary"
                                    : "text-slate-500 hover:text-primary"
                                    }`}
                            >
                                {cat}
                                {activeCategory === cat && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* PRODUCT GRID - Dark Cards */}
            <section className="py-20 container mx-auto px-4">

                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                transition={{ duration: 0.4 }}
                                className="group flex flex-col h-full bg-transparent border-0 shadow-none transition-all duration-300"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-square overflow-hidden bg-slate-50 border border-slate-100/60 rounded-lg flex items-center justify-center">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    {/* Glass Category Badge */}
                                    <div className="absolute top-3 left-3 bg-white/80 backdrop-blur-md border border-slate-100/50 px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-widest text-primary shadow-sm">
                                        {product.group}
                                    </div>
                                </div>
 
                                {/* Content Body */}
                                <div className="pt-6 pb-4 flex flex-col items-center flex-grow text-center">
                                    <h3 className="font-heading font-bold text-slate-800 text-lg md:text-xl mb-4 group-hover:text-primary transition-colors line-clamp-2 px-2">
                                        {product.name}
                                    </h3>
                                    <p className="text-textSecondary text-xs leading-relaxed line-clamp-2 mb-6 hidden">
                                        {product.desc}
                                    </p>
                                    <Link
                                        href={`/products/${product.slug}`}
                                        className="mt-auto inline-flex items-center justify-center px-8 py-2.5 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-md font-bold text-xs uppercase tracking-wider transition-all duration-300"
                                    >
                                        READ MORE
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-200">
                        <Box size={40} className="mx-auto text-slate-300 mb-4" />
                        <h3 className="text-xl font-bold text-primary mb-2">No matching items</h3>
                        <button
                            onClick={() => { setActiveCategory("All"); setSearchQuery(""); }}
                            className="text-accent font-bold hover:underline"
                        >
                            Reset Catalog
                        </button>
                    </div>
                )}

            </section>
        </div>
    );
};

export default function ProductsClient() {
    return (
        <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin" /></div>}>
            <ProductsContent />
        </Suspense>
    );
}
