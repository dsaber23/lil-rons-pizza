# Lil Ron’s Pizza

Coming-soon site for **Lil Ron’s** — NY / NJ thin crust landing in Northeast Seattle.

**Thin crust. Thick accent.**

Public repo: [github.com/dsaber23/lil-rons-pizza](https://github.com/dsaber23/lil-rons-pizza)

Hey Ron — this is the whole shop site. Clone it, run it locally, then import the repo into Vercel when you want it live.

## What’s here

- Home, the pie, Ron’s story, and pre-order pickup
- Classic plain by the slice or the whole pie
- Pre-order form (no payment) stored in Postgres
- Glossy early-web diner look

## Run it locally

You need **Node 22+**.

```bash
git clone https://github.com/dsaber23/lil-rons-pizza.git
cd lil-rons-pizza
npm install
npm run dev
```

Then open the URL the terminal prints (port 8080).

```bash
npm run typecheck
npm run build
```

Photos decode automatically on `npm install`. If a local photo is missing, the site falls back to a hosted pizza shot so the pages still look complete.

## Deploy on Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and import **`dsaber23/lil-rons-pizza`**.
2. Framework preset can stay **Other** / Vite. Build command is already `npm run build`.
3. **Recommended:** add Postgres so pre-orders survive deploys:
   - Create a free [Neon](https://neon.tech) project
   - In Vercel → Project → Settings → Environment Variables, add `DATABASE_URL` with the Neon connection string
4. Deploy. First load may take a few seconds.

Without `DATABASE_URL`, the site still builds and the pages work, but pre-orders live in an in-memory database that resets on each serverless cold start. Add Neon before you take real orders.

Copy `.env.example` if you want those same variables locally.

## Stack

React 19, TanStack Start, Tailwind v4, Vite, Postgres (Neon in production, PGLite locally).

## Notes

Address, hours, Instagram, and prices are still TBA. Pre-orders collect name, email, slice-or-pie, and a note for Ron.
