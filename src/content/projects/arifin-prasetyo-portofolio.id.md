---
title: "Arifin Prasetyo: Website Portofolio Kuliner Premium"
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
heroImage: "https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-arifin-prasetyo/arifin-prasetyo-portfolio-1.webp"
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


## 📌 1. Problem (Latar Belakang & Masalah)

Arifin Prasetyo adalah seorang *Professional Cook* dan Lulusan Terbaik Jurusan Kuliner 2026 dengan pengalaman kerja di hotel bintang 4 (Swiss-Belhotel Airport Yogyakarta) dan bakery komersial (KinKEN Cake & Bakery). Namun, resume cetak atau PDF konvensional memiliki tiga keterbatasan utama:
- **Tampilan Visual Terbatas:** Tidak mampu menampilkan estetika *plating*, tekstur hidangan, dan portofolio kuliner secara resolusi tinggi.
- **Kredensial Sulit Diverifikasi:** Sertifikasi dan pengalaman kerja tersimpan secara terpisah tanpa satu wadah verifikasi digital yang terpadu.
- **Nir-Visibilitas di Mesin Pencari:** Resume fisik tidak terindeks oleh Google, membatasi jangkauan peluang karir F&B skala nasional.

---

## 👤 2. Target User (Pengguna Utama)

1. **Recruiter & HRD Industri Hospitality:** Tim rekrutmen hotel, restoran, dan bakery yang membutuhkan bukti validitas kompetensi, sertifikasi, serta portofolio hidangan seorang *cook*.
2. **Executive Chef & Dapur Komersial:** Koki profesional senior yang mengevaluasi secara detail penguasaan teknis (*hot kitchen*, *baking & pastry*, dan *beverages*).
3. **Klien & Mitra Kolaborasi:** Pihak yang membutuhkan layanan *private chef*, katering eksklusif, atau konsultasi resep kuliner.

---

## 💡 3. Solution (Solusi yang Ditawarkan)

Membangun platform portofolio digital berbasis **React 19**, **Vite**, dan **TypeScript** dengan arsitektur *mobile-first*. Solusi ini menghadirkan:
- **Performa Navigasi Instan:** Menggunakan **TanStack Router** untuk navigasi antar-halaman tanpa *page reload latency*.
- **Desain UI/UX Kuliner Premium:** Antarmuka responsif berbasis **Tailwind CSS v4** dan komponen **Radix UI** dengan estetika warna *gold accent* & *deep ink*.
- **Infrastruktur SEO Tingkat Lanjut:** Integrasi otomatis `robots.txt`, `sitemap.xml`, OpenGraph metadata, dan tag kanonis resmi (`canonical tag`) untuk indeks bersih di Google Search Console.

---

## ⭐ 4. Key Features (Fitur-Fitur Utama)

- **🔒 Floating Navigation Bar:** Navbar melayang modern dengan efek *glassmorphism* dan drawer navigasi responsif untuk perangkat seluler.
- **🤖 Galeri Kuliner Interaktif & Filter Kategori:** Menampilkan 14 varian hidangan unggulan dengan filter instan (*Semua Menu*, *Main Course & Appetizer*, *Pastry & Bakery*, dan *Beverages*).
- **🛡️ Timeline Kredensial & Sertifikasi:** Linimasa interaktif berisi 4 sertifikasi resmi (termasuk penghargaan *Best Graduate* SMK Patriot Pituruh dan magang 6 bulan KinKEN Cake & Bakery).
- **🗺️ Badge Kompetensi Teknikal:** Pengelompokan keterampilan teknis (*Food Preparation & Plating*, *Food Safety & Hygiene*) dan keterampilan personal (*Kitchen Management*, *Teamwork*).
- **📊 Akses Komunikasi Sekali Klik (Direct CTA):** Tombol aksi langsung menuju WhatsApp dan Email resmi untuk mempercepat peluang perekrutan.
- **⚡ Optimasi Kanonis & Metadata SEO:** Konfigurasi tag kanonis eksplisit (`https://arifin.fatah.web.id/`) untuk menangkal isu duplikasi indeks di mesin pencari.

---

## 🧱 5. Challenges & Lessons Learned (Tantangan Teknis & Pemecahan Masalah)

