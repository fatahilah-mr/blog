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
featured: true
startDate: 2026-07-19
---

Pembangunan **fmr.blog** berawal dari kebutuhan akan sebuah ruang digital pribadi yang tidak hanya berfungsi sebagai portofolio, tetapi juga sebagai pusat berbagi pengetahuan, eksperimen infrastruktur, dan dokumentasi IT. Situs ini dirancang dari awal untuk menjadi platform yang sangat ringan, super cepat, dan mudah dikelola tanpa bergantung pada *database* tradisional.

### 🏗️ Arsitektur & Teknologi Utama

Alih-alih menggunakan platform *monolithic* seperti WordPress, blog ini dibangun menggunakan pendekatan arsitektur modern (Jamstack):

*   **Astro (Static Site Generator):** Dipilih karena kemampuannya menghasilkan HTML statis murni tanpa memuat *JavaScript* bawaan (*Zero-JS by default*). Ini menjamin waktu muat halaman (*load time*) yang nyaris instan dan sangat ramah mesin pencari (SEO).
*   **Sveltia CMS:** Sebagai alternatif modern untuk Decap/Netlify CMS. Sveltia memungkinkan pengelolaan konten (*markdown*) melalui antarmuka visual yang terhubung langsung dengan repositori GitHub (Git-based CMS).
*   **Cloudflare Pages:** Seluruh situs di-*deploy* di atas jaringan tepi (*edge network*) Cloudflare, memberikan kecepatan akses global, keamanan dari serangan DDoS, dan proses integrasi yang mulus melalui *Continuous Deployment*.

### ✨ Fitur Unggulan

Beberapa fitur teknis yang diimplementasikan di dalam proyek ini meliputi:

*   **Desain Glassmorphism & Tema Gelap:** Antarmuka (*User Interface*) dibangun menggunakan CSS murni dengan efek tembus pandang (*glassmorphism*) yang modern. Situs ini juga sepenuhnya mendukung peralihan mode terang dan gelap (*Dark/Light Mode*).
*   **Sistem Komentar Berbasis GitHub (Giscus):** Menggunakan fitur GitHub Discussions sebagai mesin komentar. Hal ini dipilih karena target pembaca blog ini kebanyakan adalah praktisi IT, *developer*, dan teknisi infrastruktur yang memang terbiasa dengan ekosistem GitHub.
*   **RSS Feed Terintegrasi:** Memungkinkan para pembaca setia maupun aplikasi *aggregator* pihak ketiga untuk berlangganan artikel tanpa perlu mengunjungi situs secara manual.
*   **SEO & Performa:** Mendapat nilai *Lighthouse* yang sangat maksimal karena ketiadaan bloat, dilengkapi metadata dinamis, serta *sitemap* otomatis untuk Google Search Console.

### 🚀 Tujuan dan Harapan

Selain menjadi catatan laboratorium pribadi, fmr.blog ditujukan untuk semua kalangan yang tertarik mempelajari dunia IT. Melalui blog ini, segala proses penyelesaian masalah (*troubleshooting*), dokumentasi server, hingga eksperimen dengan *Large Language Models* (LLM) akan dibagikan secara terbuka agar dapat bermanfaat bagi banyak orang.
