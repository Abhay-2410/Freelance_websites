import type { Metadata } from "next";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/transitions/Reveal";
import {
  categoryLabels,
  products,
  type ProductCategory,
} from "@/data/store";

export const metadata: Metadata = {
  title: "Products",
  description:
    "Browse sofas, beds, dining sets, and office furniture with transparent pricing at UrbanTeak Furnishings, Bengaluru.",
};

const categoryOrder: ProductCategory[] = [
  "living-room",
  "bedroom",
  "dining",
  "office",
];

export default function ProductsPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Our Collection"
          title="Furniture for every room"
          description="All prices include GST. Custom finishes and sizes available on request. Delivery across Bangalore within 5–7 business days."
          align="center"
        />
      </Reveal>

      <div className="mt-16 space-y-20">
        {categoryOrder.map((category, sectionIndex) => {
          const categoryProducts = products.filter(
            (product) => product.category === category,
          );

          return (
            <Reveal key={category} delay={sectionIndex * 80}>
              <section id={category} className="scroll-mt-28">
                <div className="mb-8 flex items-end justify-between gap-4 border-b border-stone-200 pb-4">
                  <h2 className="font-display text-2xl font-semibold text-walnut sm:text-3xl">
                    {categoryLabels[category]}
                  </h2>
                  <p className="text-sm text-stone-500">
                    {categoryProducts.length} items
                  </p>
                </div>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {categoryProducts.map((product, index) => (
                    <Reveal key={product.id} delay={index * 70}>
                      <ProductCard product={product} />
                    </Reveal>
                  ))}
                </div>
              </section>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
