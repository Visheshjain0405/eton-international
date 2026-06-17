import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, CheckCircle2, Scale, Award, Briefcase, Zap, HeartHandshake, Eye } from 'lucide-react';

const BusinessPhilosophy = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const pillars = [
        {
            title: "Quality First",
            subtitle: "Uncompromising Standards",
            desc: "We don't just inspect; we scrutinize. Excellence is the baseline, not the goal. Every product is vetted against rigorous international benchmarks.",
            icon: Award,
        },
        {
            title: "Ethical Sourcing",
            subtitle: "Sustainable Growth",
            desc: "Fair trade isn't a buzzword; it's our operating model. We ensure our manufacturers grow with us, creating a sustainable ecosystem.",
            icon: Scale,
        },
        {
            title: "Radical Transparency",
            subtitle: "Trust Through Truth",
            desc: "No hidden fees, no ambiguous terms. We believe in complete visibility from the initial quote to final delivery.",
            icon: Eye,
        },
        {
            title: "Long-term Partnership",
            subtitle: "Beyond Transactions",
            desc: "We build relationships that span decades. Your success is our success, and we work tirelessly to ensure your business thrives.",
            icon: HeartHandshake,
        }
    ];

    return (
        <section className="py-24 bg-surface flex items-center relative overflow-hidden">
            {/* Abstract Background Shapes */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-[-10%] left-[-5%] w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 items-start lg:items-center">

                    {/* Left Side: Header & Context */}
                    <div className="lg:w-1/3">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="text-accent font-bold tracking-widest text-sm uppercase mb-3 block">Our Philosophy</span>
                            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-primary mb-6 leading-tight">
                                Built on <br />
                                <span className="text-accent">Unshakable Values</span>
                            </h2>
                            <p className="text-textSecondary text-lg mb-8 leading-relaxed">
                                In a volatile global market, our values are the constants that keep your supply chain stable. We operate with a mindset of value creation, ensuring every interaction adds to your bottom line.
                            </p>

                            <div className="hidden lg:block relative pl-6 border-l-2 border-slate-200">
                                <p className="text-sm font-bold text-primary uppercase tracking-wide mb-1">Eteon Promise</p>
                                <p className="text-sm text-slate-500 italic">"Integrity is doing the right thing, even when no one is watching."</p>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Side: Interactive Grid */}
                    <div className="lg:w-2/3 w-full">
                        <div className="grid md:grid-cols-2 gap-4">
                            {pillars.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1 }}
                                    onMouseEnter={() => setHoveredIndex(idx)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className={`aspect-square flex flex-col justify-between relative p-6 rounded-2xl transition-all duration-300 cursor-default group overflow-hidden ${hoveredIndex === idx ? 'bg-white shadow-2xl scale-[1.02] border-accent/20' : 'bg-white shadow-sm border-transparent'
                                        } border`}
                                >
                                    {/* Gradient Top Border */}
                                    <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-transparent transition-all duration-500 ${hoveredIndex === idx ? 'opacity-100' : 'opacity-0'}`}></div>

                                    {/* Background Icon Watermark */}
                                    <div className="absolute -bottom-10 -right-10 text-slate-200 opacity-20 group-hover:opacity-30 transition-all duration-300 transform group-hover:rotate-12 pointer-events-none">
                                        <item.icon size={140} strokeWidth={1.5} />
                                    </div>

                                    {/* Content */}
                                    <div className="relative z-10 flex flex-col h-full justify-between">
                                        <div>
                                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300 ${hoveredIndex === idx ? 'bg-accent text-white' : 'bg-surface text-primary'
                                                }`}>
                                                <item.icon size={20} />
                                            </div>

                                            <h3 className="font-heading font-bold text-lg text-primary mb-1">{item.title}</h3>
                                            <p className="text-[10px] font-bold text-accent uppercase tracking-wider mb-3">{item.subtitle}</p>

                                            <p className="text-textSecondary text-xs leading-relaxed mb-4">
                                                {item.desc}
                                            </p>
                                        </div>

                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BusinessPhilosophy;
