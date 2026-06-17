import React, { useEffect } from 'react';
import GlobalReach from '../components/home/GlobalReach';
import { motion } from 'framer-motion';
import { Ship, Plane, Truck, FileCheck, Anchor, Globe, ArrowRight, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const GlobalReachPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const logisticsFeatures = [
        {
            icon: Ship,
            title: "Ocean Freight",
            desc: "Cost-effective solutions for large volumes, connecting major international ports with reliable sailing schedules."
        },
        {
            icon: Plane,
            title: "Air Cargo",
            desc: "Expedited shipping for time-sensitive goods, ensuring your products reach their destination faster."
        },
        {
            icon: Truck,
            title: "Overland Transport",
            desc: "Seamless road and rail networks ensuring last-mile delivery and efficient inland distribution."
        },
        {
            icon: FileCheck,
            title: "Customs Compliance",
            desc: "Expert handling of documentation, tariffs, and regulatory requirements to prevent delays at borders."
        }
    ];

    return (
        <div className="bg-slate-50 min-h-screen">

            {/* --- Hero Section --- */}
            <section className="relative h-[60vh] flex items-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2672&auto=format&fit=crop"
                        alt="Global Network Connectivity"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" />
                </div>

                <div className="container mx-auto px-4 relative z-10 text-white">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="max-w-3xl"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/20 border border-accent/30 text-accent text-sm font-bold uppercase tracking-wider mb-6">
                            <Globe size={16} /> Global Logistics Network
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold font-heading mb-6 leading-tight">
                            Bridging Borders, <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-white">Connecting Markets.</span>
                        </h1>
                        <p className="text-xl text-slate-200 leading-relaxed max-w-2xl mb-8">
                            We simplify international trade by building robust supply chain bridges between emerging markets and global hubs.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* --- Introduction Stats/Bar --- */}
            <div className="bg-white border-b border-slate-100 relative z-20 -mt-8 mx-4 md:mx-auto max-w-6xl rounded-xl shadow-xl p-8 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">Seamless Trade</h3>
                    <p className="text-textSecondary">Facilitating smooth import/export flow.</p>
                </div>
                <div className="h-px w-full md:w-px md:h-12 bg-slate-200" />
                <div>
                    <h3 className="text-2xl font-bold text-primary mb-1">End-to-End</h3>
                    <p className="text-textSecondary">From factory floor to final destination.</p>
                </div>
                <div className="h-px w-full md:w-px md:h-12 bg-slate-200" />
                <button className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center gap-2">
                    Get a Quote <ArrowRight size={18} />
                </button>
            </div>

            {/* --- Interactive Map Section (Reused Component) --- */}
            <div className="py-20">
                <div className="container mx-auto px-4 mb-10 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary font-heading mb-4">Our Operational Footprint</h2>
                    <p className="text-textSecondary max-w-2xl mx-auto">
                        Strategically positioned to serve key trade routes across major continents.
                    </p>
                </div>
                {/* Render the existing map component */}
                <GlobalReach />
            </div>

            {/* --- Logistics Capabilities Cards --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                        <div>
                            <span className="text-accent font-bold tracking-widest uppercase text-sm">Our Capabilities</span>
                            <h2 className="text-4xl font-bold text-primary mt-2 font-heading">Comprehensive Logistics</h2>
                        </div>
                        <p className="text-textSecondary max-w-md text-lg">
                            We handle the complexities of global transport so you can focus on growing your business.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {logisticsFeatures.map((feature, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-slate-50 p-8 rounded-2xl border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                            >
                                <div className="w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors mb-6 shadow-sm">
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-primary mb-3">{feature.title}</h3>
                                <p className="text-textSecondary leading-relaxed text-sm">
                                    {feature.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Strategic Value Section --- */}
            <section className="py-24 bg-primary text-white overflow-hidden relative">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold font-heading leading-tight">
                                Reliable Partnerships. <br />
                                <span className="text-accent">Global Success.</span>
                            </h2>
                            <p className="text-white/80 text-lg leading-relaxed">
                                Success in international trade depends on reliability. We vet every supplier and partner in our network to ensure quality and consistency. Our team acts as your on-the-ground extension in foreign markets.
                            </p>

                            <ul className="space-y-4">
                                {[
                                    "Verified Supplier Network",
                                    "Real-time Shipment Tracking",
                                    "Transparent Cost Structures",
                                    "Strict Quality Control Checks"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <div className="bg-accent/20 p-1 rounded-full text-accent">
                                            <ShieldCheck size={18} />
                                        </div>
                                        <span className="font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link to="/contact" className="inline-block mt-8 bg-accent text-primary px-8 py-4 rounded-lg font-bold hover:bg-white transition-colors">
                                Partner With Us
                            </Link>
                        </div>

                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden border-8 border-white/10 shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2670&auto=format&fit=crop"
                                    alt="Strategic Planning"
                                    className="w-full object-cover"
                                />
                            </div>
                            {/* Decorative Box */}
                            <div className="absolute -bottom-10 -left-10 bg-white p-8 rounded-xl shadow-xl max-w-xs hidden md:block">
                                <p className="text-primary font-bold text-lg mb-2">"Efficiency is our currency."</p>
                                <div className="flex text-amber-500 gap-1">
                                    {[1, 2, 3, 4, 5].map(s => <span key={s}>★</span>)}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default GlobalReachPage;
