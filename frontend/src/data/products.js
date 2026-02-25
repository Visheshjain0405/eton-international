export const products = [
    // --- PACKAGING (PP PRODUCTS & AGRO TEXTILES) ---
    {
        id: 101,
        slug: "pp-woven-sacks",
        name: "PP/HDPE Woven Sacks",
        group: "Packaging",
        category: "Packaging",
        image: "https://www.ppbag.co/assets/uploads/2023/11/productdetil/pp-hdpe-woven-sack-bag_1699519557.webp",
        desc: "Standard industrial packaging",
        description: "High-strength Polypropylene (PP) and High-Density Polyethylene (HDPE) woven sacks, ideal for packaging grain, sugar, flour, and industrial chemicals. Available in laminated and unlaminated options.",
        specs: [{ label: "Material", value: "PP/HDPE" }, { label: "Capacity", value: "5kg - 50kg" }, { label: "Print", value: "Flexo/Offset" }],
        packaging: ["Bales", "Pallets"],
        features: [
            { title: "Exceptional Strength", desc: "Crafted for heavy-duty industrial and agricultural loads.", icon: "Zap" },
            { title: "Enhanced UV Protection", desc: "Special UV stabilizers ensure long-term durability in outdoor storage.", icon: "ShieldCheck" },
            { title: "Moisture Resistance", desc: "Available with inner liners or lamination to protect from environmental dampness.", icon: "Package" },
            { title: "Custom Dimensions", desc: "Tailored sizes and GSM to fit your exact shipping requirements.", icon: "FileText" }
        ],
        whyChoose: [
            { title: "Global Export Grade", text: "Meets international benchmarks for safe and secure cargo transport." },
            { title: "Tear-Resistant Fabric", text: "Woven construction prevents punctures and minimizes product loss." },
            { title: "Cost-Effective Bulk", text: "Optimized production scales providing the best value for distributors." },
            { title: "Eco-Conscious Choice", text: "100% recyclable material supporting corporate sustainability goals." }
        ],
        industries: [
            { name: "Agriculture", icon: "Shovel" },
            { name: "Construction", icon: "Building2" },
            { name: "Mining", icon: "Search" },
            { name: "Chemicals", icon: "Factory" },
            { name: "Logistics", icon: "Truck" }
        ]
    },
    {
        id: 102,
        slug: "woven-fabric-rolls",
        name: "Woven Fabric Rolls",
        group: "Packaging",
        category: "Packaging",
        image: "https://www.ppbag.co/assets/uploads/2023/11/productdetil/pp-hdpe-woven-fabric-rolls_1699519198.webp",
        desc: "Unconverted woven fabric",
        description: "Continuous rolls of woven PP/HDPE fabric used for manufacturing bags, tarpaulins, and other textile applications. Available in various widths and GSM.",
        specs: [{ label: "Width", value: "Custom" }, { label: "GSM", value: "40 - 200+" }, { label: "Color", value: "Any" }],
        packaging: ["Rolls"],
        features: [
            { title: "Uniform Weave", desc: "Precision-manufactured rolls ensuring consistent material quality throughout.", icon: "Zap" },
            { title: "GSM Versatility", desc: "Available in a wide range of weights from 40 GSM to over 200 GSM.", icon: "FileText" },
            { title: "Custom Colors", desc: "Wide array of color options available for diverse branding and identification.", icon: "Globe2" },
            { title: "Large Roll Lengths", desc: "Produced in continuous long rolls for efficient downstream processing.", icon: "Package" }
        ],
        whyChoose: [
            { title: "Virgin Polymers Only", text: "We use 100% pure raw materials for maximum tensile strength and reliability." },
            { title: "Flexible Applications", text: "Ideal for bag making, tarpaulins, and various industrial covers." },
            { title: "Wide Width Support", text: "Standard and extra-wide width capabilities for large-scale projects." },
            { title: "Rapid Turnaround", text: "High-capacity production lines ensuring steady supply for large orders." }
        ],
        industries: [
            { name: "Manufacturing", icon: "Factory" },
            { name: "Packaging", icon: "Package" },
            { name: "Automotive", icon: "Zap" },
            { name: "Landscaping", icon: "Shovel" },
            { name: "Civil Engineering", icon: "Building2" }
        ]
    },
    {
        id: 103,
        slug: "bopp-laminated-bags",
        name: "BOPP Laminated Bags",
        group: "Packaging",
        category: "Packaging",
        image: "https://www.ppbag.co/assets/uploads/2023/11/productdetil/bopp-sack-bag_1700718325.webp",
        desc: "High-quality printed bags",
        description: "Biaxially Oriented Polypropylene (BOPP) laminated bags offer superior photographic printing quality, making them perfect for retail consumer brands like rice, flour, and pet food.",
        specs: [{ label: "Layers", value: "PP Woven + BOPP Film" }, { label: "Finish", value: "Gloss/Matte" }, { label: "Print", value: "Rotogravure" }],
        packaging: ["Bales"],
        features: [
            { title: "Photographic Print", desc: "Full-color rotogravure printing for stunning retail brand appearance.", icon: "FileText" },
            { title: "High Gloss Finish", desc: "Premium laminated surface that reflects quality and catches consumer eyes.", icon: "Zap" },
            { title: "Superior Seal", desc: "Advanced heat-sealing technology for unmatched product protection.", icon: "ShieldCheck" },
            { title: "Anti-Slip Coating", desc: "Special additives to ensure safe stacking and prevent slipping during transit.", icon: "Package" }
        ],
        whyChoose: [
            { title: "Retail-Ready Appeal", text: "Designed to stand out on supermarket shelves with vibrant, sharp graphics." },
            { title: "Ultimate Barrier", text: "The BOPP layer provides an excellent barrier against air and moisture." },
            { title: "Brand Reliability", text: "Consistent print quality across every single bag produced." },
            { title: "Customer Trust", text: "The premium look and feel build immediate confidence in your brand." }
        ],
        industries: [
            { name: "FMCG", icon: "ShoppingCart" },
            { name: "Pet Food", icon: "Users" },
            { name: "Retail", icon: "ShoppingCart" },
            { name: "Seeds/Agro", icon: "Shovel" },
            { name: "Consumer Goods", icon: "Package" }
        ]
    },
    {
        id: 104,
        slug: "block-bottom-bags",
        name: "Block Bottom Bags",
        group: "Packaging",
        category: "Packaging",
        image: "https://www.ppbag.co/assets/uploads/2023/11/productdetil/block-bottom-valve-bag_1699519063.webp",
        desc: "Leak-proof valve bags",
        description: "AD Star type block bottom bags designed for automated filling. No stitching implies almost zero leakage, ideal for cement and fine powders.",
        specs: [{ label: "Valve", value: "Self-closing" }, { label: "Shape", value: "Brick/Box" }, { label: "Usage", value: "Cement/Putty" }],
        packaging: ["Pallets"],
        features: [
            { title: "Zero Leakage", desc: "Completely stitch-free block bottom design eliminates leakage of fine powders.", icon: "ShieldCheck" },
            { title: "Valve Technology", desc: "Internal self-closing valve for dusty-free, rapid automated filling.", icon: "Zap" },
            { title: "Perfect Brick Shape", desc: "Excellent pallet stability and space efficiency in trucks or containers.", icon: "Building2" },
            { title: "Breathable Material", desc: "Micro-ventilation allows air to escape during high-speed filling.", icon: "Globe2" }
        ],
        whyChoose: [
            { title: "Automation Friendly", text: "Optimized for high-speed automatic filling machines with zero jamming." },
            { title: "Sustainable Specs", text: "Uses less material while providing more strength than traditional bags." },
            { title: "Harsh Environment Pro", text: "Highly resistant to moisture and rough handling at construction sites." },
            { title: "Brandable Sides", text: "Side gussets provide additional branding space for better identification." }
        ],
        industries: [
            { name: "Cement", icon: "Building2" },
            { name: "Concrete", icon: "Factory" },
            { name: "Minerals", icon: "Search" },
            { name: "Agro-Powders", icon: "Shovel" },
            { name: "Food Additives", icon: "Package" }
        ]
    },
    {
        id: 105,
        slug: "pp-shopping-bags",
        name: "PP Woven Shopping Bags",
        group: "Packaging",
        category: "Packaging",
        image: "https://www.ppbag.co/assets/uploads/2025/05/productdetil/pp-woven-shopping-bag_1747393520.webp",
        desc: "Reusable retail bags",
        description: "Eco-friendly, reusable shopping bags made from durable PP woven fabric. Customizable with high-quality branding for supermarkets and retail stores.",
        specs: [{ label: "Handle", value: "Webbing/Loop" }, { label: "Capacity", value: "10-20kg" }, { label: "Feature", value: "Reusable" }],
        packaging: ["Cartons"],
        features: [
            { title: "Heavy Load Capacity", desc: "Reinforced woven fabric capable of carrying up to 20kg without tearing.", icon: "Zap" },
            { title: "Reinforced Handles", desc: "Expertly stitched webbing or loop handles for maximum carrying comfort.", icon: "Users" },
            { title: "Eco-Friendly Life", desc: "Designed for hundreds of reuse cycles, reducing single-use plastic waste.", icon: "Globe2" },
            { title: "Foldable Design", desc: "Lightweight and easy to store, making it a perfect daily companion.", icon: "Package" }
        ],
        whyChoose: [
            { title: "Moving Billboard", text: "Turn every customer into a brand ambassador with large-format mobile branding." },
            { title: "Washable Fabric", text: "Easily cleaned to maintain a fresh look over years of repeated use." },
            { title: "Lamination Shine", text: "Available in gloss or matte finishes to match your brand's aesthetic." },
            { title: "Market Leader", text: "A premium alternative to standard paper or thin plastic shopping bags." }
        ],
        industries: [
            { name: "Supermarkets", icon: "ShoppingCart" },
            { name: "Events/Gifting", icon: "Users" },
            { name: "Apparel Retail", icon: "ShoppingCart" },
            { name: "Logistics", icon: "Truck" },
            { name: "Eco-Initiatives", icon: "Globe2" }
        ]
    },
    {
        id: 106,
        slug: "tarpaulins",
        name: "Tarpaulins",
        group: "Packaging",
        category: "Packaging",
        image: "https://www.ppbag.co/assets/uploads/2023/11/productdetil/tarpulin_1699519147.webp",
        desc: "Waterproof protective sheets",
        description: "Heavy-duty waterproof tarpaulins for protecting goods, vehicles, and construction sites from rain and sun. Reinforced with grommets.",
        specs: [{ label: "Waterproof", value: "100%" }, { label: "GSM", value: "70 - 300+" }, { label: "UV Treated", value: "Yes" }],
        packaging: ["Bales"],
        features: [
            { title: "100% Waterproof", desc: "Advanced poly-coating ensures complete protection against rain and snow.", icon: "ShieldCheck" },
            { title: "Reinforced Grommets", desc: "Heavy-duty aluminum or brass eyelets every 3 feet for secure tie-down.", icon: "Zap" },
            { title: "Rip-Stop Weave", desc: "Cross-woven industrial fabric that prevents small tears from spreading.", icon: "Package" },
            { title: "Arctic Flexibility", desc: "Remains flexible and easy to handle even in extreme sub-zero temperatures.", icon: "Globe" }
        ],
        whyChoose: [
            { title: "Extreme Weather Pro", text: "Built to withstand hurricane-force winds and scorching desert heat." },
            { title: "Multi-Season Life", text: "Superior UV inhibitors extend the life of the sheet through several seasons." },
            { title: "Versatile Utility", text: "Perfect for truck covers, rooftop protection, or ground sheets." },
            { title: "Easy Installation", text: "Reinforced edges and corners make setup quick and reliable." }
        ],
        industries: [
            { name: "Logistics", icon: "Truck" },
            { name: "Construction", icon: "Building2" },
            { name: "Agriculture", icon: "Shovel" },
            { name: "Humanitarian", icon: "Users" },
            { name: "Outdoor Events", icon: "Globe" }
        ]
    },
    {
        id: 107,
        slug: "fibc-jumbo-bags",
        name: "FIBC (Jumbo Bags)",
        group: "Packaging",
        category: "Packaging",
        image: "https://www.ppbag.co/assets/uploads/2023/11/productdetil/fibc_1699518900.webp",
        desc: "Bulk cargo containers",
        description: "Flexible Intermediate Bulk Containers (FIBC) for transporting 500kg to 2000kg of material like sand, chemicals, and minerals. Available in various loops and spout configurations.",
        specs: [{ label: "SWL", value: "500-2000kg" }, { label: "SF", value: "5:1 / 6:1" }, { label: "Type", value: "U-Panel/Circular" }],
        packaging: ["Pallets"],
        features: [
            { title: "2-Ton Load Capacity", desc: "Engineered for Safe Working Loads (SWL) of up to 2000kg with 6:1 security factor.", icon: "Zap" },
            { title: "Dust-Proof Sealing", desc: "Optional sift-proofing prevents fine powders from leaking through stitch lines.", icon: "ShieldCheck" },
            { title: "Custom Spouts", desc: "Tailored filling and discharge spouts for controlled and mess-free handling.", icon: "FileText" },
            { title: "Lifting Loops", desc: "Heavy-duty reinforced loops for easy forklift and crane operation.", icon: "Package" }
        ],
        whyChoose: [
            { title: "Logistics Efficiency", text: "Unitizes bulk cargo to maximize container space and reduce shipping costs." },
            { title: "Safety Certified", text: "Rigorous stress-testing ensures every bag meets international safety ratios." },
            { title: "Moisture Protection", text: "Available with PE liners for products sensitive to humidity and air." },
            { title: "Space Optimization", text: "Foldable when empty and stackable when full, saving warehouse space." }
        ],
        industries: [
            { name: "Mining", icon: "Search" },
            { name: "Chemicals", icon: "Factory" },
            { name: "Agriculture", icon: "Shovel" },
            { name: "Pharmaceutics", icon: "Microscope" },
            { name: "Construction", icon: "Building2" }
        ]
    },
    {
        id: 108,
        slug: "sling-bags",
        name: "Sling Bags",
        group: "Packaging",
        category: "Packaging",
        image: "https://www.ppbag.co/assets/uploads/2023/11/productdetil/sling-bag_1699519253.webp",
        desc: "Unitized handling sacks",
        description: "Large open bags with lifting loops designed to hold multiple smaller sacks (e.g., 50kg cement bags) for efficient port handling and loading.",
        specs: [{ label: "Capacity", value: "1-2 Tons" }, { label: "Base", value: "Flat/reinforced" }],
        packaging: ["Bales"],
        features: [
            { title: "Rapid Port Loading", desc: "Specifically designed to speed up the loading and unloading of ships.", icon: "Zap" },
            { title: "Unitized Safety", desc: "Bundles 20-40 smaller sacks into one secure lifting unit to prevent damage.", icon: "ShieldCheck" },
            { title: "Extra-Wide Loops", desc: "Optimized for large harbor cranes and industrial forklift forks.", icon: "Package" },
            { title: "Base Reinforcement", desc: "Cross-stitched base for maximum stability during vertical lifting.", icon: "Building2" }
        ],
        whyChoose: [
            { title: "Lower Port Charges", text: "Faster turn-around times at docks significantly reduce port storage fees." },
            { title: "Damage Prevention", text: "Protects smaller internal bags from conveyor belt and hook damage." },
            { title: "Cost-Effective Unit", text: "The most economical way to handle break-bulk cargo in thousands of tons." },
            { title: "Port Compatibility", text: "Globally recognized design accepted at all international shipping terminals." }
        ],
        industries: [
            { name: "Cement", icon: "Building2" },
            { name: "Fertilizers", icon: "Shovel" },
            { name: "Shipping", icon: "Truck" },
            { name: "Port Logistics", icon: "Globe" },
            { name: "Bulk Trade", icon: "Globe2" }
        ]
    },
    {
        id: 109,
        slug: "silt-fence",
        name: "Silt Fence",
        group: "Packaging",
        category: "Packaging",
        image: "https://www.ppbag.co/assets/uploads/2023/11/productdetil/silt-fence_1699519269.webp",
        desc: "Sediment control",
        description: "A temporary barrier used on construction sites to prevent sediment from leaving the site. Made from porous woven fabric.",
        specs: [{ label: "UV Stability", value: "500+ Hours" }, { label: "Flow Rate", value: "Standard" }],
        packaging: ["Rolls"],
        features: [
            { title: "High Flow Filtration", desc: "Porous fabric allows water to pass through while trapping mud and soil.", icon: "Search" },
            { title: "Tough Construction", desc: "Engineered to withstand the pressure of heavy water flow and silt buildup.", icon: "Zap" },
            { title: "UV Resilient", desc: "Special additives prevent fabric degradation from long-term sun exposure.", icon: "ShieldCheck" },
            { title: "Pre-Staked Options", desc: "Available with pre-attached wood or metal stakes for rapid installation.", icon: "Package" }
        ],
        whyChoose: [
            { title: "Environmental Compliance", text: "Ensures construction sites meet EPA and local sediment control regulations." },
            { title: "Protects Waterways", text: "Prevents runoff from contaminating nearby streams, ponds, and drains." },
            { title: "Easy Mobilization", text: "Lightweight rolls are easy to transport and deploy across large sites." },
            { title: "Geo-Technical Grade", text: "Specifically woven for mechanical soil stabilization and reinforcement." }
        ],
        industries: [
            { name: "Civil Works", icon: "Building2" },
            { name: "Construction", icon: "Factory" },
            { name: "Landscaping", icon: "Shovel" },
            { name: "Road Works", icon: "Truck" },
            { name: "Forestry", icon: "Globe" }
        ]
    },
    {
        id: 110,
        slug: "shade-nets",
        name: "Shade Nets",
        group: "Packaging", // Or Agriculture, keeping in Packaging per user group based on structure
        category: "Packaging",
        image: "https://kirtiexports.in/wp-content/uploads/2025/05/SHADE-NET.webp",
        desc: "Agricultural sun protection",
        description: "Knitted HDPE nets providing partial shade (30%-90%) to crops, nurseries, and greenhouses. Protects against excessive heat and wind.",
        specs: [{ label: "Shade Factor", value: "30% - 90%" }, { label: "Color", value: "Green/Black" }],
        packaging: ["Rolls"],
        features: [
            { title: "Variable Shading", desc: "Available in 30% to 90% shade factors to suit different crop requirements.", icon: "Zap" },
            { title: "Anti-Hail Shield", desc: "Protective knitted structure minimizes crop damage from hail and wind.", icon: "ShieldCheck" },
            { title: "Knitted Lock-Stitch", desc: "Sophisticated knitting technique that prevents fraying even if cut.", icon: "Package" },
            { title: "Climate Control", desc: "Reduces temperature and moisture loss, creating an ideal micro-climate.", icon: "Globe" }
        ],
        whyChoose: [
            { title: "Maximum Crop Yield", text: "Protects young plants from sun-scorch, significantly improving harvest quality." },
            { title: "Durability Focus", text: "Made with 100% prime HDPE ensuring a productive life of over 5 years." },
            { title: "UV Masterbatch", text: "Enriched with high-grade UV stabilizers to resist the harshest tropical sun." },
            { title: "Easy Installation", text: "Lightweight and flexible, making it simple to install over varied structures." }
        ],
        industries: [
            { name: "Agriculture", icon: "Shovel" },
            { name: "Horticulture", icon: "Microscope" },
            { name: "Nursery", icon: "Globe2" },
            { name: "Leisure/Privacy", icon: "Users" },
            { name: "Construction", icon: "Building2" }
        ]
    },
    {
        id: 111,
        slug: "lumber-wrap",
        name: "Lumber Wrap",
        group: "Packaging",
        category: "Packaging",
        image: "https://www.ppbag.co/assets/uploads/2023/11/productdetil/lumber-wrap_1699519291.webp",
        desc: "Timber protection",
        description: "Heavy-duty coated woven fabric designed to protect lumber and wood products during transit and storage.",
        specs: [{ label: "Coating", value: "Anti-slip" }, { label: "Print", value: "Custom Logo" }],
        packaging: ["Rolls"],
        features: [
            { title: "Anti-Slip Surface", desc: "Special coating provides a high-friction surface for safe stacking and worker safety.", icon: "ShieldCheck" },
            { title: "Custom Brand Visibility", desc: "High-contrast printing allows for large, clear company logos on every roll.", icon: "FileText" },
            { title: "Weather Barrier", desc: "Prevents UV degradation, mold, and moisture damage during outdoor rail/truck transport.", icon: "Zap" },
            { title: "High Tear Strength", desc: "Specifically engineered to withstand the sharp edges of stacked lumber.", icon: "Package" }
        ],
        whyChoose: [
            { title: "Transit Security", text: "Ensures your high-value timber arrives at the destination in pristine condition." },
            { title: "Professional Branding", text: "Turns your cargo into a mobile billboard across international shipping routes." },
            { title: "Optimized Storage", text: "Allows for outdoor storage without compromising wood quality or color." },
            { title: "Standard & Custom Widths", text: "Available in widths tailored to standard lumber package dimensions." }
        ],
        industries: [
            { name: "Forestry", icon: "Globe" },
            { name: "Timber Trade", icon: "Building2" },
            { name: "Logistics", icon: "Truck" },
            { name: "Manufacturing", icon: "Factory" },
            { name: "Construction", icon: "Wrench" }
        ]
    },
    {
        id: 112,
        slug: "ground-cover",
        name: "Ground Cover / Weed Mat",
        group: "Packaging",
        category: "Packaging",
        image: "https://kirtiexports.in/wp-content/uploads/2025/05/hero-image-1-1.jpg",
        desc: "Weed control fabric",
        description: "Permeable woven fabric placed on soil to suppress weed growth while allowing water and nutrients to pass through. Essential for nurseries and landscaping.",
        specs: [{ label: "UV Treated", value: "Yes" }, { label: "Permeability", value: "High" }],
        packaging: ["Rolls"],
        features: [
            { title: "Weed Suppression", desc: "Blocks sunlight from reaching soil, preventing weed germination without chemicals.", icon: "Shovel" },
            { title: "Water Permeable", desc: "Specially designed weave allows water and air to reach plant roots easily.", icon: "Globe2" },
            { title: "Grid Markings", desc: "Features integrated planting lines for precise and uniform plant spacing.", icon: "FileText" },
            { title: "Multi-Year Life", desc: "Heavy-duty construction ensures the mat lasts for several growing seasons.", icon: "ShieldCheck" }
        ],
        whyChoose: [
            { title: "Reduced Labor Costs", text: "Eliminates the need for manual weeding or expensive herbicide applications." },
            { title: "Soil Health Focus", text: "Maintains soil moisture and prevents erosion while suppressing pests." },
            { title: "Nursery Grade", text: "The preferred choice for professional commercial nurseries and garden centers." },
            { title: "Environmentally Safe", text: "Sustainable weed management that minimizes chemical usage in the soil." }
        ],
        industries: [
            { name: "Landscaping", icon: "Shovel" },
            { name: "Horticulture", icon: "Microscope" },
            { name: "Nurseries", icon: "Globe" },
            { name: "Agriculture", icon: "Globe2" },
            { name: "Government Works", icon: "Building2" }
        ]
    },
    {
        id: 113,
        slug: "geo-textiles",
        name: "Geo Textiles",
        group: "Packaging",
        category: "Packaging",
        image: "https://www.ppbag.co/assets/uploads/2023/11/productdetil/geo-textiles_1699519307.webp",
        desc: "Civil engineering fabric",
        description: "Permeable fabrics used to separate, filter, reinforce, protect, or drain. Used in road construction, drainage systems, and erosion control.",
        specs: [{ label: "Type", value: "Woven/Non-woven" }, { label: "Strength", value: "High Tensile" }],
        packaging: ["Rolls"],
        features: [
            { title: "Soil Stabilization", desc: "Increases the load-bearing capacity of soft soils in civil projects.", icon: "Building2" },
            { title: "Filtration Layer", desc: "Prevents the migration of fine soil particles while allowing water flow.", icon: "Zap" },
            { title: "High Grab Strength", desc: "Resistant to mechanical damage during installation and heavy machinery traffic.", icon: "ShieldCheck" },
            { title: "Chemical Resistance", desc: "Inert to naturally occurring soil chemicals and biological degradation.", icon: "Globe" }
        ],
        whyChoose: [
            { title: "Project Longevity", text: "Significantly extends the life of roads, railways, and retaining walls." },
            { title: "Cost Efficiency", text: "Reduces the amount of expensive aggregate required for stabilization." },
            { title: "Global Standard", text: "Meets international ASTM and ISO standards for geo-synthetic engineering." },
            { title: "Versatile Solutions", text: "Applicable for drainage, filtration, separation, and reinforcement." }
        ],
        industries: [
            { name: "Road Works", icon: "Truck" },
            { name: "Construction", icon: "Building2" },
            { name: "Mining", icon: "Search" },
            { name: "Irrigation", icon: "Globe2" },
            { name: "Civil Engineering", icon: "Wrench" }
        ]
    },
    {
        id: 114,
        slug: "dunnage-bags",
        name: "Dunnage Bags",
        group: "Packaging",
        category: "Packaging",
        image: "https://www.ppbag.co/assets/uploads/2023/11/productdetil/dunnage-bag_1699519103.webp",
        desc: "Cargo stabilization",
        description: "Inflatable bags used to fill voids, brace loads, and absorb impact in shipping containers and trucks.",
        specs: [{ label: "Material", value: "Paper/PP" }, { label: "Valve", value: "Fast fill" }],
        packaging: ["Cartons"],
        features: [
            { title: "Vibration Absorption", desc: "Protects fragile goods by absorbing kinetic energy during transit.", icon: "Zap" },
            { title: "Rapid Inflation", desc: "High-flow valve system for fast deployment in shipping containers.", icon: "Truck" },
            { title: "Airtight Reliability", desc: "Multiple layers of PE film ensure consistent pressure over long sea voyages.", icon: "ShieldCheck" },
            { title: "Reusable Design", desc: "Easily deflated and ready for multiple uses, reducing logistics waste.", icon: "Globe2" }
        ],
        whyChoose: [
            { title: "Zero Damage Claims", text: "Virtually eliminates product shifting, the #1 cause of transit damage." },
            { title: "Worker Safety", text: "Prevents dangerous load shifts that could injure personnel during unloading." },
            { title: "Load Flexibility", text: "Fills irregular voids and gaps that traditional bracing simply cannot." },
            { title: "Certified Strength", text: "Level-1 to Level-5 bags available to suit different container and rail weights." }
        ],
        industries: [
            { name: "Export Trade", icon: "Globe" },
            { name: "Logistics", icon: "Truck" },
            { name: "Automotive", icon: "Factory" },
            { name: "Manufacturing", icon: "Building2" },
            { name: "Retail", icon: "ShoppingCart" }
        ]
    },
    {
        id: 115,
        slug: "leno-bags",
        name: "Leno / Mesh Bags",
        group: "Packaging",
        category: "Packaging",
        image: "https://www.ppbag.co/assets/uploads/2024/01/productdetil/leno-bag_1705491191.webp",
        desc: "Breathable produce bags",
        description: "Open-weave mesh bags providing excellent ventilation. Perfect for packaging onions, potatoes, garlic, and citrus fruits.",
        specs: [{ label: "Visibility", value: "High" }, { label: "Airflow", value: "Maximum" }],
        packaging: ["Bales"],
        features: [
            { title: "Max Ventilation", desc: "Open-mesh design prevents heat buildup and gas accumulation for fresh produce.", icon: "Globe2" },
            { title: "High Visibility", desc: "Customers can easily inspect the quality and color of the products inside.", icon: "Search" },
            { title: "Safe Load Carry", desc: "Tough leno-weave prevents the bag from stretching even under heavy weight.", icon: "Zap" },
            { title: "Drawstring Closure", desc: "Optional integrated drawstring for easy hand-carrying and secure closure.", icon: "Package" }
        ],
        whyChoose: [
            { title: "Preserve Freshness", text: "Significantly extends the shelf-life of volatile produce like onions and garlic." },
            { title: "Professional Display", text: "Vibrant colors (Red, Yellow, Green) to enhance the visual appeal of produce." },
            { title: "Anti-Fungal Barrier", text: "Prevents moisture-related fungal growth through constant airflow." },
            { title: "Durable & Reusable", text: "Tough enough for multiple field-to-market cycles." }
        ],
        industries: [
            { name: "Agriculture", icon: "Shovel" },
            { name: "Food Processing", icon: "Factory" },
            { name: "Retail Markets", icon: "ShoppingCart" },
            { name: "Export Trade", icon: "Globe" },
            { name: "Farmers", icon: "Shovel" }
        ]
    },
    // Adding remaining Industrial/Agro items from list
    {
        id: 116,
        slug: "hdpe-woven-pipes",
        name: "HDPE Woven Pipes",
        group: "Packaging",
        category: "Packaging",
        image: "https://kirtiexports.in/wp-content/uploads/2025/05/hero-image-1.jpg",
        desc: "Flexible irrigation",
        description: "Flexible woven pipes used for irrigation and water delivery in agricultural fields. Easy to install and relocate.",
        specs: [{ label: "Diameter", value: "Various" }, { label: "Pressure", value: "Low/Medium" }],
        packaging: ["Rolls"],
        features: [
            { title: "Ultra-Flexible Layout", desc: "Easily navigates uneven terrain and field corners without kinking.", icon: "Zap" },
            { title: "High Pressure Rating", desc: "Woven reinforcement allows for higher water pressure than standard PE pipes.", icon: "ShieldCheck" },
            { title: "Zero Leakage", desc: "Heat-sealed seams ensure water reaches its destination without wastage.", icon: "Package" },
            { title: "UV Resilient", desc: "Maintains structural integrity even under constant exposure to direct sunlight.", icon: "Globe" }
        ],
        whyChoose: [
            { title: "Rapid Installation", text: "Can be deployed across large hectares in hours instead of days." },
            { title: "Cost Efficiency", text: "A much more economical alternative to rigid PVC or aluminum pipe systems." },
            { title: "Portable & Reusable", text: "Easily rolled up and moved to different fields or stored during off-seasons." },
            { title: "Anti-Corrosive", text: "Immune to soil chemicals, rust, and microbial degradation." }
        ],
        industries: [
            { name: "Agriculture", icon: "Shovel" },
            { name: "Horticulture", icon: "Microscope" },
            { name: "Mining/Dewatering", icon: "Search" },
            { name: "Civil Works", icon: "Building2" },
            { name: "Disaster Relief", icon: "Truck" }
        ]
    },
    {
        id: 117,
        slug: "grow-bags",
        name: "HDPE Grow Bags",
        group: "Packaging",
        category: "Packaging",
        image: "https://kirtiexports.in/wp-content/uploads/2025/05/HERO-IMAGE-2-2.jpg",
        desc: "Portable planting",
        description: "Durable HDPE woven bags for growing plants, herbs, and small trees. UV stabilized for long outdoor life.",
        specs: [{ label: "Life", value: "3-5 Years" }, { label: "Drainage", value: "Yes" }],
        packaging: ["Bales"],
        features: [
            { title: "Air Root Pruning", desc: "Breathable fabric stimulates better root structure and prevents circling.", icon: "Microscope" },
            { title: "Superior Aeration", desc: "Ensures plenty of oxygen reaches the root system for faster plant growth.", icon: "Zap" },
            { title: "Integrated Drainage", desc: "Prevents over-watering and root rot with optimized drainage capabilities.", icon: "ShieldCheck" },
            { title: "Heavy Duty Handles", desc: "Reinforced handles allow for easy movement of plants across the nursery.", icon: "Package" }
        ],
        whyChoose: [
            { title: "Maximized Yield", text: "Plants grow up to 30% faster than in traditional plastic or clay pots." },
            { title: "Space Optimization", text: "Lightweight and easy to arrange in tight greenhouse or terrace spaces." },
            { title: "Sustainable Life", text: "Reusable for several seasons, significantly reducing plastic waste." },
            { title: "Temperature Control", text: "Breathable material keeps roots cooler in summer and warmer in winter." }
        ],
        industries: [
            { name: "Nurseries", icon: "Globe" },
            { name: "Terrace Farming", icon: "Building2" },
            { name: "Urban Gardening", icon: "Users" },
            { name: "Forestry", icon: "Shovel" },
            { name: "Landscaping", icon: "Globe2" }
        ]
    },
    {
        id: 118,
        slug: "mulch-films",
        name: "Mulch Films",
        group: "Packaging",
        category: "Packaging",
        image: "https://kirtiexports.in/wp-content/uploads/2025/05/Hole-Silver-Black-Mulch-Plastic-Mulch-Film-Agriculture.webp",
        desc: "Soil protection film",
        description: "Agricultural plastic film used to modify soil temperature, limit weed growth, and prevent moisture loss.",
        specs: [{ label: "Thickness", value: "15-100 Microns" }, { label: "Color", value: "Silver/Black" }],
        packaging: ["Rolls"],
        features: [
            { title: "Moisture Retention", desc: "Significantly reduces evaporation, saving up to 50% on irrigation water.", icon: "Globe2" },
            { title: "Temp Regulation", desc: "Silver/Black contrast maintains optimal soil temperature for root health.", icon: "Zap" },
            { title: "Full Weed Block", desc: "Prevents light penetration, completely stopping weed growth.", icon: "ShieldCheck" },
            { title: "Nutrient Wash-out Prevention", desc: "Protects soil from heavy rain, preventing fertilizer leaching.", icon: "Shovel" }
        ],
        whyChoose: [
            { title: "Early Harvest", text: "Warms the soil early in the season, allowing for faster market entry." },
            { title: "Clean Produce", text: "Keeps fruits and vegetables off the ground, reducing soil splash and rot." },
            { title: "Labor Reduction", text: "Eliminates the cost of manual weeding throughout the entire season." },
            { title: "Pest Management", text: "Highly reflective silver surface confuses and deters insect pests." }
        ],
        industries: [
            { name: "Commercial Farming", icon: "Globe" },
            { name: "Greenhouses", icon: "Building2" },
            { name: "Fruit Orchards", icon: "Shovel" },
            { name: "Vegetable Crops", icon: "ShoppingCart" },
            { name: "Agro-Innovation", icon: "Microscope" }
        ]
    },
    {
        id: 119,
        slug: "vermicompost-beds",
        name: "Vermicompost Bed",
        group: "Packaging",
        category: "Packaging",
        image: "https://kirtiexports.in/wp-content/uploads/2025/05/HERO-IMAGE-2-6.jpg",
        desc: "Organic composter",
        description: "Portable HDPE woven beds designed for vermicomposting. Durable, easy to install, and provides aeration for worms.",
        specs: [{ label: "Material", value: "HDPE Woven" }, { label: "UV", value: "Stabilized" }],
        packaging: ["Bales"],
        features: [
            { title: "Aeration Windows", desc: "Side vents ensure constant oxygen supply for higher worm productivity.", icon: "Zap" },
            { title: "Leak-Proof Base", desc: "Superior heat-sealing prevents vermiwash leakage into the open ground.", icon: "ShieldCheck" },
            { title: "Tough HDPE Fabric", desc: "Built with 250+ GSM fabric to withstand the weight of heavy compost.", icon: "Package" },
            { title: "Easy Removal", desc: "Designed for simple harvesting of finished organic vermicompost.", icon: "Globe2" }
        ],
        whyChoose: [
            { title: "Portable Setup", text: "Can be installed anywhere on the farm and relocated within minutes." },
            { title: "Long Life Span", text: "UV stabilized fabric ensures the bed lasts for over 5 years of organic farming." },
            { title: "Zero Setup Cost", text: "Requires no civil construction or permanent pits for composting." },
            { title: "Organic Gold", text: "Enables farmers to produce their own high-quality manure at zero cost." }
        ],
        industries: [
            { name: "Organic Farming", icon: "Shovel" },
            { name: "Home Gardening", icon: "Users" },
            { name: "Dairy Farms", icon: "Building2" },
            { name: "Nursery Units", icon: "Globe" },
            { name: "Agro-Education", icon: "Microscope" }
        ]
    },
    {
        id: 120,
        slug: "tarpaulin-fabric",
        name: "Tarpaulin Fabric",
        group: "Packaging",
        category: "Packaging",
        image: "https://www.ppbag.co/assets/uploads/2023/11/productdetil/tarpaulin-fabric_1699519240.webp",
        desc: "High-grade waterproof fabric",
        description: "Heavy-duty HDPE/PP woven fabric laminated for water resistance. Ideal for manufacturing tarpaulins, covers, and tents.",
        specs: [{ label: "Width", value: "Up to 12ft" }, { label: "GSM", value: "100-400" }, { label: "UV", value: "Treated" }],
        packaging: ["Rolls"],
        features: [
            { title: "Multi-Layer Coating", desc: "Sophisticated LDPE lamination for absolute water and air proofing.", icon: "ShieldCheck" },
            { title: "High Grab Strength", desc: "Reinforced weave provides unmatched resistance to tearing and pulling.", icon: "Zap" },
            { title: "Custom Color Tones", desc: "Available in deep blue, silver, black, and custom corporate colors.", icon: "Globe2" },
            { title: "Uniform Thickness", desc: "Precision manufacturing ensures zero thin-spots across the entire roll.", icon: "FileText" }
        ],
        whyChoose: [
            { title: "OEM/Converter Ready", text: "The perfect raw material for factories manufacturing industrial covers." },
            { title: "Heat-Seal Friendly", text: "Coating is optimized for perfect results with ultrasonic or hot-air seamers." },
            { title: "Proven Durability", text: "Used worldwide in the most demanding transport and outdoor conditions." },
            { title: "Large Width Advantage", text: "Seamless rolls up to 12ft reduce the need for jointing in large covers." }
        ],
        industries: [
            { name: "Manufacturing", icon: "Factory" },
            { name: "Logistics", icon: "Truck" },
            { name: "Events/Hospitality", icon: "Users" },
            { name: "Civil Works", icon: "Building2" },
            { name: "Defense/NGO", icon: "Globe" }
        ]
    },
    {
        id: 121,
        slug: "pp-woven-sheet",
        name: "PP/HDPE Woven Sheet",
        group: "Packaging",
        category: "Packaging",
        image: "https://www.ppbag.co/assets/uploads/2023/11/productdetil/pp-hdpe-woven-sheet_1699519012.webp",
        desc: "Multipurpose woven sheets",
        description: "Flat woven sheets made from high-strength PP/HDPE tapes. Used for wrapping, covering, and varied industrial applications.",
        specs: [{ label: "Strength", value: "High Tensile" }, { label: "Color", value: "Custom" }],
        packaging: ["Bales/Rolls"],
        features: [
            { title: "Universal Utility", desc: "Adaptable for wrapping, covering, and creating structural partitions.", icon: "Package" },
            { title: "High-Density Weave", desc: "Tightly woven tapes provide an excellent barrier against dust and debris.", icon: "Zap" },
            { title: "Extreme Durability", desc: "Resistant to mechanical wear, puncturing, and industrial chemicals.", icon: "ShieldCheck" },
            { title: "Edge Stability", desc: "Precision-cut edges that resist fraying during handling and installation.", icon: "FileText" }
        ],
        whyChoose: [
            { title: "Low-Cost Protection", text: "The most economical way to cover large industrial assets or raw materials." },
            { title: "Flexible Dimensions", text: "Available in custom lengths and widths to suit unique industrial requirements." },
            { title: "Rapid Deployment", text: "Easy to roll out and secure, minimizing downtime in busy industrial zones." },
            { title: "Lightweight Strength", text: "Easy to transport and handle without compromising on protective strength." }
        ],
        industries: [
            { name: "Manufacturing", icon: "Factory" },
            { name: "Construction", icon: "Building2" },
            { name: "Warehousing", icon: "Package" },
            { name: "Export Trade", icon: "Globe" },
            { name: "Logistics", icon: "Truck" }
        ]
    },
    {
        id: 122,
        slug: "anti-insect-nets",
        name: "Anti Insect Nets",
        group: "Packaging",
        category: "Packaging",
        image: "https://kirtiexports.in/wp-content/uploads/2026/01/IMG_7554.jpg",
        desc: "Crop protection mesh",
        description: "Fine mesh nets designed to protect crops from insect pests while allowing air and sunlight to pass through. UV stabilized for durability.",
        specs: [{ label: "Mesh Size", value: "40/50 Mesh" }, { label: "Material", value: "HDPE Monofilament" }],
        packaging: ["Rolls"],
        features: [
            { title: "Biological Barrier", desc: "Micro-holes prevent even the smallest pests from entering the growing zone.", icon: "ShieldCheck" },
            { title: "Optimized Airflow", desc: "Maintains natural ventilation to prevent heat-stress and fungal growth.", icon: "Globe2" },
            { title: "Sunlight Transmission", desc: "Allows full-spectrum light for photosynthesis while blocking UV damage.", icon: "Zap" },
            { title: "HDPE Monofilament", desc: "Extremely strong knitted structure that resists tearing and abrasion.", icon: "Package" }
        ],
        whyChoose: [
            { title: "Pesticide-Free Farming", text: "Enables organic and residue-free production by providing physical protection." },
            { title: "Multi-Year Investment", text: "High-grade UV stabilization ensures a service life of 5+ years." },
            { title: "Versatile Protection", text: "Defends against aphids, whiteflies, and other harmful tropical insects." },
            { title: "Simple Maintenance", text: "Easy to clean and maintain, ensuring consistent high performance over years." }
        ],
        industries: [
            { name: "Horticulture", icon: "Microscope" },
            { name: "Organic Farming", icon: "Shovel" },
            { name: "Nurseries", icon: "Globe" },
            { name: "Agro-Innovation", icon: "Zap" },
            { name: "Greenhouses", icon: "Building2" }
        ]
    },
    {
        id: 123,
        slug: "woven-shade-nets",
        name: "Woven Shade Nets",
        group: "Packaging",
        category: "Packaging",
        image: "https://kirtiexports.in/wp-content/uploads/2026/01/1.jpg",
        desc: "Durable woven shading",
        description: "Heavy-duty woven shade fabric offering superior strength and longevity. Ideal for car parks, construction sites, and agricultural shading.",
        specs: [{ label: "Weave", value: "Flat/Tape" }, { label: "Shading", value: "50% - 95%" }],
        packaging: ["Rolls"],
        features: [
            { title: "Heavy-Duty Weave", desc: "Flat-tape construction offers significantly higher strength than knitted nets.", icon: "Zap" },
            { title: "Consistent Shading", desc: "Provides perfectly uniform light diffusion across the entire covered area.", icon: "ShieldCheck" },
            { title: "Reinforced Borders", desc: "Designed for stable tensioning over large-span industrial structures.", icon: "Building2" },
            { title: "High Shade Coverage", desc: "Available in ultra-high shading factors (up to 95%) for privacy and heat block.", icon: "Package" }
        ],
        whyChoose: [
            { title: "Industrial Strength", text: "The preferred choice for high-tension applications like car parking and fencing." },
            { title: "Sleek Aesthetic", text: "Modern woven look that complements contemporary commercial architecture." },
            { title: "Extended Exposure Life", text: "Optimized for permanent outdoor installations in high-UV regions." },
            { title: "Privacy Protection", text: "Ideal for screening construction sites or residential leisure areas." }
        ],
        industries: [
            { name: "Commercial Construction", icon: "Building2" },
            { name: "Leisure/Parks", icon: "Users" },
            { name: "Auto Industry", icon: "Factory" },
            { name: "Large-Scale Agro", icon: "Shovel" },
            { name: "Hospitality", icon: "Globe" }
        ]
    },
    {
        id: 124,
        slug: "anti-thrip-nets",
        name: "Anti Thrip Nets",
        group: "Packaging",
        category: "Packaging",
        image: "https://kirtiexports.in/wp-content/uploads/2026/01/1-1.jpg",
        desc: "Micro-mesh protection",
        description: "Specialized ultra-fine netting designed specifically to block thrips and other tiny pests in greenhouses and polyhouses.",
        specs: [{ label: "Protection", value: "High" }, { label: "Light Trans", value: "Optimized" }],
        packaging: ["Rolls"],
        features: [
            { title: "Micro-Pore Technology", desc: "Engineered with tiny gaps calibrated specifically to block minute thrips.", icon: "Microscope" },
            { title: "High-Light Clarity", desc: "Maintains excellent transparency to maximize essential light for plant growth.", icon: "Zap" },
            { title: "Thermal Stability", desc: "Controls the internal greenhouse temperature by managing air movement.", icon: "Globe2" },
            { title: "Anti-Fraying Weave", desc: "The complex monofilament structure prevents hole enlargement if damaged.", icon: "ShieldCheck" }
        ],
        whyChoose: [
            { title: "Specialized Solution", text: "The only effective physical defense against highly destructive thrip species." },
            { title: "Chemical Reduction", text: "Virtually eliminates the need for expensive and harmful thrip-control sprays." },
            { title: "Export Quality Produce", text: "Ensures fruits and flowers are blemish-free and ready for premium markets." },
            { title: "Precision Engineering", text: "A result of advanced textile research into pest-specific mesh dimensions." }
        ],
        industries: [
            { name: "High-Tech Greenhouses", icon: "Building2" },
            { name: "Flower Export", icon: "Globe" },
            { name: "Research Labs", icon: "Microscope" },
            { name: "Agro-Innovation", icon: "Zap" },
            { name: "Seed Production", icon: "Shovel" }
        ]
    },
    {
        id: 125,
        slug: "silage-films",
        name: "Silage Films",
        group: "Packaging",
        category: "Packaging",
        image: "https://kirtiexports.in/wp-content/uploads/2025/05/HERO-IMAGE-1-4.jpg",
        desc: "Fodder preservation",
        description: "High-quality stretch film for wrapping silage bales. Ensures airtight sealing to preserve nutritional value of animal feed.",
        specs: [{ label: "Stretch", value: "High" }, { label: "UV Stable", value: "12 Months" }],
        packaging: ["Rolls/Box"],
        features: [
            { title: "Multi-Layer Stretch", desc: "High-performance co-extruded film with unmatched tack and cling properties.", icon: "Zap" },
            { title: "Airtight Barrier", desc: "Creates a perfect anaerobic environment to ensure high-quality fermentation.", icon: "ShieldCheck" },
            { title: "High Tear Resistance", desc: "Designed to wrap around square or round bales without puncturing on corners.", icon: "Package" },
            { title: "Puncture Mitigation", desc: "Self-healing properties that maintain the seal even under rough handling.", icon: "ShieldCheck" }
        ],
        whyChoose: [
            { title: "Nutritional Integrity", text: "Preserves the energy, protein, and dry matter content of your fodder." },
            { title: "Weather Resilience", text: "Ensures your silage stays protected and nutritious throughout the winter." },
            { title: "Optimized Fermentation", text: "Consistent cling prevents oxygen pockets that lead to mold growth." },
            { title: "High Yield Per Roll", text: "Superior stretchability means more bales wrapped per roll of film." }
        ],
        industries: [
            { name: "Dairy Farming", icon: "Building2" },
            { name: "Livestock Export", icon: "Truck" },
            { name: "Agriculture", icon: "Shovel" },
            { name: "Meat Industry", icon: "Factory" },
            { name: "Forage Logistics", icon: "Globe" }
        ]
    },
    {
        id: 126,
        slug: "silage-bags",
        name: "Silage Bags",
        group: "Packaging",
        category: "Packaging",
        image: "https://kirtiexports.in/wp-content/uploads/2025/05/HERO-IMAGE-1d.png",
        desc: "Grain & Fodder Storage",
        description: "Large tube bags for storing silage, grains, and compost. Provides anaerobic environment for superior feed preservation.",
        specs: [{ label: "Diameter", value: "8ft - 12ft" }, { label: "Thickness", value: "Heavy Duty" }],
        packaging: ["Box/Pallet"],
        features: [
            { title: "Massive Volume Capacity", desc: "Store hundreds of tons of grain or silage in a single, secure tube.", icon: "Zap" },
            { title: "Anaerobic Excellence", desc: "Ensures the highest quality fermentation without permanent silo structures.", icon: "ShieldCheck" },
            { title: "Three-Layer Strength", desc: "Co-extruded white/black film for maximum thermal control and durability.", icon: "Package" },
            { title: "UV Barrier Technology", desc: "Designed for a minimum of 18 months of reliable outdoor storage life.", icon: "Globe" }
        ],
        whyChoose: [
            { title: "Low-Cost Storage", text: "Avoid the high capital cost of building concrete silos or sheds." },
            { title: "Flexibility in Location", text: "Set up your storage exactly where you need it—on the field or at the farm.", icon: "Building2" },
            { title: "Minimized Loss", text: "Virtually eliminates storage spoilage and rodent damage compared to open piles." },
            { title: "Efficient Inventory", text: "Easily manage different harvests by using separate storage tubes." }
        ],
        industries: [
            { name: "Commercial Grain", icon: "Globe" },
            { name: "Large-Scale Dairy", icon: "Building2" },
            { name: "Agro-Logistics", icon: "Truck" },
            { name: "Cattle Feedlots", icon: "Factory" },
            { name: "Food Security", icon: "ShieldCheck" }
        ]
    },
    {
        id: 127,
        slug: "ldpe-nursery-bags",
        name: "LDPE Nursery Bag",
        group: "Packaging",
        category: "Packaging",
        image: "https://kirtiexports.in/wp-content/uploads/2025/05/HERO-IMAGE-2-3.jpg",
        desc: "Plant propagation bags",
        description: "Black LDPE poly bags with drainage holes, widely used for growing saplings and nursery plants. Economical and effective.",
        specs: [{ label: "Material", value: "LDPE" }, { label: "Thickness", value: "Custom" }],
        packaging: ["Bales"],
        features: [
            { title: "Precision Drainage", desc: "Pre-punched holes at specific levels to prevent waterlogging and root rot.", icon: "Shovel" },
            { title: "Light-Block Material", desc: "Total black-out LDPE prevents sunlight from reaching roots for healthy growth.", icon: "Zap" },
            { title: "Seamless Construction", desc: "High-strength bottom seal to prevent bursting even when filled with rich, wet soil.", icon: "ShieldCheck" },
            { title: "UV Life Extension", desc: "Formulated to last through the entire seedling-to-sapling propagation period.", icon: "Globe2" }
        ],
        whyChoose: [
            { title: "Highest Survival Rate", text: "Maintains optimal moisture and thermal levels for young, sensitive saplings." },
            { title: "Cost-Effective Bulk", text: "The most economical choice for massive reforestation or commercial projects." },
            { title: "Easy Transplanting", text: "Protects the root ball during delivery, ensuring easy and successful planting." },
            { title: "Globally Popular", text: "The industry standard for professional commercial nurseries across Asia and Africa." }
        ],
        industries: [
            { name: "Commercial Nurseries", icon: "Globe" },
            { name: "Reforestation", icon: "Earth" },
            { name: "Forestry Departments", icon: "Building2" },
            { name: "Tea & Coffee Estates", icon: "Shovel" },
            { name: "Rubber Plantations", icon: "Factory" }
        ]
    },

    // --- AGRICULTURE (FERTILIZERS) ---
    {
        id: 201,
        slug: "vermicompost",
        name: "Urea Fertilizer",
        group: "Agriculture",
        category: "Agriculture",
        image: "https://kirtiexports.in/wp-content/uploads/2026/01/2-1.jpg",
        desc: "Essential crop nutrient",
        description: "High-nitrogen fertilizer (46% N) that promotes green leafy growth and improves crop yield. Granular form for easy application.",
        specs: [{ label: "Nitrogen", value: "46%" }, { label: "Form", value: "Granular/Prilled" }],
        packaging: ["50kg Bags", "Bulk"],
        features: [
            { title: "Maximum Nitrogen Content", desc: "Highest nitrogen concentration (46%) for rapid and vigorous plant vegetative growth.", icon: "Zap" },
            { title: "Uniform Granulation", desc: "Perfectly sized granules ensure even distribution across large fields with mechanical spreaders.", icon: "ShieldCheck" },
            { title: "Rapid Solubility", desc: "Dissolves quickly upon contact with soil moisture, providing immediate nutrient availability.", icon: "Globe2" },
            { title: "Multi-Crop Versatility", desc: "Highly effective for cereals, oilseeds, vegetables, and fruit orchards.", icon: "Package" }
        ],
        whyChoose: [
            { title: "Yield Maximization", text: "Proven to significantly increase biomass and harvest quality for global food security." },
            { title: "Cost-Effective Growth", text: "The most economical source of pure nitrogen for large-scale commercial farming." },
            { title: "Global Export Grade", text: "Complies with international purity and packaging standards for safe sea transit." },
            { title: "Soil Health Compatible", text: "Neutralizing properties when used with proper soil management techniques." }
        ],
        industries: [
            { name: "Commercial Farming", icon: "Globe" },
            { name: "Grain Production", icon: "Factory" },
            { name: "Horticulture", icon: "Microscope" },
            { name: "Agro-Trade", icon: "Truck" },
            { name: "Food Processing", icon: "ShoppingCart" }
        ]
    },
    {
        id: 202,
        slug: "cow-dung",
        name: "DAP Fertilizer",
        group: "Agriculture",
        category: "Agriculture",
        image: "https://kirtiexports.in/wp-content/uploads/2026/01/2-2.jpg",
        desc: "Root & bloom booster",
        description: "High-phosphorus fertilizer (18% P) that encourages strong root development and healthy flowering/fruiting.",
        specs: [{ label: "Phosphorus", value: "46% P2O5" }, { label: "Nitrogen", value: "18% N" }],
        packaging: ["50kg Bags"],
        features: [
            { title: "Dual Nutrient Power", desc: "Provides high-grade Phosphorus (46%) and essential Nitrogen (18%) in a single application.", icon: "Zap" },
            { title: "Robust Root System", desc: "Stimulates deep and healthy root development, critical for early plant establishment.", icon: "ShieldCheck" },
            { title: "Enhanced Flowering", desc: "Boosts the production of flowers and ensures uniform fruit development.", icon: "Microscope" },
            { title: "Acid Soil Balance", desc: "Formulated to perform exceptionally well in a wide variety of soil pH levels.", icon: "Shovel" }
        ],
        whyChoose: [
            { title: "Strong Foundation", text: "Ensures crops start with the vigor needed to survive early-season environmental stress." },
            { title: "High Bio-Availability", text: "Phosphorus is chemically available for immediate uptake by young root systems." },
            { title: "Premium Purity", text: "Sourced from high-grade phosphate rock for minimal heavy metal contaminants." },
            { title: "Optimized Storage", text: "Low hygroscopic properties prevent caking and allow for long-term warehouse storage." }
        ],
        industries: [
            { name: "Cereal Farming", icon: "Globe" },
            { name: "Fruit Export", icon: "ShoppingCart" },
            { name: "Cotton Industry", icon: "Factory" },
            { name: "Greenhouses", icon: "Building2" },
            { name: "Agro-Logistics", icon: "Truck" }
        ]
    },

    // --- MEDICAL ---
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

export const getProductBySlug = (slug) => {
    return products.find(p => p.slug === slug);
};
