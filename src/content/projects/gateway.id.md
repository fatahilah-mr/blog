---
title: "FATAH | Gateway Link Hub & Personal Portal"
description: "Portal link personal dan hub portofolio independen yang ultra-cepat, responsif, dan elegan, ditenagai oleh React 18, Vite, GSAP 3D motion, MUI Material Icons, dan Sveltia Headless CMS."
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
  - title: "Dokumentasi Sveltia CMS"
    url: "https://sveltiacms.dev"
  - title: "GSAP Documentation & Easing Guide"
    url: "https://gsap.com/docs/v3/"
  - title: "MUI Material Icons Library"
    url: "https://mui.com/material-ui/material-icons/"
  - title: "Cloudflare Pages & Functions Docs"
    url: "https://developers.cloudflare.com/pages/"
---

## 📌 1. Problem (Latar Belakang & Masalah)

Platform agregator tautan populer (seperti Linktree atau Lnk.bio) memiliki 4 keterbatasan utama bagi web developer dan praktisi IT:
1. **Desain Kaku & Generik:** Antarmuka bawaan kurang mencerminkan identitas *brand* personal berstandar tinggi.
2. **Biaya Langganan Bulanan:** Fitur krusial (seperti analisis mendalam, domain kustom, ikon kustom, dan penghapusan *watermark*) membutuhkan langganan berbayar.
3. **Kinerja Rendah & Risiko Downtime:** Platform hosted pihak ketiga sering lambat dimuat di jaringan seluler dan rentan perubahan kebijakan sepihak.
4. **Friksi Pengelolaan Konten:** Membuat portal statis manual memerlukan edit kode (*hardcoding*) dan *re-deploy* berulang saat ingin memperbarui link dari smartphone.

---

## 👤 2. Target User (Pengguna Utama)

- **Recruiter & Klien Potensial:** Membutuhkan akses 1-klik ke riwayat kerja, portofolio interaktif, dan resume profesional.
- **Komunitas & Developer:** Ingin menjangkau repositori GitHub, blog teknologi (`blog.fatah.web.id`), dan jejaring sosial (LinkedIn, Threads, X).
- **Pemilik Proyek (Fatahilah M.R):** Mengelola, menambah, dan memperbarui link dwibahasa secara mandiri tanpa menyentuh kode via CMS ramah seluler.

---

## 💡 3. Solution (Solusi yang Ditawarkan)

Membangun **FATAH Gateway**, aplikasi web SPA (*Single Page Application*) ultra-cepat yang memadukan estetika *glassmorphism* modern dengan keandalan *serverless edge*.

Pendekatan teknis utama:
- **Infrastruktur Serverless Edge Gratis:** Di-host di Cloudflare Pages Edge Network dengan *Cloudflare Functions* untuk OAuth autentikasi.
- **Git-Based Headless CMS:** Mengintegrasikan **Sveltia CMS** yang terhubung langsung ke repositori GitHub. Setiap editan konten otomatis memicu *commit* Git dan *build* instan.
- **Estetika Glassmorphism & Animasi 3D:** Menggabungkan CSS custom dan GSAP 3 untuk menciptakan interaksi *smooth entrance*, efek tilt 3D saat *hover*, dan respons *bounce* saat diklik.
- **Dual Theme & Dual Language Native:** Alih bahasa (ID/EN) dan mode gelap/terang yang otomatis menyesuaikan preferensi sistem OS pengguna.

---

## ⭐ 4. Key Features (Fitur-Fitur Utama)

- **⚡ Zero-Code CMS Panel (Sveltia CMS):** Kelola tautan, ikon, deskripsi dwibahasa, dan susunan kartu instan dari dasbor `/admin/`.
- **🎴 Kartu Interaktif GSAP 3D:** Setiap kartu link merespons gerakan kursor/sentuhan dengan fisika perspektif 3D yang halus.
- **🎨 Integrasi MUI Material Icons:** Pemetaan 30+ ikon merek resmi (GitHub, LinkedIn, WhatsApp, YouTube, Instagram, Threads, dll) yang konsisten.
- **🔐 Autentikasi OAuth Serverless:** Login CMS aman via Cloudflare Pages Functions (`/api/auth`) tanpa bergantung pada server backend eksternal.
- **🌐 Sinkronisasi Tema & Bahasa Real-Time:** Perubahan bahasa dan tema dilakukan instan tanpa *page reload* lengkap dengan *loader overlay*.
- **🔍 Penanganan SEO & Canonical 3 Lapis:** Mencegah isu duplikasi URL di Google Search Console melalui penegakan tag Canonical otomatis di HTML head, React state, HTTP Header, dan Cloudflare 301 Redirects.

