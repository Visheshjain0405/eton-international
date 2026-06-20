"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";
import gsap from "gsap";

const slides = [
    {
        image: "https://salesplastics.com/wp-content/uploads/2025/08/Polypropylene-Bags-A-Versatile-Packaging-Solution.webp",
        tagline: "Industrial Packaging",
        title: "PP Bag and Packaging Solutions",
        subtitle: "Durable and high-quality woven sacks and industrial packaging for diverse global needs.",
        cta: "Explore Packaging",
        link: "/products?category=Packaging"
    },
    {
        image: "https://static.vecteezy.com/system/resources/thumbnails/072/890/875/small_2x/sustainable-composting-process-showing-organic-food-scraps-and-garden-waste-nourishing-a-new-plant-photo.jpeg",
        tagline: "Sustainable Farming",
        title: "Organic and Cowdung Fertilizer",
        subtitle: "High-grade organic fertilizers and agricultural inputs to maximize yield and soil health.",
        cta: "Explore Fertilizers",
        link: "/products?category=Organic and Cowdung Fertilizer"
    },
    {
        image: "https://i.pinimg.com/1200x/bc/ee/32/bcee32d169283a94850f145ca53cdab5.jpg",
        tagline: "Healthcare Solutions",
        title: "Surgical and Disposable",
        subtitle: "Reliable and sterile medical equipment designed for precision and patient safety.",
        cta: "Explore Medical",
        link: "/products?category=Surgical and Disposable"
    },
];

const ImageSlider = () => {
    const [current, setCurrent] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const slideRef = useRef(null);

    const nextSlide = () => {
        setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    // Auto-play
    useEffect(() => {
        let interval;
        if (isAutoPlaying) {
            interval = setInterval(() => {
                nextSlide();
            }, 5000);
        }
        return () => clearInterval(interval);
    }, [current, isAutoPlaying]);

    // GSAP Slide Animation
    useEffect(() => {
        if (!slideRef.current) return;

        const bg = slideRef.current.querySelector(".slide-bg");
        const badge = slideRef.current.querySelector(".slide-badge");
        const title = slideRef.current.querySelector(".slide-title");
        const subtitle = slideRef.current.querySelector(".slide-subtitle");
        const cta = slideRef.current.querySelector(".slide-cta");

        const tl = gsap.timeline();

        tl.fromTo(bg,
            { scale: 1, opacity: 0 },
            { scale: 1.08, opacity: 1, duration: 1.2, ease: "power2.out" }
        )
            .fromTo(badge,
                { opacity: 0, x: -30 },
                { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" },
                "-=0.9"
            )
            .fromTo(title,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
                "-=0.7"
            )
            .fromTo(subtitle,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
                "-=0.6"
            )
            .fromTo(cta,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" },
                "-=0.5"
            );

        return () => {
            tl.kill();
        };
    }, [current]);

    return (
        <div className="relative w-full h-[580px] lg:h-[750px] overflow-hidden group bg-primary">
            {/* Navigation Arrows - Positioned at absolute edges */}
            <button
                onClick={prevSlide}
                className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-2 lg:p-4 rounded-full border border-white/10 bg-black/20 text-white hover:bg-accent hover:border-accent transition-all backdrop-blur-md group cursor-pointer"
                aria-label="Previous Slide"
            >
                <ChevronLeft size={28} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-2 lg:p-4 rounded-full border border-white/10 bg-black/20 text-white hover:bg-accent hover:border-accent transition-all backdrop-blur-md group cursor-pointer"
                aria-label="Next Slide"
            >
                <ChevronRight size={28} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            <div ref={slideRef} className="absolute inset-0">
                {/* Background Image with Ken Burns Effect */}
                <div className="absolute inset-0 overflow-hidden">
                    <div
                        className="slide-bg w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${slides[current].image})` }}
                    />
                </div>

                {/* Professional Overlay: Linear Gradient + vignette */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/45 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-transparent to-transparent" />

                {/* Content Container */}
                <div className="relative h-full container mx-auto px-6 lg:px-12 flex flex-col justify-center">
                    <div className="max-w-3xl">
                        {/* Tagline Badge */}
                        <div className="slide-badge inline-block px-3 py-1 mb-4 border border-white/20 bg-white/10 rounded-full text-white font-medium text-sm tracking-wide uppercase backdrop-blur-sm">
                            {slides[current].tagline}
                        </div>

                        {/* Title */}
                        <h1 className="slide-title font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight">
                            {slides[current].title}
                        </h1>

                        {/* Subtitle */}
                        <p className="slide-subtitle font-body text-lg text-slate-300 mb-8 max-w-xl leading-relaxed">
                            {slides[current].subtitle}
                        </p>

                        {/* CTA Button */}
                        <div className="slide-cta flex flex-wrap gap-4">
                            <Link href={slides[current].link} className="bg-white hover:bg-white/90 text-primary px-8 py-3.5 rounded-lg font-semibold text-base transition-all shadow-lg shadow-black/10 flex items-center gap-2 group/btn">
                                {slides[current].cta}
                                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="/process" className="px-8 py-3.5 rounded-lg font-semibold text-base text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all">
                                Our Process
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${idx === current ? "w-10 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full z-20">
                <div
                    key={current}
                    className="h-full bg-white/60 animate-progress"
                    style={{ width: '100%' }}
                />
            </div>
        </div>
    );
};

export default ImageSlider;


