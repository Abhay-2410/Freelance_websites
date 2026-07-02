import Image from "next/image";
import { categoryLabels, formatPrice, type Product } from "@/data/store";

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="interactive-lift group overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm hover:shadow-lg">
      <div className="interactive-scale relative aspect-[4/3] overflow-hidden bg-stone-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-walnut backdrop-blur-sm">
          {categoryLabels[product.category]}
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold text-walnut">
            {product.name}
          </h3>
          <p className="shrink-0 text-base font-semibold text-amber-900">
            {formatPrice(product.price)}
          </p>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-stone-600">
          {product.description}
        </p>
      </div>
    </article>
  );
}
