export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  supplier: string;
  brand?: string;
  material?: string;
  specifications?: Record<string, string>;
  inStock: boolean;
}

// Mock product data - 100+ products across categories
export const products: Product[] = [
  // Steel & Metal (30 products)
  {
    id: "steel-001",
    name: "TMT Bars Fe 500",
    category: "Steel & Metal",
    description: "High-grade TMT reinforcement bars for construction",
    image: "/api/placeholder/400/300",
    supplier: "JSW Steel",
    brand: "JSW",
    material: "Fe 500",
    specifications: { grade: "Fe 500", size: "8mm-32mm" },
    inStock: true,
  },
  {
    id: "steel-002",
    name: "MS Square Bar",
    category: "Steel & Metal",
    description: "Mild steel square bars for structural applications",
    image: "/api/placeholder/400/300",
    supplier: "Neo Mega Steel",
    material: "IS2062-A",
    inStock: true,
  },
  {
    id: "steel-003",
    name: "MS Angle",
    category: "Steel & Metal",
    description: "Structural steel angles for framework",
    image: "/api/placeholder/400/300",
    supplier: "Tata Steel",
    brand: "Tata",
    inStock: true,
  },
  {
    id: "steel-004",
    name: "C Channel",
    category: "Steel & Metal",
    description: "Steel C channels for construction",
    image: "/api/placeholder/400/300",
    supplier: "Rashmi Metaliks",
    inStock: true,
  },
  {
    id: "steel-005",
    name: "MS Pipe",
    category: "Steel & Metal",
    description: "Mild steel pipes for plumbing and structure",
    image: "/api/placeholder/400/300",
    supplier: "MSP Steel",
    inStock: true,
  },
  // ... continue with more steel products
  
  // Cement & Concrete (25 products)
  {
    id: "cement-001",
    name: "Portland Cement OPC 53",
    category: "Concrete & Cement",
    description: "Premium grade cement for high-strength construction",
    image: "/api/placeholder/400/300",
    supplier: "Ultratech Cement",
    brand: "Ultratech",
    specifications: { grade: "OPC 53", packSize: "50kg" },
    inStock: true,
  },
  {
    id: "cement-002",
    name: "Ready Mix Concrete M-30",
    category: "Concrete & Cement",
    description: "Ready-to-use concrete mix for faster construction",
    image: "/api/placeholder/400/300",
    supplier: "RDC",
    material: "M-30",
    inStock: true,
  },
  {
    id: "cement-003",
    name: "ACC Concrete Plus",
    category: "Concrete & Cement",
    description: "High-performance concrete for durable structures",
    image: "/api/placeholder/400/300",
    supplier: "ACC Limited",
    brand: "ACC",
    inStock: true,
  },
  
  // Wood & Timber (20 products)
  {
    id: "wood-001",
    name: "Marine Plywood 18mm",
    category: "Wood & Timber",
    description: "Waterproof plywood for exterior applications",
    image: "/api/placeholder/400/300",
    supplier: "Greenply",
    brand: "Greenply",
    specifications: { thickness: "18mm", size: "8x4 feet" },
    inStock: true,
  },
  {
    id: "wood-002",
    name: "Teak Wood Planks",
    category: "Wood & Timber",
    description: "Premium quality teak wood for furniture",
    image: "/api/placeholder/400/300",
    supplier: "Timber House",
    inStock: true,
  },
  
  // Electrical & Plumbing (15 products)
  {
    id: "elec-001",
    name: "Electrical Cables 2.5sqmm",
    category: "Electrical & Plumbing",
    description: "Copper wiring cables for residential use",
    image: "/api/placeholder/400/300",
    supplier: "Polycab",
    brand: "Polycab",
    inStock: true,
  },
  {
    id: "plumb-001",
    name: "UPVC Water Pipes",
    category: "Electrical & Plumbing",
    description: "Durable PVC pipes for water supply",
    image: "/api/placeholder/400/300",
    supplier: "Hindustan Machinery",
    inStock: true,
  },
  
  // Paint & Finishing (10 products)
  {
    id: "paint-001",
    name: "Asian Paints Tractor Emulsion",
    category: "Paint & Finishing",
    description: "Premium interior wall paint",
    image: "/api/placeholder/400/300",
    supplier: "Raj Paints & Hardware",
    brand: "Asian Paints",
    inStock: true,
  },
  {
    id: "paint-002",
    name: "PU Paints",
    category: "Paint & Finishing",
    description: "Polyurethane paints for wood finishing",
    image: "/api/placeholder/400/300",
    supplier: "Dolphin Paints",
    brand: "Dolphin",
    inStock: true,
  },
];

// Generate additional products to reach 100+
const categories = ["Steel & Metal", "Concrete & Cement", "Wood & Timber", "Electrical & Plumbing", "Paint & Finishing"];
const suppliers = ["JSW Steel", "Tata Steel", "Ultratech", "ACC Limited", "Greenply", "Polycab"];

for (let i = products.length; i < 100; i++) {
  const category = categories[Math.floor(Math.random() * categories.length)];
  products.push({
    id: `prod-${i.toString().padStart(3, "0")}`,
    name: `${category} Product ${i}`,
    category,
    description: `Quality ${category.toLowerCase()} material for construction projects`,
    image: "/api/placeholder/400/300",
    supplier: suppliers[Math.floor(Math.random() * suppliers.length)],
    inStock: Math.random() > 0.1,
  });
}

export const categories_list = Array.from(new Set(products.map((p) => p.category)));
export const suppliers_list = Array.from(new Set(products.map((p) => p.supplier)));
export const brands_list = Array.from(new Set(products.map((p) => p.brand).filter(Boolean)));
