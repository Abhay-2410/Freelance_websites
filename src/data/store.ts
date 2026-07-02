export type ProductCategory = "living-room" | "bedroom" | "dining" | "office";

export type Product = {
  id: string;
  name: string;
  category: ProductCategory;
  price: number;
  description: string;
  image: string;
  featured?: boolean;
};

export const storeInfo = {
  name: "UrbanTeak Furnishings",
  tagline: "Handcrafted furniture for Bangalore homes",
  phone: "+91 98765 43210",
  whatsapp: "+919876543210",
  email: "hello@urbanteak.in",
  address: {
    street: "42, 100 Feet Road, Indiranagar",
    city: "Bengaluru",
    state: "Karnataka",
    pincode: "560038",
  },
  hours: {
    weekdays: "Mon – Sat: 10:00 AM – 8:00 PM",
    sunday: "Sun: 11:00 AM – 6:00 PM",
  },
  social: {
    instagram: "https://instagram.com/urbanteak",
    facebook: "https://facebook.com/urbanteak",
  },
};

export const categoryLabels: Record<ProductCategory, string> = {
  "living-room": "Living Room",
  bedroom: "Bedroom",
  dining: "Dining",
  office: "Office",
};

export const products: Product[] = [
  {
    id: "sofa-linen-3",
    name: "Linen 3-Seater Sofa",
    category: "living-room",
    price: 45999,
    description:
      "Solid teak frame with premium linen upholstery. Deep cushions for everyday comfort.",
    image:
      "https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?w=800&q=80",
    featured: true,
  },
  {
    id: "coffee-table-oak",
    name: "Oak Coffee Table",
    category: "living-room",
    price: 12999,
    description:
      "Minimal oak coffee table with hidden storage drawer. Perfect for compact living rooms.",
    image:
      "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=800&q=80",
    featured: true,
  },
  {
    id: "tv-unit-walnut",
    name: "Walnut TV Unit",
    category: "living-room",
    price: 24999,
    description:
      "Wall-mounted media console with cable management and adjustable shelves.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80",
  },
  {
    id: "king-bed-teak",
    name: "Teak King Bed Frame",
    category: "bedroom",
    price: 52999,
    description:
      "Hand-finished teak bed with headboard storage. Includes 10-year frame warranty.",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=800&q=80",
    featured: true,
  },
  {
    id: "wardrobe-sliding",
    name: "Sliding Door Wardrobe",
    category: "bedroom",
    price: 38999,
    description:
      "6-door wardrobe with mirror panels, hanging space, and pull-out drawers.",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=800&q=80",
  },
  {
    id: "bedside-table-pair",
    name: "Bedside Table Pair",
    category: "bedroom",
    price: 8999,
    description:
      "Matching pair with soft-close drawers and USB charging ports.",
    image:
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80",
  },
  {
    id: "dining-set-6",
    name: "6-Seater Dining Set",
    category: "dining",
    price: 67999,
    description:
      "Solid sheesham dining table with six upholstered chairs. Seats up to 8 when extended.",
    image:
      "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80",
    featured: true,
  },
  {
    id: "dining-bench",
    name: "Upholstered Dining Bench",
    category: "dining",
    price: 14999,
    description:
      "Space-saving bench seating with water-resistant fabric. Ideal for breakfast nooks.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=800&q=80",
  },
  {
    id: "bar-cabinet",
    name: "Bar Cabinet",
    category: "dining",
    price: 31999,
    description:
      "Glass-front bar unit with wine rack, LED lighting, and lockable storage.",
    image:
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
  },
  {
    id: "round-dining-table",
    name: "4-Seater Round Dining Table",
    category: "dining",
    price: 34999,
    description:
      "Compact round table in solid mango wood with pedestal base. Ideal for smaller dining spaces.",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80",
  },
  {
    id: "teak-sideboard",
    name: "Teak Sideboard",
    category: "dining",
    price: 22999,
    description:
      "Three-door sideboard with brass handles and inner shelving for crockery and serveware.",
    image:
      "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80",
  },
  {
    id: "office-desk-l",
    name: "L-Shaped Office Desk",
    category: "office",
    price: 27999,
    description:
      "Ergonomic workstation with cable grommets and built-in bookshelf.",
    image:
      "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=800&q=80",
  },
  {
    id: "office-chair-ergo",
    name: "Ergonomic Office Chair",
    category: "office",
    price: 18999,
    description:
      "Adjustable lumbar support, breathable mesh back, and 360° swivel.",
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?w=800&q=80",
  },
  {
    id: "bookshelf-5tier",
    name: "5-Tier Bookshelf",
    category: "office",
    price: 11499,
    description:
      "Open shelving unit in natural finish. Holds up to 80 kg per shelf.",
    image:
      "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=800&q=80",
  },
];

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((product) => product.featured);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((product) => product.category === category);
}
