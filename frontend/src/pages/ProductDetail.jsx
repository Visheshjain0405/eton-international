import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Download, Package, Truck, ShieldCheck, Mail, AlertCircle } from 'lucide-react';
import { getProductBySlug } from '../data/products';
import { useQuote } from '../context/QuoteContext';

const ProductDetail = () => {
    const { openQuoteModal } = useQuote();
    const { id } = useParams(); // Note: id param will hold the slug because of router config rename later
    const [activeTab, setActiveTab] = useState("specs");
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Find product by slug
        const foundProduct = getProductBySlug(id);
        setProduct(foundProduct);
        window.scrollTo(0, 0);
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <div className="text-center">
                    <AlertCircle size={48} className="mx-auto text-slate-300 mb-4" />
                    <h2 className="text-2xl font-bold text-primary mb-2">Product Not Found</h2>
                    <Link to="/products" className="text-accent underline">Back to Products</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen font-body pb-20">

            {/* HERO / HEADER */}
            <div className="bg-primary pt-24 pb-32 text-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg')] bg-cover bg-center"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <Link to="/products" className="inline-flex items-center gap-2 text-slate-400 hover:text-white mb-6 transition-colors">
                        <ArrowLeft size={18} /> Back to Products
                    </Link>
                    <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">{product.name}</h1>
                    <div className="flex items-center gap-4 text-sm font-bold text-accent uppercase tracking-widest">
                        <span>{product.group}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-500"></span>
                        <span>Code: {product.slug.toUpperCase().substring(0, 6)}</span>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT CARD */}
            <div className="container mx-auto px-4 -mt-20 relative z-20">
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-100 flex flex-col lg:flex-row">

                    {/* LEFT: IMAGE */}
                    <div className="lg:w-1/2 p-2">
                        <div className="rounded-2xl overflow-hidden h-[400px] lg:h-full relative group">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute bottom-6 right-6">
                                <button className="bg-white/90 backdrop-blur text-primary px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center gap-2 hover:bg-white transition-colors">
                                    <Download size={16} /> Download Brochure
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT: DETAILS */}
                    <div className="lg:w-1/2 p-8 lg:p-12">
                        <h3 className="text-2xl font-bold text-primary mb-4">Product Overview</h3>
                        <p className="text-textSecondary leading-relaxed mb-8">
                            {product.description || product.desc}
                        </p>

                        {/* TABS */}
                        <div className="mb-8">
                            <div className="flex border-b border-slate-200 mb-6">
                                <button
                                    onClick={() => setActiveTab("specs")}
                                    className={`pb-3 pr-6 text-sm font-bold uppercase tracking-wider border-b-2 transition-all ${activeTab === "specs" ? "border-accent text-accent" : "border-transparent text-slate-400 hover:text-primary"}`}
                                >
                                    Specifications
                                </button>
                                <button
                                    onClick={() => setActiveTab("logistics")}
                                    className={`pb-3 px-6 text-sm font-bold uppercase tracking-wider border-b-2 transition-all ${activeTab === "logistics" ? "border-accent text-accent" : "border-transparent text-slate-400 hover:text-primary"}`}
                                >
                                    Logistics
                                </button>
                                <button
                                    onClick={() => setActiveTab("varieties")}
                                    className={`pb-3 px-6 text-sm font-bold uppercase tracking-wider border-b-2 transition-all ${activeTab === "varieties" ? "border-accent text-accent" : "border-transparent text-slate-400 hover:text-primary"}`}
                                >
                                    Varieties
                                </button>
                            </div>

                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3 }}
                                className="min-h-[200px]"
                            >
                                {activeTab === "specs" && (
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
                                        {product.specs ? product.specs.map((spec, idx) => (
                                            <div key={idx} className="flex justify-between border-b border-slate-100 pb-2">
                                                <span className="text-slate-500 font-medium">{spec.label}</span>
                                                <span className="text-primary font-bold">{spec.value}</span>
                                            </div>
                                        )) : (
                                            <div className="text-slate-400">Detailed specifications available on request.</div>
                                        )}
                                    </div>
                                )}

                                {activeTab === "logistics" && (
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="flex items-center gap-2 font-bold text-primary mb-3">
                                                <Package className="text-accent" size={18} /> Packaging Options
                                            </h4>
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                                {product.packaging ? product.packaging.map((pack, idx) => (
                                                    <li key={idx} className="flex items-center gap-2 text-sm text-slate-600">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span> {pack}
                                                    </li>
                                                )) : (
                                                    <li className="text-slate-400 text-sm">Standard export packaging available.</li>
                                                )}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="flex items-center gap-2 font-bold text-primary mb-3">
                                                <ShieldCheck className="text-accent" size={18} /> Certifications
                                            </h4>
                                            <div className="flex flex-wrap gap-2">
                                                {product.certifications ? product.certifications.map((cert, idx) => (
                                                    <span key={idx} className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-md border border-green-100 uppercase">
                                                        {cert}
                                                    </span>
                                                )) : (
                                                    <span className="text-slate-400 text-sm">ISO Certified</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                )}

                                {activeTab === "varieties" && (
                                    <div className="space-y-6">
                                        <div>
                                            <h4 className="flex items-center gap-2 font-bold text-primary mb-3">
                                                <CheckCircle2 className="text-accent" size={18} /> Available Varieties
                                            </h4>
                                            {product.subproducts && product.subproducts.length > 0 ? (
                                                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                    {product.subproducts.map((sub, idx) => (
                                                        <li key={idx} className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 border border-slate-100">
                                                            <span className="w-2 h-2 rounded-full bg-accent shrink-0"></span>
                                                            <span className="text-sm font-medium text-slate-700">{sub}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            ) : (
                                                <div className="text-slate-400 text-sm italic">
                                                    No specific varieties listed for this product. Please contact us for custom requirements.
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </motion.div>
                        </div>

                        {/* CTA */}
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <div>
                                <div className="font-bold text-primary">Interested in this product?</div>
                                <div className="text-sm text-slate-500">Get a custom quote within 24 hours.</div>
                            </div>
                            <button
                                onClick={openQuoteModal}
                                className="bg-primary text-white px-6 py-3 rounded-full font-bold text-sm shadow-md hover:bg-primary/90 transition-all flex items-center gap-2"
                            >
                                <Mail size={16} /> Request Quote
                            </button>
                        </div>

                    </div>
                </div>
            </div>

            {/* RELATED PRODUCTS / BOTTOM NAV */}
            <div className="container mx-auto px-4 mt-20">
                <h3 className="text-2xl font-bold text-primary mb-8 text-center">Why Choose Eteon?</h3>
                <div className="grid md:grid-cols-3 gap-6">
                    {[
                        { title: "Quality Assured", desc: "Rigorous lab testing before dispatch.", icon: ShieldCheck },
                        { title: "Global Logistics", desc: "Seamless shipping to 50+ countries.", icon: Truck },
                        { title: "Custom Packaging", desc: "Branding solutions tailored to you.", icon: Package }
                    ].map((feature, i) => (
                        <div key={i} className="bg-slate-50 p-6 rounded-xl border border-slate-100 text-center">
                            <div className="w-12 h-12 mx-auto bg-white rounded-full flex items-center justify-center text-accent shadow-sm mb-4">
                                <feature.icon size={24} />
                            </div>
                            <h4 className="font-bold text-primary mb-2">{feature.title}</h4>
                            <p className="text-slate-500 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default ProductDetail;
