---
title: "fmr.blog | Platform Blog & Galeri Proyek Interaktif"
description: "Blog pribadi dan galeri portofolio interaktif berkinerja tinggi berbasis Astro 5, TypeScript, React 19, MUI Icons, dan Vanilla CSS."
status: "active"
techStack:
  - Astro 5
  - TypeScript
  - React 19
  - MUI Material Icons
  - Vanilla CSS
  - Cloudflare Pages
startDate: "2026-07-19"
repoUrl: "https://github.com/fatahilah-mr/blog"
demoUrl: "https://blog.fatah.web.id"
heroImage: "/uploads/Logo Web Blog.png"
featured: true
references:
  - title: "Dokumentasi Resmi Astro 5"
    url: "https://docs.astro.build"
  - title: "Google Search Central - Sitemap Guidelines"
    url: "https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview"
  - title: "MUI Material Icons Documentation"
    url: "https://mui.com/material-ui/material-icons/"
  - title: "Cloudflare Pages Edge Hosting"
    url: "https://developers.cloudflare.com/pages/"
---

## 📌 1. Problem (Latar Belakang & Masalah)

Sebagai pengembang web dan teknisi jaringan IT, memiliki wadah publikasi mandiri untuk mendokumentasikan riset laboratorium, eksperimen otomatisasi AI, dan portofolio proyek sangatlah krusial.

Namun, membangun platform blog & portofolio teknis modern sering dihadapkan pada 4 tantangan utama:
1. **Beban Overhead & Kecepatan Akses:** Platform blog tradisional (seperti WordPress atau Medium) memiliki keterbatasan kustomisasi, beban script berat, dan ketergantungan pada hosting berbayar.
2. **Optimasi SEO & Validasi Google Search Console:** Generator sitemap otomatis pada situs i18n sering memicu peringatan *Soft 404* atau duplikasi tautan yang gagal diindeks oleh GSC.
3. **Fleksibilitas Desain & Identitas Branding:** Penggunaan *framework UI utility* yang generik membuat tampilan situs terlihat monoton dan kurang mencerminkan standar estetika modern.
4. **Resiko Performa akibat Hydration JavaScript:** Penggunaan *Single Page Application* (SPA) murni kerap mengirimkan beban JavaScript besar ke perangkat seluler pengguna.

---

## 👤 2. Target User (Pengguna Utama)

- **Recruiter & Mitra Industri:** Membutuhkan verifikasi cepat terhadap kredibilitas teknis, rekam jejak proyek, dan keahlian Fatahilah Miftahul Rahman.
- **Developer & Network Engineer:** Ingin membaca artikel teknis dwibahasa, dokumentasi topologi jaringan, dan otomatisasi AI yang terstruktur.
- **Pembaca Umum:** Membutuhkan pengalaman membaca yang nyaman, responsif, bebas iklan, dan cepat dimuat di semua koneksi seluler.

---

## 💡 3. Solution (Solusi yang Ditawarkan)

Membangun **fmr.blog**, platform blog dan portofolio generasi baru berbasis **Astro 5** berarsitektur *Islands Architecture (Zero-JS by default)* yang di-host di Cloudflare Pages Edge Network.

Pendekatan teknis utama:
- **Arsitektur Islands & React 19 Integration:** Hanya merender JavaScript untuk komponen interaktif tertentu (seperti MUI Icons dan Theme Toggle), sementara sisa halaman 100% berupa HTML statis murni.
- **Terstruktur & Terindeks Sempurna (JSON-LD SEO):** Menginjeksi *Structured Data* Schema.org (`BlogPosting`, `SoftwareApplication`, `Person`, `WebSite`) secara otomatis untuk performa mesin pencari maksimal.
- **Design System Vanilla CSS Custom:** Arsitektur CSS token (*OLED Midnight & Editorial Light*) lengkap dengan animasi mikro *cubic-bezier* dan efek *glassmorphism* tanpa *framework* CSS eksternal.
- **Fitur Interaktif Cerdas:** Integrasi pencarian live instan, penyaring tag kategoris, salin kode 1-klik (*copy code button*), dan sistem komentar Giscus berbasis GitHub Discussions.

---

## ⭐ 4. Key Features (Fitur-Fitur Utama)

