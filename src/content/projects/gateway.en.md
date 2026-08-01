---
title: "FATAH | Gateway Link Hub & Personal Portal"
description: "An ultra-fast, responsive, and elegant independent personal link portal and portfolio hub, powered by React 18, Vite, GSAP 3D motion, MUI Material Icons, and Sveltia Headless CMS."
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
heroImage: "/uploads/gateway-hero.png"
featured: true
references:
  - title: "Sveltia CMS Documentation"
    url: "https://sveltiacms.dev"
  - title: "GSAP Documentation & Easing Guide"
    url: "https://gsap.com/docs/v3/"
  - title: "MUI Material Icons Library"
    url: "https://mui.com/material-ui/material-icons/"
  - title: "Cloudflare Pages & Functions Docs"
    url: "https://developers.cloudflare.com/pages/"
---

## 📌 1. Problem

Popular link aggregator platforms (like Linktree or Lnk.bio) impose 4 critical drawbacks for web developers and IT professionals:
1. **Rigid & Generic Design:** Default templates lack personal branding customization.
2. **Monthly Subscription Fees:** Key capabilities (custom domains, custom icons, analytics, watermark removal) require paid tiers.
3. **Low Performance & Downtime Risks:** Third-party hosted platforms load slowly on mobile networks and are vulnerable to vendor policy shifts.
4. **Content Editing Friction:** Manual static portals require code edits (*hardcoding*) and redeployments just to update links from a smartphone.

---

## 👤 2. Target User

- **Recruiters & Potential Clients:** Need 1-click access to work history, interactive projects, and professional resume.
- **Peers & Developer Community:** Want direct reach to GitHub repos, tech blog posts (`blog.fatah.web.id`), and social channels (LinkedIn, Threads, X).
- **Project Owner (Fatahilah M.R):** Manages, adds, and updates bilingual links independently without touching code via a mobile-friendly CMS.

---

## 💡 3. Solution

Built **FATAH Gateway**, an ultra-fast SPA web application blending modern glassmorphism aesthetics with serverless edge reliability.

Core technical solutions:
- **Zero-Cost Serverless Edge:** Hosted on Cloudflare Pages Edge Network with *Cloudflare Functions* for OAuth authentication.
- **Git-Based Headless CMS:** Integrates **Sveltia CMS** connected directly to GitHub. Content edits trigger automatic Git commits and instant builds.
- **Glassmorphism & 3D Animations:** Blends custom CSS and GSAP 3 to deliver smooth entrance transitions, 3D hover tilt effects, and elastic click feedback.
- **Native Dual Theme & Dual Language:** Real-time language switching (ID/EN) and dark/light modes synchronized with OS preferences.

---

## ⭐ 4. Key Features

- **⚡ Zero-Code CMS Panel (Sveltia CMS):** Manage links, icons, bilingual descriptions, and card order instantly via `/admin/`.
- **🎴 GSAP 3D Interactive Cards:** Link cards respond to cursor and touch interactions with smooth 3D perspective physics.
- **🎨 MUI Material Icons Integration:** Centralized mapping for 30+ official brand icons (GitHub, LinkedIn, WhatsApp, YouTube, Instagram, Threads, etc.).
- **🔐 Serverless OAuth Authentication:** Secure CMS login powered by Cloudflare Pages Functions (`/api/auth`) without external backend servers.
- **🌐 Real-Time Theme & Language Sync:** Instant language and theme toggling without page reloads, paired with an elegant loading overlay.
- **🔍 Triple-Layer SEO & Canonical Enforcement:** Prevents URL duplication in Google Search Console using HTML head canonical tags, React state, HTTP headers, and Cloudflare 301 redirects.

---

## 🧱 5. Challenges & Lessons Learned

- **Challenge 1: Decap CMS Blank Screen Issue**
  - *Issue:* Initial Decap CMS setup produced blank white screen errors in production due to bundling conflicts on Cloudflare Pages.
  - *Solution:* Migrated fully to **Sveltia CMS**, a lightweight alternative fully compatible with `config.yml` that loads significantly faster.
- **Challenge 2: Icon Bundle Size Bloat**
  - *Issue:* Naive icon imports bloated production bundles to over 1,700 unused JavaScript modules.
  - *Solution:* Migrated to `@mui/icons-material` with a centralized module mapper (`src/data/iconMap.js`), cutting bundle size down to **315 modules** (~109 KB gzip JS) and build time to ~10s.
- **Challenge 3: Duplicate Canonical Errors in GSC**
  - *Issue:* Domain migration to `fatah.web.id` caused Googlebot to detect duplicate URL variations (HTTP/HTTPS, WWW).
  - *Solution:* Enforced triple-layer canonical architecture (Tag `<link rel="canonical">`, HTTP Header `Link`, and Cloudflare 301 Redirect rules).

---

## 📈 6. Impact

- **Before:** Dependent on paid third-party aggregators with limited customization, or manual code edits for simple link updates.
- **After:**
  - **Extreme Performance:** Achieved 95+ mobile Lighthouse scores with smooth 60 FPS animations.
  - **100% Free Hosting:** Operates permanently on Cloudflare's Edge Network with zero recurring subscription fees.
  - **1-Click Management:** Add or edit link cards in under 1 minute directly from a smartphone via `/admin`.
  - **Consolidated SEO & Identity:** Fully indexed under the clean custom domain `fatah.web.id`.

---

## 🛠️ Tech Choices

- **React 18 & Vite:** Delivers modern SPA capabilities with instant Hot Module Replacement (HMR) and efficient tree-shaking bundling.
- **GSAP 3:** Provides precise animation timeline control, smooth GPU rendering, and flexible 3D physics modules.
- **Sveltia CMS:** Lightweight serverless Git-based CMS with an intuitive YAML configuration.
- **MUI Material Icons (`@mui/icons-material`):** Offers consistent Google Material Design aesthetics with easy prop customization.
- **Cloudflare Pages & Functions:** Global static edge hosting with free SSL and serverless JavaScript execution for OAuth handling.

---

## 🖼️ Screenshots & Visual Demo

![Main Gateway Interface](/uploads/gateway-hero.png)
*Figure 1: Main FATAH Gateway interface showcasing interactive link cards with dark/light theme toggle and dual-language support.*

![Sveltia CMS Admin Panel](/uploads/gateway-admin.png)
*Figure 2: Sveltia CMS dashboard (/admin/) for zero-code link management and content configuration.*
