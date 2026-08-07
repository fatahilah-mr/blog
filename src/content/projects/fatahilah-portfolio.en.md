---
title: Interactive Portfolio & IT Lab Gallery
description: Ultra-fast personal portfolio built with Astro 5, Vanilla CSS, and Google Sheets Headless CMS to archive IT Network, Server, and AI lab projects.
status: completed
techStack:
  - Astro 5
  - Vanilla CSS
  - Google Sheets CMS
  - Cloudflare Pages
  - TypeScript
repoUrl: https://github.com/fatahilah-mr/portfolio
demoUrl: https://fatahmr.my.id
heroImage: https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-fatahilah/web-portfolio-fatahilah-01.webp
featured: true
startDate: 2026-07-19
references:
  - title: Official Astro 5 Documentation
    url: https://docs.astro.build
  - title: Google Visualization API (gviz/tq) Query Guide
    url: https://developers.google.com/chart/interactive/docs/dev/gviz_api_query_language
  - title: Cloudflare Pages Deployment Documentation
    url: https://developers.cloudflare.com/pages/
---

## 📌 1. Problem

As the 1st Place Winner of the 2026 LKS IT Network System Administration competition, presenting technical laboratory documentations and credential verifications (certificates, internship transcripts, and network topologies) to recruiters and industry experts is critical.

However, traditional personal portfolio development faces 3 major bottlenecks:

1. **Monolithic CMS Overhead:** Server-rendered CMS platforms (such as WordPress) introduce monthly hosting costs, database maintenance, and security vulnerabilities.
2. **Poor Mobile Performance & JS Bloat:** Pure Single-Page Application (SPA) frameworks (React/Next.js) ship substantial JS bundles that degrade mobile page load speeds and SEO metrics.
3. **Cumbersome Content Maintenance:** Static site portfolios without a CMS require hardcoding HTML and re-deploying code for every new certificate or project addition.

## 👤 2. Target User

- **Recruiters & IT Hiring Managers:** Require instant verification of official credentials, internship transcripts, and technical qualifications of Fatahilah Miftahul Rahman.
- **Network Engineers & Tech Leads:** Seeking structured network topology documentations (Cisco, MikroTik, Linux Debian, Windows Server) and AI Prompt Engineering automation guides.
- **General Readers & Community Members:** Demand a responsive, ultra-fast, bilingual (ID/EN) reading experience across all device viewports.

## 💡 3. Solution

Built a next-generation personal portfolio using **Astro 5** utilizing a *Zero-JS shipped by default* Islands Architecture, integrated with **Google Sheets** as a zero-cost Headless CMS.

Key technical solutions:

- **Zero-Cost Headless CMS:** Leverages the Google Sheets API `gviz/tq` endpoint to dynamically fetch project and certificate data with a 24-hour `localStorage` client cache.
- **SSR Static Fallback:** Provides static HTML fallback cards ensuring search engine crawlers index complete page content without depending on client-side JS execution.
- **Vanilla CSS Design System:** Custom CSS token architecture (*OLED Midnight & Editorial Light*) featuring micro-animations that respect `prefers-reduced-motion`.
- **Instant i18n Bilingual Switcher (ID/EN):** Page-reload-free language switching via lightweight translation dictionary mappings (`FloatingLang.astro`).

## ⭐ 4. Key Features

- **⚡ Peak 100/100 PageSpeed Score:** Astro-compiled static HTML structures deliver instantaneous page loads and minimal memory consumption.
- **📊 Google Sheets CMS Integration:** Updating project and certificate records requires editing a Google Sheets row without triggering rebuilds.
- **🌐 Seamless Dual-Language Switcher (ID/EN):** Floating UI widget for instant language toggling with smooth micro-transitions.
- **🎨 Anti-FOUC Theme Switcher:** Zero-flash dark/light mode switching that respects user system preferences automatically.
- **📂 Lab Archive & Category Filters:** Interactive project gallery with instant category filtering (Cisco, MikroTik, Linux, Windows Server, AI, Web).
- **📜 Certificate & Transcript Modal Viewer:** Preview certificate credentials and internship transcripts directly via modal popups or Google Drive.
- **♿ WCAG AA Accessibility:** Fully compliant with high contrast ratios, full keyboard navigation, and ARIA live region support.

