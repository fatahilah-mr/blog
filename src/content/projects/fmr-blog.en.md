---
title: "fmr.blog | Interactive Blog & Project Portfolio Hub"
description: "High-performance personal blog and interactive portfolio showcase powered by Astro 5, TypeScript, React 19, MUI Icons, and Vanilla CSS."
status: "active"
techStack:
  - Astro 5
  - TypeScript
  - React 19
  - MUI Material Icons
  - Vanilla CSS
  - Cloudflare Pages
startDate: "2026-07-19"
repoUrl: "https://github.com/fatahilah-mr/blog"
demoUrl: "https://blog.fatah.web.id"
heroImage: "/uploads/Logo Web Blog.png"
featured: true
references:
  - title: "Official Astro 5 Documentation"
    url: "https://docs.astro.build"
  - title: "Google Search Central - Sitemap Guidelines"
    url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview"
  - title: "MUI Material Icons Documentation"
    url: "https://mui.com/material-ui/material-icons/"
  - title: "Cloudflare Pages Edge Hosting"
    url: "https://developers.cloudflare.com/pages/"
---

## 📌 1. Problem

As a web developer and IT network engineer, establishing an independent publishing platform to document technical laboratory research, AI automation experiments, and project portfolios is essential.

However, building modern tech blog & portfolio platforms faces 4 primary challenges:
1. **Overhead & Speed Bottlenecks:** Traditional blogging platforms (like WordPress or Medium) impose customization limits, heavy script bloat, and recurring hosting costs.
2. **SEO Optimization & GSC Validation:** Automated sitemap generators on i18n static sites frequently trigger *Soft 404* errors or link duplication issues in Google Search Console.
3. **Design Flexibility & Branding Constraints:** Generic utility UI frameworks yield monotonous layouts that fail to reflect modern design standards.
4. **JavaScript Hydration Performance Risks:** Pure Single Page Application (SPA) frameworks ship substantial JS payloads to mobile devices.

---

## 👤 2. Target User

- **Recruiters & Industry Partners:** Require instant verification of technical credibility, project track records, and qualifications of Fatahilah Miftahul Rahman.
- **Developers & Network Engineers:** Seeking structured bilingual technical articles, network topology documentations, and AI prompt automation guides.
- **General Readers:** Demand a responsive, fast, ad-free, and accessible reading experience across mobile networks.

---

## 💡 3. Solution

Built **fmr.blog**, a next-gen technical blog and portfolio platform powered by **Astro 5** featuring *Zero-JS-by-default Islands Architecture* deployed on Cloudflare Pages Edge Network.

Core technical solutions:
- **Islands Architecture & React 19 Integration:** Ships client-side JavaScript strictly for interactive elements (such as MUI Icons and Theme Toggle) while rendering 100% pure static HTML for page content.
- **Rich Structured Data (JSON-LD SEO):** Dynamically injects Schema.org metadata (`BlogPosting`, `SoftwareApplication`, `Person`, `WebSite`) for maximum search engine indexation.
- **Custom Vanilla CSS Design System:** Modular CSS token architecture (*OLED Midnight & Editorial Light*) featuring *cubic-bezier* micro-animations and glassmorphism without utility framework overhead.
- **Smart Interactive Features:** Instant live search filtering, categorical tag selection, 1-click syntax copy buttons, and Giscus comments powered by GitHub Discussions.

---

## ⭐ 4. Key Features

- **⚡ Extreme Performance & Zero-JS Core:** Blazing-fast page loads achieving peak *Core Web Vitals* scores across mobile and desktop devices.
- **📂 Live Search & Interactive Tag Filtering:** Real-time search filtering across articles and projects by keyword or tech category.
- **🌐 Precision SEO & GSC Sitemap Handling:** Clean `@astrojs/sitemap` integration avoiding redundant *hreflang* tags for instant indexing.
- **🎨 Anti-FOUC Theme Switcher:** Seamless dark/light theme switching without color flashes upon initial page load.
- **📋 1-Click Code Copy Button:** Automated copy buttons appended to syntax code blocks for effortless script sharing.
- **💬 Giscus Comment System:** Secure, developer-friendly comment system powered by GitHub Discussions.
- **📖 Reading Time & Language Badges:** Automated reading time estimation and clear bilingual content indicators (ID/EN).

---

## 🧱 5. Challenges & Lessons Learned

- **Challenge 1: MUI Icon Rendering in Astro Scoped CSS**
  - *Issue:* React `@mui/icons-material` components do not automatically inherit Astro's scoped CSS attributes, causing search icon misalignment and dropdown arrow rotation failures.
  - *Solution:* Separated CSS-animated functional icons (reverted to inline SVGs) from decorative icons (wrapped in local HTML container elements).
- **Challenge 2: Domain Migration & GSC Sitemap Validation**
  - *Issue:* Migrating main domain from `blog.fatahmr.my.id` to `blog.fatah.web.id` caused duplicate URL warnings and sitemap fetch failures in Google Search Console.
  - *Solution:* Reconfigured `astro.config.mjs`, updated XML sitemap index structures, and implemented clean 301 redirect rules at Cloudflare edge.
- **Challenge 3: JSON-LD Structured Data Schema Integration**
  - *Issue:* Article and project pages required structured SEO schemas to qualify for rich snippet search results on Google.
  - *Solution:* Injected dynamic JSON-LD schemas in `Base.astro`, article `[slug].astro`, and project `[slug].astro` layouts.

---

## 📈 6. Impact

- **Before:** Articles and portfolio entries were fragmented across third-party platforms without brand control or SEO ownership.
- **After:**
  - **Peak Speed Performance:** Pages load in milliseconds with 95+ scores on Google PageSpeed Insights.
  - **100% Search Engine Indexation:** Clean XML sitemaps and routes successfully fetched and indexed without GSC errors.
  - **Centralized Knowledge Hub:** Established as the official documentation hub for all IT projects, lab research, and open-source repositories.

---

## 🛠️ Tech Choices

- **Astro 5:** Chosen as core framework for its pure SSG output and ultra-fast *Islands Architecture*.
- **TypeScript:** Enforces strict type-safety for content collections via Zod Schemas.
- **React 19 & MUI Icons:** Selected for interactive component islands and consistent Google Material Design icons.
- **Vanilla CSS:** Provides absolute control over CSS tokens, bundle efficiency, and glassmorphism styling without utility overhead.
- **Cloudflare Pages:** Global edge static hosting platform providing top-tier distribution speed, free SSL, and high reliability.

---

## 🖼️ Screenshots & Visual Demo

![Main fmr.blog Interface](/uploads/Logo Web Blog.png)
*Figure 1: Main fmr.blog interface featuring dark mode aesthetics and interactive gallery layout.*

![Project Showcase Page Preview](/uploads/project-cover.jpg)
*Figure 2: Project showcase gallery displaying tech stack tags and MUI action buttons.*
