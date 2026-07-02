import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/transitions/Reveal";
import { storeInfo } from "@/data/store";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about UrbanTeak Furnishings — a Bengaluru furniture showroom crafting quality pieces for modern Indian homes since 2012.",
};

const milestones = [
  {
    year: "2012",
    title: "Opened in Indiranagar",
    description:
      "Started as a small workshop serving local homeowners with custom teak furniture.",
  },
  {
    year: "2017",
    title: "Expanded showroom",
    description:
      "Grew to a 4,000 sq ft display space featuring full room setups and live material samples.",
  },
  {
    year: "2022",
    title: "City-wide delivery",
    description:
      "Launched free delivery and assembly across all Bangalore pin codes.",
  },
  {
    year: "Today",
    title: "Trusted by 5,000+ homes",
    description:
      "Serving apartments, villas, and offices with handcrafted and modular furniture.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-24">
          <Reveal direction="right">
            <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Crafting comfort for Bangalore since 2012"
              description={`${storeInfo.name} was founded with a simple belief: every home deserves furniture that is beautiful, durable, and honestly priced.`}
            />
            <p className="mt-6 text-base leading-relaxed text-stone-600">
              What began as a two-person workshop has grown into one of
              Indiranagar&apos;s most visited furniture showrooms. We work
              directly with skilled artisans across Karnataka, cutting out
              middlemen so you get premium quality at fair prices.
            </p>
            <p className="mt-4 text-base leading-relaxed text-stone-600">
              Whether you&apos;re furnishing a 2BHK in Whitefield or a villa in
              Sarjapur, our team helps you choose pieces that fit your space,
              lifestyle, and budget.
            </p>
            </div>
          </Reveal>
          <Reveal direction="left" delay={120}>
            <div className="interactive-scale relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1200&q=80"
              alt="UrbanTeak furniture showroom"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            </div>
          </Reveal>
        </div>
      </section>

      <Reveal>
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Values"
          title="What we stand for"
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Quality Materials",
              text: "Solid teak, sheesham, and engineered wood sourced from certified suppliers.",
            },
            {
              title: "Honest Pricing",
              text: "Every product tag shows the final price. No surprise charges at checkout.",
            },
            {
              title: "Personal Service",
              text: "In-store consultants help with measurements, layouts, and custom orders.",
            },
          ].map((value, index) => (
            <Reveal key={value.title} delay={index * 90}>
              <div className="interactive-lift h-full rounded-2xl border border-stone-200 bg-amber-50/50 p-6">
              <h3 className="font-display text-xl font-semibold text-walnut">
                {value.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">
                {value.text}
              </p>
              </div>
            </Reveal>
          ))}
        </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="bg-walnut py-16 text-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Our Journey"
            title="Milestones"
            align="center"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {milestones.map((item, index) => (
              <Reveal key={item.year} delay={index * 80}>
                <div className="interactive-lift h-full rounded-2xl border border-stone-600 bg-white/5 p-6">
                <p className="text-sm font-semibold text-amber-300">
                  {item.year}
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-stone-300">
                  {item.description}
                </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
        </section>
      </Reveal>

      <Reveal>
        <section className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-walnut">
          See our collection in person
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-stone-600">
          Visit our Indiranagar showroom to touch fabrics, compare finishes, and
          get expert advice from our team.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/products"
            className="btn-press rounded-full bg-walnut px-6 py-3 text-sm font-semibold text-cream hover:bg-amber-900"
          >
            View Products
          </Link>
          <Link
            href="/contact"
            className="btn-press rounded-full border border-walnut px-6 py-3 text-sm font-semibold text-walnut hover:bg-walnut hover:text-cream"
          >
            Get Directions
          </Link>
        </div>
        </section>
      </Reveal>
    </>
  );
}