## 🧱 5. Challenges & Lessons Learned

- **Challenge 1: GSC Blank Page Rendering (Soft 404)**
    - *Problem:* CSS entrance keyframe animations (`animation-fill-mode: both`) locked elements at `opacity: 0` during Googlebot Live URL testing, triggering Soft 404 warnings.
    - *Solution:* Refactored animation modes to `forwards`, set default initial HTML opacity to `opacity: 1`, and introduced static SSR fallback cards.
- **Challenge 2: Google Sheets API & Network Latency**
    - *Problem:* Fetching external API data risks network latency or failures under unstable mobile networks.
    - *Solution:* Implemented client-side `localStorage` caching valid for 24 hours alongside manual refresh triggers and offline state handling.
- **Challenge 3: XML Sitemap i18n Mapping**
    - *Problem:* Automated sitemap generators produced redundant `hreflang` tags that raised Google Search Console warnings.
    - *Solution:* Authored a static `public/sitemap.xml` compliant with Google Search Central guidelines.

## 📈 6. Impact

- **Before:** Adding new lab projects or certificates required manual HTML edits and time-consuming code redeployments.
- **After:**
    - Project and certificate updates complete in seconds via Google Sheets from a smartphone.
    - Achieved a perfect **100/100 Google PageSpeed Insights score** across Performance, Accessibility, Best Practices, and SEO.
    - 100% indexed in Google Search Console without rendering errors or Soft 404 warnings.
    - Established as the official portfolio platform reinforcing professional credibility as 1st Place Winner in LKS IT Network Admin.

## 🛠️ Tech Choices

- **Astro 5:** Eliminates unnecessary client JS overhead via Islands Architecture and pure SSG output.
- **Vanilla CSS:** Provides complete control over design tokens, minimal bundle size, and glassmorphism styling flexibility.
- **Google Sheets API (`gviz/tq`):** Zero-cost headless CMS solution avoiding SQL/NoSQL database management overhead.
- **Google Fonts (DM Sans, DM Serif Display, JetBrains Mono):** Loaded via optimized `preconnect` and `preload` directives to eliminate FOIT font flashes.
- **Cloudflare Pages:** Global static edge hosting platform delivering high distribution speed and reliability.

## 🖼️ Screenshots & Visual Demo

![Main Hero Section Interface of Fatahilah Portfolio](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-fatahilah/web-portfolio-fatahilah-01.webp)
*Figure 1: Main landing page interface of FATAHILAH.MR portfolio showcasing technical specialization headlines, 1st Place LKS 2026 achievement badges, and primary action buttons.*

![Profile & About Me Section Preview](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-fatahilah/web-portfolio-fatahilah-02.webp)
*Figure 2: Professional profile section displaying network & server specialization summaries, official profile photos, and industry readiness status badges.*

![Work Experience & Internship Section Preview](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-fatahilah/web-portfolio-fatahilah-03.webp)
*Figure 3: Internship experience cards covering Network & Server administration at UPTD BLK Kebumen and FTTH & ISP Network deployment at Fazza Computer.*

![Technical Skills & Competency Matrix Grid](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-fatahilah/web-portfolio-fatahilah-04.webp)
*Figure 4: Six core technical competency pillars covering Hardware & Cabling, Cisco Networking, MikroTik & Wireless, Linux & Windows Server, and AI & Web Development.*

![Interactive Lab Archive & Project Gallery with Google Sheets CMS](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-fatahilah/web-portfolio-fatahilah-05.webp)
*Figure 5: Interactive project gallery powered by Google Sheets Headless CMS featuring real-time category filtering and 24-hour data cache indicators.*

![Certificates & LKS Award Verification Modal](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-fatahilah/web-portfolio-fatahilah-06.webp)
*Figure 6: Official certificate documentation section displaying 1st Place award credentials for LKS IT Network System Administration 2026.*

![Official Contact Channels & CV Download Section](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-fatahilah/web-portfolio-fatahilah-07.webp)
*Figure 7: Official contact section providing direct links to WhatsApp, LinkedIn, GitHub, Email, and downloadable CV.*
