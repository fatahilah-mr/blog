---
title: "Arifin Prasetyo — Website Portofolio Kuliner Premium"
description: "Platform portofolio digital mobile-first untuk chef & professional cook Arifin Prasetyo, menampilkan 14 hidangan kuliner, sertifikasi resmi, serta optimasi SEO tingkat lanjut."
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
Arifin Prasetyo adalah seorang *Professional Cook* dan Lulusan Terbaik Jurusan Kuliner tahun 2026 yang memiliki pengalaman kerja di hotel bintang 4 (Swiss-Belhotel Airport Yogyakarta) dan bakery komersial (KinKEN Cake & Bakery). Namun, seperti banyak profesional kuliner muda lainnya, resume fisik tradisional berupa PDF atau cetakan kertas memiliki keterbatasan besar dalam menampilkan estetika visual hidangan (*plating*), kredensial sertifikasi resolusi tinggi, serta belum terindeks secara optimal di mesin pencari seperti Google.

Kebutuhan utama yang harus dipenuhi adalah platform portofolio digital yang tidak hanya berfungsi sebagai CV interaktif, tetapi juga memiliki kecepatan muat tinggi, tampilan *mobile-first* yang responsif, serta *Search Engine Optimization* (SEO) tingkat lanjut agar mudah ditemukan oleh pencari kerja, klien, maupun mitra industri F&B.

## 👤 2. Target User
- **Recruiter & HRD Industri Hospitality:** Pihak hotel, restoran, dan toko bakery yang membutuhkan bukti autentik kompetensi, sertifikasi, serta portofolio olahan hidangan seorang *cook*.
- **Executive Chef & Dapur Komersial:** Profesional senior yang ingin melihat secara detail keterampilan teknis (*hard skills*) seperti *hot kitchen*, *baking & pastry*, hingga *beverages*.
- **Klien & Mitra Kolaborasi:** Pihak yang membutuhkan jasa katering, *private chef*, atau konsultasi resep dan pembuatan kue.

## 💡 3. Solution
Diperlukan pembaruan total arsitektur web portofolio dengan membangun website berbasis komponen modular menggunakan **React 19**, **Vite**, dan **TypeScript**. Aplikasi ini mengadopsi arsitektur *file-based routing* menggunakan **TanStack Router** untuk navigasi yang sangat cepat tanpa penundaan muat ulang halaman (*zero page-reload latency*).

Seluruh elemen visual didesain dengan pendekatan *mobile-first* menggunakan **Tailwind CSS v4** dan komponen terkontrol **Radix UI**, dilengkapi dengan integrasi file metadata SEO seperti `robots.txt`, `sitemap.xml`, tag kanonis (`canonical tag`), dan *Open Graph meta tags* untuk optimasi sosial dan indeks Google Search Console.

## ⭐ 4. Key Features
- **Floating Navigation Bar:** Navbar melayang modern dengan efek *backdrop blur* (glassmorphism) dan menu responsif untuk kemudahan navigasi di perangkat mobile maupun desktop.
- **Dynamic Culinary Gallery Filter:** Galeri interaktif dengan filter kategori instan (*Semua Menu*, *Main Course & Appetizer*, *Pastry & Bakery*, dan *Beverages*) yang menampilkan 14 varian hidangan unggulan.
- **Responsive Credentials Timeline:** Timeline sertifikasi interaktif yang menampilkan 4 kredensial resmi (termasuk *Best Graduate* SMK Patriot Pituruh dan PKL 6 bulan di KinKEN Cake & Bakery) dengan indikator badge emas (*gold accent*).
- **Interactive Competency Badges:** Pengelompokan keterampilan teknis (*Hard Skills* seperti *Food Preparation & Plating*) dan personal (*Soft Skills* seperti *Manajemen Dapur* & *Kerja Sama Tim*).
- **Direct Call-to-Action (CTA):** Akses langsung sekali klik menuju WhatsApp dan Email resmi untuk mempercepat komunikasi profesional.
- **Production-Ready SEO & Canonical Config:** Pengaturan meta tag terstruktur, OpenGraph, sitemap XML otomatis, serta tag kanonis resmi (`https://arifin.fatah.web.id/`) untuk mencegah masalah duplikasi indeks di Google Search Console.

## 🧱 5. Challenges & Lessons Learned
- **Tantangan Teknis 1: Optimasi Indeksasi & Masalah URL Duplikat di Google Search Console**
  - *Masalah:* Google Search Console melaporkan masalah *"Duplikat, tanpa ada versi kanonis pilihan pengguna"* karena akses domain dapat dilakukan melalui beberapa alternatif varian URL.
  - *Solusi:* Menambahkan tag `<link rel="canonical" href="https://arifin.fatah.web.id/" />` dan meta tag `og:url` langsung ke dalam skema rute utama `__root.tsx` dan `index.tsx` TanStack Router.
- **Tantangan Teknis 2: Performa Galeri Gambar Hidangan Kuliner**
  - *Masalah:* Menampilkan 14 foto aset hidangan berukuran besar (*Chicken Cordon Bleu*, *Birthday Cake*, *Donuts*, dll) dapat memperlambat *First Contentful Paint* (FCP) di perangkat jaringan seluler.
  - *Solusi:* Menggunakan format gambar modern WebP dengan atribut `loading="lazy"`, rasio aspek fisik `aspect-[4/3]`, serta *smooth blur backdrop* untuk mencegah perubahan tata letak (*Cumulative Layout Shift* / CLS).

## 📈 6. Impact
- **Sebelum:** Informasi karir dan karya hidangan Arifin Prasetyo hanya tersimpan dalam berkas cetak dan belum memiliki visibilitas digital yang terstruktur di mesin pencari.
- **Sesudah:** Website portofolio yang dapat diakses secara publik dengan skor performa tinggi, indeksasi SEO bersih tanpa error duplikasi kanonis, serta menyajikan 14 menu karya dan 4 kredensial resmi dalam satu pengalaman antarmuka yang elegan.

## 🛠️ Tech Choices
- **React 19 & Vite:** Dipilih karena memberikan kecepatan pembangunan aplikasi (*Hot Module Replacement* instan) serta fleksibilitas komponen UI modular.
- **TanStack Router:** Dipilih untuk menangani rute aplikasi secara *type-safe*, efisien, dan mendukung manajemen tag `head` dinamis untuk kebutuhan SEO.
- **Tailwind CSS v4:** Dipilih untuk mempermudah desain utilitas tinggi, pengaturan token warna khusus (*custom color tokens* seperti `--color-gold` dan `--color-ink`), dan responsivitas instan.
- **Radix UI Primitives:** Dipilih untuk memastikan komponen interaktif memiliki standar aksesibilitas tinggi (*a11y*) tanpa membawa *styling bloat*.
- **Cloudflare Pages:** Dipilih sebagai infrastruktur *hosting edge* global yang memberikan *latency* sangat rendah dan penyebaran otomatis berbasis Git.

## 🖼️ Screenshots & Visual Demo
![Arifin Prasetyo Portfolio Cover](/assets/profile.webp)
*Gambar 1: Antarmuka utama halaman beranda portofolio Arifin Prasetyo.*
