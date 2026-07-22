---
title: fmr.blog
description: My personal blog and project showcase built with Astro and Sveltia CMS.
status: active
techStack:
  - Astro 5
  - TypeScript
  - Node.js
  - Sveltia CMS
  - Cloudflare Pages Functions
  - Cloudflare Pages
  - Vanilla CSS
  - Zod
  - Giscus
  - Shiki
  - Astro Sitemap
  - Astro RSS
  - NPM
  - Git
  - GitHub CLI
  - Termux
repoUrl: https://github.com/fatahilah-mr/blog
demoUrl: https://blog.fatahmr.my.id
heroImage: /uploads/Logo Web Blog.png
featured: true
startDate: 2026-07-19
---

Pembangunan **fmr.blog** berawal dari kebutuhan akan sebuah ruang digital pribadi yang tidak hanya berfungsi sebagai portofolio, tetapi juga sebagai pusat berbagi pengetahuan, eksperimen infrastruktur, dan dokumentasi IT. Situs ini dirancang dari awal untuk menjadi platform yang sangat ringan, super cepat, dan mudah dikelola tanpa bergantung pada _database_ tradisional.

### 🏗️ Arsitektur & Teknologi Utama

Alih-alih menggunakan platform _monolithic_ seperti WordPress, blog ini dibangun menggunakan pendekatan arsitektur modern (Jamstack):

*   **Astro 5 (Static Site Generator):** Dipilih karena kemampuannya menghasilkan HTML statis murni tanpa memuat _JavaScript_ bawaan (_Zero-JS by default_). Ini menjamin waktu muat halaman (_load time_) yang nyaris instan dan sangat ramah mesin pencari (SEO).
*   **Node.js & NPM:** Digunakan sebagai runtime lingkungan pengembangan lokal (_development_), manajer paket dependensi, serta proses kompilasi (_build-time_) halaman statis.
*   **TypeScript:** Memberikan pengetikan ketat (_type-safety_) pada konfigurasi, skema konten, serta properti komponen UI.
*   **Sveltia CMS:** Sebagai alternatif modern untuk Decap/Netlify CMS. Sveltia memungkinkan pengelolaan konten (_markdown_) melalui antarmuka visual yang terhubung langsung dengan repositori GitHub (Git-based CMS).
*   **Cloudflare Pages & Functions:** Seluruh situs di-_deploy_ di atas jaringan tepi (_edge network_) Cloudflare. Serverless functions (`functions/oauth`) menangani autentikasi GitHub OAuth untuk CMS tanpa memerlukan server backend eksternal.
*   **Vanilla CSS, Design Tokens & Google Fonts:** Diisi styling CSS murni dengan variabel warna _Forest Green_ (`#4A7856`), efek tembus pandang (_glassmorphism_), font web Inter & Outfit, serta switcher mode terang dan gelap (_Dark/Light Mode_).
*   **Zod Content Collections:** Menjamin integritas data artikel dan proyek dengan validasi skema ketat saat proses _build_.
*   **Shiki & Giscus:** Penyorotan kode otomatis (_syntax highlighting_) menggunakan Shiki `github-dark`, dan sistem komentar interaktif berbasis GitHub Discussions melalui Giscus.
*   **Astro Sitemap & RSS Integration:** Otomatisasi pembuatan XML Sitemap (`sitemap-index.xml`) untuk Google Search Console dan RSS Feed (`/rss.xml`) untuk agregator berita.

### ✨ Fitur Unggulan

Beberapa fitur teknis yang diimplementasikan di dalam proyek ini meliputi:

*   **Desain Glassmorphism & Tema Gelap:** Antarmuka (_User Interface_) dibangun menggunakan CSS murni dengan efek tembus pandang (_glassmorphism_) yang modern. Situs ini juga sepenuhnya mendukung peralihan mode terang dan gelap (_Dark/Light Mode_).
*   **Sistem Komentar Berbasis GitHub (Giscus):** Menggunakan fitur GitHub Discussions sebagai mesin komentar. Hal ini dipilih karena target pembaca blog ini kebanyakan adalah praktisi IT, _developer_, dan teknisi infrastruktur yang memang terbiasa dengan ekosistem GitHub.
*   **RSS Feed Terintegrasi:** Memungkinkan para pembaca setia maupun aplikasi _aggregator_ pihak ketiga untuk berlangganan artikel tanpa perlu mengunjungi situs secara manual.
*   **SEO & Performa:** Mendapat nilai _Lighthouse_ yang sangat maksimal karena ketiadaan bloat, dilengkapi metadata dinamis, serta _sitemap_ otomatis untuk Google Search Console.

### 🚀 Tujuan dan Harapan

Selain menjadi catatan laboratorium pribadi, fmr.blog ditujukan untuk semua kalangan yang tertarik mempelajari dunia IT. Melalui blog ini, segala proses penyelesaian masalah (_troubleshooting_), dokumentasi server, hingga eksperimen dengan _Large Language Models_ (LLM) akan dibagikan secara terbuka agar dapat bermanfaat bagi banyak orang.
