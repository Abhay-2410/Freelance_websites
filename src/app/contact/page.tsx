import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/transitions/Reveal";
import { storeInfo } from "@/data/store";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit UrbanTeak Furnishings in Indiranagar, Bengaluru. Call, WhatsApp, or email us for showroom directions and consultations.",
};

export default function ContactPage() {
  const fullAddress = `${storeInfo.address.street}, ${storeInfo.address.city}, ${storeInfo.address.state} – ${storeInfo.address.pincode}`;
  const mapsQuery = encodeURIComponent(fullAddress);
  const mapsEmbedUrl = `https://maps.google.com/maps?q=${mapsQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <SectionHeading
          eyebrow="Get in Touch"
          title="Visit our Indiranagar showroom"
          description="Walk in anytime during store hours, or reach out to schedule a personal consultation with our design team."
          align="center"
        />
      </Reveal>

      <div className="mt-14 grid gap-10 lg:grid-cols-2">
        <Reveal direction="right" className="space-y-6">
          <div className="interactive-lift rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <h2 className="font-display text-xl font-semibold text-walnut">
              Store Address
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-stone-600">
              {fullAddress}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${mapsQuery}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex text-sm font-semibold text-amber-800 hover:text-amber-900"
            >
              Open in Google Maps →
            </a>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="interactive-lift rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-800">
                Phone
              </h3>
              <a
                href={`tel:${storeInfo.phone.replace(/\s/g, "")}`}
                className="mt-2 block text-lg font-semibold text-walnut hover:text-amber-900"
              >
                {storeInfo.phone}
              </a>
            </div>
            <div className="interactive-lift rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-800">
                WhatsApp
              </h3>
              <a
                href={`https://wa.me/${storeInfo.whatsapp.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 block text-lg font-semibold text-walnut hover:text-amber-900"
              >
                Chat with us
              </a>
            </div>
          </div>

          <div className="interactive-lift rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-amber-800">
              Email
            </h3>
            <a
              href={`mailto:${storeInfo.email}`}
              className="mt-2 block text-lg font-semibold text-walnut hover:text-amber-900"
            >
              {storeInfo.email}
            </a>
          </div>

          <div className="interactive-lift rounded-2xl border border-stone-200 bg-amber-50 p-6">
            <h3 className="font-display text-xl font-semibold text-walnut">
              Store Hours
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-stone-700">
              <li>{storeInfo.hours.weekdays}</li>
              <li>{storeInfo.hours.sunday}</li>
            </ul>
          </div>
        </Reveal>

        <Reveal direction="left" delay={120}>
          <div className="interactive-lift overflow-hidden rounded-2xl border border-stone-200 shadow-sm">
          <iframe
            title="UrbanTeak Furnishings location map"
            src={mapsEmbedUrl}
            className="h-[420px] w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
          </div>
        </Reveal>
      </div>

      <Reveal>
        <section className="mt-16 rounded-3xl bg-walnut px-6 py-10 text-cream sm:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-2xl font-semibold sm:text-3xl">
            Request a callback
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-stone-300">
            Share your phone number at the showroom or message us on WhatsApp.
            Our team responds within 2 hours during business hours.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href={`tel:${storeInfo.phone.replace(/\s/g, "")}`}
              className="btn-press rounded-full bg-amber-600 px-6 py-3 text-sm font-semibold text-white hover:bg-amber-500"
            >
              Call Now
            </a>
            <a
              href={`https://wa.me/${storeInfo.whatsapp.replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-press rounded-full border border-stone-400 px-6 py-3 text-sm font-semibold hover:bg-white/10"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
        </section>
      </Reveal>
    </div>
  );
}
