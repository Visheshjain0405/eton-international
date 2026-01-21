export const products = [
    {
        id: 1,
        slug: "organic-fertilizer",
        name: "Organic Fertilizer",
        group: "Agriculture",
        category: "Agriculture", // maintaining compatibility with 'category' field usage
        image: "https://i.pinimg.com/736x/85/90/e5/8590e5426aa0b17624e0dc8727cc3838.jpg",
        desc: "Sustainable growth solutions",
        description: "High-quality organic fertilizer designed to enhance soil health and crop yield. Produced from natural sources, it ensures sustainable farming practices without harmful chemicals.",
        subproducts: ["Vermi Compost", "Bio Potash", "Neem Cake"],
        size: "large",
        specs: [
            { label: 'Composition', value: '100% Organic' },
            { label: 'Moisture', value: '15-20%' },
            { label: 'Nitrogen', value: '1.5% min' },
            { label: 'Phosphorus', value: '0.5% min' }
        ],
        packaging: ['50kg Bags', 'Bulk Tonne Bags', 'Custom Branding'],
        certifications: ['Organic Certified', 'Eco-Friendly']
    },
    {
        id: 2,
        slug: "jaggery-sweeteners",
        name: "Jaggery & Sweeteners",
        group: "Food",
        category: "Food",
        image: "https://i.pinimg.com/1200x/b9/11/af/b911af6b2b5a1c29e9e37db45d82596d.jpg",
        desc: "Pure, natural sweetness",
        description: "Traditional unrefined sugar (Jaggery) known for its rich flavor and health benefits. Sourced from the finest sugarcane crops.",
        subproducts: ["Cubes", "Powder", "Liquid"],
        specs: [
            { label: 'Source', value: 'Sugarcane' },
            { label: 'Form', value: 'Solid/Powder' },
            { label: 'Color', value: 'Golden Brown' },
            { label: 'Additives', value: 'None' }
        ],
        packaging: ['500g Box', '1kg Pouch', '10kg Bulk'],
        certifications: ['FSSAI', 'Organic']
    },
    {
        id: 3,
        slug: "makhana",
        name: "Makhana",
        group: "Food",
        category: "Food",
        image: "https://i.pinimg.com/736x/bc/0d/a2/bc0da2fce4cf0cab4582ea83aadd3679.jpg",
        desc: "Healthy superfood snacks",
        description: "Premium Fox Nuts (Makhana), a nutrient-dense superfood perfect for healthy snacking. Low in calories and high in protein.",
        subproducts: ["Raw", "Roasted", "Flavored"],
        specs: [
            { label: 'Grade', value: '5A Premium' },
            { label: 'Size', value: '20mm+' },
            { label: 'Moisture', value: '5% max' }
        ],
        packaging: ['250g Pack', '10kg Wholesale Sack'],
        certifications: ['FSSAI', 'FDA']
    },
    {
        id: 4,
        slug: "indian-spices",
        name: "Indian Spices",
        group: "Food",
        category: "Food",
        image: "https://i.pinimg.com/1200x/0e/70/ca/0e70ca1f4b145087c1bd23fb4f6aeb91.jpg",
        desc: "Authentic flavors & aromas",
        description: "Aromatic and potent Indian spices sourced directly from plantations. Includes Turmeric, Cardamom, Cumin, and more.",
        subproducts: ["Cardamom", "Turmeric", "Cumin"],
        specs: [
            { label: 'Origin', value: 'Kerala/Andhra' },
            { label: 'Purity', value: '99%' },
            { label: 'Aroma', value: 'Strong/Natural' }
        ],
        packaging: ['Retail Packs', 'Bulk Exports'],
        certifications: ['Spices Board', 'ISO']
    },
    {
        id: 5,
        slug: "premium-coffee",
        name: "Premium Coffee",
        group: "Food",
        category: "Food",
        image: "https://i.pinimg.com/1200x/d2/aa/34/d2aa347f6536e8bccf7769cebbdd0770.jpg",
        desc: "Roasted beans & blends",
        description: "Exquisite coffee beans selected from the high-altitude estates of Coorg and Chikmagalur. Available in Arabica and Robusta varieties.",
        subproducts: ["Arabica", "Robusta", "Green Beans"],
        specs: [
            { label: 'Roast', value: 'Medium/Dark' },
            { label: 'Grade', value: 'AAA' },
            { label: 'Moisture', value: '11-12%' }
        ],
        packaging: ['Jute Bags', 'Vacuum Packs'],
        certifications: ['Coffee Board', 'Rainforest Alliance']
    },
    {
        id: 6,
        slug: "dried-fruits-veg",
        name: "Dried Fruits & Veg",
        group: "Food",
        category: "Food",
        image: "https://i.pinimg.com/736x/dc/fe/f2/dcfef2b3a6e04b553d43db7e3f61bad0.jpg",
        desc: "Nutrient-rich produce",
        description: "Dehydrated fruits and vegetables that retain their nutritional value and flavor. Long shelf life and easy to transport.",
        subproducts: ["Dehydrated Onion", "Garlic Powder"],
        specs: [
            { label: 'Drying Method', value: 'Air/Freeze Dried' },
            { label: 'Shelf Life', value: '12 Months' },
            { label: 'Rehydration', value: 'Fast' }
        ],
        packaging: ['Moisture-proof Bags', 'Cartons'],
        certifications: ['HACCP', 'FSSAI']
    },
    {
        id: 7,
        slug: "surgical-disposables",
        name: "Surgical Disposables",
        group: "Medical",
        category: "Medical",
        image: "https://i.pinimg.com/1200x/fd/ec/a8/fdeca838f49db6852800fbd22896c612.jpg",
        desc: "Certified medical supplies",
        description: "High-grade medical consumables including gloves, masks, and gowns. Manufactured under strict sterile conditions.",
        subproducts: ["Gloves", "Masks", "Gowns", "Syringes"],
        size: "wide",
        specs: [
            { label: 'Material', value: 'Latex/Nitrile/Non-woven' },
            { label: 'Sterility', value: 'EO Sterilized' },
            { label: 'Standards', value: 'CE/FDA' }
        ],
        packaging: ['Sterile Packs', 'Bulk Cartons'],
        certifications: ['CE', 'ISO 13485']
    },
];

export const getProductBySlug = (slug) => {
    return products.find(p => p.slug === slug);
};
