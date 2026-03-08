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
            case "Organic and Cowdung Fertilzer":
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
                                <p className="text-lg text-slate-600 leading-relaxed italic">
                                    "{product.description || product.desc}"
                                </p>
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

            {/* TECHNICAL SPECIFICATIONS TABLE */}
            <section id="specs" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-heading font-bold text-primary mb-4 flex items-center justify-center gap-4">
                            Technical Specification
                        </h2>
                        <div className="w-24 h-1.5 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-100">
                        <table className="w-full text-left border-collapse">
                            <tbody>
                                {product.specs?.map((spec, i) => (
                                    <tr key={i} className={`${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'} border-b border-slate-100 hover:bg-accent/5 transition-colors`}>
                                        <td className="py-6 px-10 font-bold text-primary uppercase text-xs tracking-wider w-1/3 border-r border-slate-100">
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
                            <h2 className="text-4xl font-heading font-bold text-primary mb-8 leading-tight text-center lg:text-left">
                                Why Choose Our <br className="hidden lg:block" />
                                <span className="text-accent underline decoration-accent/20 underline-offset-8">
                                    {product.name}?
                                </span>
                            </h2>
                            <div className="space-y-6">
                                {content.whyChoose.map((reason, i) => (
                                    <div key={i} className="flex gap-5 p-4 rounded-2xl hover:bg-slate-50 transition-colors group">
                                        <div className="mt-1 flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all">
                                            <CheckCircle2 size={18} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-primary mb-1">{reason.title}</h4>
                                            <p className="text-slate-600">{reason.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="aspect-square rounded-[3rem] bg-slate-900 overflow-hidden relative group shadow-2xl">
                                <img src={product.image} alt="" className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex items-center justify-center p-12 text-center">
                                    <div className="space-y-6">
                                        <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
                                        <h3 className="text-white font-bold text-3xl md:text-4xl">Certified Export Quality</h3>
                                        <p className="text-white/80 text-lg max-w-sm mx-auto">Our products are manufactured to exceed international benchmarks for strength and safety.</p>
                                        <div className="flex justify-center gap-4 pt-4">
                                            <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-full text-xs font-bold text-white uppercase tracking-widest border border-white/20">ISO Certified</div>
                                            <div className="px-4 py-2 bg-white/10 backdrop-blur rounded-full text-xs font-bold text-white uppercase tracking-widest border border-white/20">Eco Friendly</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* USED BY INDUSTRIES */}
            <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
                {/* Decoration */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4 text-white">Ideal Applications & Industries</h2>
                        <div className="w-20 h-1.5 bg-accent mx-auto rounded-full"></div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-6">
                        {content.industries.map((industry, i) => {
                            const IndustryIcon = IconMap[industry.icon] || Factory;
                            return (
                                <motion.div
                                    key={i}
                                    whileHover={{ scale: 1.05 }}
                                    className="group p-8 bg-white/5 border border-white/10 rounded-[2rem] flex flex-col items-center justify-center gap-4 hover:bg-accent hover:border-accent transition-all text-center w-full sm:w-52"
                                >
                                    <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center text-white mb-2 group-hover:bg-white/20 transition-all">
                                        <IndustryIcon size={32} />
                                    </div>
                                    <span className="font-bold text-sm tracking-wide uppercase">{industry.name}</span>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

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
