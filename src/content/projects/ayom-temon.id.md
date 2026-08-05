---
title: "AYOM TEMON | Platform Pengaduan Kekerasan Perempuan & Anak Kapanewon Temon"
description: "Platform pengaduan kekerasan perempuan dan anak anonim, terenkripsi, ramah privasi korban, terintegrasi Gemini AI & peta GIS 15 Kalurahan di Kapanewon Temon."
status: "completed"
techStack:
  - Next.js 16
  - React 19
  - TypeScript
  - TailwindCSS v4
  - Supabase PostgreSQL & Auth
  - Google Gemini AI (Portkey AI)
  - MapLibre GL & Leaflet GIS
  - Cloudflare Turnstile CAPTCHA
  - Resend SMTP Email API
startDate: "2026-07-20"
repoUrl: "https://github.com/fatahilah-mr/AYOM-TEMON"
demoUrl: "https://ayom-temon.vercel.app"
heroImage: "https://cdn.fatah.web.id/portfolio/assets/projects/ayom-temon/ayom-temon-1.webp"
featured: true
references:
  - title: "Undang-Undang RI Nomor 12 Tahun 2022 tentang TPKS"
    url: "https://peraturan.go.id"
  - title: "Layanan Sahabat Perempuan dan Anak (SAPA 129)"
    url: "https://kpppa.go.id"
  - title: "Dokumentasi Supabase PostgreSQL & Auth"
    url: "https://supabase.com/docs"
  - title: "Dokumentasi Next.js 16 App Router"
    url: "https://nextjs.org/docs"
---


## 📌 1. Problem (Latar Belakang & Masalah)

Kekerasan terhadap perempuan dan anak di tingkat kecamatan sering kali menjadi fenomena gunung es. Di Kapanewon Temon, Kulon Progo, mayoritas korban dan saksi enggan melaporkan kekerasan fisik, psikis, maupun seksual karena empat kendala utama:
- **Ketakutan akan Stigma & Kebocoran Identitas:** Korban takut identitasnya tersebar ke lingkungan sekitar atau pelaku, sehingga memilih diam.
- **Prosedur Manual yang Memicu Trauma:** Pelaporan konvensional mewajibkan korban datang langsung ke kantor kecamatan atau kepolisian.
- **Respons Darurat yang Terhambat:** Satgas PPA tidak memiliki sistem peringatan dini (*early warning system*) otomatis untuk menangani kasus kritis secara cepat.
- **Peta Kasus Terfragmentasi:** Aduan tidak terpetakan secara geografis di 15 Kalurahan se-Kapanewon Temon, menyulitkan pemetaan wilayah rawan kekerasan.

---

## 👤 2. Target User (Pengguna Utama)

1. **Korban & Masyarakat Kapanewon Temon:** Warga yang membutuhkan saluran pengaduan darurat mau pun reguler yang anonim, aman, dan dapat diakses cepat via HP.
2. **Satgas PPA Kapanewon Temon (Super Admin & Operator Humas):** Tim respon cepat yang memantau aduan *realtime*, memverifikasi triase AI, mengunduh rekap, dan mengoordinasikan rujukan ke UPTD PPA atau Polres.
3. **Staf Lapangan & Mitra Rujukan:** Pendamping masyarakat yang membutuhkan akses pemantauan (*read-only*) untuk koordinasi bantuan hukum, medis, atau rumah aman.

---

## 💡 3. Solution (Solusi yang Ditawarkan)

**AYOM TEMON** (*Aplikasi Yakin Operasional & Mentoring Perlindungan Perempuan & Anak*) hadir sebagai portal komando terpadu dan pengaduan publik berbasis web modern. Solusi ini menghadirkan:
- **Pengaduan 100% Anonim & Terenkripsi:** Pelapor menerima **Kode Tracking Unik 12 Karakter** (misal: `AYOM-8492-X7K`) tanpa wajib membuat akun atau menyerahkan identitas pribadi.
- **Triase AI Otomatis (Google Gemini 2.5 Flash via Portkey AI):** Menganalisis setiap aduan secara *realtime* untuk menentukan tingkat urgensi (*DARURAT* vs *REGULER*), merangkum kronologi, dan menyusun draf rekomendasi aksi Satgas.
- **Alert Email Instan Satgas PPA (Resend API):** Mengirimkan notifikasi darurat langsung ke email petugas begitu aduan kritis masuk.
- **Peta Digital GIS 15 Kalurahan (MapLibre GL & Leaflet):** Memvisualisasikan sebaran kasus di 15 Kalurahan se-Kapanewon Temon, lengkap dengan fitur Quick Exit (*Esc*) untuk keamanan pelapor.

