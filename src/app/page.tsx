import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/transitions/Reveal";
import { categoryLabels, getFeaturedProducts, storeInfo } from "@/data/store";

const categories = Object.entries(categoryLabels);

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();

  return (
    <>
      <section className="relative overflow-hidden bg-walnut text-cream">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=80"
            alt=""
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
          <Reveal direction="right">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-amber-200">
                Bengaluru&apos;s Trusted Furniture Showroom
              </p>
              <h1 className="mt-4 font-display text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
                Furniture that makes your home feel complete
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-stone-200">
                From living room sofas to office desks, {storeInfo.name} offers
                handcrafted pieces with transparent pricing and free delivery across
                Bangalore.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/products"
                  className="btn-press rounded-full bg-amber-600 px-7 py-3 text-sm font-semibold text-white hover:bg-amber-500"
                >
                  Browse Collection
                </Link>
                <Link
                  href="/contact"
                  className="btn-press rounded-full border border-stone-400 px-7 py-3 text-sm font-semibold text-cream hover:bg-white/10"
                >
                  Get Directions
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal direction="left" delay={120}>
            <div className="grid grid-cols-2 gap-4">
              <div className="interactive-scale relative aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80"
                  alt="Modern living room furniture"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
              <div className="interactive-scale relative mt-8 aspect-[3/4] overflow-hidden rounded-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1617806118233-18e1de247200?w=800&q=80"
                  alt="Dining room furniture set"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Shop by Room"
            title="Find furniture for every corner of your home"
            description="Explore curated collections for living rooms, bedrooms, dining spaces, and home offices."
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map(([slug, label], index) => (
              <Reveal key={slug} delay={index * 80} direction="up">
                <Link
                  href={`/products#${slug}`}
                  className="interactive-lift group block rounded-2xl border border-stone-200 bg-white p-6 shadow-sm hover:border-amber-200 hover:shadow-md"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-lg font-semibold text-amber-900 transition-transform group-hover:scale-110">
                    {label.charAt(0)}
                  </div>
                  <h3 className="mt-4 font-display text-xl font-semibold text-walnut transition-colors group-hover:text-amber-900">
                    {label}
                  </h3>
                  <p className="mt-2 text-sm text-stone-600">
                    View sofas, beds, tables, and more
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bg-white py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Featured Pieces"
              title="Popular picks from our showroom"
              description="These bestsellers are ready for immediate delivery across Bangalore."
            />
            <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product, index) => (
                <Reveal key={product.id} delay={index * 90}>
                  <ProductCard product={product} />
                </Reveal>
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/products"
                className="btn-press inline-flex rounded-full border border-walnut px-6 py-3 text-sm font-semibold text-walnut hover:bg-walnut hover:text-cream"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-amber-50">
            <div className="grid lg:grid-cols-2">
              <div className="p-8 sm:p-12 lg:p-16">
                <SectionHeading
                  eyebrow="Why Choose Us"
                  title="Built for Bangalore homes"
                  description="We combine traditional craftsmanship with modern designs suited for apartments and villas across the city."
                />
                <ul className="mt-8 space-y-4 text-sm leading-relaxed text-stone-700">
                  <li className="flex gap-3">
                    <span className="mt-1 text-amber-800">✓</span>
                    Free delivery and assembly within Bangalore
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-amber-800">✓</span>
                    Transparent pricing with no hidden charges
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-amber-800">✓</span>
                    Custom sizing available on most collections
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-1 text-amber-800">✓</span>
                    5-year warranty on solid wood frames
                  </li>
                </ul>
                <Link
                  href="/about"
                  className="btn-press mt-8 inline-flex rounded-full bg-walnut px-6 py-3 text-sm font-semibold text-cream hover:bg-amber-900"
                >
                  Learn Our Story
                </Link>
              </div>
              <div className="interactive-scale relative min-h-[320px]">
                <Image
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1200&q=80"
                  alt="Furniture showroom interior"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="border-t border-stone-200 bg-white py-16">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl font-semibold text-walnut">
              Ready to visit our showroom?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              Walk in at {storeInfo.address.street}, {storeInfo.address.city} or
              call us at {storeInfo.phone} to schedule a consultation.
            </p>
            <Link
              href="/contact"
              className="btn-press mt-8 inline-flex rounded-full bg-amber-700 px-8 py-3 text-sm font-semibold text-white hover:bg-amber-600"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </Reveal>
    </>
  );
}