- **Tantangan 1: Masalah Duplikasi Indeksasi di Google Search Console**
  - *Masalah:* Google Search Console mengabaikan versi kanonis utama karena situs dapat diakses via beberapa varian URL.
  - *Solusi:* Memuat tag `<link rel="canonical" href="https://arifin.fatah.web.id/" />` dan meta tag `og:url` langsung di tingkat rute utama `__root.tsx` dan `index.tsx` TanStack Router.
- **Tantangan 2: Performa Muat Galeri Gambar Hidangan Resolusi Tinggi**
  - *Masalah:* Rendering 14 foto aset hidangan berukuran besar memicu *Cumulative Layout Shift* (CLS) dan memperlambat muat halaman di jaringan seluler.
  - *Solusi:* Menerapkan format WebP dengan atribut `loading="lazy"`, mengunci rasio aspek fisik (`aspect-[4/3]`), serta menerapkan efek *backdrop blur* halus saat proses *loading*.

---

## 📈 6. Impact (Dampak & Hasil)

- **Sebelum:** Portofolio karya kuliner dan riwayat sertifikasi terbatas pada berkas fisik tanpa visibilitas digital di Google.
- **Sesudah:**
  - **100% Terindeks Bersih di Google Search:** Menempati indeksasi SEO tanpa error duplikasi kanonis.
  - **Wadah Visual 14 Hidangan Unggulan:** HRD dan Executive Chef dapat mengevaluasi 14 hidangan dan 4 kredensial resmi secara instan dari perangkat mobile.

---

## 🛠️ Tech Choices (Pilihan Teknologi & Alasan Teknis)

- **React 19 & Vite:** Kombinasi framework modern dengan *Hot Module Replacement* (HMR) instan dan *bundle build* teroptimasi.
- **TanStack Router:** Menjamin routing *type-safe* bebas *reload* serta mempermudah manajemen tag `head` dinamis untuk SEO.
- **Tailwind CSS v4:** Memaksimalkan fleksibilitas *utility-first* dan manajemen token warna khusus (`--color-gold`, `--color-ink`).
- **Radix UI Primitives:** Memastikan standar aksesibilitas tinggi (a11y) tanpa beban *CSS bloat*.
- **Cloudflare Pages:** Infrastruktur *hosting edge* global yang memberikan *latency* sangat rendah dan *auto-deployment* via Git.

---

## 🖼️ Screenshots & Visual Demo

![Tampilan Beranda Utama Portofolio Kuliner Arifin Prasetyo](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-arifin-prasetyo/arifin-prasetyo-portfolio-1.webp)
*Gambar 1: Antarmuka utama beranda portofolio kuliner Arifin Prasetyo menampilkan foto profil koki profesional, ringkasan pengalaman, dan tombol aksi.*

![Tampilan Dokumen Sertifikat Kredensial Resmi dan PKL](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-arifin-prasetyo/arifin-prasetyo-portfolio-2.webp)
*Gambar 2: Bagian kredensial resmi menampilkan sertifikat Lulusan Terbaik SMK Patriot Pituruh dan Sertifikat Magang 6 Bulan di KinKEN Cake & Bakery.*

![Tampilan Bagian Keahlian Utama Hard Skills dan Soft Skills Kuliner](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-arifin-prasetyo/arifin-prasetyo-portfolio-3.webp)
*Gambar 3: Pengelompokan kompetensi teknis (Hot Kitchen, Plating, Baking) dan keahlian personal manajemen operasional dapur.*

![Tampilan Galeri Menu Hidangan Kuliner Unggulan](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-arifin-prasetyo/arifin-prasetyo-portfolio-4.webp)
*Gambar 4: Galeri portofolio menu kuliner interaktif berfitur filter kategori menampilkan hidangan estetis seperti Chicken Cordon Bleu dan Salad.*

![Tampilan Bagian Kontak dan Form Kolaborasi Kuliner](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-arifin-prasetyo/arifin-prasetyo-portfolio-5.webp)
*Gambar 5: Bagian komunikasi resmi dan kolaborasi dapur yang menyediakan akses langsung WhatsApp, Email, serta informasi lokasi.*

