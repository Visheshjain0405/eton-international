"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Globe, Phone, Mail, ChevronDown } from "lucide-react";
import { useQuote } from "../../context/QuoteContext";

const Navbar = () => {
    const { openQuoteModal } = useQuote();
    const [isOpen, setIsOpen] = useState(false);
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const categories = [
        { name: "Packaging", slug: "Packaging" },
        { name: "Organic and Cowdung Fertilizer", slug: "Organic and Cowdung Fertilizer" },
        { name: "Surgical and Disposable", slug: "Surgical and Disposable" },
    ];

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Global Reach", href: "/global-reach" },
        { name: "Process", href: "/process" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <>
            {/* Top Bar - Info & Contact */}
            <div className="bg-primary text-white text-small py-2 hidden lg:block border-b border-secondary/30">
                <div className="container mx-auto flex justify-between items-center px-4">
                    <div className="flex items-center gap-6">
                        <a href="mailto:info@eteoninternational.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                            <Mail size={14} />
                            <span>info@eteoninternational.com</span>
                        </a>
                        <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-accent transition-colors">
                            <Phone size={14} />
                            <span>+1 (234) 567-890</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-4">
                        <span className="flex items-center gap-2">
                            <Globe size={14} />
                            <span>Global Import & Export Solutions</span>
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <header
                className={`sticky top-0 w-full z-50 transition-all duration-300 bg-white ${scrolled
                    ? "bg-white/95 backdrop-blur-sm shadow-soft py-3"
                    : "py-5"
                    }`}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group">
                        <div className="bg-primary text-white p-2.5 rounded-2xl group-hover:bg-accent transition-colors duration-300 shadow-sm shrink-0">
                            {/* Placeholder Icon for Logo */}
                            <Globe size={24} />
                        </div>
                        <div className="flex flex-col justify-center select-none">
                            <span className="font-heading font-black text-2xl leading-none tracking-wider text-primary">
                                ETEON
                            </span>
                            <span className="font-body font-bold text-[9px] leading-none tracking-[0.3em] text-[#D24D3D] mt-1.5">
                                INTERNATIONAL
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 font-body font-medium">
                        <Link
                            href="/"
                            className={`text-textSecondary hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${scrolled ? "text-sm" : "text-base"}`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`text-textSecondary hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${scrolled ? "text-sm" : "text-base"}`}
                        >
                            About Us
                        </Link>

                        {/* Products Dropdown */}
                        <div
                            className="relative"
                            onMouseEnter={() => setShowProductsDropdown(true)}
                            onMouseLeave={() => setShowProductsDropdown(false)}
                        >
                            <button
                                className={`flex items-center gap-1 text-textSecondary hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${scrolled ? "text-sm" : "text-base"}`}
                            >
                                Products <ChevronDown size={14} className={`transition-transform duration-300 ${showProductsDropdown ? "rotate-180" : ""}`} />
                            </button>

                            {/* Dropdown Menu - Added a wrapper with pt-4 to bridge the hover gap */}
                            <div
                                className={`absolute left-0 top-full pt-4 w-56 transition-all duration-300 z-50 ${showProductsDropdown ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"}`}
                            >
                                <div className="bg-white rounded-xl shadow-xl overflow-hidden border border-slate-100 p-2 flex flex-col">
                                    <Link
                                        href="/products"
                                        className="px-4 py-2.5 text-sm text-textSecondary hover:bg-slate-50 hover:text-accent rounded-lg transition-colors font-semibold border-b border-slate-50 mb-1"
                                        onClick={() => setShowProductsDropdown(false)}
                                    >
                                        All Products
                                    </Link>
                                    <div className="px-4 py-1.5 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                                        Categories
                                    </div>
                                    {categories.map((cat) => (
                                        <Link
                                            key={cat.slug}
                                            href={`/products?category=${cat.slug}`}
                                            className="px-4 py-2 text-sm text-textSecondary hover:bg-slate-50 hover:text-accent rounded-lg transition-colors"
                                            onClick={() => setShowProductsDropdown(false)}
                                        >
                                            {cat.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {navLinks.slice(2).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-textSecondary hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${scrolled ? "text-sm" : "text-base"
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Call to Action Button */}
                    <div className="hidden lg:block">
                        <button
                            onClick={openQuoteModal}
                            className="bg-accent text-white px-6 py-2.5 rounded-md font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-accent/30 flex items-center gap-2"
                        >
                            <span>Get a Quote</span>
                            <ChevronDown className="rotate-[-90deg]" size={16} />
                        </button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden text-textPrimary hover:text-accent transition-colors p-2"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
                        <Link
                            href="/"
                            className="text-textPrimary font-medium text-lg py-2 hover:text-accent transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className="text-textPrimary font-medium text-lg py-2 hover:text-accent transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            About Us
                        </Link>

                        {/* Mobile Products Section */}
                        <div className="py-2">
                            <button
                                className="flex items-center justify-between w-full text-textPrimary font-medium text-lg py-2 text-left"
                                onClick={() => setShowProductsDropdown(!showProductsDropdown)}
                            >
                                <span>Products</span>
                                <ChevronDown size={20} className={`transition-transform ${showProductsDropdown ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`pl-4 flex flex-col gap-2 overflow-hidden transition-all duration-300 ${showProductsDropdown ? "max-h-60 mt-2 opacity-100" : "max-h-0 opacity-0"}`}>
                                <Link
                                    href="/products"
                                    className="text-textSecondary font-medium py-1.5 hover:text-accent text-base"
                                    onClick={() => setIsOpen(false)}
                                >
                                    All Products
                                </Link>
                                {categories.map((cat) => (
                                    <Link
                                        key={cat.slug}
                                        href={`/products?category=${cat.slug}`}
                                        className="text-textSecondary py-1.5 hover:text-accent text-base"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {cat.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {navLinks.slice(2).map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-textPrimary font-medium text-lg py-2 hover:text-accent transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="mt-4 flex flex-col gap-4">
                            <button
                                onClick={() => {
                                    setIsOpen(false);
                                    openQuoteModal();
                                }}
                                className="bg-accent text-white text-center py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
                            >
                                Get a Quote
                            </button>
                            <div className="flex flex-col gap-3 text-textMuted text-sm pt-4 border-t border-slate-100">
                                <a href="mailto:info@eteoninternational.com" className="flex items-center gap-2">
                                    <Mail size={16} /> info@eteoninternational.com
                                </a>
                                <a href="tel:+1234567890" className="flex items-center gap-2">
                                    <Phone size={16} /> +1 (234) 567-890
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Navbar;
