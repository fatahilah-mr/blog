---
title: Website Portofolio Pribadi
description: Website portofolio interaktif & responsif berbasis Astro 5 dan Google Sheets CMS yang memamerkan prestasi Juara 1 LKS, keahlian IT Network System Administration, serta otomatisasi AI.
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

Sebagai seorang **Spesialis Administrasi Jaringan & AI Prompt Engineering** sekaligus pemenang **Juara 1 LKS (Lomba Kompetensi Siswa) Bidang IT Network System Administration Kabupaten Purworejo 2026**, menyajikan kredensial keahlian teknis yang mencakup infrastruktur fisik (_hardware/cabling_), jaringan (_Cisco, MikroTik_), administrasi server (_Linux, Windows Server_), hingga integrasi AI secara profesional membutuhkan platform yang modern, super cepat, dan mudah diakses.

Website portofolio ini dibangun untuk menggantikan daftar riwayat hidup konvensional menjadi sebuah antarmuka interaktif bilingual (ID/EN) yang sangat ringan. Fokus utamanya adalah memamerkan empat pilar kompetensi utama dan rekam jejak proyek lab secara terstruktur tanpa mengorbankan kecepatan aksesibilitas maupun performa _rendering_.

## Architecture / Tech Stack

Website ini dirancang menggunakan pendekatan _Static Site Generation_ (SSG) modern yang mengutamakan performa ekstrem (skor 100/100 di Google PageSpeed Insights) dan nol kelebihan _overhead_ JavaScript:

- **Framework Core:** Astro 5 untuk performa _zero-JS by default_, pengorganisasian komponen modular, preloading font (DM Sans, DM Serif Display, JetBrains Mono), dan kompilasi statis cepat.
- **Headless CMS / Data Source:** Google Sheets API (endpoint `gviz/tq`) sebagai Headless CMS publik untuk update data proyek & laboratorium secara real-time langsung dari lembar kerja tanpa memerlukan redeployment.
- **Styling & Design System:** Custom Vanilla CSS dengan variabel warna HSL (`global.css`), kartu _glass-morphism_ (`.glass-card`), indikator _glowing gradient scroll progress bar_, mikro-animasi `fadeSlideUp`, anti-FOUC script, serta tata letak responsif penuh.
- **Internationalization (i18n):** Client-side DOM translation (`src/i18n/ui.ts` & `FloatingLang.astro`) yang tersimpan di `localStorage.lang` tanpa perantara reload halaman.
- **Aksesibilitas & SEO:** _Skip-to-content link_, ARIA live region, penanganan fokus menu mobile, metadata dinamis, serta otomasi XML Sitemap via `@astrojs/sitemap`.
- **Deployment & Hosting:** Cloudflare Pages untuk distribusi edge network global (`https://fatahmr.my.id`), dengan Vercel digunakan untuk staging/testing (`https://redesign-portfolio.vercel.app/`).

## Key Features & Competency Pillars

- **Comprehensive Technical Skills Showcase:** Mengelompokkan kompetensi teknis secara mendalam ke dalam pilar-pilar utama:
    1. _Network Administration:_ Routing, Switching, VLAN, BGP/OSPF, Cisco IOS, MikroTik RouterOS, Network Troubleshooting, dan Firewall Rules.
    2. _System & Server Management:_ Linux (Debian 12/13, Ubuntu, CentOS), Windows Server 2022, Active Directory (ADDS), Bind9 DNS, DHCP, Web Server (Apache/Nginx), Nftables, VRRP Redundancy, dan HAProxy Load Balancing.
    3. _AI Prompt Engineering & Automation:_ LLM Prompt Design, System Prompts, Chain-of-Thought (CoT), Automated Diagnostics, dan AI-Assisted Shell Scripting.
    4. _Perangkat Keras & Pengkabelan:_ Perakitan PC, UTP Crimping, Fiber Optic Splicing, Fast Connector, OPM & VFL Testing, hingga Manajemen Rack Server.
    5. _Web Development & CMS:_ HTML5, Vanilla CSS, JavaScript, Astro 5 Framework, Git Version Control, serta Integrasi Google Sheets Headless CMS.
- **Highlight Prestasi LKS 2026:** Menampilkan pencapaian Juara 1 Lomba Kompetensi Siswa (LKS) Bidang IT Network System Administration.
- **Bilingual Internationalization (ID/EN):** Fitur pengalihan bahasa instan untuk menjangkau perekrut lokal maupun internasional.
- **Integrated Project Lab & Certifications:** Galeri pengujian topologi jaringan, sertifikasi teknis terverifikasi, dan transkrip interaktif.

## Outcomes / Lessons Learned

- **Performa Maksimal:** Penggunaan Astro 5 bersama Vanilla CSS murni menghasilkan skor 100/100 pada pengujian Google PageSpeed Insights dengan _load time_ di bawah 1 detik.
- **Manajemen Konten Tanpa Deploy:** Integrasi Google Sheets API terbukti memudahkan pembaruan proyek laboratorium secara fleksibel tanpa perlu memicu _rebuild_ aplikasi.
- **Otomatisasi Workflow AI:** Penerapan AI Prompt Engineering berhasil mempercepat proses otomatisasi skrip administrasi server dan efisiensi _troubleshooting_ jaringan.
