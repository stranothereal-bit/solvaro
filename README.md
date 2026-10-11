# SOLVARO MUSIC

Premium editorial website for Solvaro Music — an independent record label. Built with Next.js (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run lint
npm run build
npm start
```

## Deploy on Vercel

1. Push this repository to GitHub (or connect a local folder in the Vercel dashboard).
2. Import the project in [Vercel](https://vercel.com/new).
3. Set environment variable `NEXT_PUBLIC_SITE_URL` to your production URL (e.g. `https://your-domain.com`) for canonical URLs, sitemap, and Open Graph links.
4. Deploy — default Next.js settings work out of the box.

## Content

Edit structured data under `src/data/` (artists, releases, news, labels, playlists, videos, boutique, hero slides). Sample entries are marked with a “Sample content” badge in the UI.

## Forms

Join and Contact forms validate on the client and show a **demo** success state. Connect a server action or API route when a real submission backend is available.

## Project structure

- `src/app/` — routes and metadata
- `src/components/` — UI, layout, home sections, forms
- `src/data/` — content records
- `src/config/site.ts` — site-wide configuration
