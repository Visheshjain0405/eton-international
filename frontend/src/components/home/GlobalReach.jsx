import React, { useState } from "react";
import { motion } from "framer-motion";
import { Globe2, MapPin, TrendingUp, Users } from "lucide-react";

const regions = [
    {
        name: "North America",
        countries: ["USA", "Canada"],
        coords: { top: "30%", left: "20%" }
    },
    {
        name: "Europe",
        countries: ["UK", "Germany", "France", "Netherlands"],
        coords: { top: "25%", left: "52%" }
    },
    {
        name: "Middle East",
        countries: ["UAE", "Saudi Arabia", "Qatar"],
        coords: { top: "45%", left: "62%" }
    },
    {
        name: "Asia Pacific",
        countries: ["Japan", "Singapore", "Australia"],
        coords: { top: "50%", left: "80%" }
    },
    {
        name: "Africa",
        countries: ["South Africa", "Kenya"],
        coords: { top: "60%", left: "55%" }
    }
];

const GlobalReach = () => {
    const [activeRegion, setActiveRegion] = useState(null);

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <span className="text-accent font-bold uppercase tracking-widest text-sm mb-3 block">
                        Global Presence
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-primary leading-tight mb-6">
                        Serving Clients <br />
                        <span className="text-accent relative inline-block">
                            Worldwide
                            <svg className="absolute w-full h-3 -bottom-0 left-0 text-accent opacity-40" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                            </svg>
                        </span>
                    </h2>
                    <p className="text-textSecondary text-lg max-w-2xl mx-auto">
                        From our headquarters to your doorstep. We have established strong logistics channels in key markets across 5 continents.
                    </p>
                </div>

                {/* Map Visual Area */}
                <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-slate-50 rounded-3xl border border-slate-100 mb-12 overflow-hidden group">

                    {/* Abstract Dot Map Background */}
                    <div className="absolute inset-0 opacity-20"
                        style={{
                            backgroundImage: 'radial-gradient(#1e293b 1.5px, transparent 1.5px)',
                            backgroundSize: '20px 20px'
                        }}
                    />

                    {/* World Map Image Overlay (Subtle) */}
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
                        alt="World Map"
                        className="absolute inset-0 w-full h-full object-cover object-center opacity-10 grayscale mix-blend-multiply"
                    />

                    {/* Interactive Pins */}
                    {regions.map((region, idx) => (
                        <div
                            key={idx}
                            className="absolute group/pin cursor-pointer"
                            style={{ top: region.coords.top, left: region.coords.left }}
                            onMouseEnter={() => setActiveRegion(idx)}
                            onMouseLeave={() => setActiveRegion(null)}
                        >
                            {/* Pulse Effect */}
                            <div className="absolute -inset-4 bg-accent/20 rounded-full animate-ping opacity-75" />
                            <div className="relative z-10 w-4 h-4 bg-accent rounded-full border-2 border-white shadow-lg transition-transform hover:scale-125" />

                            {/* Hover Tooltip */}
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                                animate={{
                                    opacity: activeRegion === idx ? 1 : 0,
                                    y: activeRegion === idx ? -10 : 10,
                                    scale: activeRegion === idx ? 1 : 0.9,
                                    pointerEvents: activeRegion === idx ? "auto" : "none"
                                }}
                                className="absolute bottom-full left-1/2 -translate-x-1/2 mb-4 w-48 bg-white p-4 rounded-xl shadow-xl border border-slate-100 text-center z-20"
                            >
                                <h4 className="font-bold text-primary mb-1">{region.name}</h4>
                                <div className="flex flex-wrap justify-center gap-1">
                                    {region.countries.map(c => (
                                        <span key={c} className="text-[10px] bg-slate-100 text-slate-500 px-1.5 py-0.5 rounded-md">
                                            {c}
                                        </span>
                                    ))}
                                </div>
                                {/* Tooltip Arrow */}
                                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 rotate-45 w-3 h-3 bg-white border-r border-b border-slate-100" />
                            </motion.div>
                        </div>
                    ))}
                </div>

                {/* Stats Grid Removed per user request */}

            </div>
        </section>
    );
};

export default GlobalReach;
