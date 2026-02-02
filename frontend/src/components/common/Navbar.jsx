import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Globe, Phone, Mail, ChevronDown } from "lucide-react";
import { useQuote } from "../../context/QuoteContext";

const Navbar = () => {
    const { openQuoteModal } = useQuote();
    const [isOpen, setIsOpen] = useState(false);
    const [showProductsDropdown, setShowProductsDropdown] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const categories = [
        { name: "Packaging", slug: "Packaging" },
        { name: "Agriculture", slug: "Agriculture" },
        { name: "Medical", slug: "Medical" },
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
                        <a href="mailto:info@eteon-international.com" className="flex items-center gap-2 hover:text-accent transition-colors">
                            <Mail size={14} />
                            <span>info@eteon-international.com</span>
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
                className={`w-full z-50 transition-all duration-300 ${scrolled
                    ? "fixed top-0 bg-white/95 backdrop-blur-sm shadow-soft py-3"
                    : "relative bg-white py-5"
                    }`}
            >
                <div className="container mx-auto px-4 flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="bg-primary text-white p-2 rounded-md group-hover:bg-accent transition-colors duration-300">
                            {/* Placeholder Icon for Logo */}
                            <Globe size={24} />
                        </div>
                        <div className="font-heading font-bold text-2xl tracking-tight text-primary">
                            Eteon<span className="text-accent">.</span>International
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 font-body font-medium">
                        <Link
                            to="/"
                            className={`text-textSecondary hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${scrolled ? "text-sm" : "text-base"}`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
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
                                        to="/products"
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
                                            to={`/products?category=${cat.slug}`}
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
                                to={link.href}
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
                            to="/"
                            className="text-textPrimary font-medium text-lg py-2 hover:text-accent transition-all"
                            onClick={() => setIsOpen(false)}
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
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
                                    to="/products"
                                    className="text-textSecondary font-medium py-1.5 hover:text-accent text-base"
                                    onClick={() => setIsOpen(false)}
                                >
                                    All Products
                                </Link>
                                {categories.map((cat) => (
                                    <Link
                                        key={cat.slug}
                                        to={`/products?category=${cat.slug}`}
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
                                to={link.href}
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
                                <a href="mailto:info@eteon-international.com" className="flex items-center gap-2">
                                    <Mail size={16} /> info@eteon-international.com
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
