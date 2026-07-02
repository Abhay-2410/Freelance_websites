# UrbanTeak Furnishings — Sample Website

A demo furniture store website built for showcasing to furniture store owners in Bangalore. Includes 4 pages with product catalog, pricing, and store contact details.

## Pages

- **Home** — Hero, category links, featured products, and trust highlights
- **Products** — 12 furniture items across Living Room, Bedroom, Dining, and Office with INR pricing
- **About** — Store story, values, and milestones
- **Contact** — Address, phone, WhatsApp, email, hours, and Google Maps embed

## Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript
- Deploy-ready for [Vercel](https://vercel.com/)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deploy to Vercel

### Option 1: Vercel Dashboard (easiest)

1. Push this folder to a GitHub repository
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel auto-detects Next.js — click **Deploy**
5. Share the live URL with store owners

### Option 2: Vercel CLI

```bash
npm i -g vercel
vercel
```

Follow the prompts. Run `vercel --prod` for production deployment.

## Customizing for a Client

Edit `src/data/store.ts` to update:

- Store name, tagline, and contact info
- Product names, descriptions, prices, and images
- Address and business hours

Replace Unsplash image URLs with the client's own product photos for a personalized demo.

## Project Structure

```
src/
├── app/           # Pages (Home, Products, About, Contact)
├── components/    # Header, Footer, ProductCard, etc.
├── data/store.ts  # All store & product data
└── lib/utils.ts   # Shared utilities
```

## Build

```bash
npm run build
npm start
```
