---
title: "Interactive Portfolio & IT Lab Gallery"
description: "Ultra-fast personal portfolio built with Astro 5, Vanilla CSS, and Google Sheets Headless CMS to archive IT Network, Server, and AI lab projects."
status: "completed"
techStack:
  - Astro 5
  - Vanilla CSS
  - Google Sheets CMS
  - Cloudflare Pages
  - TypeScript
startDate: "2026-07-19"
repoUrl: "https://github.com/fatahilah-mr/portfolio"
demoUrl: "https://fatahmr.my.id"
heroImage: "https://cdn.fatahmr.my.id/portfolio/assets/pagespeedtest-18-july-2026.webp"
featured: true
references:
  - title: "Official Astro 5 Documentation"
    url: "https://docs.astro.build"
  - title: "Google Visualization API (gviz/tq) Query Guide"
    url: "https://developers.google.com/chart/interactive/docs/dev/gviz_api_query_language"
  - title: "Cloudflare Pages Deployment Documentation"
    url: "https://developers.cloudflare.com/pages/"
---

## 📌 1. Problem

As the 2026 Purworejo Regency LKS Gold Medalist in IT Network System Administration, presenting laboratory documentations and verified credentials (certificates, transcripts, network topologies) professionally to recruiters and industry peers is vital.

However, traditional portfolio sites suffer from 3 key issues:
1. **Heavy Traditional CMS:** Server-side CMS platforms (like WordPress) incur recurring hosting costs, database overhead, and security vulnerabilities.
2. **Poor Performance & Bloated JS:** Pure SPA frameworks (React/Next.js) ship heavy JavaScript bundles that slow mobile loading and hurt PageSpeed scores.
3. **Friction in Content Updates:** Pure static sites require manual code edits, Git commits, and full redeployments just to add a new project or certificate.

## 👤 2. Target User

- **IT Recruiters & Hiring Managers:** Require instant verification of Fatahilah Miftahul Rahman's internship transcripts and technical qualifications.
- **Network Engineers & Tech Leads:** Seeking to inspect network topology documentations (Cisco, MikroTik, Linux Debian, Windows Server) and *AI Prompt Engineering* experiments.
- **Tech Community & Visitors:** Demand a responsive, fast, bilingual (ID/EN) interface accessible across all device screens.

## 💡 3. Solution

Built a next-gen portfolio site using **Astro 5** with a *Zero-JS-by-default* architecture, coupled with **Google Sheets** as a zero-cost *Headless CMS*.

Core technical solutions:
- **Zero-Cost Headless CMS:** Leverages Google Sheets API `gviz/tq` endpoint to fetch lab project records dynamically with 24-hour `localStorage` caching.
- **SSR Static Fallback:** Embeds static HTML fallback cards so search engines and crawlers index full page content without executing client-side JS.
- **Vanilla CSS Design System:** Modern CSS architecture (*OLED Midnight & Editorial Light*) featuring reduced-motion safe micro-animations.
- **Instant Bilingual Switcher (ID/EN):** Seamless language switching without page reloads using lightweight dictionary mapping (`FloatingLang.astro`).

## ⭐ 4. Key Features

- **⚡ 100/100 PageSpeed Score:** Static HTML compiled by Astro delivers instant initial rendering and minimal memory consumption.
- **📊 Google Sheets CMS Integration:** Update project and certificate records by simply editing a Google Sheet without rebuilding code.
- **🌐 Instant Bilingual Toggle (ID/EN):** Floating widget enabling seamless language switches with smooth transitions.
- **🎨 Anti-FOUC Theme Switcher:** Instant Dark/Light mode detection adhering to system preferences without color flashes.
- **📂 Interactive Lab Gallery:** Project showcase with instant category filters (Cisco, MikroTik, Linux, Windows Server, AI, Web).
- **📜 Modal Viewer for Certificates:** Preview grade transcripts and official certificates directly via pop-up modals or Google Drive links.
- **♿ WCAG AA Accessibility:** Built with high contrast standards, keyboard navigation focus states, and ARIA live region support.

## 🧱 5. Challenges & Lessons Learned

- **Challenge 1: GSC Blank Rendering (Soft 404)**
  - *Issue:* CSS animations (`animation-fill-mode: both`) locked Hero elements at `opacity: 0` during Googlebot Live URL testing, triggering Soft 404 flags.
  - *Solution:* Switched animation mode to `forwards`, set default HTML `opacity: 1`, and embedded static SSR fallback cards.
- **Challenge 2: Google Sheets API Fetch & Network Resilience**
  - *Issue:* Fetching data from external API endpoints risks latency or failure on unstable mobile networks.
  - *Solution:* Engineered a 24-hour client-side `localStorage` caching system complete with a manual refresh trigger and offline fallback state.
- **Challenge 3: Bilingual XML Sitemap Optimization**
  - *Issue:* Automated sitemap generation produced redundant `hreflang` tags pointing to identical URLs.
  - *Solution:* Hand-crafted a clean static `public/sitemap.xml` adhering strictly to Google Search Central guidelines.

## 📈 6. Impact

- **Before:** Updating lab projects required manual HTML edits and time-consuming code re-compilation.
- **After:**
  - Content updates complete in seconds via Google Sheets directly from a mobile device.
  - Achieved a flawless **100/100 Google PageSpeed Insights score** across Performance, Accessibility, Best Practices, and SEO.
  - 100% indexed in Google Search Console without rendering errors or Soft 404 flags.
  - Establishes a high-credibility portfolio showcasing LKS Gold Medalist credentials in IT Network Administration.

## 🛠️ Tech Choices

- **Astro 5:** Eliminates unnecessary JavaScript payloads via *Islands Architecture* and pure SSG output.
- **Vanilla CSS:** Provides absolute control over design tokens, CSS bundle efficiency, and glassmorphism styling.
- **Google Sheets API (`gviz/tq`):** A zero-cost headless CMS requiring zero SQL/NoSQL database management.
- **Google Fonts (DM Sans, DM Serif Display, JetBrains Mono):** Loaded via *preconnect* and *preload* techniques for FOIT-free typography.
- **Cloudflare Pages:** Global static edge hosting platform delivering top-tier content distribution speed and reliability.

## 🖼️ Screenshots & Visual Demo

![Google PageSpeed Insights Perfect Score](https://cdn.fatahmr.my.id/portfolio/assets/pagespeedtest-18-july-2026.webp)
*Figure 1: Perfect 100/100 performance score on Google PageSpeed Insights.*

![Profile Preview About Page](https://cdn.fatahmr.my.id/portfolio/assets/profile.webp)
*Figure 2: Official profile preview of Fatahilah Miftahul Rahman, IT Network System Administration & Web Development Specialist.*
