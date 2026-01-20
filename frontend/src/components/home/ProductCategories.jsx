import React, { useRef, useState } from "react";
import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Leaf, Stethoscope, Coffee } from "lucide-react";

const categories = [
    {
        id: 1,
        name: "Organic Fertilizer",
        group: "Agriculture",
        image: "https://i.pinimg.com/736x/85/90/e5/8590e5426aa0b17624e0dc8727cc3838.jpg",
        desc: "Sustainable growth solutions",
        subproducts: ["Vermi Compost", "Bio Potash", "Neem Cake"],
        size: "large"
    },
    {
        id: 2,
        name: "Jaggery & Sweeteners",
        group: "Food",
        image: "https://i.pinimg.com/1200x/b9/11/af/b911af6b2b5a1c29e9e37db45d82596d.jpg",
        desc: "Pure, natural sweetness",
        subproducts: ["Cubes", "Powder", "Liquid"]
    },
    {
        id: 3,
        name: "Makhana",
        group: "Food",
        image: "https://i.pinimg.com/736x/bc/0d/a2/bc0da2fce4cf0cab4582ea83aadd3679.jpg",
        desc: "Healthy superfood snacks",
        subproducts: ["Raw", "Roasted", "Flavored"]
    },
    {
        id: 4,
        name: "Indian Spices",
        group: "Food",
        image: "https://i.pinimg.com/1200x/0e/70/ca/0e70ca1f4b145087c1bd23fb4f6aeb91.jpg",
        desc: "Authentic flavors & aromas",
        subproducts: ["Cardamom", "Turmeric", "Cumin"]
    },
    {
        id: 5,
        name: "Premium Coffee",
        group: "Food",
        image: "https://i.pinimg.com/1200x/d2/aa/34/d2aa347f6536e8bccf7769cebbdd0770.jpg",
        desc: "Roasted beans & blends",
        subproducts: ["Arabica", "Robusta", "Green Beans"]
    },
    {
        id: 6,
        name: "Dried Fruits & Veg",
        group: "Food",
        image: "https://i.pinimg.com/736x/dc/fe/f2/dcfef2b3a6e04b553d43db7e3f61bad0.jpg",
        desc: "Nutrient-rich produce",
        subproducts: ["Dehydrated Onion", "Garlic Powder"]
    },
    {
        id: 7,
        name: "Surgical Disposables",
        group: "Medical",
        image: "https://i.pinimg.com/1200x/fd/ec/a8/fdeca838f49db6852800fbd22896c612.jpg",
        desc: "Certified medical supplies",
        subproducts: ["Gloves", "Masks", "Gowns", "Syringes"],
        size: "wide"
    },
];

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

const ProductCategories = () => {
    const [filter, setFilter] = useState("All");

    const filteredCategories = filter === "All"
        ? categories
        : categories.filter(c => c.group === filter);

    return (
        <section className="py-section bg-surface">
            <div className="container mx-auto px-4">
                {/* Header & Filters */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
                    <div className="max-w-xl">
                        <div className="inline-block px-3 py-1 mb-4 border border-accent/20 bg-accent/5 rounded-full text-accent font-medium text-sm tracking-wide uppercase">
                            Our Offerings
                        </div>
                        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
                            Premium Products
                        </h2>
                        <div className="flex flex-wrap gap-2 mt-4">
                            {["All", "Agriculture", "Food", "Medical"].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setFilter(tab)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === tab
                                        ? "bg-primary text-white shadow-lg"
                                        : "bg-white text-textSecondary hover:bg-slate-100 border border-slate-200"
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <button className="hidden md:flex items-center gap-2 text-primary font-medium hover:text-accent transition-colors group">
                        View Full Catalog <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px]"
                >
                    {filteredCategories.map((category) => (
                        <motion.div
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            key={category.id}
                            className={`rounded-2xl overflow-hidden relative group cursor-pointer
                                ${category.size === 'large' && filter === 'All' ? 'lg:row-span-2 lg:col-span-2' : ''}
                                ${category.size === 'wide' && filter === 'All' ? 'sm:col-span-2 lg:col-span-2' : ''}
                            `}
                        >
                            <SpotlightCard className="h-full w-full rounded-2xl bg-white shadow-md border-transparent hover:shadow-xl transition-all">
                                {/* Image Info & Interaction */}
                                <div className="absolute inset-0">
                                    <img
                                        src={category.image}
                                        alt={category.name}
                                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent" />
                                </div>

                                {/* Content */}
                                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                                    <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-accent text-xs font-bold uppercase tracking-wider bg-black/30 backdrop-blur-md px-2 py-1 rounded">
                                                {category.group}
                                            </span>
                                            {/* Sub-products pill list (Advanced Feature) */}
                                            <div className="flex gap-1 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                                {/* Start showing arrow, on hover show sub-items? No, too crowded. 
                                                    Let's show an icon relevant to group.
                                                */}
                                                {category.group === 'Medical' ? <Stethoscope className="text-white/60" size={16} /> :
                                                    category.group === 'Food' ? <Coffee className="text-white/60" size={16} /> :
                                                        <Leaf className="text-white/60" size={16} />
                                                }
                                            </div>
                                        </div>

                                        <h3 className="font-heading text-2xl font-bold text-white mb-2 leading-tight">
                                            {category.name}
                                        </h3>

                                        <p className="text-slate-300 text-sm line-clamp-2 mb-4 group-hover:text-white transition-colors">
                                            {category.desc}
                                        </p>

                                        {/* Advanced: Hover reveals sub-products or CTA */}
                                        <div className="h-0 group-hover:h-auto overflow-hidden opacity-0 group-hover:opacity-100 transition-all duration-300">
                                            <div className="pt-2 border-t border-white/20 flex flex-wrap gap-2">
                                                {category.subproducts?.slice(0, 3).map(sub => (
                                                    <span key={sub} className="text-[10px] text-white bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                                                        {sub}
                                                    </span>
                                                ))}
                                                {category.subproducts?.length > 3 && <span className="text-[10px] text-white px-1">...</span>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SpotlightCard>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default ProductCategories;
