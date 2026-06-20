"use client";

import React, { useRef, useState, useEffect } from "react";
import { ArrowRight, Leaf, Stethoscope, Package } from "lucide-react";
import Link from "next/link";
import { products as categories } from "../../data/products";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const ProductCategories = () => {
    // Static Categories Definition
    const categories = [
        {
            id: 1,
            title: "PP Bag and Packaging Solutions",
            group: "Packaging",
            image: "https://salesplastics.com/wp-content/uploads/2025/08/Polypropylene-Bags-A-Versatile-Packaging-Solution.webp",
            desc: "Woven sacks, tarpaulins, and industrial fabrics.",
            icon: Package,
            link: "/products?category=Packaging"
        },
        {
            id: 2,
            title: "Organic and Cowdung Fertilizer",
            group: "Organic and Cowdung Fertilizer",
            image: "https://static.vecteezy.com/system/resources/thumbnails/072/890/875/small_2x/sustainable-composting-process-showing-organic-food-scraps-and-garden-waste-nourishing-a-new-plant-photo.jpeg",
            desc: "Organic vermicompost and sustainable manure.",
            icon: Leaf,
            link: "/products?category=Organic and Cowdung Fertilizer"
        },
        {
            id: 3,
            title: "Surgical and Disposable",
            group: "Surgical and Disposable",
            image: "https://i.pinimg.com/1200x/bc/ee/32/bcee32d169283a94850f145ca53cdab5.jpg",
            desc: "Sterile gloves, masks, and surgical disposables.",
            icon: Stethoscope,
            link: "/products?category=Surgical and Disposable"
        }
    ];

    const headerLeftRef = useRef(null);
    const headerRightRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        // Header Left animation
        gsap.fromTo(headerLeftRef.current,
            { opacity: 0, x: -60 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headerLeftRef.current,
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );

        // Header Right animation
        gsap.fromTo(headerRightRef.current,
            { opacity: 0, x: 60 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headerRightRef.current,
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );

        // Category Cards animation
        const cards = containerRef.current.querySelectorAll(".category-card");
        cards.forEach((card, idx) => {
            gsap.fromTo(card,
                { opacity: 0, x: 200, y: 0 },
                {
                    opacity: 1,
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: card,
                        start: "top 90%",
                        end: "bottom 10%",
                        toggleActions: "play reverse play reverse"
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section className="py-section bg-surface">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 overflow-hidden">
                    <div 
                        ref={headerLeftRef}
                        className="max-w-xl opacity-0"
                    >
                        <div className="inline-block px-3 py-1 mb-4 border border-accent/20 bg-accent/5 rounded-full text-accent font-medium text-sm tracking-wide uppercase">
                            Our Offerings
                        </div>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                            Product Categories
                        </h2>
                        <p className="text-textSecondary text-lg">
                            Explore our specialized divisions serving global industries.
                        </p>
                    </div>

                    <div
                        ref={headerRightRef}
                        className="opacity-0"
                    >
                        <Link href="/products" className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors group">
                            View Full Catalog <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>

                {/* Grid */}
                <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="category-card opacity-0 rounded-3xl overflow-hidden relative group cursor-pointer h-[450px] transition-transform duration-300 hover:-translate-y-2"
                        >
                            <Link href={category.link}>
                                <div className="absolute inset-0">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                </div>

                                <div className="absolute inset-x-0 bottom-0 p-8">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/20">
                                        <category.icon size={24} />
                                    </div>
                                    <h3 className="text-3xl font-heading font-bold text-white mb-3 leading-tight">
                                        {category.title}
                                    </h3>
                                    <p className="text-slate-300 mb-6 line-clamp-2">
                                        {category.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group-hover:text-emerald-400 transition-colors">
                                        Explore Products <ArrowRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;
