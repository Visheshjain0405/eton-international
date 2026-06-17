"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import Link from "next/link";

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
            }, 4000); // reduced from 6s to 4s
        }
        return () => clearInterval(interval);
    }, [current, isAutoPlaying]);

    return (
        <div
            className="relative w-full h-[500px] lg:h-[600px] overflow-hidden group bg-primary"
            // Removed onHover pausing to guarantee the slider always functions
        >
            {/* Navigation Arrows - Positioned at absolute edges */}
            <button
                onClick={prevSlide}
                className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-2 lg:p-4 rounded-full border border-white/10 bg-black/20 text-white hover:bg-accent hover:border-accent transition-all backdrop-blur-md group"
                aria-label="Previous Slide"
            >
                <ChevronLeft size={28} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-2 lg:p-4 rounded-full border border-white/10 bg-black/20 text-white hover:bg-accent hover:border-accent transition-all backdrop-blur-md group"
                aria-label="Next Slide"
            >
                <ChevronRight size={28} className="group-hover:translate-x-0.5 transition-transform" />
            </button>

            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"
                        }`}
                >
                    {/* Background Image with Ken Burns Effect */}
                    <div className="absolute inset-0 overflow-hidden">
                        <div
                            className={`w-full h-full bg-cover bg-center transition-transform duration-[8000ms] ease-out ${index === current ? "scale-110" : "scale-100"
                                }`}
                            style={{ backgroundImage: `url(${slide.image})` }}
                        />
                    </div>

                    {/* Professional Overlay: Linear Gradient + vignette */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/70 via-primary/30 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />

                    {/* Content Container */}
                    <div className="relative h-full container mx-auto px-6 lg:px-12 flex flex-col justify-center">
                        <div className="max-w-3xl">
                            {/* Tagline Badge */}
                            <div
                                className={`inline-block px-3 py-1 mb-4 border border-accent/50 bg-accent/10 rounded-full text-accent font-medium text-sm tracking-wide uppercase backdrop-blur-sm transition-all duration-700 transform ${index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                                    }`}
                            >
                                {slide.tagline}
                            </div>

                            {/* Title */}
                            <h1
                                className={`font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-white mb-6 leading-tight transition-all duration-700 delay-100 transform ${index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                                    }`}
                            >
                                {slide.title}
                            </h1>

                            {/* Subtitle */}
                            <p
                                className={`font-body text-lg text-slate-300 mb-8 max-w-xl leading-relaxed transition-all duration-700 delay-200 transform ${index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                                    }`}
                            >
                                {slide.subtitle}
                            </p>

                            {/* CTA Button */}
                            <div
                                className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 transform ${index === current ? "translate-y-0 opacity-100 shadow-xl" : "translate-y-8 opacity-0"
                                    }`}
                            >
                                <Link href={slide.link} className="bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 flex items-center gap-2 group/btn">
                                    {slide.cta}
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </Link>
                                <Link href="/process" className="px-8 py-3.5 rounded-lg font-semibold text-base text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all">
                                    Our Process
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Pagination Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
                {slides.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrent(idx)}
                        className={`h-2 rounded-full transition-all duration-300 ${idx === current ? "w-10 bg-accent" : "w-2 bg-white/40 hover:bg-white/60"
                            }`}
                        aria-label={`Go to slide ${idx + 1}`}
                    />
                ))}
            </div>

            {/* Progress Bar */}
            <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full z-20">
                <div
                    key={current}
                    className="h-full bg-accent animate-progress"
                    style={{ width: '100%' }}
                />
            </div>
        </div>
    );
};

export default ImageSlider;