---

## 🧱 5. Challenges & Lessons Learned (Tantangan Teknis & Pemecahan Masalah)

- **Tantangan 1: Blank Screen di Decap CMS**
  - *Masalah:* Implementasi awal Decap CMS mengalami *blank screen* di produksi akibat konflik *bundling* dan *router hash* di Cloudflare Pages.
  - *Solusi:* Migrasi penuh ke **Sveltia CMS** yang lebih ringan, kompatibel penuh dengan `config.yml`, dan memuat jauh lebih cepat.
- **Tantangan 2: Pembengkakan Ukuran Bundle Ikon**
  - *Masalah:* Import ikon secara umum membengkakkan *bundle size* hingga 1.700+ modul JavaScript tidak terpakai.
  - *Solusi:* Migrasi ke `@mui/icons-material` dengan pemetaan modul terpusat (`src/data/iconMap.js`), memangkas bundle menjadi hanya **315 modul** (~109 KB gzip JS) dan *build time* ~10 detik.
- **Tantangan 3: Isu Canonical URL Duplikat di GSC**
  - *Masalah:* Migrasi domain utama ke `fatah.web.id` menyebabkan Googlebot mendeteksi duplikasi variasi URL (HTTP/HTTPS, WWW).
  - *Solusi:* Menerapkan *triple-layer canonical enforcement* (Tag `<link rel="canonical">`, HTTP Header `Link`, dan aturan 301 Redirect Cloudflare).

---

## 📈 6. Impact (Dampak & Hasil)

- **Sebelum:** Terikat pada platform pihak ketiga berbayar dengan kustomisasi terbatas, atau harus mengedit kode manual setiap ada link baru.
- **Sesudah:**
  - **Performa Ekstrem:** Skor Lighthouse 95+ di seluler dengan animasi 60 FPS yang mulus.
  - **100% Bebas Biaya:** Berjalan permanen di Cloudflare Edge Network tanpa biaya langganan bulanan.
  - **Manajemen Konten 1-Klik:** Menambah/mengedit link dalam waktu kurang dari 1 menit langsung dari smartphone via `/admin`.
  - **SEO & Identitas Terkonsolidasi:** Terindeks sempurna di mesin pencari dengan domain kustom bersih `fatah.web.id`.

---

## 🛠️ Tech Choices (Pilihan Teknologi & Alasan Teknis)

- **React 18 & Vite:** Menghasilkan aplikasi SPA modern dengan *Hot Module Replacement* (HMR) cepat dan *tree-shaking* bundler efisien.
- **GSAP 3:** Memberikan kontrol animasi *timeline* presisi, performa GPU tanpa *jank*, dan modul fisika 3D yang fleksibel.
- **Sveltia CMS:** CMS berbasis Git yang *serverless*, ringan, cepat, dan menggunakan format konfigurasi YAML intuitif.
- **MUI Material Icons (`@mui/icons-material`):** Menyediakan ikon standar Google Material Design yang konsisten dan mudah dikustomisasi.
- **Cloudflare Pages & Functions:** Infrastruktur *static edge deployment* global dengan SSL gratis dan eksekusi skrip *serverless OAuth*.

---

## 🖼️ Screenshots & Visual Demo

![Tampilan Utama Gateway](/uploads/gateway-hero.png)
*Gambar 1: Antarmuka utama FATAH Gateway menampilkan kartu tautan interaktif dengan tema gelap/terang dan dukungan dwibahasa.*

![Sveltia CMS Admin Panel](/uploads/gateway-admin.png)
*Gambar 2: Dasbor Sveltia CMS (/admin/) untuk pengelolaan tautan dan konfigurasi konten tanpa kode.*
