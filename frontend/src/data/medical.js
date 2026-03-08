export const medicalProducts = [
    {
        id: 301,
        slug: "surgical-gloves",
        name: "Disposable Coveralls",
        group: "Medical",
        category: "Medical",
        image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=800",
        desc: "Personal protection",
        description: "Full-body protective coveralls made from breathable SMS/MP fabric. Integrated hood and elastic cuffs.",
        specs: [{ label: "Standard", value: "Type 5/6" }, { label: "Color", value: "White" }],
        packaging: ["Carton of 50"],
        features: [
            { title: "SMS Multi-Layer Fabric", desc: "Combines liquid-repellent MP film with breathable SMS layers for total safety.", icon: "ShieldCheck" },
            { title: "Ergonomic Mobility", desc: "Generous fit design allows for full range of motion during emergency work.", icon: "Zap" },
            { title: "Elasticated Security", desc: "Integrated elastic cuffs and hood ensure a snug, gap-free seal against contaminants.", icon: "Users" },
            { title: "Antistatic Finish", desc: "Special treatment prevents static buildup in sensitive medical/industrial zones.", icon: "Wrench" }
        ],
        whyChoose: [
            { title: "Bio-Hazard Barrier", text: "Certified for protection against infectious agents and blood-borne pathogens." },
            { title: "High Breathability", text: "Minimizes heat stress for workers during high-intensity shifts." },
            { title: "Durable Seams", text: "Serged or taped seams provide an additional level of structural integrity." },
            { title: "Easy Donning", text: "Large front zipper with storm flap for rapid and safe gowning." }
        ],
        industries: [
            { name: "Emergency Response", icon: "Truck" },
            { name: "Hazardous Materials", icon: "Factory" },
            { name: "Pandemic Response", icon: "Microscope" },
            { name: "Paint Shops", icon: "Wrench" },
            { name: "Nuclear/Chemical", icon: "ShieldCheck" }
        ]
    },
    {
        id: 302,
        slug: "face-masks",
        name: "Surgical Face Masks",
        group: "Medical",
        category: "Medical",
        image: "https://images.unsplash.com/photo-1551601651-2a8555e1a43e?auto=format&fit=crop&q=80&w=800",
        desc: "Premium surgical masks",
        description: "3-ply disposable surgical masks with high bacterial filtration efficiency (BFE > 99%). Comfortable and breathable.",
        specs: [{ label: "Style", value: "3-Ply Earloop" }, { label: "BFE", value: "> 99%" }, { label: "Color", value: "Blue" }],
        packaging: ["Box of 50"],
        features: [
            { title: "99% BFE Filtration", desc: "High-density melt-blown filter provides superior protection against bacteria and viruses.", icon: "ShieldCheck" },
            { title: "Latex-Free Fabric", desc: "Skin-friendly, hypoallergenic materials for long-wear comfort without irritation.", icon: "Users" },
            { title: "Fluid Resistance", desc: "Treated outer layer repels splashes and droplets during medical procedures.", icon: "Zap" },
            { title: "Ultrasonic Sealing", desc: "Precision earloop attachment ensures durability even under physical tension.", icon: "Wrench" }
        ],
        whyChoose: [
            { title: "EN 14683 Standard", text: "Fully certified Type IIR surgical grade for maximum medical safety." },
            { title: "Zero Fog Design", text: "Adjustable nose clip ensures a tight seal, preventing eyewear from fogging." },
            { title: "Breathable Matrix", text: "Low breathing resistance allows for comfortable use during long shifts." },
            { title: "Sterile Production", text: "Manufactured in ISO-certified cleanroom environments for medical purity." }
        ],
        industries: [
            { name: "Hospitals", icon: "Building2" },
            { name: "Dental Clinics", icon: "Microscope" },
            { name: "Laboratories", icon: "Search" },
            { name: "Aviation", icon: "Globe2" },
            { name: "Food Handling", icon: "Factory" }
        ]
    },
    {
        id: 303,
        slug: "nitrile-gloves",
        name: "Medical Nitrile Gloves",
        group: "Medical",
        category: "Medical",
        image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800",
        desc: "Powder-free safety",
        description: "Medical-grade nitrile gloves (blue) offering excellent puncture resistance and tactile sensitivity.",
        specs: [{ label: "Material", value: "100% Nitrile" }, { label: "Style", value: "Powder-free" }],
        packaging: ["100 per Box"],
        features: [
            { title: "Tactile Sensitivity", desc: "Micro-textured fingertips provide unmatched grip even when handling wet materials.", icon: "Zap" },
            { title: "100% Latex-Free", desc: "Eliminates potential allergic reactions; safe for all medical staff and patients.", icon: "Users" },
            { title: "Puncture Resistance", desc: "Significantly tougher than standard latex or vinyl, resisting sharp tools.", icon: "ShieldCheck" },
            { title: "Beaded Cuff Design", desc: "Durable beaded cuffs prevent tearing during donning and block liquid drips.", icon: "Package" }
        ],
        whyChoose: [
            { title: "ASTM & EN Standards", text: "Fully compliant with international exam-grade safety specifications." },
            { title: "Chemical Barrier", text: "Resistant to a wide range of common laboratory chemicals and oils." },
            { title: "Ambidextrous Fit", text: "Symmetry designed for rapid one-handed selection and use." },
            { title: "Chlorinated Surface", text: "Smooth interior finish for fast powder-free donning and doffing." }
        ],
        industries: [
            { name: "Medical Exam", icon: "Building2" },
            { name: "Tattoo/Piercing", icon: "Users" },
            { name: "Automotive Repair", icon: "Factory" },
            { name: "Chemical Research", icon: "Microscope" },
            { name: "Janitorial Services", icon: "ShoppingCart" }
        ]
    },
    {
        id: 304,
        slug: "disposable-syringes",
        name: "Disposable Syringes",
        group: "Medical",
        category: "Medical",
        image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800",
        desc: "IV administration",
        description: "Disposable sterile syringes with siliconized needles for smooth injection. Available in various sizes (2ml to 50ml).",
        specs: [{ label: "Quantity", value: "Bulk Pack" }, { label: "Sterility", value: "EO Gas" }],
        packaging: ["Individually Wrapped"],
        features: [
            { title: "Siliconized Needle", desc: "Ultra-sharp needle with medical-grade silicone coating for painless penetration.", icon: "Zap" },
            { title: "Crystal Clear Barrel", desc: "Transparent high-purity polypropylene allows for perfect bubble detection.", icon: "Search" },
            { title: "Piston Smoothness", desc: "Special lubricated rubber gasket ensures a smooth and steady injection flow.", icon: "ShieldCheck" },
            { title: "Luer Lock Safety", desc: "Secure needle-to-barrel connection prevents accidental needle detachment.", icon: "Package" }
        ],
        whyChoose: [
            { title: "EO Gas Sterilized", text: "Certified 100% sterile and non-pyrogenic for intravenous safety." },
            { title: "Precision Scale", text: "Bold, indelible graduation markings for accurate dosage administration." },
            { title: "Minimal Dead Space", text: "Optimized design ensures maximum delivery with zero medication loss." },
            { title: "Global Pharma Quality", text: "Trusted by top hospitals for consistent performance in critical care." }
        ],
        industries: [
            { name: "Hospitals", icon: "Building2" },
            { name: "Vaccination Drives", icon: "Globe" },
            { name: "Veterinary Care", icon: "Users" },
            { name: "IV Therapy", icon: "Zap" },
            { name: "Pharma Research", icon: "Microscope" }
        ]
    }
];