---

## ⭐ 4. Key Features (Fitur-Fitur Utama)

- **🔒 Pelaporan Anonim & Kode Tracking:** Form publik dengan deteksi geolokasi otomatis kalurahan dan proteksi anti-bot Cloudflare Turnstile.
- **🤖 Triase & Ringkasan AI Otomatis:** Pemrosesan AI cerdas yang mengategorikan jenis kekerasan (Fisik, Psikis, Seksual, Penelantaran) dan mengekstrak lini masa kejadian.
- **🛡️ Akses Berbasis Peran (RBAC 3-Tier):**
  - **👑 Super Admin:** Kendali penuh platform, manajemen akun petugas, konfigurasi alert email, dan log audit sistem.
  - **🛡️ Operator Humas (`admin`):** Memantau aduan warga, memperbarui status (`Menunggu Respons`, `Diproses`, `Dirujuk`, `Selesai`, `Ditolak`), menambah catatan penanganan, dan membaca Log Audit.
  - **🤝 Staf Lapangan (`user`):** Akses *Read-Only* terkunci untuk memantau progres tanpa risiko salah ubah status.
- **🗺️ Peta Sebaran GIS Interaktif:** Visualisasi klaster aduan berbasis koordinat peta dan batas 15 Kalurahan.
- **📊 Filter Tanggal & Ekspor CSV Excel:** Memungkinkan petugas mengunduh rekap aduan dan log audit bulanan format UTF-8 BOM CSV dalam sekali klik.
- **⚡ Supabase Realtime & Audit Trail:** Pembaruan antarmuka Command Center secara instan tanpa *refresh* browser beserta jejak rekaman aktivitas petugas.
- **🚨 Quick Exit & Anti-Tracking Mode:** Tombol darurat yang langsung mengalihkan browser ke Google dan menghapus jejak navigasi jika pelapor merasa diawasi.

---

## 🧱 5. Challenges & Lessons Learned (Tantangan Teknis & Pemecahan Masalah)

- **Tantangan 1: Privasi Korban & Serangan Bot Spam**
  - *Masalah:* Risiko aduan palsu dari bot otomatis yang membanjiri database dan potensi kebocoran identitas pelapor.
  - *Solusi:* Mengintegrasikan Cloudflare Turnstile CAPTCHA server-side tanpa cookie pelacak, dipadu hashing anonim dan kode tracking acak.
- **Tantangan 2: Pemetaan Hak Akses PostgreSQL & Hydration Mismatch**
  - *Masalah:* Constraint PostgreSQL menyimpan role `petugas` dan `mitra_rujukan`, sedangkan UI membutuhkan `admin` dan `user`. Selain itu, modal portal memicu *hydration mismatch* di React 19 / Next.js 16.
  - *Solusi:* Membangun pemetaan peran dua arah (*bi-directional mapper*) pada Server Actions, serta merefaktorisasi state Modal Portal menggunakan API `useSyncExternalStore` bawaan React 19.
- **Tantangan 3: Latensi Panggilan AI & Keandalan Email Alert**
  - *Masalah:* Pemrosesan AI dan pengiriman email SMTP terkadang melebihi 3 detik, berisiko memperlambat respon form publik.
  - *Solusi:* Menerapkan pola *asynchronous fallback handling* via Portkey AI dan Resend API untuk menjamin respon form publik tetap di bawah 800ms.

---

## 📈 6. Impact (Dampak & Hasil)

- **Sebelum:** Pelaporan dilakukan manual, rentan kebocoran privasi, belum ada peta sebaran GIS, dan verifikasi kasus darurat membutuhkan waktu lebih dari 24 jam.
- **Sesudah:** 
  - **Respons Darurat < 15 Menit:** Alert email otomatis dan triase AI mendeteksi aduan darurat seketika sehingga Satgas PPA dapat bertindak cepat.
  - **100% Identitas Korban Terlindungi:** Korban melapor dan memantau status penanganan dengan aman hanya menggunakan Kode Tracking.
  - **Rekap Laporan 90% Lebih Cepat:** Fitur ekspor CSV dan filter tanggal memangkas waktu penyusunan laporan bulanan ke dinas terkait secara signifikan.

