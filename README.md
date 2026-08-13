# Lil Ron’s Pizza

Coming-soon site for **Lil Ron’s** — NY / NJ thin crust landing in Northeast Seattle.

**Thin crust. Thick accent.**

Public repo: [github.com/dsaber23/lil-rons-pizza](https://github.com/dsaber23/lil-rons-pizza)

## What’s here

- Home, the pie, Ron’s story, and pre-order pickup
- Classic plain by the slice or the whole pie
- Pre-order form (no payment) stored in Postgres
- Glossy early-web diner look

## Run it locally

You need Node 22+.

```bash
git clone https://github.com/dsaber23/lil-rons-pizza.git
cd lil-rons-pizza
npm install
npm run dev
```

`npm install` decodes the pizza photos into `public/`. Then open the site — the dev server listens on port 8080.

```bash
npm run typecheck
npm run build
```

## Deploy on Vercel (the easy path)

1. Go to [vercel.com/new](https://vercel.com/new) and import `dsaber23/lil-rons-pizza`.
2. Framework preset can stay **Other** / Vite. Build command is already `npm run build`. Output is handled by the Nitro Vercel preset.
3. (Recommended) Add a Postgres database so pre-orders survive deploys:
   - Create a free [Neon](https://neon.tech) project
   - In Vercel → Project → Settings → Environment Variables, add `DATABASE_URL` with the Neon connection string
4. Deploy. First load may take a few seconds.

Without `DATABASE_URL`, the site still builds and the pages work, but pre-orders live in an in-memory database that resets on each serverless cold start. Add Neon before you take real orders.

Copy `.env.example` if you want those same variables locally.

## Stack

React 19, TanStack Start, Tailwind v4, Vite, Postgres (Neon in production, PGLite locally).

## Notes

Address, hours, Instagram, and prices are still TBA. Pre-orders collect name, email, slice-or-pie, and a note for Ron.
