import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const slides = [
    {
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        tagline: "Global Logistics",
        title: "Shipping Solutions for a Connected World",
        subtitle: "Experience seamless international trade with our end-to-end import and export services tailored for your growth.",
        cta: "Discover More",
    },
    {
        image: "https://images.unsplash.com/photo-1494412651409-ae1e3ccb652d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        tagline: "Reliable Transport",
        title: "Efficiency in Every Mile We Travel",
        subtitle: "Our precision-driven logistics network ensures your cargo reaches its destination safely and on time, every time.",
        cta: "Get a Quote",
    },
    {
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
        tagline: "Warehousing & Storage",
        title: "Advanced Storage for Modern Supply Chains",
        subtitle: "Secure, climate-controlled, and digitally managed warehousing solutions to optimize your inventory flow.",
        cta: "Contact Us",
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
            }, 6000);
        }
        return () => clearInterval(interval);
    }, [current, isAutoPlaying]);

    return (
        <div
            className="relative w-full h-[500px] lg:h-[600px] overflow-hidden group bg-primary"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
        >
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
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/60 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-transparent" />

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
                                className={`flex flex-wrap gap-4 transition-all duration-700 delay-300 transform ${index === current ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                                    }`}
                            >
                                <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3.5 rounded-lg font-semibold text-base transition-all shadow-lg shadow-accent/25 hover:shadow-accent/40 flex items-center gap-2 group/btn">
                                    {slide.cta}
                                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                                <button className="px-8 py-3.5 rounded-lg font-semibold text-base text-white border border-white/20 hover:bg-white/10 backdrop-blur-sm transition-all">
                                    Our Services
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            {/* Modern Navigation Controls */}
            <div className="absolute bottom-8 right-6 lg:right-12 z-20 flex items-center gap-4">
                <div className="flex gap-2 mr-4">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrent(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === current ? "w-8 bg-accent" : "w-2 bg-white/30 hover:bg-white/50"
                                }`}
                        />
                    ))}
                </div>

                <div className="flex gap-2">
                    <button
                        onClick={prevSlide}
                        className="p-3 rounded-full border border-white/10 bg-black/20 text-white hover:bg-accent hover:border-accent transition-all backdrop-blur-md group"
                        aria-label="Previous Slide"
                    >
                        <ChevronLeft size={20} className="group-hover:-translate-x-0.5 transition-transform" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-3 rounded-full border border-white/10 bg-black/20 text-white hover:bg-accent hover:border-accent transition-all backdrop-blur-md group"
                        aria-label="Next Slide"
                    >
                        <ChevronRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Progress Bar (Optional Visual Flair) */}
            <div className="absolute bottom-0 left-0 h-1 bg-white/10 w-full z-20">
                <div
                    key={current} // Key change forces animation restart
                    className="h-full bg-accent animate-[progress_6s_linear_forward]"
                    style={{ width: '100%' }}
                />
            </div>
        </div>
    );
};

export default ImageSlider;
