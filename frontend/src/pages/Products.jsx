import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Search, Box, Grid } from 'lucide-react';
import { Link } from 'react-router-dom';
import { products } from '../data/products';

const categories = ["All", "Agriculture", "Food", "Medical"];

const Products = () => {
    const [activeCategory, setActiveCategory] = useState("All");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProducts = products.filter(product => {
        const matchesCategory = activeCategory === "All" || product.group === activeCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="bg-slate-50 min-h-screen font-body text-slate-800">

            {/* HERO WITH IMAGE BACKGROUND */}
            <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-slate-900 border-b border-slate-100">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2670&auto=format&fit=crop"
                        alt="Global Logistics Background"
                        className="w-full h-full object-cover opacity-80"
                    />
                    {/* Dark Gradient Overlay for text readability */}
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/70 to-slate-900/40"></div>
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
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                key={product.id}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ duration: 0.4 }}
                                className="group relative bg-[#0f172a] rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-slate-900/20 hover:-translate-y-1 transition-all duration-500"
                            >
                                {/* Background Gradient Pattern on Card */}
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-transparent pointer-events-none"></div>

                                {/* Image Area */}
                                <div className="relative h-72 overflow-hidden">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                                    />
                                    {/* Gradient to Card Body - Fades to Dark Slate */}
                                    <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>

                                    {/* Floating Category Tag - Dark Theme Variant */}
                                    <div className="absolute top-4 right-4 bg-black/60 backdrop-blur border border-white/10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-emerald-400">
                                        {product.group}
                                    </div>
                                </div>

                                {/* Content Body - Dark Text */}
                                <div className="p-8 pt-0 relative z-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-heading font-bold text-white group-hover:text-emerald-400 transition-colors pr-4 leading-tight">
                                            {product.name}
                                        </h3>
                                        {/* Action Button - White on Dark */}
                                        <Link
                                            to={`/products/${product.slug}`}
                                            className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-white hover:bg-emerald-500 hover:border-emerald-500 hover:rotate-45 transition-all shadow-lg shadow-black/20 shrink-0"
                                        >
                                            <ArrowUpRight size={22} strokeWidth={2} />
                                        </Link>
                                    </div>

                                    <p className="text-slate-400 text-sm leading-relaxed mb-8 line-clamp-2 border-l-2 border-slate-700 pl-4">
                                        {product.desc}
                                    </p>

                                    {/* Quick Spec Tags - Dark Mode Style */}
                                    <div className="flex gap-3 border-t border-white/5 pt-6">
                                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-bold text-slate-300">
                                            <Box size={14} className="text-emerald-500" />
                                            <span>Bulk Available</span>
                                        </div>
                                        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/5 text-xs font-bold text-slate-300">
                                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                                            <span>In Stock</span>
                                        </div>
                                    </div>
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

export default Products;
