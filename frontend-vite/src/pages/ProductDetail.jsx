import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    ArrowLeft,
    CheckCircle2,
    Download,
    Package,
    Truck,
    ShieldCheck,
    Mail,
    AlertCircle,
    Globe,
    FileText,
    ChevronRight,
    Search,
    Factory,
    Zap,
    Users,
    Globe2,
    ShoppingCart,
    Building2,
    Microscope,
    Wrench,
    Shovel,
    Earth
} from 'lucide-react';
import { getProductBySlug, products as allProducts } from '../data/products';
import { useQuote } from '../context/QuoteContext';
import { Helmet } from 'react-helmet-async';

// Icon mapping helper
const IconMap = {
    Zap,
    ShieldCheck,
    Package,
    FileText,
    Globe2,
    Factory,
    ShoppingCart,
    Truck,
    Building2,
    Microscope,
    Users,
    Shovel,
    Search,
    Globe,
    Wrench,
    Earth
};

import PackagingDetail from '../components/products/PackagingDetail';
import FertilizerDetail from '../components/products/FertilizerDetail';
import MedicalDetail from '../components/products/MedicalDetail';

const ProductDetail = () => {
    const { openQuoteModal } = useQuote();
    const { id: slug } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const foundProduct = getProductBySlug(slug);
        setProduct(foundProduct);
        window.scrollTo(0, 0);
    }, [slug]);

    if (!product) {
        return (
            <div className="min-h-[70vh] flex flex-col items-center justify-center bg-slate-50 px-4">
                <div className="text-center">
                    <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <AlertCircle size={40} className="text-slate-300" />
                    </div>
                    <h2 className="text-3xl font-heading font-bold text-primary mb-3">Product Not Found</h2>
                    <Link to="/products" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold">
                        <ArrowLeft size={18} /> Back to Catalog
                    </Link>
                </div>
            </div>
        );
    }

    // Helper to render category-specific content
    const renderCategoryDetail = () => {
        switch (product.group) {
            case "Packaging":
                return <PackagingDetail product={product} />;
            case "Organic and Cowdung Fertilizer":
                return <FertilizerDetail product={product} />;
            case "Surgical and Disposable":
                return <MedicalDetail product={product} />;
            default:
                return (
                    <section className="py-20 text-center">
                        <p className="text-slate-500">Additional details are being updated for this category.</p>
                    </section>
                );
        }
    };

    return (
        <div className="bg-white min-h-screen font-body">
            <Helmet>
                <title>{product.name} | Eteon International</title>
                <meta name="description" content={product.description || product.desc} />
            </Helmet>

            {/* BREADCRUMBS */}
            <div className="bg-slate-50 border-b border-slate-200 py-4">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500">
                        <Link to="/" className="hover:text-primary">Home</Link>
                        <ChevronRight size={14} />
                        <Link to="/products" className="hover:text-primary">Products</Link>
                        <ChevronRight size={14} />
                        <span className="text-primary font-semibold">{product.name}</span>
                    </div>
                </div>
            </div>

            {/* PRODUCT HERO SECTION */}
            <section className="py-12 lg:py-16">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row gap-12 xl:gap-20">
                        <div className="lg:w-1/2">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="relative aspect-square rounded-[2rem] overflow-hidden bg-slate-100 border border-slate-200 shadow-2xl"
                            >
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary border border-white/20">
                                    Premium Product
                                </div>
                            </motion.div>
                        </div>

                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent font-bold text-xs uppercase tracking-widest mb-6 w-fit">
                                <Globe size={12} /> {product.group} Division
                            </div>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                                {product.name}
                            </h1>
                            <div className="space-y-4 mb-8">
                                <h3 className="text-xl font-bold text-slate-800">Brief Overview</h3>
                                <p className="text-lg text-slate-600 leading-relaxed">
                                    {product.description || product.desc}
                                </p>

                                {product.highlights && (
                                    <div className="pt-4 space-y-3">
                                        {product.highlights.map((h, i) => (
                                            <div key={i} className="flex items-center gap-3 group">
                                                <div className="w-2.5 h-2.5 bg-accent rotate-45 group-hover:scale-125 transition-transform"></div>
                                                <span className="font-bold text-sm tracking-wider text-slate-800">{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="flex flex-wrap gap-4 mb-10">
                                <button
                                    onClick={openQuoteModal}
                                    className="bg-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-accent transition-all w-full sm:w-fit"
                                >
                                    <Mail size={20} /> Request Export Inquiry
                                </button>
                                <a
                                    href="#specs"
                                    className="px-10 py-5 rounded-2xl font-bold border-2 border-primary/20 text-primary hover:bg-primary/5 transition-all text-center"
                                >
                                    Technical Specs
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CATEGORY SPECIFIC CONTENT */}
            {renderCategoryDetail()}

            {/* FINAL CTA SECTION */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-primary rounded-[4rem] p-10 md:p-20 text-center text-white shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-80 h-80 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                        <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6 relative z-10">Scale Your Business with Premium Supply</h2>
                        <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto relative z-10">
                            Connect with our trade experts for customized volume pricing, shipping logistics, and full technical support.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 relative z-10">
                            <button
                                onClick={openQuoteModal}
                                className="w-full sm:w-auto bg-accent text-white px-12 py-6 rounded-2xl font-extrabold text-xl shadow-xl hover:shadow-accent/40 hover:scale-105 transition-all"
                            >
                                Secure a Quote
                            </button>
                            <Link to="/contact" className="w-full sm:w-auto px-12 py-6 rounded-2xl font-bold text-xl border border-white/30 hover:bg-white/10 transition-all">
                                Talk to Expert
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;
