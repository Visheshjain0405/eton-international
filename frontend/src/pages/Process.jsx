import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
    MessageSquare,
    Search,
    FileText,
    Box,
    ClipboardCheck,
    PackageCheck,
    FileCheck,
    Truck,
    ArrowRight,
    Globe,
    Phone
} from 'lucide-react';

const steps = [
    {
        id: "01",
        title: "Business Inquiry",
        desc: "You share your requirements including quantity and specs.",
        icon: MessageSquare,
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: "02",
        title: "Evaluation",
        desc: "Feasibility check, regulations, and compliance limits.",
        icon: Search,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: "03",
        title: "Quotation",
        desc: "Transparent pricing agreement and timeline lock-in.",
        icon: FileText,
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: "04",
        title: "Sampling",
        desc: "Product samples sent for your approval before bulk scale.",
        icon: Box,
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: "05",
        title: "Production",
        desc: "Manufacturing begins with rigorous QC checkpoints.",
        icon: ClipboardCheck,
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: "06",
        title: "Packaging",
        desc: "Export-safe packaging to withstand international transit.",
        icon: PackageCheck,
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: "07",
        title: "Documentation",
        desc: "Full export clearance paperwork (Invoice, BL, Certs).",
        icon: FileCheck,
        image: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?q=80&w=1600&auto=format&fit=crop"
    },
    {
        id: "08",
        title: "Dispatch",
        desc: "Goods handed over to freight forwarders for delivery.",
        icon: Truck,
        image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?q=80&w=1600&auto=format&fit=crop"
    }
];

