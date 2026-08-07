---
title: Portofolio Interaktif & Galeri Lab IT
description: Portofolio pribadi ultra-cepat berbasis Astro 5, Vanilla CSS, dan Google Sheets Headless CMS untuk mengarsip laboratorium IT Network, Server, dan AI.
status: completed
techStack:
  - Astro 5
  - Vanilla CSS
  - Google Sheets CMS
  - Cloudflare Pages
  - TypeScript
repoUrl: https://github.com/fatahilah-mr/portfolio
demoUrl: https://fatahmr.my.id
heroImage: https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-fatahilah/web-portfolio-fatahilah-01.webp
featured: true
startDate: 2026-07-19
references:
  - title: Dokumentasi Resmi Astro 5
    url: https://docs.astro.build
  - title: Panduan Query Google Visualization API (gviz/tq)
    url: https://developers.google.com/chart/interactive/docs/dev/gviz_api_query_language
  - title: Dokumentasi Cloudflare Pages Deployment
    url: https://developers.cloudflare.com/pages/
---

## 📌 1. Problem (Latar Belakang & Masalah)

Sebagai peraih Juara 1 LKS IT Network System Administration 2026, dokumentasi teknis laboratorium dan verifikasi kualifikasi (sertifikat, transkrip nilai, dan topologi jaringan) harus disajikan secara profesional kepada _recruiter_ dan praktisi industri.

Namun, pembuatan web portofolio tradisional menghadapi 3 masalah utama:

1. **Beban CMS Tradisional:** CMS berbasis server (seperti WordPress) membutuhkan biaya hosting bulanan, perawatan database, dan rentan celah keamanan.
2. **Performa Rendah & JS Bundle Membengkak:** Framework SPA murni (React/Next.js) sering mengunduh berkas JavaScript besar yang memperlambat _page load_ di perangkat seluler dan menurunkan skor SEO.
3. **Pembaruan Data yang Rumit:** Portofolio statis tanpa CMS membuat penambahan sertifikat atau proyek baru harus melalui _hardcoding_ dan _re-deploy_ ulang yang tidak praktis.

## 👤 2. Target User (Pengguna Utama)

- **Recruiter & HRD IT:** Membutuhkan verifikasi instan terhadap sertifikat, transkrip nilai PKL, dan kualifikasi teknis Fatahilah Miftahul Rahman.
- **Network Engineer & Tech Lead:** Ingin mengeksplorasi dokumentasi topologi jaringan (Cisco, MikroTik, Linux Debian, Windows Server) dan otomatisasi _AI Prompt Engineering_.
- **Komunitas & Pengunjung:** Membutuhkan antarmuka responsif, cepat, dwibahasa (ID/EN), dan nyaman di semua ukuran layar.

## 💡 3. Solution (Solusi yang Ditawarkan)

Membangun web portofolio generasi baru menggunakan **Astro 5** berarsitektur _Zero-JS shipped by default_, dipadukan dengan **Google Sheets** sebagai _Headless CMS_ tanpa biaya.

Pendekatan teknis utama:

- **Zero-Cost Headless CMS:** Menggunakan endpoint `gviz/tq` Google Sheets API untuk menarik data proyek dan sertifikat secara dinamis dengan _cache localStorage_ 24 jam.
- **SSR Static Fallback:** Menyediakan _fallback HTML_ statis agar Googlebot dan mesin pencari mengindeks konten secara utuh tanpa bergantung pada JavaScript klien.
- **Vanilla CSS Design System:** Arsitektur CSS murni (_OLED Midnight & Editorial Light_) dengan animasi mikro yang aman bagi _prefers-reduced-motion_.
- **i18n Dwibahasa Instan (ID/EN):** Fitur alih bahasa tanpa _reload_ halaman menggunakan pemetaan kamus terjemahan yang ringan (`FloatingLang.astro`).

## ⭐ 4. Key Features (Fitur-Fitur Utama)

- **⚡ Skor 100/100 PageSpeed:** Struktur HTML statis kompilasi Astro menghasilkan waktu muat instan dan konsumsi memori minimal.
- **📊 Integrasi Google Sheets CMS:** Pembaruan data proyek dan sertifikat cukup dengan mengedit baris tabel Google Sheets tanpa _build_ ulang.
- **🌐 Alih Bahasa Dwibahasa (ID/EN):** Widget melayang untuk beralih bahasa secara instan dengan animasi transisi halus.
- **🎨 Anti-FOUC Theme Switcher:** Mode gelap/terang yang langsung membaca preferensi pengguna tanpa kedipan warna.
- **📂 Arsip Lab & Filter Kategori:** Galeri proyek dengan filter kategori instan (Cisco, MikroTik, Linux, Windows Server, AI, Web).
- **📜 Modal Viewer Sertifikat & Transkrip:** Pratinjau berkas sertifikat dan transkrip nilai langsung via _pop-up modal_ atau Google Drive.
- **♿ Aksesibilitas WCAG AA:** Memenuhi standar kontras tinggi, navigasi keyboard, dan dukungan ARIA live region.

## 🧱 5. Challenges & Lessons Learned (Tantangan Teknis & Pemecahan Masalah)

