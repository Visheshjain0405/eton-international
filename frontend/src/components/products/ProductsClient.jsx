"use client";

import React, { useState, useEffect, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Box } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { products } from '../../data/products';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const categories = ["All", "Packaging", "Organic and Cowdung Fertilizer", "Surgical and Disposable"];

const formatProductName = (name) => {
    if (!name) return "";
    if (name === name.toUpperCase()) {
        return name
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }
    return name;
};

const ProductsContent = () => {
    const searchParams = useSearchParams();
    const [activeCategory, setActiveCategory] = useState("All");
    const containerRef = useRef(null);

    useEffect(() => {
        window.scrollTo(0, 0);
        const categoryParam = searchParams.get('category');
        if (categoryParam && categories.includes(categoryParam)) {
            setActiveCategory(categoryParam);
        }
    }, [searchParams]);

    const filteredProducts = products.filter(product => {
        return activeCategory === "All" || product.group === activeCategory;
    });

    useEffect(() => {
        if (!containerRef.current) return;

        const cards = containerRef.current.querySelectorAll('.product-card');
        
        // Clean up previous ScrollTriggers to avoid duplicates
        const activeTriggers = ScrollTrigger.getAll();
        activeTriggers.forEach(trigger => trigger.kill());

        cards.forEach((card) => {
            gsap.fromTo(card,
                {
                    opacity: 0,
                    x: -200
                },
                {
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    ease: 'power2.out',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 95%',
                        end: 'bottom 5%',
                        toggleActions: 'play reverse play reverse',
                    }
                }
            );
        });

        ScrollTrigger.refresh();

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, [filteredProducts]);

    return (
        <div className="bg-white min-h-screen font-body text-slate-800">
            {/* HERO WITH IMAGE BACKGROUND (Thin, Wavy) */}
            <section className="relative pt-[140px] pb-[80px] md:pt-[180px] md:pb-[100px] flex items-center justify-center overflow-hidden bg-slate-900 border-b border-slate-100">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=2070"
                        alt="Global Shipping and Trade Background"
                        className="w-full h-full object-cover opacity-60"
                    />
                    {/* Dark Blueish/Teal Overlay matching ocean theme */}
                    <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90"></div>
                </div>

                <div className="container mx-auto px-4 relative z-10 flex flex-col items-center justify-center">
                    <h1 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-white text-center tracking-wider uppercase drop-shadow-md">
                        {activeCategory === "All" ? "Global Products" : activeCategory}
                    </h1>
                </div>

                {/* Wavy bottom divider matching Image 1 */}
                <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-[0]">
                    <svg className="relative block w-full h-[30px] md:h-[50px] lg:h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M0,0 C150,90 350,90 500,60 C650,30 850,30 1000,60 C1150,90 1200,90 1200,90 L1200,120 L0,120 Z" className="fill-white opacity-40"></path>
                        <path d="M0,40 C200,110 400,110 600,70 C800,30 1000,30 1200,80 L1200,120 L0,120 Z" className="fill-white"></path>
                    </svg>
                </div>
            </section>

            {/* PRODUCT GRID - Dark Cards */}
            <section className="py-20 max-w-6xl mx-auto px-8 md:px-16 xl:px-24">

                <motion.div
                    ref={containerRef}
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12"
                >
                    <AnimatePresence>
                        {filteredProducts.map((product) => {
                            return (
                                <div
                                    key={product.id}
                                    className="product-card group flex flex-col h-full bg-transparent border-0 shadow-none opacity-0 transition-all duration-300"
                                >
                                    {/* Image Container */}
                                    <div className="relative aspect-square overflow-hidden bg-[#EBEBEB] rounded-none flex items-center justify-center">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                        />
                                    </div>
     
                                    {/* Content Body */}
                                    <div className="pt-6 pb-4 flex flex-col items-center flex-grow text-center">
                                        <h3 className="font-heading font-semibold text-slate-900 text-lg md:text-xl mb-4 group-hover:text-primary transition-colors line-clamp-2 px-2">
                                            {formatProductName(product.name)}
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
                                </div>
                            );
                        })}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProducts.length === 0 && (
                    <div className="text-center py-24 bg-white rounded-3xl border border-dashed border-slate-200">
                        <Box size={40} className="mx-auto text-slate-300 mb-4" />
                        <h3 className="text-xl font-bold text-primary mb-2">No matching items</h3>
                        <button
                            onClick={() => { setActiveCategory("All"); }}
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
