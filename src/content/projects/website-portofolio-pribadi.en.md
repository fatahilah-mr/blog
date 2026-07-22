---
title: Personal Portfolio Website
description: An interactive & responsive portfolio website powered by Astro 5 and Google Sheets CMS, showcasing 1st Place LKS awards, IT Network System Administration credentials, and AI automation.
status: active
techStack:
  - Astro 5
  - Google Sheets CMS
  - Cloudflare Pages
  - Vercel (Staging)
  - Vanilla CSS
  - Vanilla JS
  - DOM i18n Engine
  - Google Fonts
  - Astro Sitemap
  - Node.js
  - NPM
  - Git
  - GitHub CLI
  - Termux
repoUrl: https://github.com/fatahilah-mr/portfolio
demoUrl: https://fatahmr.my.id
heroImage: https://cdn.fatahmr.my.id/portfolio/assets/favicon/web-app-manifest-512x512.png
featured: true
startDate: 2026-07-18T05:37
---

## Background / Problem Statement

As an **IT Network System Administration & AI Prompt Engineering Specialist** and winner of the **1st Place Student Competency Competition (LKS) for IT Network System Administration (Purworejo Regency 2026)**, presenting technical expertise across physical infrastructure (_hardware/cabling_), networking (_Cisco, MikroTik_), server administration (_Linux, Windows Server_), and AI integration requires a modern, ultra-fast, and highly accessible platform.

This portfolio website was engineered to replace conventional CVs with a lightweight, interactive bilingual (ID/EN) web application. Its core focus is to showcase key competency pillars and laboratory project track records without compromising speed or rendering performance.

## Architecture / Tech Stack

The platform is designed following modern _Static Site Generation_ (SSG) principles, prioritizing top-tier speed (100/100 Google PageSpeed Insights score) and zero JavaScript overhead by default:

- **Framework Core:** Astro 5 for zero-JS by default performance, modular component architecture, font preloading (DM Sans, DM Serif Display, JetBrains Mono), and rapid static compilation.
- **Headless CMS / Data Source:** Google Sheets API (`gviz/tq` endpoint) acting as a public headless CMS to update project and laboratory entries in real-time directly from a spreadsheet without requiring redeployment.
- **Styling & Design System:** Custom Vanilla CSS with HSL design tokens (`global.css`), translucent glassmorphism cards (`.glass-card`), glowing gradient scroll progress bar, `fadeSlideUp` micro-animations, anti-FOUC theme initialization script, and fully responsive layouts.
- **Internationalization (i18n):** Client-side DOM translation (`src/i18n/ui.ts` & `FloatingLang.astro`) persisted via `localStorage.lang` without full-page reloads.
- **Accessibility & SEO:** Skip-to-content link, ARIA live region, focus-managed mobile drawer, dynamic metadata, and automated XML Sitemap generation via `@astrojs/sitemap`.
- **Deployment & Hosting:** Cloudflare Pages for global edge network distribution (`https://fatahmr.my.id`), with Vercel utilized for staging and testing (`https://redesign-portfolio.vercel.app/`).

## Key Features & Competency Pillars

- **Comprehensive Technical Skills Showcase:** Structuring core engineering expertise into dedicated pillars:
    1. _Network Administration:_ Routing, Switching, VLAN, BGP/OSPF, Cisco IOS, MikroTik RouterOS, Network Troubleshooting, and Firewall Rules.
    2. _System & Server Management:_ Linux (Debian 12/13, Ubuntu, CentOS), Windows Server 2022, Active Directory (ADDS), Bind9 DNS, DHCP, Web Servers (Apache/Nginx), Nftables, VRRP Redundancy, and HAProxy Load Balancing.
    3. _AI Prompt Engineering & Automation:_ LLM Prompt Design, System Prompts, Chain-of-Thought (CoT), Automated Diagnostics, and AI-Assisted Shell Scripting.
    4. _Hardware & Fiber Optic Cabling:_ PC Building, UTP Crimping, Fiber Optic Splicing, Fast Connector, OPM & VFL Testing, and Server Rack Management.
    5. _Web Development & CMS:_ HTML5, Vanilla CSS, JavaScript, Astro 5 Framework, Git Version Control, and Google Sheets Headless CMS Integration.
- **LKS 2026 Achievement Highlight:** Showcasing the 1st Place Purworejo Regency Student Competency Competition award in IT Network System Administration.
- **Bilingual Internationalization (ID/EN):** Instant client-side language switching for local and global recruiters.
- **Integrated Project Lab & Certifications:** Network topology experiment gallery, verified technical credentials, and interactive transcripts.

## Outcomes / Lessons Learned

- **Extreme Performance:** Combining Astro 5 with pure Vanilla CSS achieved a perfect 100/100 score on Google PageSpeed Insights with sub-second load times.
- **Zero-Deploy Content Management:** Google Sheets API integration proved highly effective for managing laboratory project entries dynamically without triggering application rebuilds.
- **AI-Driven Automation:** Applying AI Prompt Engineering accelerated server administration scripting workflows and enhanced network troubleshooting diagnostics.
