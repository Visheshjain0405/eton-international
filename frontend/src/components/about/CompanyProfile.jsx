"use client";

import React, { useEffect, useRef } from 'react';
import { Globe, Briefcase, ChevronRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const CompanyProfile = () => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const imgRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        // Animate left text content from left
        const textElements = textRef.current.children;
        gsap.fromTo(textElements,
            { opacity: 0, x: -60 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.15,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: textRef.current,
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );

        // Animate right image composition from right
        gsap.fromTo(imgRef.current,
            { opacity: 0, x: 60 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: imgRef.current,
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden bg-slate-50">
            {/* Clean Background with subtle grid */}
            <div className="absolute inset-0 z-0 opacity-40 bg-[size:40px_40px] bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">

                    {/* Left: Text Content */}
                    <div className="lg:w-1/2">
                        <div ref={textRef}>
                            <div className="flex items-center gap-3 mb-6 opacity-0">
                                <span className="w-12 h-[2px] bg-accent"></span>
                                <span className="text-accent font-bold tracking-widest text-sm uppercase">Who We Are</span>
                            </div>

                            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-8 leading-tight opacity-0">
                                Your Strategic Partner in <br />
                                <span className="text-primary/80">Global Commerce.</span>
                            </h2>

                            <div className="prose prose-lg text-textSecondary space-y-6 mb-10 opacity-0">
                                <p>
                                    Eteon International is a professionally managed, legally registered import-export firm dedicated to bridging the gap between high-quality Indian products and global markets.
                                </p>
                                <p>
                                    We specialize in the strategic sourcing and export of premium commodities, focusing on agricultural produce, processed foods, and industrial consumables. Our operations are built on a foundation of regulatory compliance and market intelligence.
                                </p>
                            </div>

                            <div className="border-t border-slate-200 pt-8 grid grid-cols-2 gap-8 opacity-0">
                                <div className="group">
                                    <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary mb-4 shadow-sm group-hover:border-accent transition-colors">
                                        <Globe size={24} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="font-bold text-primary text-lg mb-1">Global Reach</h4>
                                    <p className="text-sm text-slate-500">Active in Asia, Middle East & Europe</p>
                                </div>
                                <div className="group">
                                    <div className="w-12 h-12 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-primary mb-4 shadow-sm group-hover:border-accent transition-colors">
                                        <Briefcase size={24} strokeWidth={1.5} />
                                    </div>
                                    <h4 className="font-bold text-primary text-lg mb-1">Legally Registered</h4>
                                    <p className="text-sm text-slate-500">Fully licensed compliant entity</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Image Composition */}
                    <div ref={imgRef} className="lg:w-1/2 relative opacity-0">
                        <div className="relative">
                            <div className="relative z-10 rounded-xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=2670&auto=format&fit=crop"
                                    alt="Container Ship"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
                            </div>

                            {/* Decorative Frame Border (Behind) */}
                            <div className="absolute top-8 right-8 lg:-right-8 lg:top-8 w-full h-full border-2 border-slate-200 rounded-xl -z-10 hidden md:block"></div>

                            {/* Floating Stats Badge */}
                            <div className="absolute bottom-8 left-8 bg-white p-6 rounded-lg shadow-xl border border-slate-100 max-w-[240px] hidden md:block">
                                <div className="flex justify-between items-center mb-2">
                                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Experience</span>
                                    <ChevronRight size={16} className="text-accent" />
                                </div>
                                <div className="text-3xl font-bold text-primary mb-1">15+ Years</div>
                                <div className="text-sm text-slate-500">Connecting markets seamlessly.</div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default CompanyProfile;
