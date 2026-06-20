"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, Phone, Mail, ChevronDown, Facebook, Linkedin, Instagram } from "lucide-react";
import { useQuote } from "../../context/QuoteContext";

const Navbar = () => {
    const { openQuoteModal } = useQuote();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);
    const [showCompanyDropdown, setShowCompanyDropdown] = useState(false);
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

    // Close mobile menu or dropdowns on path change
    useEffect(() => {
        setIsOpen(false);
        setShowCompanyDropdown(false);
        setShowProductsDropdown(false);
    }, [pathname]);

    const isLinkActive = (href) => {
        if (href === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(href);
    };

    return (
        <div className="absolute top-0 left-0 w-full z-50 bg-transparent transition-all duration-300 pointer-events-none">
            {/* Top Info Bar (sharing the blue background) */}
            <div className="text-white text-[13px] pt-3 pb-2 hidden lg:block border-b border-white/10 bg-[#032e6b] pointer-events-auto px-4 lg:px-6">
                <div className="max-w-[80%] mx-auto flex justify-between items-center px-8">
                    <div className="flex items-center gap-4">
                        <a href="tel:+1234567890" className="flex items-center gap-1.5 hover:text-[#D24D3D] transition-colors">
                            <Phone size={14} />
                            <span>+1 (234) 567-890</span>
                        </a>
                        <span className="text-white/30">|</span>
                        <a href="mailto:info@eteoninternational.com" className="flex items-center gap-1.5 hover:text-[#D24D3D] transition-colors">
                            <Mail size={14} />
                            <span>info@eteoninternational.com</span>
                        </a>
                    </div>
                    <div className="flex items-center gap-3">
                        <a href="#" className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <Facebook size={12} />
                        </a>
                        <a href="#" className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <Linkedin size={12} />
                        </a>
                        <a href="#" className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                            <Instagram size={12} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Header backdrop wrapper */}
            <header className="w-full pt-0 pb-0 px-4 lg:px-6 pointer-events-auto">
                <div className="max-w-[80%] mx-auto">
                    {/* Floating White Navbar Card */}
                    <div className="bg-white shadow-lg border border-slate-100/50 rounded-sm py-7 px-8 flex items-center justify-between transition-all duration-300 mt-0">
                        {/* Logo */}
                        <Link href="/" className="flex items-center group shrink-0">
                            <div className="flex flex-col justify-center select-none">
                                <span className="font-heading font-black text-[28px] leading-none tracking-[0.05em] text-[#043C8C] group-hover:opacity-90 transition-opacity">
                                    ETEON
                                </span>
                                <span className="font-body font-bold text-[10px] leading-none tracking-[0.28em] text-[#D24D3D] mt-1.5">
                                    INTERNATIONAL
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-8 font-body">
                            {/* HOME */}
                            <Link
                                href="/"
                                className={`text-[15px] font-bold tracking-wider transition-colors ${isLinkActive("/") ? "text-[#D24D3D]" : "text-[#043C8C] hover:text-[#D24D3D]"
                                    }`}
                            >
                                HOME
                            </Link>

                            {/* OUR COMPANY (Dropdown) */}
                            <div
                                className="relative"
                                onMouseEnter={() => setShowCompanyDropdown(true)}
                                onMouseLeave={() => setShowCompanyDropdown(false)}
                            >
                                <button
                                    className={`flex items-center gap-1 text-[15px] font-bold tracking-wider transition-colors ${isLinkActive("/about") || isLinkActive("/process")
                                        ? "text-[#D24D3D]"
                                        : "text-[#043C8C] hover:text-[#D24D3D]"
                                        }`}
                                >
                                    OUR COMPANY <ChevronDown size={14} className={`transition-transform duration-300 ${showCompanyDropdown ? "rotate-180" : ""}`} />
                                </button>

                                <div
                                    className={`absolute left-0 top-full pt-3 w-48 transition-all duration-200 z-50 ${showCompanyDropdown ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
                                        }`}
                                >
                                    <div className="bg-white rounded-sm shadow-xl border border-slate-100 p-1.5 flex flex-col">
                                        <Link
                                            href="/about"
                                            className={`px-4 py-2 text-xs font-semibold rounded-sm transition-colors ${isLinkActive("/about") ? "bg-slate-50 text-[#D24D3D]" : "text-[#043C8C] hover:bg-slate-50 hover:text-[#D24D3D]"
                                                }`}
                                        >
                                            ABOUT US
                                        </Link>
                                        <Link
                                            href="/process"
                                            className={`px-4 py-2 text-xs font-semibold rounded-sm transition-colors ${isLinkActive("/process") ? "bg-slate-50 text-[#D24D3D]" : "text-[#043C8C] hover:bg-slate-50 hover:text-[#D24D3D]"
                                                }`}
                                        >
                                            OUR PROCESS
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* PRODUCT (Dropdown) */}
                            <div
                                className="relative"
                                onMouseEnter={() => setShowProductsDropdown(true)}
                                onMouseLeave={() => setShowProductsDropdown(false)}
                            >
                                <button
                                    className={`flex items-center gap-1 text-[15px] font-bold tracking-wider transition-colors ${isLinkActive("/products") ? "text-[#D24D3D]" : "text-[#043C8C] hover:text-[#D24D3D]"
                                        }`}
                                    aria-expanded={showProductsDropdown}
                                >
                                    PRODUCT <ChevronDown size={14} className={`transition-transform duration-300 ${showProductsDropdown ? "rotate-180" : ""}`} />
                                </button>

                                <div
                                    className={`absolute left-0 top-full pt-3 w-56 transition-all duration-200 z-50 ${showProductsDropdown ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-2 pointer-events-none"
                                        }`}
                                >
                                    <div className="bg-white rounded-sm shadow-xl border border-slate-100 p-1.5 flex flex-col">
                                        <Link
                                            href="/products"
                                            className={`px-4 py-2 text-xs font-semibold rounded-sm border-b border-slate-50 mb-1 transition-colors ${pathname === "/products" && (typeof window !== 'undefined' && !window.location.search) ? "bg-slate-50 text-[#D24D3D]" : "text-[#043C8C] hover:bg-slate-50 hover:text-[#D24D3D]"
                                                }`}
                                        >
                                            ALL PRODUCTS
                                        </Link>
                                        {categories.map((cat) => (
                                            <Link
                                                key={cat.slug}
                                                href={`/products?category=${cat.slug}`}
                                                className="px-4 py-2 text-xs font-semibold text-[#043C8C] hover:bg-slate-50 hover:text-[#D24D3D] rounded-sm transition-colors"
                                            >
                                                {cat.name.toUpperCase()}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* GLOBAL REACH */}
                            <Link
                                href="/global-reach"
                                className={`text-[15px] font-bold tracking-wider transition-colors ${isLinkActive("/global-reach") ? "text-[#D24D3D]" : "text-[#043C8C] hover:text-[#D24D3D]"
                                    }`}
                            >
                                GLOBAL REACH
                            </Link>

                            {/* CONTACT US */}
                            <Link
                                href="/contact"
                                className={`text-[15px] font-bold tracking-wider transition-colors ${isLinkActive("/contact") ? "text-[#D24D3D]" : "text-[#043C8C] hover:text-[#D24D3D]"
                                    }`}
                            >
                                CONTACT US
                            </Link>
                        </nav>

                        {/* Search and Mobile Actions */}
                        <div className="flex items-center gap-4">

                            {/* Get a Quote Button */}
                            <button
                                onClick={openQuoteModal}
                                className="hidden xl:block bg-[#D24D3D] hover:bg-opacity-90 text-white text-[12px] font-bold tracking-wider px-4 py-2 rounded-sm transition-all shadow-sm"
                            >
                                GET A QUOTE
                            </button>

                            {/* Mobile Hamburger Toggle */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="lg:hidden text-[#043C8C] hover:text-[#D24D3D] transition-colors p-1"
                                aria-label="Toggle menu"
                            >
                                {isOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Dropdown */}
                <div
                    className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out z-50 ${isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0 pointer-events-none"
                        }`}
                >
                    <div className="px-6 py-6 flex flex-col gap-4">
                        <Link
                            href="/"
                            className={`text-sm font-bold tracking-wider pb-2 border-b border-slate-50 ${isLinkActive("/") ? "text-[#D24D3D]" : "text-[#043C8C]"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            HOME
                        </Link>

                        {/* Mobile Company Section */}
                        <div className="flex flex-col">
                            <button
                                className="flex items-center justify-between w-full text-sm font-bold tracking-wider text-[#043C8C] pb-2 border-b border-slate-50"
                                onClick={() => setShowCompanyDropdown(!showCompanyDropdown)}
                            >
                                <span>OUR COMPANY</span>
                                <ChevronDown size={16} className={`transition-transform ${showCompanyDropdown ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`pl-4 flex flex-col gap-2 overflow-hidden transition-all duration-300 ${showCompanyDropdown ? "max-h-24 mt-2" : "max-h-0"}`}>
                                <Link
                                    href="/about"
                                    className="text-xs font-bold text-[#043C8C] hover:text-[#D24D3D] py-1"
                                    onClick={() => setIsOpen(false)}
                                >
                                    ABOUT US
                                </Link>
                                <Link
                                    href="/process"
                                    className="text-xs font-bold text-[#043C8C] hover:text-[#D24D3D] py-1"
                                    onClick={() => setIsOpen(false)}
                                >
                                    OUR PROCESS
                                </Link>
                            </div>
                        </div>

                        {/* Mobile Products Section */}
                        <div className="flex flex-col">
                            <button
                                className="flex items-center justify-between w-full text-sm font-bold tracking-wider text-[#043C8C] pb-2 border-b border-slate-50"
                                onClick={() => setShowProductsDropdown(!showProductsDropdown)}
                            >
                                <span>PRODUCT</span>
                                <ChevronDown size={16} className={`transition-transform ${showProductsDropdown ? "rotate-180" : ""}`} />
                            </button>
                            <div className={`pl-4 flex flex-col gap-2 overflow-hidden transition-all duration-300 ${showProductsDropdown ? "max-h-40 mt-2" : "max-h-0"}`}>
                                <Link
                                    href="/products"
                                    className="text-xs font-bold text-[#043C8C] hover:text-[#D24D3D] py-1"
                                    onClick={() => setIsOpen(false)}
                                >
                                    ALL PRODUCTS
                                </Link>
                                {categories.map((cat) => (
                                    <Link
                                        key={cat.slug}
                                        href={`/products?category=${cat.slug}`}
                                        className="text-xs font-bold text-[#043C8C] hover:text-[#D24D3D] py-1"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {cat.name.toUpperCase()}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <Link
                            href="/global-reach"
                            className={`text-sm font-bold tracking-wider pb-2 border-b border-slate-50 ${isLinkActive("/global-reach") ? "text-[#D24D3D]" : "text-[#043C8C]"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            GLOBAL REACH
                        </Link>

                        <Link
                            href="/contact"
                            className={`text-sm font-bold tracking-wider pb-2 border-b border-slate-50 ${isLinkActive("/contact") ? "text-[#D24D3D]" : "text-[#043C8C]"
                                }`}
                            onClick={() => setIsOpen(false)}
                        >
                            CONTACT US
                        </Link>


                        <button
                            onClick={() => {
                                setIsOpen(false);
                                openQuoteModal();
                            }}
                            className="bg-[#D24D3D] text-white text-center py-2.5 rounded-sm font-bold text-xs tracking-wider mt-4"
                        >
                            GET A QUOTE
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Navbar;