- **Tantangan 1: Render Halaman Kosong di GSC (Soft 404)**
    - _Masalah:_ Animasi CSS (`animation-fill-mode: both`) mengunci elemen pada `opacity: 0` saat Googlebot melakukan _Live URL Test_, memicu status _Soft 404_.
    - _Solusi:_ Mengubah mode animasi ke `forwards`, menetapkan standar `opacity: 1` di HTML awal, dan menyediakan _SSR fallback cards_.
- **Tantangan 2: Optimasi API Google Sheets & Jaringan**
    - _Masalah:_ Pengambilan data dari API eksternal berisiko lambat atau gagal saat koneksi seluler tidak stabil.
    - _Solusi:_ Membangun sistem _caching client-side_ di `localStorage` selama 24 jam lengkap dengan fitur _manual refresh_ dan penanganan status _offline_.
- **Tantangan 3: Pemetaan XML Sitemap Dwibahasa**
    - _Masalah:_ Generator sitemap otomatis menghasilkan _hreflang_ berulang yang memicu peringatan di Google Search Console.
    - _Solusi:_ Menyusun `public/sitemap.xml` statis yang presisi sesuai standar Google Search Central.

## 📈 6. Impact (Dampak & Hasil)

- **Sebelum:** Penambahan proyek/sertifikat membutuhkan pengubahan kode HTML manual dan proses _build_ ulang yang memakan waktu.
- **Sesudah:**
    - Pembaruan proyek dan sertifikat selesai dalam hitungan detik via Google Sheets dari smartphone.
    - Meraih skor sempurna **100/100 di Google PageSpeed Insights** (Performance, Accessibility, Best Practices, SEO).
    - Terindeks 100% di Google Search Console tanpa error rendering atau _Soft 404_.
    - Menjadi media portofolio resmi yang memperkuat kredibilitas profesional sebagai Juara 1 LKS IT Network Admin.

## 🛠️ Tech Choices (Pilihan Teknologi & Alasan Teknis)

- **Astro 5:** Mengeliminasi beban JavaScript yang tidak perlu melalui _Islands Architecture_ dan SSG murni.
- **Vanilla CSS:** Memberikan kontrol penuh atas _design tokens_, efisiensi ukuran berkas, dan fleksibilitas _glassmorphism_.
- **Google Sheets API (`gviz/tq`):** Solusi _zero-cost headless CMS_ yang praktis tanpa memerlukan manajemen database SQL/NoSQL.
- **Google Fonts (DM Sans, DM Serif Display, JetBrains Mono):** Dimuat secara efisien via _preconnect_ dan _preload_ untuk mencegah kedipan font (_FOIT_).
- **Cloudflare Pages:** Platform _static edge hosting_ global dengan kecepatan distribusi konten dan keandalan tinggi.

## 🖼️ Screenshots & Visual Demo

![Tampilan Beranda Hero Section Portofolio Fatahilah](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-fatahilah/web-portfolio-fatahilah-01.webp)
*Gambar 1: Antarmuka utama beranda portofolio FATAHILAH.MR menampilkan headline spesialisasi teknis, pencapaian Juara 1 LKS 2026, dan tombol navigasi aksi.*

![Tampilan Bagian Profil & About Me](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-fatahilah/web-portfolio-fatahilah-02.webp)
*Gambar 2: Bagian profil profesional menampilkan ringkasan spesialisasi jaringan & server, foto profil resmi, serta lencana status kesiapan kerja industri.*

![Tampilan Bagian Pengalaman Kerja & Magang PKL](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-fatahilah/web-portfolio-fatahilah-03.webp)
*Gambar 3: Kartu rekam jejak pengalaman Praktik Kerja Lapangan (PKL) bidang Network & Server di UPTD BLK Kebumen serta FTTH & ISP di Fazza Computer.*

![Tampilan Grid Keahlian & Kompetensi Teknis](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-fatahilah/web-portfolio-fatahilah-04.webp)
*Gambar 4: Matriks enam pilar keahlian teknis utama meliputi Perangkat Keras & Pengkabelan, Cisco Networking, MikroTik & Wireless, Linux & Windows Server, serta AI & Web Development.*

![Tampilan Galeri Arsip Lab & Proyek Portofolio dengan Google Sheets CMS](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-fatahilah/web-portfolio-fatahilah-05.webp)
*Gambar 5: Galeri proyek interaktif terintegrasi Google Sheets Headless CMS dilengkapi penyaring kategori instan dan indikator status cache data 24 jam.*

![Tampilan Dokumen Sertifikat & Piagam Penghargaan LKS](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-fatahilah/web-portfolio-fatahilah-06.webp)
*Gambar 6: Bagian dokumentasi sertifikat menampilkan piagam penghargaan resmi Juara 1 LKS SMK Bidang IT Network System Administration 2026.*

![Tampilan Saluran Kontak Resmi & Download CV](https://cdn.fatah.web.id/portfolio/assets/projects/web-portfolio-fatahilah/web-portfolio-fatahilah-07.webp)
*Gambar 7: Bagian saluran komunikasi resmi yang menyediakan akses langsung ke WhatsApp, LinkedIn, GitHub, serta Email.*
