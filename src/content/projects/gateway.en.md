---
title: "FATAH | Gateway Link Hub & Personal Portal"
description: "An ultra‑fast, responsive, elegant personal link portal powered by React 18, Vite, GSAP 3D, Material Icons, and Sveltia CMS."
status: "active"
techStack:
  - React 18
  - Vite
  - GSAP 3
  - MUI Material Icons
  - Sveltia CMS
  - Cloudflare Pages
  - CSS3 Glassmorphism
startDate: "2026-07-23"
repoUrl: "https://github.com/fatahilah-mr/gateway"
demoUrl: "https://fatah.web.id"
heroImage: "/uploads/web-gateway/web-gateway-1.webp"
featured: true
references:
  - title: "Sveltia CMS Documentation"
    url: "https://sveltiacms.dev"
  - title: "GSAP Docs & Easing Guide"
    url: "https://gsap.com/docs/v3/"
  - title: "MUI Material Icons Library"
    url: "https://mui.com/material-ui/material-icons/"
  - title: "Cloudflare Pages & Functions Docs"
    url: "https://developers.cloudflare.com/pages/"
---

## 📌 1. Problem

Link aggregators (Linktree, Lnk.bio) hinder web developers with:

1. **Rigid, generic design** – no personal branding.
2. **Recurring subscription fees** for analytics, custom domains, icons, watermark removal.
3. **Slow performance & downtime** on mobile networks.
4. **Cumbersome content updates** – hard‑coding links & redeploying for each change.

## 👤 2. Target User

- **Recruiters & potential clients** – need instant, one‑click access to work history, interactive portfolio, and professional resume.
- **Developers & community** – want quick links to GitHub, tech blog, and social channels.
- **Project owner (Fatahilah M.R)** – self‑manage bilingual links via mobile‑friendly CMS.

## 💡 3. Solution

Build **FATAH Gateway**, an ultra‑fast SPA that blends modern glassmorphism with serverless edge reliability.

Technical highlights:
- **Free server‑less edge** on Cloudflare Pages with Functions‑based OAuth.
- **Git‑based headless CMS** – Sveltia CMS auto‑commits content edits and triggers instant builds.
- **Glassmorphism & 3D GSAP animations** – smooth entrance, hover tilt, click bounce.
- **Native dual‑theme & dual‑language** – auto‑detect OS preference.

## ⭐ 4. Key Features

- **Zero‑code CMS panel** – manage links, icons, bilingual descriptions, and card order from `/admin/`.
- **GSAP 3D interactive cards** – physics‑based perspective effects.
- **30+ official MUI icons** – consistent brand representation.
- **Serverless OAuth** – secure login via Cloudflare Functions.
- **Real‑time theme & language sync** – instant switches with loader overlay.
- **Triple‑layer SEO & canonical enforcement** – prevents duplicate URLs in Google Search Console.

## 🧱 5. Challenges & Lessons Learned

- **Blank screen in Decap CMS** – migrated to lightweight Sveltia CMS for faster load.
- **Icon bundle bloat** – replaced bulk imports with `@mui/icons-material` mapping, shaving bundle to 315 modules (~109 KB gzip) and cutting build time to ~10 s.
- **Canonical URL duplication** – implemented three‑layer canonical tags (HTML `<link>`, HTTP `Link` header, Cloudflare 301 redirects).

## 📈 6. Impact

- **Performance:** Lighthouse 95+ mobile, 60 FPS smooth animations.
- **Cost:** Zero recurring fees, permanently hosted on Cloudflare Edge.
- **Content management:** Add or edit links in under a minute from any smartphone.
- **SEO & identity:** Fully indexed under clean domain `fatah.web.id`.

## 🛠️ Tech Choices

- **React 18 & Vite** – modern SPA with fast HMR and tree‑shaking.
- **GSAP 3** – precise timeline control, GPU‑accelerated animations.
- **Sveltia CMS** – serverless Git‑based CMS, lightweight YAML config.
- **MUI Material Icons** – cohesive Google Material Design icons.
- **Cloudflare Pages & Functions** – global static edge hosting with free SSL and serverless OAuth.

## 🖼️ Screenshots & Visual Demo

![Main FATAH Gateway Interface](/uploads/web-gateway/web-gateway-1.webp)
*Figure 1: Main interface of FATAH Gateway (`fatah.web.id`) featuring glassmorphism interactive link cards with 3D tilt effects, bilingual support, and theme switcher.*

![Sveltia CMS Dashboard Panel](/uploads/web-gateway/web-gateway-2.webp)
*Figure 2: Sveltia CMS dashboard panel (`/admin/`) for zero-code site configuration management.*

![Sveltia CMS Editor & Real-Time Preview](/uploads/web-gateway/web-gateway-3.webp)
*Figure 3: Sveltia CMS content editor displaying bilingual site configuration fields (ID/EN), link card order settings, and side-by-side live preview.*
