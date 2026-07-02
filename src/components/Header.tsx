"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { storeInfo } from "@/data/store";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-cream/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex flex-col">
          <span className="font-display text-xl font-semibold tracking-tight text-walnut sm:text-2xl">
            {storeInfo.name}
          </span>
          <span className="hidden text-xs text-stone-500 sm:block">
            {storeInfo.tagline}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "nav-link text-sm font-medium transition-colors hover:text-amber-800",
                pathname === link.href
                  ? "nav-link-active text-amber-900"
                  : "text-stone-600",
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`tel:${storeInfo.phone.replace(/\s/g, "")}`}
            className="text-sm font-medium text-stone-600 hover:text-amber-900"
          >
            {storeInfo.phone}
          </a>
          <Link
            href="/contact"
            className="btn-press rounded-full bg-walnut px-5 py-2.5 text-sm font-medium text-cream hover:bg-amber-900"
          >
            Visit Store
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex items-center justify-center rounded-md p-2 text-walnut md:hidden"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      <div className={cn("mobile-menu border-t border-stone-200 bg-cream md:hidden", menuOpen && "mobile-menu-open")}>
        <div className="mobile-menu-inner px-4 py-4">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "rounded-lg px-3 py-2 text-sm font-medium transition-colors",
                  pathname === link.href
                    ? "bg-amber-100 text-amber-900"
                    : "text-stone-600 hover:bg-stone-100",
                )}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={`tel:${storeInfo.phone.replace(/\s/g, "")}`}
              className="px-3 py-2 text-sm font-medium text-stone-600 transition-colors hover:text-amber-900"
            >
              Call {storeInfo.phone}
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
