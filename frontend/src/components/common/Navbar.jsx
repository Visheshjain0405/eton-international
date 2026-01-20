import React, { useState, useEffect } from "react";
import { Menu, X, Globe, Phone, Mail, ChevronDown } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

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
        { name: "Products", href: "/products" },
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
                    <a href="/" className="flex items-center gap-2 group">
                        <div className="bg-primary text-white p-2 rounded-md group-hover:bg-accent transition-colors duration-300">
                            {/* Placeholder Icon for Logo */}
                            <Globe size={24} />
                        </div>
                        <div className="font-heading font-bold text-2xl tracking-tight text-primary">
                            Eteon<span className="text-accent">.</span>International
                        </div>
                    </a>

                    {/* Desktop Navigation */}
                    <nav className="hidden lg:flex items-center gap-8 font-body font-medium">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-textSecondary hover:text-accent transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-accent after:transition-all after:duration-300 hover:after:w-full ${scrolled ? "text-sm" : "text-base"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    {/* Call to Action Button */}
                    <div className="hidden lg:block">
                        <a
                            href="/quote"
                            className="bg-accent text-white px-6 py-2.5 rounded-md font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-accent/30 flex items-center gap-2"
                        >
                            <span>Get a Quote</span>
                            <ChevronDown className="rotate-[-90deg]" size={16} />
                        </a>
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
                    className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                        }`}
                >
                    <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-textPrimary font-medium text-lg py-2 border-b border-slate-100 hover:text-accent hover:pl-2 transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="mt-4 flex flex-col gap-4">
                            <a
                                href="/quote"
                                className="bg-accent text-white text-center py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                Get a Quote
                            </a>
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
