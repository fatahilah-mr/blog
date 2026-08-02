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
Arifin Prasetyo is a Professional Cook and Top Culinary Graduate of 2026 with solid industrial experience across 4-star hotels (Swiss-Belhotel Airport Yogyakarta) and commercial bakeries (KinKEN Cake & Bakery). However, traditional paper or PDF resumes struggle to capture high-definition visual plating aesthetics, verified credential proofs, and search engine discoverability.

The core challenge was to build a modern, high-speed, mobile-first web portfolio that serves not only as an interactive resume but also features robust Search Engine Optimization (SEO) to maximize professional visibility for recruiters and hospitality clients.

## 👤 2. Target User
- **Hospitality Recruiters & HR Managers:** Hotel and restaurant hiring teams seeking verified credentials, professional certificates, and visual culinary proof.
- **Executive Chefs & Kitchen Managers:** Senior culinary professionals evaluating technical culinary skills (*hot kitchen*, *baking & pastry*, and *beverages*).
- **Clients & Collaboration Partners:** Clients looking for private chef services, catering solutions, or recipe development.

## 💡 3. Solution
A complete web architecture revamp built with **React 19**, **Vite**, and **TypeScript**. The application leverages **TanStack Router** for type-safe, zero page-reload routing.

The interface is crafted using a mobile-first approach with **Tailwind CSS v4** and accessible **Radix UI** primitives. Production SEO configurations—including `robots.txt`, `sitemap.xml`, explicit canonical tags, and OpenGraph metadata—ensure seamless indexing on Google Search Console.

## ⭐ 4. Key Features
- **Floating Navigation Bar:** Modern floating navbar with glassmorphism backdrop blur and responsive mobile drawer navigation.
- **Dynamic Culinary Gallery Filter:** Interactive gallery with instant category filtering (*All Menus*, *Main Course & Appetizer*, *Pastry & Bakery*, and *Beverages*) featuring 14 signature dishes.
- **Responsive Credentials Timeline:** Interactive timeline displaying 4 verified credentials (including SMK Patriot Pituruh Best Graduate award and 6-month KinKEN Cake & Bakery internship) with gold accent badges.
- **Interactive Competency Badges:** Categorized technical hard skills (e.g., *Food Preparation & Plating*, *Food Safety & Hygiene*) and personal soft skills (e.g., *Kitchen Management*, *Teamwork*).
- **Direct Call-to-Action (CTA):** One-click direct communication buttons connecting to official WhatsApp and Email.
- **Production-Ready SEO & Canonical Config:** Built-in metadata, OpenGraph tags, XML sitemap, and explicit `<link rel="canonical" href="https://arifin.fatah.web.id/" />` to eliminate duplicate index issues in Google Search Console.

## 🧱 5. Challenges & Lessons Learned
- **Technical Challenge 1: Canonical URL & Duplicate Indexing Resolution**
  - *Issue:* Google Search Console reported *"Duplicate, Google chose different canonical than user"* due to multiple accessible URL variations.
  - *Solution:* Injected explicit `<link rel="canonical" href="https://arifin.fatah.web.id/" />` and `og:url` tags into both `__root.tsx` and `index.tsx` TanStack Router route definitions.
- **Technical Challenge 2: Asset Optimization & Performance**
  - *Issue:* Rendering 14 high-resolution dish assets (*Chicken Cordon Bleu*, *Birthday Cake*, *Donuts*, etc.) could cause layout shifts and slow load times on mobile networks.
  - *Solution:* Implemented optimized WebP image formats with `loading="lazy"`, fixed aspect ratio constraints (`aspect-[4/3]`), and smooth image hover transitions to prevent Cumulative Layout Shift (CLS).

## 📈 6. Impact
- **Before:** Career records and culinary creations were restricted to printed files with no digital search visibility.
- **After:** A high-performing public web portfolio indexed cleanly on Google Search, showcasing 14 signature dishes and 4 official credentials in a sleek, responsive interface.

## 🛠️ Tech Choices
- **React 19 & Vite:** Selected for lightning-fast build speeds, instant Hot Module Replacement (HMR), and modular UI architecture.
- **TanStack Router:** Chosen for type-safe routing, efficient client-side navigation, and dynamic `head` metadata management for SEO.
- **Tailwind CSS v4:** Selected for utility-first styling, custom color token management (`--color-gold`, `--color-ink`), and responsive layouts.
- **Radix UI Primitives:** Chosen to guarantee high accessibility standards (a11y) without introducing CSS bloat.
- **Cloudflare Pages:** Selected for global edge CDN distribution, low-latency delivery, and automated Git deployments.

## 🖼️ Screenshots & Visual Demo
![Arifin Prasetyo Portfolio Cover](/assets/profile.webp)
*Figure 1: Main hero interface of Arifin Prasetyo's culinary portfolio website.*
