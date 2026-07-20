---
title: fmr.blog
description: My personal blog and project showcase built with Astro and Sveltia CMS.
status: active
techStack:
  - Astro
  - Sveltia CMS
  - Cloudflare Pages
repoUrl: https://github.com/fatahilah-mr/blog
demoUrl: https://blog.fatahmr.my.id
heroImage: /uploads/Logo Web Blog.png
featured: true
startDate: 2026-07-19
---

Pembangunan **fmr.blog** berawal dari kebutuhan akan sebuah ruang digital pribadi yang tidak hanya berfungsi sebagai portofolio, tetapi juga sebagai pusat berbagi pengetahuan, eksperimen infrastruktur, dan dokumentasi IT. Situs ini dirancang dari awal untuk menjadi platform yang sangat ringan, super cepat, dan mudah dikelola tanpa bergantung pada _database_ tradisional.

### 🏗️ Arsitektur & Teknologi Utama

Alih-alih menggunakan platform _monolithic_ seperti WordPress, blog ini dibangun menggunakan pendekatan arsitektur modern (Jamstack):

*   **Astro (Static Site Generator):** Dipilih karena kemampuannya menghasilkan HTML statis murni tanpa memuat _JavaScript_ bawaan (_Zero-JS by default_). Ini menjamin waktu muat halaman (_load time_) yang nyaris instan dan sangat ramah mesin pencari (SEO).
*   **Sveltia CMS:** Sebagai alternatif modern untuk Decap/Netlify CMS. Sveltia memungkinkan pengelolaan konten (_markdown_) melalui antarmuka visual yang terhubung langsung dengan repositori GitHub (Git-based CMS).
*   **Cloudflare Pages:** Seluruh situs di-_deploy_ di atas jaringan tepi (_edge network_) Cloudflare, memberikan kecepatan akses global, keamanan dari serangan DDoS, dan proses integrasi yang mulus melalui _Continuous Deployment_.

### ✨ Fitur Unggulan

Beberapa fitur teknis yang diimplementasikan di dalam proyek ini meliputi:

*   **Desain Glassmorphism & Tema Gelap:** Antarmuka (_User Interface_) dibangun menggunakan CSS murni dengan efek tembus pandang (_glassmorphism_) yang modern. Situs ini juga sepenuhnya mendukung peralihan mode terang dan gelap (_Dark/Light Mode_).
*   **Sistem Komentar Berbasis GitHub (Giscus):** Menggunakan fitur GitHub Discussions sebagai mesin komentar. Hal ini dipilih karena target pembaca blog ini kebanyakan adalah praktisi IT, _developer_, dan teknisi infrastruktur yang memang terbiasa dengan ekosistem GitHub.
*   **RSS Feed Terintegrasi:** Memungkinkan para pembaca setia maupun aplikasi _aggregator_ pihak ketiga untuk berlangganan artikel tanpa perlu mengunjungi situs secara manual.
*   **SEO & Performa:** Mendapat nilai _Lighthouse_ yang sangat maksimal karena ketiadaan bloat, dilengkapi metadata dinamis, serta _sitemap_ otomatis untuk Google Search Console.

### 🚀 Tujuan dan Harapan

Selain menjadi catatan laboratorium pribadi, fmr.blog ditujukan untuk semua kalangan yang tertarik mempelajari dunia IT. Melalui blog ini, segala proses penyelesaian masalah (_troubleshooting_), dokumentasi server, hingga eksperimen dengan _Large Language Models_ (LLM) akan dibagikan secara terbuka agar dapat bermanfaat bagi banyak orang.
