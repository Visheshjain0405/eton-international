import React from 'react';
import { motion } from 'framer-motion';
import { Globe, MapPin, Navigation, TrendingUp } from 'lucide-react';

const GlobalOutlook = () => {
    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Map Background - Light Theme */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center bg-no-repeat pointer-events-none mix-blend-multiply"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-20 items-center">

                    {/* Left: Text Content */}
                    <div className="lg:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 border border-blue-100">
                            <Globe size={14} />
                            <span>International Reach</span>
                        </div>

                        <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6">
                            Borderless <span className="text-accent">Ambition.</span>
                        </h2>
                        <p className="text-textSecondary text-lg leading-relaxed mb-10">
                            We view the world as a single, interconnected marketplace. Our network spans across key strategic trade routes, ensuring that your goods move seamlessly across borders, time zones, and jurisdictions.
                        </p>

                        {/* Region Grid - Light Mode */}
                        <div className="grid grid-cols-2 gap-8">
                            {[
                                { title: "Middle East", desc: "Strategic Distribution Hubs", color: "border-blue-500" },
                                { title: "Southeast Asia", desc: "Primary Sourcing Markets", color: "border-emerald-500" },
                                { title: "Europe", desc: "Compliance & Trade Partners", color: "border-purple-500" },
                                { title: "Americas", desc: "Logistics & Supply Chain", color: "border-orange-500" }
                            ].map((item, i) => (
                                <div key={i} className={`pl-4 border-l-2 ${item.color}`}>
                                    <h4 className="font-bold text-primary text-lg mb-1">{item.title}</h4>
                                    <p className="text-sm text-slate-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual Data Visualization - Light Mode */}
                    <div className="lg:w-1/2 relative w-full flex justify-center lg:justify-end">
                        <div className="relative w-full max-w-md aspect-square">

                            {/* Central Radar / Globe Graphic */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                {/* Rings */}
                                <div className="absolute w-[100%] h-[100%] border border-dashed border-slate-200 rounded-full animate-[spin_60s_linear_infinite]"></div>
                                <div className="absolute w-[70%] h-[70%] border border-slate-100 rounded-full"></div>
                                <div className="absolute w-[40%] h-[40%] bg-blue-50 rounded-full blur-3xl opacity-50"></div>

                                {/* Globe Icon */}
                                <Globe size={120} className="text-slate-200" strokeWidth={0.5} />
                            </div>

                            {/* Floating Location Cards - Light Mode */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="absolute top-[10%] right-[0%] bg-white p-4 rounded-xl border border-slate-100 shadow-xl flex items-center gap-3"
                            >
                                <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-500 flex items-center justify-center">
                                    <Navigation size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-primary">Logistics</div>
                                    <div className="text-xs text-slate-400">Optimized Routes</div>
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 }}
                                className="absolute bottom-[20%] left-[0%] bg-white p-4 rounded-xl border border-slate-100 shadow-xl flex items-center gap-3"
                            >
                                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-500 flex items-center justify-center">
                                    <TrendingUp size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-primary">Market Growth</div>
                                    <div className="text-xs text-slate-400">Expanding Reach</div>
                                </div>
                            </motion.div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default GlobalOutlook;
