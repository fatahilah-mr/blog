---
title: "Arifin Prasetyo — Premium Culinary Portfolio Website"
description: "A mobile-first digital portfolio platform for professional cook Arifin Prasetyo, showcasing 14 culinary creations, official certifications, and advanced SEO optimization."
status: "completed"
techStack:
  - React 19
  - Vite
  - TypeScript
  - TanStack Router
  - Tailwind CSS v4
  - Radix UI
  - Cloudflare Pages
startDate: "2026-06-28"
repoUrl: "https://github.com/fatahilah-mr/arifin-prasetyo-portofolio"
demoUrl: "https://arifin.fatah.web.id"
heroImage: "/assets/profile.webp"
featured: true
references:
  - title: "React 19 Documentation"
    url: "https://react.dev"
  - title: "TanStack Router Documentation"
    url: "https://tanstack.com/router"
  - title: "Tailwind CSS v4 Documentation"
    url: "https://tailwindcss.com"
  - title: "Cloudflare Pages Documentation"
    url: "https://developers.cloudflare.com/pages/"
---


## 📌 1. Problem

Arifin Prasetyo is a Professional Cook and Top Culinary Graduate of 2026 with experience across 4-star hotels (Swiss-Belhotel Airport Yogyakarta) and commercial bakeries (KinKEN Cake & Bakery). However, traditional paper or PDF resumes face three major limitations:
- **Restricted Visual Presentation:** Static documents cannot showcase high-definition plating aesthetics, food textures, or culinary craftsmanship.
- **Fragmented Credential Verification:** Certificates and work histories remain isolated without a single verified digital platform.
- **Zero Search Visibility:** Physical resumes are unindexable on Google, limiting national career reach across hospitality recruiters.

---

## 👤 2. Target User

1. **Hospitality Recruiters & HR Managers:** Hotel, restaurant, and bakery hiring teams seeking verified credentials, official certificates, and visual culinary proof.
2. **Executive Chefs & Kitchen Managers:** Senior culinary leaders evaluating technical skill mastery (*hot kitchen*, *baking & pastry*, and *beverages*).
3. **Clients & Industry Partners:** Clients looking for private chef services, premium catering, or culinary recipe consulting.

---

## 💡 3. Solution

Engineered a high-performance web portfolio built with **React 19**, **Vite**, and **TypeScript** using a mobile-first architecture. Key capabilities include:
- **Instant Page Navigation:** Utilizes **TanStack Router** for zero page-reload latency across client-side views.
- **Premium Culinary UI/UX:** Responsive interface built with **Tailwind CSS v4** and accessible **Radix UI** primitives featuring *gold accent* & *deep ink* styling.
- **Production-Grade SEO Infrastructure:** Automated integration of `robots.txt`, `sitemap.xml`, OpenGraph metadata, and explicit canonical tags for clean Google Search Console indexing.

---

## ⭐ 4. Key Features

- **🔒 Floating Navigation Bar:** Modern floating navbar with glassmorphism backdrop blur and responsive mobile drawer navigation.
- **🤖 Interactive Culinary Gallery Filter:** Showcases 14 signature dishes with instant category filtering (*All Menus*, *Main Course & Appetizer*, *Pastry & Bakery*, and *Beverages*).
- **🛡️ Interactive Credentials Timeline:** Timeline presenting 4 verified credentials (including SMK Patriot Pituruh Best Graduate award and 6-month KinKEN Cake & Bakery internship).
- **🗺️ Categorized Technical Competency Badges:** Structured display of hard skills (*Food Preparation & Plating*, *Food Safety & Hygiene*) and soft skills (*Kitchen Management*, *Teamwork*).
- **📊 One-Click Direct CTA Buttons:** Direct communication triggers linking visitors straight to official WhatsApp and Email.
- **⚡ Canonical Optimization & Metadata Config:** Injected explicit `<link rel="canonical" href="https://arifin.fatah.web.id/" />` tags to eliminate duplicate indexing errors.

---

## 🧱 5. Challenges & Lessons Learned

- **Challenge 1: Duplicate Indexing & Canonical URL Resolution**
  - *Problem:* Google Search Console flagged duplicate uncanonicalized URLs due to multi-entry domain access.
  - *Solution:* Injected explicit `<link rel="canonical" href="https://arifin.fatah.web.id/" />` and `og:url` tags into both `__root.tsx` and `index.tsx` TanStack Router route definitions.
- **Challenge 2: High-Resolution Culinary Image Performance**
  - *Problem:* Rendering 14 high-resolution dish assets risks Cumulative Layout Shift (CLS) and slow page load speeds on mobile connections.
  - *Solution:* Implemented WebP formats with `loading="lazy"`, enforced fixed aspect ratio constraints (`aspect-[4/3]`), and added smooth backdrop blur fallbacks.

---

## 📈 6. Impact

- **Before:** Culinary creations and official certificates were restricted to printed files with zero online search visibility.
- **After:**
  - **100% Clean Google Search Indexing:** Achieved error-free indexing with verified canonical URL routing.
  - **Instant Visual Access to 14 Dishes:** Recruiters and Executive Chefs inspect 14 signature dishes and 4 official credentials in seconds on any device.

---

## 🛠️ Tech Choices

- **React 19 & Vite:** Selected for instant Hot Module Replacement (HMR), lightning-fast builds, and modular component architecture.
- **TanStack Router:** Delivers type-safe client routing and dynamic `head` metadata management for SEO.
- **Tailwind CSS v4:** Provides utility-first styling with custom design tokens (`--color-gold`, `--color-ink`).
- **Radix UI Primitives:** Guarantees top accessibility standards (a11y) without CSS bloat.
- **Cloudflare Pages:** Global edge CDN hosting ensuring sub-second delivery and automated Git deployments.

---

## 🖼️ Screenshots & Visual Demo

![Arifin Prasetyo Portfolio Cover](/assets/profile.webp)
*Figure 1: Main hero interface of Arifin Prasetyo's culinary portfolio website.*

