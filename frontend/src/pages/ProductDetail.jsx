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

    // Dynamic content fallback based on category
    const getCategoryContent = (group) => {
        switch (group) {
            case "Packaging":
                return {
                    features: [
                        { title: "High Tensile Strength", desc: "Crafted from premium virgin polymers for maximum load-bearing capacity.", icon: "Zap" },
                        { title: "UV Protection", desc: "Treated with specialized additives to ensure long life under direct sunlight.", icon: "ShieldCheck" },
                        { title: "Moisture Resistance", desc: "Expert lamination options to keep contents dry and protected during shipping.", icon: "Package" },
                        { title: "Eco-Conscious", desc: "100% recyclable materials contributing to a circular global economy.", icon: "Globe2" }
                    ],
                    whyChoose: [
                        { title: "Export-Grade Quality", text: "Manufactured to meet the most rigorous international packaging standards." },
                        { title: "Custom Branding", text: "High-resolution flexo and rotogravure printing for your brand identity." },
                        { title: "Bulk Handling Efficiency", text: "Designed for seamless integration into automated filling lines." },
                        { title: "Competitive Global Pricing", text: "Direct factory rates optimized for high-volume international orders." }
                    ],
                    industries: [
                        { name: "Agriculture", icon: "Shovel" },
                        { name: "Construction", icon: "Building2" },
                        { name: "Chemicals", icon: "Factory" },
                        { name: "Retail", icon: "ShoppingCart" },
                        { name: "Logistics", icon: "Truck" }
                    ]
                };
            case "Medical":
                return {
                    features: [
                        { title: "Surgical Precision", desc: "Manufactured in controlled environments to ensure absolute sterility.", icon: "Microscope" },
                        { title: "Hypoallergenic", desc: "Skin-friendly materials designed for long-duration medical use.", icon: "ShieldCheck" },
                        { title: "Fluid Barrier", desc: "High-level protection against blood, fluids, and airborne particles.", icon: "Zap" },
                        { title: "Ergonomic Design", desc: "Anatomically shaped for comfort during intensive medical procedures.", icon: "Users" }
                    ],
                    whyChoose: [
                        { title: "CE & ISO Certified", text: "Fully compliant with international healthcare safety regulations." },
                        { title: "Sterile Packaging", text: "Advanced sealing techniques to maintain product integrity till use." },
                        { title: "Reliable Bio-Protection", text: "Tested for high filtration efficiency and barrier strength." },
                        { title: "Global Health Supply", text: "Consistent supply chain supporting hospitals worldwide." }
                    ],
                    industries: [
                        { name: "Hospitals", icon: "Building2" },
                        { name: "Laboratories", icon: "Microscope" },
                        { name: "Pharmaceuticals", icon: "Factory" },
                        { name: "Emergency Care", icon: "Truck" },
                        { name: "Dental Clinics", icon: "ShieldCheck" }
                    ]
                };
            case "Agriculture":
                return {
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
            default:
                return {
                    features: [
                        { title: "Premium Quality", desc: "Crafted to meet the highest industry standards for excellence.", icon: "Zap" },
                        { title: "Reliability", desc: "Tested for performance in the most demanding global conditions.", icon: "ShieldCheck" },
                        { title: "Customizable", desc: "Adaptable to meet your specific technical and branding needs.", icon: "Package" },
                        { title: "Global Support", desc: "A dedicated team to support your international trade journey.", icon: "Globe2" }
                    ],
                    whyChoose: [
                        { title: "Proven Track Record", text: "Years of experience in serving international B2B partners." },
                        { title: "Quality Assurance", text: "Rigorous testing protocols for every batch of production." },
                        { title: "Logistics Expertise", text: "Mastering the complexities of global shipping and customs." },
                        { title: "Customer Centric", text: "Solutions tailored to your unique business requirements." }
                    ],
                    industries: [
                        { name: "Industrial", icon: "Factory" },
                        { name: "Logistics", icon: "Truck" },
                        { name: "Trade", icon: "Globe2" },
                        { name: "Manufacturing", icon: "Building2" },
                        { name: "Retail", icon: "ShoppingCart" }
                    ]
                };
        }
    };

    // Use product-specific content if available, otherwise use category fallback
    const content = {
        features: product.features || getCategoryContent(product.group).features,
        whyChoose: product.whyChoose || getCategoryContent(product.group).whyChoose,
        industries: product.industries || getCategoryContent(product.group).industries
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
                        {/* LEFT: IMAGE */}
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

                        {/* RIGHT: CORE INFO */}
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-accent/10 border border-accent/20 rounded-full text-accent font-bold text-xs uppercase tracking-widest mb-6 w-fit">
                                <Globe size={12} /> {product.group} Division
                            </div>
                            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                                {product.name}
                            </h1>
                            <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                                {product.description || product.desc}
                            </p>

                            {/* QUICK SPECS */}
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                {product.specs?.map((spec, i) => (
                                    <div key={i} className="flex flex-col border-l-2 border-accent/20 pl-4 py-1">
                                        <span className="text-[10px] uppercase font-bold text-slate-400">{spec.label}</span>
                                        <span className="text-lg font-bold text-slate-700">{spec.value}</span>
                                    </div>
                                ))}
                            </div>

                            <button
                                onClick={openQuoteModal}
                                className="bg-primary text-white px-10 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl hover:bg-accent transition-all w-full sm:w-fit"
                            >
                                <Mail size={20} /> Request Export Inquiry
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* FEATURES & BENEFITS */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">Features & Benefits</h2>
                        <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {content.features.map((item, i) => {
                            const IconComponent = IconMap[item.icon] || Zap;
                            return (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -5 }}
                                    className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all"
                                >
                                    <div className="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mb-6">
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
            <section className="py-24">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h2 className="text-4xl font-heading font-bold text-primary mb-8 leading-tight">
                                Why Choose Our <br />
                                <span className="text-accent">{product.name}?</span>
                            </h2>
                            <div className="space-y-6">
                                {content.whyChoose.map((reason, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-emerald-500 text-white flex items-center justify-center">
                                            <CheckCircle2 size={14} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-primary mb-1">{reason.title}</h4>
                                            <p className="text-slate-500 text-sm">{reason.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="aspect-video lg:aspect-square rounded-[2rem] bg-slate-900 overflow-hidden relative group">
                                <img src={product.image} alt="" className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                                    <div className="space-y-4">
                                        <div className="w-16 h-1 bg-accent mx-auto rounded-full"></div>
                                        <span className="text-white font-bold text-2xl md:text-3xl block">Export Quality Guaranteed</span>
                                        <p className="text-white/60 text-sm max-w-xs mx-auto">Sited and approved for international shipping standards.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* USED BY INDUSTRIES */}
            <section className="py-20 bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">Used by Industries</h2>
                        <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
                        {content.industries.map((industry, i) => {
                            const IndustryIcon = IconMap[industry.icon] || Factory;
                            return (
                                <div key={i} className="group p-8 bg-white/5 border border-white/10 rounded-2xl flex flex-col items-center justify-center gap-4 hover:bg-accent hover:border-accent transition-all text-center w-full sm:w-48">
                                    <IndustryIcon size={32} className="text-white group-hover:scale-110 transition-transform" />
                                    <span className="font-bold text-sm tracking-wide uppercase">{industry.name}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="py-20 bg-primary/5">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto bg-primary rounded-[3rem] p-8 md:p-16 text-center text-white shadow-2xl overflow-hidden relative">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 relative z-10">Ready to place a Bulk Order?</h2>
                        <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto relative z-10">
                            Our team is ready to assist you with customized solutions, export logistics, and high-volume pricing.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
                            <button
                                onClick={openQuoteModal}
                                className="w-full sm:w-auto bg-accent text-white px-10 py-5 rounded-2xl font-extrabold text-lg shadow-xl hover:shadow-accent/40 hover:scale-105 transition-all"
                            >
                                Get a Custom Quote
                            </button>
                            <Link to="/contact" className="w-full sm:w-auto px-10 py-5 rounded-2xl font-bold text-lg border border-white/20 hover:bg-white/10 transition-all">
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
