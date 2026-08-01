---
title: "Portofolio Interaktif & Galeri Lab IT"
description: "Portofolio pribadi ultra-cepat berbasis Astro 5, Vanilla CSS, dan Google Sheets Headless CMS untuk mengarsip laboratorium IT Network, Server, dan AI."
status: "completed"
techStack:
  - Astro 5
  - Vanilla CSS
  - Google Sheets CMS
  - Cloudflare Pages
  - TypeScript
startDate: "2026-07-19"
repoUrl: "https://github.com/fatahilah-mr/portfolio"
demoUrl: "https://fatahmr.my.id"
heroImage: "https://cdn.fatahmr.my.id/portfolio/assets/pagespeedtest-18-july-2026.webp"
featured: true
references:
  - title: "Dokumentasi Resmi Astro 5"
    url: "https://docs.astro.build"
  - title: "Panduan Query Google Visualization API (gviz/tq)"
    url: "https://developers.google.com/chart/interactive/docs/dev/gviz_api_query_language"
  - title: "Dokumentasi Cloudflare Pages Deployment"
    url: "https://developers.cloudflare.com/pages/"
---

## 📌 1. Problem (Latar Belakang & Masalah)

Sebagai peraih Juara 1 LKS IT Network System Administration 2026, dokumentasi teknis laboratorium dan verifikasi kualifikasi (sertifikat, transkrip nilai, dan topologi jaringan) harus disajikan secara profesional kepada *recruiter* dan praktisi industri.

Namun, pembuatan web portofolio tradisional menghadapi 3 masalah utama:
1. **Beban CMS Tradisional:** CMS berbasis server (seperti WordPress) membutuhkan biaya hosting bulanan, perawatan database, dan rentan celah keamanan.
2. **Performa Rendah & JS Bundle Membengkak:** Framework SPA murni (React/Next.js) sering mengunduh berkas JavaScript besar yang memperlambat *page load* di perangkat seluler dan menurunkan skor SEO.
3. **Pembaruan Data yang Rumit:** Portofolio statis tanpa CMS membuat penambahan sertifikat atau proyek baru harus melalui *hardcoding* dan *re-deploy* ulang yang tidak praktis.

## 👤 2. Target User (Pengguna Utama)

- **Recruiter & HRD IT:** Membutuhkan verifikasi instan terhadap sertifikat, transkrip nilai PKL, dan kualifikasi teknis Fatahilah Miftahul Rahman.
- **Network Engineer & Tech Lead:** Ingin mengeksplorasi dokumentasi topologi jaringan (Cisco, MikroTik, Linux Debian, Windows Server) dan otomatisasi *AI Prompt Engineering*.
- **Komunitas & Pengunjung:** Membutuhkan antarmuka responsif, cepat, dwibahasa (ID/EN), dan nyaman di semua ukuran layar.

## 💡 3. Solution (Solusi yang Ditawarkan)

Membangun web portofolio generasi baru menggunakan **Astro 5** berarsitektur *Zero-JS shipped by default*, dipadukan dengan **Google Sheets** sebagai *Headless CMS* tanpa biaya.

Pendekatan teknis utama:
- **Zero-Cost Headless CMS:** Menggunakan endpoint `gviz/tq` Google Sheets API untuk menarik data proyek dan sertifikat secara dinamis dengan *cache localStorage* 24 jam.
- **SSR Static Fallback:** Menyediakan *fallback HTML* statis agar Googlebot dan mesin pencari mengindeks konten secara utuh tanpa bergantung pada JavaScript klien.
- **Vanilla CSS Design System:** Arsitektur CSS murni (*OLED Midnight & Editorial Light*) dengan animasi mikro yang aman bagi *prefers-reduced-motion*.
- **i18n Dwibahasa Instan (ID/EN):** Fitur alih bahasa tanpa *reload* halaman menggunakan pemetaan kamus terjemahan yang ringan (`FloatingLang.astro`).

## ⭐ 4. Key Features (Fitur-Fitur Utama)

