# Freelance_websites

Sample website templates for freelance client demos.

## furniture1

A demo furniture store website built for showcasing to furniture store owners in Bangalore. Includes 4 pages with product catalog, pricing, and store contact details.

**Live demo:** https://bangalore-furniture-showcase.vercel.app

### Pages

- **Home** — Hero, category links, featured products, and trust highlights
- **Products** — 12 furniture items across Living Room, Bedroom, Dining, and Office with INR pricing
- **About** — Store story, values, and milestones
- **Contact** — Address, phone, WhatsApp, email, hours, and Google Maps embed

### Tech Stack

- [Next.js 16](https://nextjs.org/) (App Router)
- [Tailwind CSS 4](https://tailwindcss.com/)
- TypeScript
- Deploy-ready for [Vercel](https://vercel.com/)

### Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Deploy to Vercel

```bash
npx vercel --prod
```

Or connect this GitHub repo in the [Vercel dashboard](https://vercel.com/new) for automatic deploys on push.

### Customizing for a Client

Edit `src/data/store.ts` to update:

- Store name, tagline, and contact info
- Product names, descriptions, prices, and images
- Address and business hours

Replace Unsplash image URLs with the client's own product photos for a personalized demo.

### Project Structure

```
src/
├── app/           # Pages (Home, Products, About, Contact)
├── components/    # Header, Footer, ProductCard, etc.
├── data/store.ts  # All store & product data
└── lib/utils.ts   # Shared utilities
```

### Build

```bash
npm run build
npm start
```
