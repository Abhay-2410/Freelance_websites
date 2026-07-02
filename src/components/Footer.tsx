import Link from "next/link";
import { storeInfo } from "@/data/store";

export default function Footer() {
  const fullAddress = `${storeInfo.address.street}, ${storeInfo.address.city} – ${storeInfo.address.pincode}`;

  return (
    <footer className="border-t border-stone-200 bg-walnut text-cream">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div className="lg:col-span-2">
          <p className="font-display text-2xl font-semibold">{storeInfo.name}</p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-stone-300">
            Premium handcrafted furniture for modern Bangalore homes. Visit our
            showroom to explore sofas, beds, dining sets, and office furniture.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2 text-sm text-stone-300">
            <li>
              <Link href="/products" className="hover:text-white">
                All Products
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact & Directions
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
            Contact
          </p>
          <ul className="mt-4 space-y-2 text-sm text-stone-300">
            <li>{fullAddress}</li>
            <li>
              <a href={`tel:${storeInfo.phone.replace(/\s/g, "")}`} className="hover:text-white">
                {storeInfo.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${storeInfo.email}`} className="hover:text-white">
                {storeInfo.email}
              </a>
            </li>
            <li>{storeInfo.hours.weekdays}</li>
            <li>{storeInfo.hours.sunday}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-stone-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-stone-400 sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} {storeInfo.name}. All rights reserved.</p>
          <p>furniture1 template for furniture store owners</p>
        </div>
      </div>
    </footer>
  );
}