const Process = () => {
    return (
        <div className="bg-white min-h-screen font-body text-slate-800">

            {/* 1. HERO SECTION */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#0f172a] text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2600&auto=format&fit=crop"
                        alt="Corporate Office"
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="font-heading text-6xl md:text-8xl font-bold mb-8 tracking-tight">
                            Global Trade. <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Simplified.</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-light">
                            Navigate the complexities of international export with our structured, transparent, and proven workflow.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. VISUAL PROCESS STEPS - FULL SCREEN SCROLL */}
            <section className="bg-slate-50">
                <div className="text-center py-20 px-4">
                    <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6">The Export Journey</h2>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto">
                        A clear, linear path from your first inquiry to final delivery.
                    </p>
                </div>

                {steps.map((step, index) => {
                    const isEven = index % 2 === 0;
                    const textVariants = {
                        hidden: { opacity: 0, x: isEven ? -100 : 100 },
                        visible: { opacity: 1, x: 0 }
                    };
                    const imageVariants = {
                        hidden: { opacity: 0, x: isEven ? 100 : -100, scale: 0.9 },
                        visible: { opacity: 1, x: 0, scale: 1 }
                    };

                    return (
                        <section
                            key={step.id}
                            className="min-h-screen flex items-center justify-center overflow-hidden py-20"
                        >
                            <div className="container mx-auto px-4">
                                <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-24 ${!isEven ? 'lg:flex-row-reverse' : ''}`}>

                                    {/* TEXT CONTENT */}
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.3 }}
                                        transition={{ duration: 0.8, ease: "easeOut" }}
                                        variants={textVariants}
                                        className="lg:w-1/2"
                                    >
                                        <div className="flex items-center gap-4 mb-6">
                                            <span className="text-8xl font-heading font-bold text-slate-200/80">
                                                {step.id}
                                            </span>
                                            <div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 text-blue-600">
                                                <step.icon size={32} />
                                            </div>
                                        </div>

                                        <h3 className="text-4xl md:text-5xl font-heading font-bold text-slate-900 mb-6 leading-tight">
                                            {step.title}
                                        </h3>
                                        <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                                            {step.desc}
                                        </p>
                                    </motion.div>

                                    {/* IMAGE CONTENT */}
                                    <motion.div
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: false, amount: 0.3 }}
                                        variants={imageVariants}
                                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                                        className="lg:w-1/2 relative"
                                    >
                                        <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] group">
                                            <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                            <img
                                                src={step.image}
                                                alt={step.title}
                                                className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-700"
                                            />

                                            {/* Floating Badge */}
                                            <div className="absolute bottom-6 left-6 z-20 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white/50">
                                                <span className="font-bold text-slate-800 flex items-center gap-2">
                                                    <step.icon size={18} className="text-blue-600" />
                                                    Phase {step.id} Verified
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>

                                </div>
                            </div>
                        </section>
                    );
                })}
            </section>

            {/* 3. LOGISTICS - Updated Image */}
            <section className="py-32 bg-white overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                        {/* Huge Image - NEW IMAGE (Port/Shipping specific) */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-900/10 transform -rotate-3 hover:rotate-0 transition-all duration-700">
                                <img
                                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2000&auto=format&fit=crop"
                                    alt="Global Logistics Infrastructure"
                                    className="w-full h-auto object-cover"
                                />
                                {/* Overlay Card */}
                                <div className="absolute bottom-8 right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs hidden md:block border border-slate-100">
                                    <div className="flex items-center gap-3 mb-2">
                                        <div className="p-2 bg-green-100 text-green-600 rounded-lg"><Truck size={20} /></div>
                                        <span className="font-bold text-slate-800">Dispatch Status</span>
                                    </div>
                                    <div className="flex gap-1">
                                        <span className="h-1.5 w-8 rounded-full bg-green-500"></span>
                                        <span className="h-1.5 w-8 rounded-full bg-green-500"></span>
                                        <span className="h-1.5 w-8 rounded-full bg-green-500"></span>
                                        <span className="h-1.5 w-8 rounded-full bg-slate-200"></span>
                                    </div>
                                    <div className="text-xs text-slate-500 mt-2">Route optimization active</div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content */}
                        <div className="lg:w-1/2">
                            <span className="text-blue-600 font-bold tracking-widest uppercase mb-4 block">01. Infrastructure</span>
                            <h2 className="text-5xl font-heading font-bold text-slate-900 mb-8 leading-tight">
                                Logistics & <br /> Shipping Mastery
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We treat logistics as a precise science. Our dedicated team manages the entire multimodal transport chain—from factory floor to your port of destination.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
                                    <PackageCheck className="text-blue-600 shrink-0 mt-1" size={24} />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Export-Grade Packing</h4>
                                        <p className="text-sm text-slate-500">Reinforced palletization and climate-proof packaging.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-lg transition-all">
                                    <Globe className="text-blue-600 shrink-0 mt-1" size={24} />
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Strategic Routing</h4>
                                        <p className="text-sm text-slate-500">Direct vessel bookings to minimize transit time.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. COMMUNICATION - LIGHT CARD STYLE */}
            <section className="py-32 bg-slate-50 overflow-hidden">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
                        {/* Huge Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="lg:w-1/2 relative"
                        >
                            <div className="rounded-[3rem] overflow-hidden shadow-2xl shadow-slate-200 transform rotate-3 hover:rotate-0 transition-all duration-700 border-4 border-white">
                                <img
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2000&auto=format&fit=crop"
                                    alt="Communication Team"
                                    className="w-full h-auto object-cover"
                                />
                                {/* Overlay Card */}
                                <div className="absolute top-8 left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
                                            <Phone size={18} />
                                        </div>
                                        <div>
                                            <div className="font-bold text-slate-800 text-sm">24/7 Support</div>
                                            <div className="text-xs text-slate-500">Response time: &lt; 2hrs</div>
                                        </div>
                                    </div>
                                    <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                                        <div className="h-full w-[90%] bg-blue-500 rounded-full animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Content - Light Mode with Cards */}
                        <div className="lg:w-1/2">
                            <span className="text-blue-600 font-bold tracking-widest uppercase mb-4 block">02. Accountability</span>
                            <h2 className="text-5xl font-heading font-bold text-primary mb-8 leading-tight">
                                Constant <br /> Coordination
                            </h2>
                            <p className="text-lg text-slate-500 mb-8 leading-relaxed">
                                Distance doesn't mean silence. We serve as your eyes and ears on the ground, keeping you informed at every critical milestone.
                            </p>

                            <div className="grid grid-cols-1 gap-4">
                                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                                    <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                        Real-time Updates
                                    </h4>
                                    <p className="text-sm text-slate-500 pl-4">Production and dispatch alerts sent directly to your inbox.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                                    <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                        Dedicated Manager
                                    </h4>
                                    <p className="text-sm text-slate-500 pl-4">Single point of contact for clear, consistent answers.</p>
                                </div>
                                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                                    <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                                        Post-Shipment Care
                                    </h4>
                                    <p className="text-sm text-slate-500 pl-4">We don't stop at dispatch. We assist until goods are in your warehouse.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-white text-center border-t border-slate-100">
                <div className="container mx-auto px-4">
                    <h2 className="font-heading text-4xl font-bold text-primary mb-6">Ready to Experience Reliability?</h2>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-3 bg-primary text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        Start Your Order <ArrowRight size={20} />
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default Process;
