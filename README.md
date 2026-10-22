# Play Together Guide

Unofficial English wiki for [Play Together](https://store.steampowered.com/app/3198850/Play_Together/) (Steam AppID **3198850**), aimed at **playtogether.wiki**.

Not affiliated with HAEGIN Co.,Ltd. or Steam. The site is a short set of skimmable guides: coupon status, the first hour on Kaia Island, fishing, insects, pets, Stars and Gems, part-time jobs, events, minigames, homes, and an FAQ.

Players join from Southeast Asia, Korea, Japan, and elsewhere. The site language is English.

## Layout

| Layer | Path | Role |
| --- | --- | --- |
| Site config | `sites/playtogether/site.config.ts` | Domain, Steam AppID, analytics, nav |
| Ads | `sites/playtogether/ads.config.ts` | Adsterra Native Banner after Quick Answer |
| Active site | `sites/active` → `playtogether` | What the build actually reads |
| Framework | `framework/` | Layout, Quick Answer, ad slot, SEO |
| Content | `content/playtogether/` | Guide pages and JSON |
| Routes | `src/pages/` | Home, guide slug, 404 |

`analytics.gaId` is empty, so gtag is not injected. The homepage and guide pages load one Adsterra Native Banner after Quick Answer. The 404 page does not render an ad slot. See [ADS.md](ADS.md).

## Scripts

```bash
npm install
npm run dev      # http://localhost:4328
npm run build
npm run preview  # http://localhost:4328
```

Node 22 is what CI uses. The build is a static Astro site (`dist/`). No server adapter.

## Routes

- `/` — home (Steam library hero, six image doors, screenshot strip, guide cards)
- `/codes`
- `/beginner-guide`
- `/fishing`
- `/insects`
- `/pets`
- `/money`
- `/jobs`
- `/events`
- `/minigames`
- `/homes`
- `/faq`
- `/about`
- `/sitemap.xml` and `/robots.txt`

## Vercel and the custom domain

Do this in the Vercel dashboard when you are ready. Nothing here buys a domain or edits DNS.

1. Import this GitHub repo as a Vercel project. Framework preset: **Astro**. Build command: `npm run build`. Output: `dist`.
2. Deploy. The `*.vercel.app` URL should show the homepage hero before you attach a domain.
3. In the project, open **Settings → Domains** and add `playtogether.wiki` (and `www` if you want it).
4. Vercel will show the records to create at the registrar you already use. Add only those records. This repository does not contain them, and setup should not purchase the name.
5. Wait until Vercel marks the domain valid, then confirm `https://playtogether.wiki` serves this build.

`astro.config.mjs` sets `site` to `https://playtogether.wiki`, which is the origin used in canonical URLs, Open Graph, and the generated sitemap. `public/robots.txt` points at `https://playtogether.wiki/sitemap.xml`.

## Still to fill in

- **GA4.** Set `analytics.gaId` in `sites/playtogether/site.config.ts` when you have a measurement id. Leave it empty until then.
- **DNS.** Attach `playtogether.wiki` in Vercel and create the records Vercel displays. This repo does not ship DNS.

Steam art on the homepage is stored under `public/images/official/steam/` with `ATTRIBUTION.txt`.
