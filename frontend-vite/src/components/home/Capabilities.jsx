import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ShieldCheck, Ship, FileCheck, Box, Anchor, ArrowUpRight } from "lucide-react";

const capabilities = [
    {
        id: 1,
        title: "Global Sourcing",
        icon: Globe,
        shortDesc: "Strategic procurement network",
        desc: "We leverage an extensive network of verified manufacturers to source premium products at competitive rates, ensuring reliable supply chains.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1000&q=80",
        stats: "50+ Countries"
    },
    {
        id: 2,
        title: "Quality Control",
        icon: ShieldCheck,
        shortDesc: " rigorous inspection protocols",
        desc: "From raw material checks to pre-shipment inspections, our zero-tolerance quality assurance ensures your goods meet global standards.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1000&q=80",
        stats: "ISO Certified"
    },
    {
        id: 3,
        title: "Global Logistics",
        icon: Ship,
        shortDesc: "Multimodal freight solutions",
        desc: "Seamless Air, Sea, and Land transport solutions optimized for speed and cost. We handle the complexity of international freight so you don't have to.",
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1000&q=80",
        stats: "End-to-End"
    },
    {
        id: 4,
        title: "Customs Clearance",
        icon: FileCheck,
        shortDesc: "Hassle-free documentation",
        desc: "Expert handling of HS codes, duty calculations, and port documentation to ensure swift clearance and avoid costly delays.",
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=1000&q=80",
        stats: "100% Compliant"
    },
    {
        id: 5,
        title: "Warehousing",
        icon: Box,
        shortDesc: "Smart storage & distribution",
        desc: "State-of-the-art warehousing facilities for consolidation, packaging, and just-in-time distribution to keep your supply chain fluid.",
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
        stats: "24/7 Security"
    },
    {
        id: 6,
        title: "Private Labeling",
        icon: Anchor,
        shortDesc: "Custom branding (OEM)",
        desc: "Create your own brand identity with our OEM/ODM services. We handle custom packaging, labeling, and design to make the product yours.",
        image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=1000&q=80",
        stats: "Custom Design"
    }
];

const Capabilities = () => {
    // Default to the third item (Logistics) being active initially for visual balance
    const [activeId, setActiveId] = useState(3);

    return (
        <section className="py-24 bg-primary overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="mb-16 text-center max-w-3xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-accent text-sm font-medium uppercase tracking-wider mb-6 backdrop-blur-sm"
                    >
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                        Our Expertise
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        transition={{ delay: 0.1 }}
                        className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                    >
                        Eteon International's Capabilities that <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400">Power Global Trade.</span>
                    </motion.h2>
                </div>

                {/* Accordion Gallery */}
                <div className="flex flex-col lg:flex-row h-[800px] lg:h-[600px] gap-4 w-full">
                    {capabilities.map((item) => {
                        const isActive = activeId === item.id;

                        return (
                            <motion.div
                                key={item.id}
                                layout
                                onClick={() => setActiveId(item.id)}
                                onMouseEnter={() => setActiveId(item.id)}
                                className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]
                                    ${isActive
                                        ? "flex-[3] lg:flex-[3.5]"
                                        : "flex-[1] opacity-70 hover:opacity-100"
                                    }
                                `}
                            >
                                {/* Background Image with Zoom Effect */}
                                <div className="absolute inset-0 w-full h-full">
                                    <motion.img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        animate={{ scale: isActive ? 1.1 : 1 }}
                                        transition={{ duration: 0.7 }}
                                    />
                                    {/* Gradients */}
                                    <div className={`absolute inset-0 bg-primary/40 transition-opacity duration-500 ${isActive ? 'opacity-0' : 'opacity-60'}`} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-between">
                                    {/* Top: Icon & Index */}
                                    <div className="flex justify-between items-start">
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-md border border-white/20 transition-all duration-500
                                            ${isActive ? "bg-accent/90 text-white rotate-0" : "bg-white/10 text-white/50 -rotate-12"}
                                        `}>
                                            <item.icon size={24} />
                                        </div>
                                        <span className="text-4xl font-heading font-bold text-white/10">0{item.id}</span>
                                    </div>

                                    {/* Bottom: Text Info */}
                                    <div className="relative z-10">
                                        <motion.div
                                            layout
                                            className="overflow-hidden"
                                        >
                                            <motion.h3
                                                layout="position"
                                                className={`font-heading font-bold text-white mb-2 leading-tight transition-all duration-500 origin-left
                                                ${isActive ? "text-3xl lg:text-4xl" : "text-xl lg:text-2xl truncate"}
                                            `}>
                                                {item.title}
                                            </motion.h3>

                                            <div className={`space-y-4 transition-all duration-500 ${isActive ? "opacity-100 max-h-48 mt-4" : "opacity-0 max-h-0"}`}>
                                                <p className="text-slate-300 text-base lg:text-lg leading-relaxed border-l-2 border-accent pl-4">
                                                    {item.desc}
                                                </p>

                                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                                    <span className="text-accent font-bold tracking-wider uppercase text-sm">{item.stats}</span>
                                                    <button className="flex items-center gap-2 text-white text-sm font-medium hover:text-accent transition-colors group">
                                                        Learn More <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                                    </button>
                                                </div>
                                            </div>

                                            {/* Collapsed state hint */}
                                            {!isActive && (
                                                <p className="text-slate-400 text-sm mt-1">{item.shortDesc}</p>
                                            )}
                                        </motion.div>
                                    </div>
                                </div>

                                {/* Active Outline */}
                                {isActive && (
                                    <motion.div
                                        layoutId="outline"
                                        className="absolute inset-0 border-2 border-accent/50 rounded-3xl pointer-events-none"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
