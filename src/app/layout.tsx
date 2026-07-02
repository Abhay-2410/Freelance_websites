import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PageTransition from "@/components/transitions/PageTransition";
import { storeInfo } from "@/data/store";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${storeInfo.name} | Furniture Store in Bengaluru`,
    template: `%s | ${storeInfo.name}`,
  },
  description:
    "Premium handcrafted furniture in Indiranagar, Bengaluru. Sofas, beds, dining sets, and office furniture with showroom pricing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${playfair.variable} h-full`}>
      <body className="flex min-h-full flex-col antialiased">
        <Header />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
