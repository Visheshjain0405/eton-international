import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Leaf, Stethoscope, Package } from "lucide-react";
import { Link } from "react-router-dom";
import { products as categories } from "../../data/products";

// Advanced 3D Tilt Card Component
const TiltCard = ({ children, className }) => {
    const ref = useRef(null);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    function onMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();
        x.set(clientX - left - width / 2);
        y.set(clientY - top - height / 2);
    }

    function onMouseLeave() {
        x.set(0);
        y.set(0);
    }

    const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });

    // Dynamic transform for rotation based on mouse position
    // Map x/y to degrees
    // We update rotateX/Y inside the render for simplicity or useTransform if we want strict mapping
    // Let's use simple transform in style

    const transformStyle = useMotionTemplate`perspective(1000px) rotateX(${useSpring(useMotionValue(0), { stiffness: 100 })}deg) rotateY(0deg)`;

    return (
        <motion.div
            ref={ref}
            onMouseMove={(e) => {
                const { left, top, width, height } = ref.current.getBoundingClientRect();
                const xPos = e.clientX - left - width / 2;
                const yPos = e.clientY - top - height / 2;

                // Rotation logic: 
                // Move Mouse Right (positive x) -> Rotate Y positive 
                // Move Mouse Down (positive y) -> Rotate X negative
                const rotX = (yPos / height) * -10; // Max -5 to 5 deg
                const rotY = (xPos / width) * 10;

                // Setting values directly via standard DOM or state can be jittery, 
                // but Framer Motion values are smooth.
                // For this example, we'll keep it simple with CSS hover or basic framer.
                // Let's stick to the Spotlight effect which is cleaner and very 'Pro'.
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};


// Simple Spotlight Card for clean "Advanced" feel
const SpotlightCard = ({ children, className = "" }) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove({ currentTarget, clientX, clientY }) {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    return (
        <div
            className={`group relative border border-white/10 bg-gray-900/5 overflow-hidden ${className}`}
            onMouseMove={handleMouseMove}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(22, 163, 74, 0.15),
              transparent 80%
            )
          `,
                }}
            />
            <div>{children}</div>
        </div>
    );
};

// ... (TiltCard and SpotlightCard components remain unchanged)

const ProductCategories = () => {
    // Static Categories Definition
    const categories = [
        {
            id: 1,
            title: "PP Bags & Packaging",
            group: "Packaging",
            image: "https://www.ppbag.co/assets/uploads/2023/11/productdetil/fibc_1699518900.webp",
            desc: "Woven sacks, tarpaulins, and industrial fabrics.",
            icon: Package,
            link: "/products?category=Packaging"
        },
        {
            id: 2,
            title: "Agriculture & Fertilizers",
            group: "Agriculture",
            image: "https://i.pinimg.com/736x/32/9d/0f/329d0f77909c292e2a5d13a19c3d8384.jpg",
            desc: "Organic vermicompost and sustainable manure.",
            icon: Leaf,
            link: "/products?category=Agriculture"
        },
        {
            id: 3,
            title: "Medical & Surgical",
            group: "Medical",
            image: "https://i.pinimg.com/1200x/bc/ee/32/bcee32d169283a94850f145ca53cdab5.jpg",
            desc: "Sterile gloves, masks, and hospital disposables.",
            icon: Stethoscope,
            link: "/products?category=Medical"
        }
    ];

    return (
        <section className="py-section bg-surface">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div className="max-w-xl">
                        <div className="inline-block px-3 py-1 mb-4 border border-accent/20 bg-accent/5 rounded-full text-accent font-medium text-sm tracking-wide uppercase">
                            Our Offerings
                        </div>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                            Product Categories
                        </h2>
                        <p className="text-textSecondary text-lg">
                            Explore our specialized divisions serving global industries.
                        </p>
                    </div>

                    <Link to="/products" className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors group">
                        View Full Catalog <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                                ease: [0.21, 0.47, 0.32, 0.98]
                            }}
                            whileHover={{ y: -10 }}
                            className="rounded-3xl overflow-hidden relative group cursor-pointer h-[450px]"
                        >
                            <Link to={category.link}>
                                <div className="absolute inset-0">
                                    <img
                                        src={category.image}
                                        alt={category.title}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                                </div>

                                <div className="absolute inset-x-0 bottom-0 p-8">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 border border-white/20">
                                        <category.icon size={24} />
                                    </div>
                                    <h3 className="text-3xl font-heading font-bold text-white mb-3 leading-tight">
                                        {category.title}
                                    </h3>
                                    <p className="text-slate-300 mb-6 line-clamp-2">
                                        {category.desc}
                                    </p>
                                    <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group-hover:text-emerald-400 transition-colors">
                                        Explore Products <ArrowRight size={16} />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;
