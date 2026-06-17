import React from 'react';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    Zap,
    ShieldCheck,
    Globe,
    Factory,
    Microscope,
    Truck,
    ShoppingCart,
    Building2,
    Shovel,
    Globe2
} from 'lucide-react';

const IconMap = {
    Zap,
    ShieldCheck,
    Globe,
    Factory,
    Microscope,
    Truck,
    ShoppingCart,
    Building2,
    Shovel,
    Globe2
};

const FertilizerDetail = ({ product }) => {
    // Category-specific content
    const categoryContent = {
        features: [
            { title: "Nutrient Rich", desc: "Optimized chemical balance for maximum crop yield and soil health.", icon: "Zap" },
            { title: "Slow Release", desc: "Engineered for sustained nitrogen/phosphorus delivery to root systems.", icon: "ShieldCheck" },
            { title: "Soil Health", desc: "Improves organic carbon matter and beneficial microbial activity.", icon: "Shovel" },
            { title: "Environmentally Safe", desc: "Sustainably sourced agricultural inputs for modern farming.", icon: "Globe2" }
        ],
        whyChoose: [
            { title: "Yield Maximization", text: "Proven formulas to increase per-acre productivity significantly." },
            { title: "Purity Guaranteed", text: "Lab-tested for optimal composition and zero contaminants." },
            { title: "Bulk Shipping Terms", text: "Specialized logistics for large-scale agricultural shipments." },
            { title: "Expert Support", text: "Technical guidance on application rates for diverse soil types." }
        ],
        industries: [
            { name: "Commercial Farming", icon: "Globe2" },
            { name: "Horticulture", icon: "Microscope" },
            { name: "Landscaping", icon: "Shovel" },
            { name: "Fertilizer Trade", icon: "Truck" },
            { name: "Food Processing", icon: "Factory" }
        ]
    };

    const content = {
        features: product.features || categoryContent.features,
        whyChoose: product.whyChoose || categoryContent.whyChoose,
        industries: product.industries || categoryContent.industries
    };

    return (
        <div className="space-y-24">
            {/* TECHNICAL SPECIFICATIONS TABLE */}
            <section id="specs" className="py-20 bg-emerald-50 rounded-[4rem]">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4 flex items-center justify-center gap-4">
                            Fertilizer Specifications
                        </h2>
                        <div className="w-24 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border border-emerald-100">
                        <table className="w-full text-left border-collapse">
                            <tbody>
                                {product.specs?.map((spec, i) => (
                                    <tr key={i} className={`${i % 2 === 0 ? 'bg-emerald-50/30' : 'bg-white'} border-b border-emerald-50 hover:bg-emerald-50 transition-colors`}>
                                        <td className="py-6 px-10 font-bold text-emerald-800 uppercase text-xs tracking-wider w-1/3 border-r border-emerald-50">
                                            {spec.label}
                                        </td>
                                        <td className="py-6 px-10 font-semibold text-slate-700">
                                            {spec.value}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            {/* FEATURES & BENEFITS */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4 underline decoration-emerald-200 decoration-8 underline-offset-8">Agro-Input Features</h2>
                        <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {content.features.map((item, i) => {
                            const IconComponent = IconMap[item.icon] || Zap;
                            return (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-emerald-50/20 p-8 rounded-3xl border border-emerald-100 shadow-sm hover:shadow-xl transition-all"
                                >
                                    <div className="w-14 h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 mb-6">
                                        <IconComponent size={28} />
                                    </div>
                                    <h4 className="text-xl font-bold text-primary mb-3">{item.title}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* WHY CHOOSE THIS PRODUCT */}
            <section className="py-24 bg-emerald-900 rounded-[5rem] text-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-heading font-bold mb-8 leading-tight">
                                Boost Your Crop Yield with <br />
                                <span className="text-emerald-400">Our Organic Solutions.</span>
                            </h2>
                            <div className="space-y-6">
                                {content.whyChoose.map((reason, i) => (
                                    <div key={i} className="flex gap-5 p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors group">
                                        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-emerald-400 text-white flex items-center justify-center">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-white mb-1">{reason.title}</h4>
                                            <p className="text-emerald-50/70 font-medium">{reason.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative group">
                                <div className="absolute -inset-4 bg-emerald-500/20 rounded-[4rem] blur-2xl group-hover:bg-emerald-500/30 transition-all"></div>
                                <div className="aspect-square rounded-[3rem] overflow-hidden relative shadow-2xl">
                                    <img src={product.image} alt="" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                                    <div className="absolute inset-0 bg-emerald-900/40 flex items-end p-12">
                                        <div className="space-y-4">
                                            <div className="w-16 h-1 bg-emerald-400 rounded-full"></div>
                                            <h3 className="text-white font-bold text-3xl">Purity & Potency Guaranteed</h3>
                                            <p className="text-emerald-50 text-base">Tested for optimal N-P-K ratios and zero contaminants.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* USED BY INDUSTRIES */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-primary">Target Agricultural Sectors</h2>
                        <div className="w-20 h-1.5 bg-emerald-500 mx-auto rounded-full"></div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {content.industries.map((industry, i) => {
                            const IndustryIcon = IconMap[industry.icon] || Factory;
                            return (
                                <div key={i} className="group p-8 bg-emerald-50/50 border border-emerald-100 rounded-[2.5rem] flex flex-col items-center justify-center gap-4 hover:bg-emerald-500 hover:text-white transition-all text-center w-full sm:w-52">
                                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-emerald-600 mb-2 shadow-sm">
                                        <IndustryIcon size={32} />
                                    </div>
                                    <span className="font-bold text-sm tracking-wide uppercase">{industry.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FertilizerDetail;