- **⚡ Performa Ekstrem & Zero-JS Core:** Pemuatan halaman instan dengan skor *Core Web Vitals* maksimal di perangkat seluler dan desktop.
- **📂 Pencarian Live & Filter Tag Interaktif:** Pencarian artikel dan proyek secara *real-time* berdasarkan kata kunci dan kategori teknologi.
- **🌐 Penanganan SEO & Sitemap GSC Presisi:** Integrasi `@astrojs/sitemap` yang bersih tanpa duplikasi *hreflang* untuk indeksasi instan di Google Search Console.
- **🎨 Dark/Light Theme Anti-FOUC:** Fitur alih mode gelap/terang tanpa kedipan warna saat halaman pertama kali dimuat.
- **📋 Copy Code Block 1-Klik:** Tombol otomatis pada setiap blok sintaks kode untuk memudahkan pembaca menyalin skrip.
- **💬 Diskusi & Komentar Giscus:** Fitur komentar aman berbasis GitHub Discussions yang langsung terintegrasi dengan identitas pengembang.
- **📖 Estimasi Waktu Baca & Indikator Bahasa:** Perhitungan waktu membaca otomatis (*reading time*) dan penanda konten dwibahasa (ID/EN).

---

## 🧱 5. Challenges & Lessons Learned (Tantangan Teknis & Pemecahan Masalah)

- **Tantangan 1: Isu Rendering MUI Icons pada Astro Scoped CSS**
  - *Masalah:* Komponen React `@mui/icons-material` tidak menerima atribut *scoped CSS* Astro secara otomatis, menyebabkan masalah posisi ikon pencarian dan rotasi panah dropdown.
  - *Solusi:* Memisahkan ikon fungsional yang membutuhkan animasi CSS (dikembalikan ke SVG inline murni) dan ikon dekoratif (dibungkus dalam elemen HTML kontainer ber-class lokal).
- **Tantangan 2: Migrasi Domain & Validasi Sitemap GSC**
  - *Masalah:* Migrasi domain dari `blog.fatahmr.my.id` ke `blog.fatah.web.id` menyebabkan peringatan duplikasi URL dan sitemap lama gagal diambil di Google Search Console.
  - *Solusi:* Mengonfigurasi ulang `astro.config.mjs`, memperbarui seluruh struktur sitemap XML, dan menerapkan aturan pengalihan 301 yang bersih di tingkat Cloudflare.
- **Tantangan 3: Pengisian Metadata Structured Data JSON-LD**
  - *Masalah:* Halaman artikel dan proyek membutuhkan skema SEO terstruktur agar tampil dengan *rich snippets* di halaman pencarian Google.
  - *Solusi:* Menginjeksi skema JSON-LD dinamis di layout `Base.astro`, `[slug].astro` artikel, dan `[slug].astro` proyek.

---

## 📈 6. Impact (Dampak & Hasil)

- **Sebelum:** Publikasi tulisan dan portofolio tersebar di berbagai platform pihak ketiga tanpa kontrol penuh atas branding dan performa SEO.
- **Sesudah:**
  - **Skor Performa Maksimal:** Halaman memuat dalam hitungan milidetik dengan skor 95+ di Google PageSpeed Insights.
  - **Terindeks 100% di Google:** Sitemap XML dan seluruh rute halaman berhasil diambil dan terindeks tanpa error di Google Search Console.
  - **Wadah Dokumentasi Terpusat:** Menjadi pusat dokumentasi resmi bagi seluruh proyek IT, riset laboratorium, dan repositori open-source.

---

## 🛠️ Tech Choices (Pilihan Teknologi & Alasan Teknis)

- **Astro 5:** Dipilih sebagai kerangka kerja utama karena arsitektur SSG murni dan *Islands Architecture* yang sangat cepat.
- **TypeScript:** Menjamin tipe data terstruktur (*type-safety*) untuk koleksi konten blog dan proyek via Zod Schema.
- **React 19 & MUI Icons:** Digunakan untuk komponen interaktif tertentu dan ikon Material Design yang konsisten.
- **Vanilla CSS:** Memberikan kontrol arsitektur CSS murni, *design tokens* presisi, dan performa tinggi tanpa *overhead* utility class.
- **Cloudflare Pages:** Platform *edge hosting* global yang menjamin pengiriman konten cepat, SSL gratis, dan keandalan tinggi.

---

## 🖼️ Screenshots & Visual Demo

![Tampilan Beranda fmr.blog](/uploads/Logo Web Blog.png)
*Gambar 1: Tampilan antarmuka utama fmr.blog dengan tema gelap dan layout galeri interaktif.*

![Pratinjau Halaman Proyek](/uploads/project-cover.jpg)
*Gambar 2: Tampilan galeri portofolio proyek lengkap dengan tag teknologi dan tombol aksi.*