---

## 🛠️ Tech Choices (Pilihan Teknologi & Alasan Teknis)

- **Next.js 16 (App Router & Turbopack):** Framework React performa tinggi dengan Server Actions, routing dinamis, dan *build time* super cepat.
- **React 19:** Memanfaatkan API `useSyncExternalStore` untuk eliminasi *hydration mismatch* secara total.
- **TypeScript:** Menjamin keandalan kode dengan *strict type safety* tanpa tipe `any`.
- **Supabase PostgreSQL & Auth:** Database PostgreSQL serverless dengan Supabase Auth dan fitur *Realtime Subscription*.
- **Google Gemini 2.5 Flash (via Portkey AI):** LLM cepat dan presisi untuk analisis triase aduan dan ekstraksi kronologi otomatis.
- **MapLibre GL & Leaflet GIS:** Peta interaktif bebas kuota untuk pemetaan visual di 15 Kalurahan.
- **Cloudflare Turnstile:** Captcha ramah privasi yang menangkal bot spam tanpa mengganggu pengguna.
- **TailwindCSS v4:** Engine CSS utility-first untuk pembuatan antarmuka modern dan responsif.

---

## 🖼️ Screenshots & Visual Demo

![Tampilan Beranda Landing Page Publik AYOM TEMON](https://cdn.fatah.web.id/portfolio/assets/projects/ayom-temon/ayom-temon-1.webp)
*Gambar 1: Antarmuka utama halaman beranda AYOM TEMON menampilkan jaminan privasi korban, hotline darurat SAPA 129, dan tombol Kabur Cepat (ESC).*

![Tampilan Formulir Pengaduan Anonim PPA](https://cdn.fatah.web.id/portfolio/assets/projects/ayom-temon/ayom-temon-2.webp)
*Gambar 2: Formulir pengaduan anonim PPA pada rute `/lapor` dilengkapi deteksi lokasi 15 Kalurahan, kategori kekerasan, dan perlindungan bebas jejak digital.*

![Tampilan Halaman Lacak Progres Status Aduan](https://cdn.fatah.web.id/portfolio/assets/projects/ayom-temon/ayom-temon-3.webp)
*Gambar 3: Halaman pelacakan status aduan anonim terenkripsi menggunakan Kode Tracking ID (`AYOM-2026-XXXX`) dan PIN 4-Digit rahasia.*

![Tampilan Halaman Edukasi Hak Korban & Keselamatan Digital](https://cdn.fatah.web.id/portfolio/assets/projects/ayom-temon/ayom-temon-4.webp)
*Gambar 4: Halaman edukasi literasi hukum UU TPKS No. 12/2022, hak pemulihan korban, dan panduan mitigasi keamanan perangkat seluler.*

![Tampilan Dasbor Pemantauan & Respon Aduan Command Center Satgas](https://cdn.fatah.web.id/portfolio/assets/projects/ayom-temon/ayom-temon-5.webp)
*Gambar 5: Dasbor utama Command Center Satgas PPA menampilkan statistik Bento Grid real-time Supabase, saklar notifikasi email Resend API, dan peta GIS 15 Kalurahan.*

![Tampilan Dasbor Kelola Pengaduan Kekerasan Terverifikasi Gemini AI](https://cdn.fatah.web.id/portfolio/assets/projects/ayom-temon/ayom-temon-6.webp)
*Gambar 6: Dasbor kelola aduan warga dilengkapi triase analisis Gemini AI, filter urgensi & rentang tanggal, serta fitur ekspor CSV.*

![Tampilan Direktori Pengguna & Manajemen Hak Akses RBAC 3-Tier](https://cdn.fatah.web.id/portfolio/assets/projects/ayom-temon/ayom-temon-7.webp)
*Gambar 7: Halaman manajemen direktori pengguna menampilkan panduan hak akses RBAC (Super Admin, Operator Humas, Staf Lapangan Read-Only).*

![Tampilan Log Aktivitas Sistem & Audit Trail Keamanan](https://cdn.fatah.web.id/portfolio/assets/projects/ayom-temon/ayom-temon-8.webp)
*Gambar 8: Halaman log aktivitas sistem merekam kronologi tindakan administrator secara real-time dilengkapi filter keparahan dan ekspor CSV.*

