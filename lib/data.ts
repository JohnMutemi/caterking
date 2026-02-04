export interface Product {
  id: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  specs: { label: string; value: string }[];
  image: string;
  featured?: boolean;
}

export interface Category {
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export const categories: Category[] = [
  {
    name: "Refrigeration",
    slug: "refrigeration",
    description: "Commercial refrigerators, freezers, and cold storage solutions",
    image: "/images/categories/refrigeration.jpg",
    productCount: 12,
  },
  {
    name: "Display Cabinets",
    slug: "display-cabinets",
    description: "Cake displays, beverage coolers, and showcase units",
    image: "/images/categories/display-cabinets.jpg",
    productCount: 8,
  },
  {
    name: "Cooking Equipment",
    slug: "cooking-equipment",
    description: "Commercial stoves, ovens, fryers, and griddles",
    image: "/images/categories/cooking-equipment.jpg",
    productCount: 15,
  },
  {
    name: "Stainless Steel Fabrication",
    slug: "stainless-steel",
    description: "Custom sinks, tables, cabinets, and worktops",
    image: "/images/categories/stainless-steel.jpg",
    productCount: 20,
  },
  {
    name: "Processing Machines",
    slug: "processing-machines",
    description: "Food processors, mixers, slicers, and dishwashers",
    image: "/images/categories/processing-machines.jpg",
    productCount: 10,
  },
];

export const products: Product[] = [
  // Refrigeration
  {
    id: "ref-001",
    name: "Commercial Upright Freezer 600L",
    category: "Refrigeration",
    categorySlug: "refrigeration",
    description: "Heavy-duty commercial upright freezer with digital temperature control and energy-efficient compressor.",
    specs: [
      { label: "Capacity", value: "600 Liters" },
      { label: "Temperature Range", value: "-18°C to -22°C" },
      { label: "Power", value: "220V/50Hz" },
      { label: "Dimensions", value: "680 x 800 x 1900mm" },
    ],
    image: "/images/products/freezer-600l.jpg",
    featured: true,
  },
  {
    id: "ref-002",
    name: "Double Door Display Refrigerator",
    category: "Refrigeration",
    categorySlug: "refrigeration",
    description: "Glass door display refrigerator perfect for beverages and perishables with LED lighting.",
    specs: [
      { label: "Capacity", value: "1000 Liters" },
      { label: "Temperature Range", value: "2°C to 8°C" },
      { label: "Doors", value: "2 Glass Doors" },
      { label: "Dimensions", value: "1200 x 700 x 2100mm" },
    ],
    image: "/images/products/display-fridge.jpg",
    featured: true,
  },
  {
    id: "ref-003",
    name: "Under-Counter Refrigerator",
    category: "Refrigeration",
    categorySlug: "refrigeration",
    description: "Space-saving under-counter refrigeration unit for commercial kitchens.",
    specs: [
      { label: "Capacity", value: "150 Liters" },
      { label: "Temperature Range", value: "0°C to 10°C" },
      { label: "Power", value: "220V/50Hz" },
      { label: "Dimensions", value: "600 x 600 x 850mm" },
    ],
    image: "/images/products/under-counter-fridge.jpg",
  },
  // Display Cabinets
  {
    id: "disp-001",
    name: "Curved Glass Cake Display",
    category: "Display Cabinets",
    categorySlug: "display-cabinets",
    description: "Elegant curved glass refrigerated display for cakes and pastries with internal LED lighting.",
    specs: [
      { label: "Length", value: "1200mm" },
      { label: "Temperature Range", value: "2°C to 8°C" },
      { label: "Shelves", value: "3 Glass Shelves" },
      { label: "Lighting", value: "LED Strip" },
    ],
    image: "/images/products/cake-display.jpg",
    featured: true,
  },
  {
    id: "disp-002",
    name: "Hot Food Display Warmer",
    category: "Display Cabinets",
    categorySlug: "display-cabinets",
    description: "Heated display unit for keeping food warm and appetizing with humidity control.",
    specs: [
      { label: "Capacity", value: "3 Trays" },
      { label: "Temperature Range", value: "30°C to 90°C" },
      { label: "Power", value: "1500W" },
      { label: "Dimensions", value: "900 x 500 x 650mm" },
    ],
    image: "/images/products/hot-display.jpg",
  },
  // Cooking Equipment
  {
    id: "cook-001",
    name: "6-Burner Commercial Gas Stove",
    category: "Cooking Equipment",
    categorySlug: "cooking-equipment",
    description: "Professional 6-burner gas range with heavy-duty cast iron grates and stainless steel construction.",
    specs: [
      { label: "Burners", value: "6 High-Power Burners" },
      { label: "Material", value: "Stainless Steel 304" },
      { label: "BTU", value: "25,000 BTU per burner" },
      { label: "Dimensions", value: "1200 x 800 x 850mm" },
    ],
    image: "/images/products/gas-stove-6b.jpg",
    featured: true,
  },
  {
    id: "cook-002",
    name: "Commercial Deep Fryer 20L",
    category: "Cooking Equipment",
    categorySlug: "cooking-equipment",
    description: "Heavy-duty electric deep fryer with temperature control and oil drainage system.",
    specs: [
      { label: "Capacity", value: "20 Liters" },
      { label: "Power", value: "5000W" },
      { label: "Temperature", value: "Up to 200°C" },
      { label: "Material", value: "Stainless Steel" },
    ],
    image: "/images/products/deep-fryer.jpg",
  },
  {
    id: "cook-003",
    name: "Convection Oven Commercial",
    category: "Cooking Equipment",
    categorySlug: "cooking-equipment",
    description: "Electric convection oven with steam injection for bakeries and restaurants.",
    specs: [
      { label: "Trays", value: "5 GN 1/1 Trays" },
      { label: "Power", value: "6.5kW" },
      { label: "Temperature", value: "50°C to 300°C" },
      { label: "Features", value: "Steam Injection" },
    ],
    image: "/images/products/convection-oven.jpg",
  },
  // Stainless Steel
  {
    id: "ss-001",
    name: "Double Bowl Sink Unit",
    category: "Stainless Steel Fabrication",
    categorySlug: "stainless-steel",
    description: "Custom fabricated double bowl sink with drainboard, made from food-grade stainless steel.",
    specs: [
      { label: "Material", value: "SS 304 Grade" },
      { label: "Gauge", value: "16 Gauge" },
      { label: "Bowls", value: "2 Deep Bowls" },
      { label: "Dimensions", value: "1800 x 700 x 850mm" },
    ],
    image: "/images/products/double-sink.jpg",
    featured: true,
  },
  {
    id: "ss-002",
    name: "Prep Table with Undershelf",
    category: "Stainless Steel Fabrication",
    categorySlug: "stainless-steel",
    description: "Heavy-duty stainless steel preparation table with adjustable undershelf.",
    specs: [
      { label: "Material", value: "SS 304 Grade" },
      { label: "Gauge", value: "18 Gauge" },
      { label: "Load Capacity", value: "500kg" },
      { label: "Dimensions", value: "1500 x 700 x 850mm" },
    ],
    image: "/images/products/prep-table.jpg",
  },
  // Processing Machines
  {
    id: "proc-001",
    name: "Commercial Dishwasher",
    category: "Processing Machines",
    categorySlug: "processing-machines",
    description: "Hood-type commercial dishwasher with rapid wash cycles and water-saving technology.",
    specs: [
      { label: "Capacity", value: "60 Racks/Hour" },
      { label: "Cycle Time", value: "60-120 seconds" },
      { label: "Water Usage", value: "2.5L per cycle" },
      { label: "Power", value: "6.8kW" },
    ],
    image: "/images/products/dishwasher.jpg",
    featured: true,
  },
  {
    id: "proc-002",
    name: "Planetary Mixer 30L",
    category: "Processing Machines",
    categorySlug: "processing-machines",
    description: "Heavy-duty planetary mixer for bakeries with 3 speeds and multiple attachments.",
    specs: [
      { label: "Capacity", value: "30 Liters" },
      { label: "Power", value: "1100W" },
      { label: "Speeds", value: "3 Variable Speeds" },
      { label: "Attachments", value: "Hook, Whisk, Paddle" },
    ],
    image: "/images/products/mixer-30l.jpg",
  },
];

export const featuredProducts = products.filter((p) => p.featured);

export function getProductsByCategory(categorySlug: string): Product[] {
  return products.filter((p) => p.categorySlug === categorySlug);
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}

export const companyInfo = {
  name: "Caterking Superior Kitchen Appliances",
  tagline: "Professional Commercial Kitchen Equipment – Built for Performance",
  phone: "+254 700 000 000",
  whatsapp: "+254700000000",
  email: "info@caterking.co.ke",
  address: "Mombasa Road, Nairobi, Kenya",
  location: {
    lat: -1.3177,
    lng: 36.8264,
  },
  hours: "Mon - Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 4:00 PM",
  yearsInBusiness: 15,
  customBuildsCompleted: 500,
  happyClients: 1200,
};