- **⚡ Skor 100/100 PageSpeed:** Struktur HTML statis kompilasi Astro menghasilkan waktu muat instan dan konsumsi memori minimal.
- **📊 Integrasi Google Sheets CMS:** Pembaruan data proyek dan sertifikat cukup dengan mengedit baris tabel Google Sheets tanpa *build* ulang.
- **🌐 Alih Bahasa Dwibahasa (ID/EN):** Widget melayang untuk beralih bahasa secara instan dengan animasi transisi halus.
- **🎨 Anti-FOUC Theme Switcher:** Mode gelap/terang yang langsung membaca preferensi pengguna tanpa kedipan warna.
- **📂 Arsip Lab & Filter Kategori:** Galeri proyek dengan filter kategori instan (Cisco, MikroTik, Linux, Windows Server, AI, Web).
- **📜 Modal Viewer Sertifikat & Transkrip:** Pratinjau berkas sertifikat dan transkrip nilai langsung via *pop-up modal* atau Google Drive.
- **♿ Aksesibilitas WCAG AA:** Memenuhi standar kontras tinggi, navigasi keyboard, dan dukungan ARIA live region.

## 🧱 5. Challenges & Lessons Learned (Tantangan Teknis & Pemecahan Masalah)

- **Tantangan 1: Render Halaman Kosong di GSC (Soft 404)**
  - *Masalah:* Animasi CSS (`animation-fill-mode: both`) mengunci elemen pada `opacity: 0` saat Googlebot melakukan *Live URL Test*, memicu status *Soft 404*.
  - *Solusi:* Mengubah mode animasi ke `forwards`, menetapkan standar `opacity: 1` di HTML awal, dan menyediakan *SSR fallback cards*.
- **Tantangan 2: Optimasi API Google Sheets & Jaringan**
  - *Masalah:* Pengambilan data dari API eksternal berisiko lambat atau gagal saat koneksi seluler tidak stabil.
  - *Solusi:* Membangun sistem *caching client-side* di `localStorage` selama 24 jam lengkap dengan fitur *manual refresh* dan penanganan status *offline*.
- **Tantangan 3: Pemetaan XML Sitemap Dwibahasa**
  - *Masalah:* Generator sitemap otomatis menghasilkan *hreflang* berulang yang memicu peringatan di Google Search Console.
  - *Solusi:* Menyusun `public/sitemap.xml` statis yang presisi sesuai standar Google Search Central.

## 📈 6. Impact (Dampak & Hasil)

- **Sebelum:** Penambahan proyek/sertifikat membutuhkan pengubahan kode HTML manual dan proses *build* ulang yang memakan waktu.
- **Sesudah:**
  - Pembaruan proyek dan sertifikat selesai dalam hitungan detik via Google Sheets dari smartphone.
  - Meraih skor sempurna **100/100 di Google PageSpeed Insights** (Performance, Accessibility, Best Practices, SEO).
  - Terindeks 100% di Google Search Console tanpa error rendering atau *Soft 404*.
  - Menjadi media portofolio resmi yang memperkuat kredibilitas profesional sebagai Juara 1 LKS IT Network Admin.

## 🛠️ Tech Choices (Pilihan Teknologi & Alasan Teknis)

- **Astro 5:** Mengeliminasi beban JavaScript yang tidak perlu melalui *Islands Architecture* dan SSG murni.
- **Vanilla CSS:** Memberikan kontrol penuh atas *design tokens*, efisiensi ukuran berkas, dan fleksibilitas *glassmorphism*.
- **Google Sheets API (`gviz/tq`):** Solusi *zero-cost headless CMS* yang praktis tanpa memerlukan manajemen database SQL/NoSQL.
- **Google Fonts (DM Sans, DM Serif Display, JetBrains Mono):** Dimuat secara efisien via *preconnect* dan *preload* untuk mencegah kedipan font (*FOIT*).
- **Cloudflare Pages:** Platform *static edge hosting* global dengan kecepatan distribusi konten dan keandalan tinggi.

## 🖼️ Screenshots & Visual Demo

![Google PageSpeed Insights Perfect Score](https://cdn.fatahmr.my.id/portfolio/assets/pagespeedtest-18-july-2026.webp)
*Gambar 1: Hasil pengujian performa sempurna 100/100 di Google PageSpeed Insights.*

![Pratinjau Foto Profil & Bio About Page](https://cdn.fatahmr.my.id/portfolio/assets/profile.webp)
*Gambar 2: Identitas resmi Fatahilah Miftahul Rahman, Spesialis IT Network System Administration & Web Development.*
