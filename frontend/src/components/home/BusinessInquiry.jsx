"use client";

import React, { useState, useEffect, useRef } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import api from "../../utils/api";

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

const BusinessInquiry = () => {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const leftColRef = useRef(null);
    const rightColRef = useRef(null);

    useEffect(() => {
        if (!sectionRef.current) return;

        // Header animation
        gsap.fromTo(headerRef.current,
            { opacity: 0, x: -100 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );

        // Left Column animation
        gsap.fromTo(leftColRef.current,
            { opacity: 0, x: -60 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: leftColRef.current,
                    start: "top 90%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse"
                }
            }
        );

        // Right Column animation
        gsap.fromTo(rightColRef.current,
            { opacity: 0, x: 60 },
            {
                opacity: 1,
                x: 0,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: rightColRef.current,
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const payload = {
                name: formState.name,
                email: formState.email,
                phone: formState.phone,
                interest: formState.message
            };
            await api.post("/inquiries", payload);
            setIsSuccess(true);
        } catch (error) {
            console.error("Inquiry submission failed: ", error);
            alert("Failed to submit inquiry. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormState({ ...formState, [e.target.name]: e.target.value });
    };

    return (
        <section ref={sectionRef} className="py-24 bg-surface relative" id="contact">
            <div className="container mx-auto px-4">

                {/* Header */}
                <div 
                    ref={headerRef}
                    className="text-center mb-16 opacity-0"
                >
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-3 block">
                        Contact Us
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-primary leading-tight mb-6">
                        Get a Free <br />
                        <span className="text-accent relative inline-block">
                            Quote
                            <svg className="absolute w-full h-3 -bottom-0 left-0 text-accent opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-textSecondary text-lg max-w-2xl mx-auto">
                        Connect with our export specialists today. We provide competitive pricing and tailored logistics solutions for your business.
                    </p>
                </div>

                <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
                    <div className="grid lg:grid-cols-5 min-h-[600px]">

                        {/* Left Side: Info & Value Prop */}
                        <div 
                            ref={leftColRef}
                            className="lg:col-span-2 bg-primary text-white p-10 md:p-12 relative overflow-hidden flex flex-col justify-between opacity-0"
                        >
                            {/* Decor */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-accent opacity-10 rounded-fullblur-3xl -translate-y-1/2 translate-x-1/2" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500 opacity-10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

                            <div className="relative z-10">
                                <span className="text-white font-bold uppercase tracking-widest text-xs mb-4 block">
                                    Let's collaborate
                                </span>
                                <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                                    Ready to Expand Your Reach?
                                </h2>
                                <p className="text-slate-300 mb-8 leading-relaxed">
                                    Partner with Eteon International for reliable, high-quality export solutions tailored to your market needs.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                                            <Mail size={18} className="text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400 mb-1">Email for Inquiries</p>
                                            <a href="mailto:info@eteoninternational.com" className="font-semibold hover:text-accent transition-colors">info@eteoninternational.com</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                                            <Phone size={18} className="text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400 mb-1">Chat / Call</p>
                                            <a href="tel:+919558555447" className="font-semibold hover:text-accent transition-colors">+91 95585 55447</a>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shrink-0">
                                            <MapPin size={18} className="text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-400 mb-1">Headquarters</p>
                                            <p className="font-medium">Gujarat, India</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                                <div className="flex items-center gap-4 text-xs font-medium text-slate-300">
                                    <span className="flex items-center gap-1.5">
                                        <CheckCircle2 size={14} className="text-white" /> Licensed Exporter
                                    </span>
                                    <span className="flex items-center gap-1.5">
                                        <CheckCircle2 size={14} className="text-white" /> 24/7 Support
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Inquiry Form */}
                        <div 
                            ref={rightColRef}
                            className="lg:col-span-3 p-10 md:p-12 bg-white relative opacity-0"
                        >
                            {isSuccess ? (
                                <div className="h-full flex flex-col items-center justify-center text-center p-8">
                                    <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-6">
                                        <CheckCircle2 size={40} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-primary mb-2">Message Sent!</h3>
                                    <p className="text-textSecondary mb-8 max-w-sm">
                                        Thank you for your interest. Our export specialists will review your requirements and get back to you within 24 hours.
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="text-primary font-bold hover:text-accent transition-colors flex items-center gap-2"
                                    >
                                        Send another message <ArrowRight size={16} />
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <div className="mb-8">
                                        <h3 className="text-2xl font-bold text-primary mb-2">Start Your Inquiry</h3>
                                        <p className="text-textSecondary text-sm">Fill out the form below to receive a custom quote or product catalog.</p>
                                    </div>

                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-primary ml-1">Full Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    required
                                                    value={formState.name}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-slate-400"
                                                    placeholder="John Doe"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-bold text-primary ml-1">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    required
                                                    value={formState.email}
                                                    onChange={handleChange}
                                                    className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-slate-400"
                                                    placeholder="john@company.com"
                                                />
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary ml-1">Phone Number</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                required
                                                value={formState.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-slate-400"
                                                placeholder="+91 95585 55447"
                                            />
                                        </div>

                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-primary ml-1">Message</label>
                                            <textarea
                                                name="message"
                                                rows="4"
                                                required
                                                value={formState.message}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all placeholder:text-slate-400 resize-none"
                                                placeholder="Please specify estimated quantity, destination, and any specific requirements..."
                                            ></textarea>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-accent hover:bg-accent/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-accent/25 transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed group"
                                        >
                                            {isSubmitting ? (
                                                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            ) : (
                                                <>
                                                    Submit Inquiry <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default BusinessInquiry;

