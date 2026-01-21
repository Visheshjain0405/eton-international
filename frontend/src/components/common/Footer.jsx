import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";

const Footer = () => {
    const bgImage = "https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80";

    return (
        <footer className="bg-primary text-white relative pt-20 pb-10 overflow-hidden">
            {/* Background Texture/Image Overlay */}
            <div className="absolute inset-0 opacity-5 mix-blend-overlay">
                <img src={bgImage} alt="bg" className="w-full h-full object-cover" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div className="lg:col-span-1">
                        <h2 className="text-3xl font-bold mb-6">
                            ETEON <span className="text-accent">.</span>
                        </h2>
                        <p className="text-slate-400 mb-8 leading-relaxed">
                            Connecting markets globally with premium quality exports. Reliable, compliant, and efficient trade solutions from India to the world.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 group">
                                    <Icon size={18} className="group-hover:scale-110 transition-transform" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white border-b border-white/10 pb-2 inline-block">Quick Links</h3>
                        <ul className="space-y-4">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About Us", path: "/about" },
                                { name: "Our Process", path: "/process" },
                                { name: "Capabilities", path: "/capabilities" },
                                { name: "Contact", path: "/contact" }
                            ].map((link) => (
                                <li key={link.name}>
                                    <Link to={link.path} className="text-slate-400 hover:text-accent transition-colors flex items-center gap-2 group">
                                        <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-accent transition-colors" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white border-b border-white/10 pb-2 inline-block">Our Products</h3>
                        <ul className="space-y-4">
                            {["Organic Fertilizer", "Jaggery & Sweeteners", "Makhana (Fox Nuts)", "Indian Spices", "Premium Coffee", "Dried Fruits & Veg", "Surgical Disposables"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-slate-400 hover:text-accent transition-colors flex items-center gap-2 group">
                                        <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent" />
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white border-b border-white/10 pb-2 inline-block">Get in Touch</h3>
                        <ul className="space-y-6">
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                                    <MapPin size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Head Office</p>
                                    <p className="text-slate-300 text-sm">123 Export Zone, GIDC,<br />Gujarat, India - 380001</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                                    <Phone size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Phone</p>
                                    <p className="text-slate-300 text-sm font-semibold">+91 98765 43210</p>
                                </div>
                            </li>
                            <li className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0 group-hover:bg-accent group-hover:text-white transition-colors">
                                    <Mail size={18} />
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Email</p>
                                    <p className="text-slate-300 text-sm font-semibold">export@eteon.com</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-500 text-sm text-center md:text-left">
                        © {new Date().getFullYear()} Eteon International. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#" className="hover:text-white transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
