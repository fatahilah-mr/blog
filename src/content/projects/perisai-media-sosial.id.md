---
title: "PERISAI: Portal Respons Cepat & Integrasi Sosial Temon"
description: "Platform pengaduan publik dengan triase AI Google Gemini 2.0 Flash (1-3 detik), notifikasi email instan, dan GIS peta interaktif 15 Kalurahan."
status: "completed"
techStack:
  - Next.js 16
  - TypeScript
  - Tailwind CSS
  - Supabase PostgreSQL
  - Google Gemini AI
  - Nodemailer SMTP
  - MapLibre GL
startDate: "2026-07-28"
repoUrl: "https://github.com/temonkec-cpu/Media-Sosial"
demoUrl: "https://perisai-media-sosial.vercel.app"
heroImage: "/uploads/perisai-temon-1.webp"
featured: true
references:
  - title: "Next.js 16 App Router Docs"
    url: "https://nextjs.org/docs"
  - title: "Supabase PostgreSQL & Row Level Security"
    url: "https://supabase.com/docs"
  - title: "Google Gemini 2.0 Flash API Reference"
    url: "https://ai.google.dev/docs"
  - title: "Nodemailer SMTP Architecture"
    url: "https://nodemailer.com"
---

## 📌 1. Problem (Latar Belakang & Masalah)

Kapanewon Temon menaungi 15 Kalurahan dan objek vital nasional Bandara Internasional Yogyakarta (YIA). Tingginya dinamika infrastruktur dan sosial memicu lonjakan aduan publik (jalan rusak, penerangan, drainase, hingga layanan instansi).

Sebelum platform **PERISAI** hadir, penanganan aduan menghadapi 4 masalah utama:
1. **Saluran Terfragmentasi:** Laporan warga tersebar di WhatsApp dan media sosial pribadi tanpa rekapitulasi terpusat.
2. **Triase & Balasan Manual Lambat:** Petugas Humas harus memilah puluhan laporan dan menyusun balasan birokrasi manual yang memakan waktu **24–72 jam**.
3. **Minim Transparansi:** Warga tidak memiliki sarana untuk melacak status aduan (apakah diterima, diproses, atau selesai).
4. **Celah Keamanan Database:** Sistem inventaris tanpa proteksi *Row Level Security* (RLS) rentan manipulasi data dan penghapusan akun admin.

## 👤 2. Target User (Pengguna Utama)

- **Warga Publik Kapanewon Temon:** Membutuhkan saluran pengaduan 24/7 yang cepat, transparan, dan dilengkapi nomor resi pelacakan instan via email.
- **Tim Humas & Admin Kapanewon:** Membutuhkan rekomendasi triase AI untuk mempercepat perumusan jawaban resmi beretika birokrasi *"Sedulur"*.
- **Super Admin:** Mengelola direktori pengguna dan keamanan sistem tingkat database.

## 💡 3. Solution (Solusi yang Ditawarkan)

Membangun **PERISAI** (*Portal Elektronik Respons Cepat & Integrasi Sosial Aman Inklusif*), ekosistem digital *full-stack* yang memotong rantai birokrasi aduan dari berhari-hari menjadi hitungan detik.

Pendekatan teknis utama:
- **Triase Otomatis AI Gemini 2.0 Flash:** Menganalisis kategori, sentimen, dan menyusun draf balasan resmi beretika *"Sedulur"* secara otomatis saat aduan dikirim.
- **Resi Pelacakan & Email Instan:** Menerbitkan nomor resi 12-digit (`TKT-2026-XXXX`) dan mengunduh konfirmasi otomatis ke email pelapor via Nodemailer SMTP.
- **GIS Peta Interaktif 15 Kalurahan:** Visualisasi sebaran lokasi aduan interaktif MapLibre GL dengan fitur kunci gestur seluler.
- **Arsitektur Tangguh & Aman:** Kombinasi Next.js 16 App Router, Supabase PostgreSQL, dan pengunci keamanan RLS di tingkat database.

## ⭐ 4. Key Features (Fitur-Fitur Utama)

- **📝 Formulir Publik & Rate Limiter (`/lapor`):** Validasi data pelapor 15 Kalurahan dengan proteksi *Rate Limiting* (10 request / 10 menit per IP) anti-spam.
- **🤖 AI Gemini Auto-Triage (`/api/ai/process-aduan`):** Klasifikasi sentimen, tagging 6 kategori aduan, dan pembuatan draf balasan resmi otomatis dalam 1–3 detik.
- **📧 Mesin Email Transaksional (SMTP Nodemailer):** Pengiriman email otomatis tanda terima dan pembaruan status laporan (diproses/selesai) berstandar RFC 5322.
- **🔍 Pelacak Laporan Real-Time (`/lacak`):** Pencarian *debounce* 500ms untuk mengecek progres aduan dan jawaban admin secara transparan.
- **🗺️ Dasbor Admin & Peta Terkunci (`/dashboard/reports`):** Dasbor petugas dengan *Collapsible Map Panel* agar navigasi *scroll* layar smartphone tetap mulus.
- **🛡️ Hardening Keamanan PostgreSQL RLS:** Trigger PL/pgSQL `protect_superadmin_integrity()` yang memblokir penuh mutasi/penghapusan akun Super Admin.

## 🧱 5. Challenges & Lessons Learned (Tantangan Teknis & Pemecahan Masalah)

- **Tantangan 1: Email Konfirmasi Tersasar ke Folder Spam**
  - *Masalah:* Email konfirmasi dari serverless Vercel berisiko disaring Gmail sebagai pengirim baru (*New External Sender*).
  - *Solusi:* Menggunakan koneksi SSL Port 465 `smtp.gmail.com`, menambahkan header RFC 5322 (`replyTo`, `X-Auto-Response-Suppress`), dan me-`await` SMTP sebelum pengiriman selesai.
- **Tantangan 2: Gestur Peta Mencegat Scroll layar Mobile**
  - *Masalah:* Kanvas peta interaktif mencegat usapan jari pengguna saat *scrolling* halaman dasbor di smartphone.
  - *Solusi:* Merancang *Collapsible Interactive Map Panel* terkunci secara default dengan tombol toggle `[ 🗺️ Buka Peta ]` dan `[ 🔒 Kunci Peta ]`.
- **Tantangan 3: Pemotongan Teks Banner di Layar Sedang**
  - *Masalah:* Deskripsi teks pada banner penutup peta terpotong secara vertikal di layar tablet.
  - *Solusi:* Memperbaiki pembungkus CSS dengan properti `flex-1 w-full` dan `leading-relaxed`.
- **Tantangan 4: Portabilitas Disaster Recovery VPS**
  - *Masalah:* Pengembangan pada VPS uji coba 3 bulan membutuhkan portabilitas penuh.
  - *Solusi:* Membuat *Git Release Tag* `v1.0.0-stable` dan arsip cadangan `perisai-media-sosial-FULL-BACKUP.zip` (156 MB) lengkap dengan skema SQL dan `.env`.

## 📈 6. Impact (Dampak & Hasil)

- **Sebelum:** Waktu triase dan balasan aduan memakan waktu **24–72 jam** tanpa kepastian resi pelacakan.
- **Sesudah:**
  - **Triase Instan AI:** Pemrosesan kategori dan draf balasan selesai dalam **1–3 detik**.
  - **100% Notifikasi Terkirim:** Warga menerima bukti tanda terima dan nomor resi unik instan di inbox email.
  - **Integrasi Peta & Audit Trail:** Seluruh aduan terpetakan geografis di 15 Kalurahan dengan audit log aman di Supabase.

## 🛠️ Tech Choices (Pilihan Teknologi & Alasan Teknis)

- **Next.js 16 (App Router):** Kinerja render hibrida (SSR/Client) terbaik dan integrasi serverless Vercel yang efisien.
- **Supabase PostgreSQL & RLS:** Relational database tangguh berkecepatan tinggi dengan proteksi *Row Level Security* bawaan.
- **Google Gemini 2.0 Flash:** Model AI generatif berkecepatan tinggi untuk pemrosesan teks bahasa Indonesia dan konteks lokal.
- **Nodemailer & Gmail SMTP:** Pengiriman email transaksional andal tanpa biaya API bulanan (kapasitas 500–2.000 email/hari).
- **Tailwind CSS & Material 3:** Sistem desain visual konsisten dan responsif di semua resolusi perangkat.

## 🖼️ Screenshots & Visual Demo

![Tampilan Beranda Landing Page Publik PERISAI Kapanewon Temon](/uploads/perisai-temon-1.webp)
*Gambar 1: Antarmuka utama halaman beranda PERISAI Kapanewon Temon menampilkan pengumuman resmi 24/7 dan tombol aksi utama.*

![Tampilan Formulir Pengaduan Publik](/uploads/perisai-temon-2.webp)
*Gambar 2: Formulir pengaduan publik warga pada rute `/lapor` dilengkapi bidang data pelapor, rincian aduan 15 Kalurahan, serta panduan laporan.*

![Tampilan Halaman Pelacakan Real-Time Status Aduan](/uploads/perisai-temon-3.webp)
*Gambar 3: Halaman pelacakan status aduan warga berfitur pencarian real-time menggunakan 12-digit Kode Lacak unik (`TKT-2026-XXXX`).*

![Tampilan Halaman Edukasi & Layanan Informasi Publik FAQ](/uploads/perisai-temon-4.webp)
*Gambar 4: Halaman informasi dan edukasi publik yang memuat accordion FAQ tata cara pengaduan serta keterbukaan informasi Kapanewon Temon.*

![Tampilan Dasbor Command Center Temon Admin](/uploads/perisai-temon-5.webp)
*Gambar 5: Dasbor utama Command Center Temon menampilkan statistik laporan terhubung real-time Supabase dan tabel aduan terbaru.*

![Tampilan Peta GIS Geografis 15 Kalurahan dan Pengelolaan Laporan](/uploads/perisai-temon-6.webp)
*Gambar 6: Dasbor kelola laporan warga dilengkapi peta GIS interaktif 15 Kalurahan wilayah Bandara YIA dan fitur pengunci kanvas peta.*

![Tampilan Direktori Pengguna & Manajemen Hak Akses Admin](/uploads/perisai-temon-7.webp)
*Gambar 7: Halaman manajemen direktori pengguna untuk mengelola peran administrator (Super Admin, Operator Humas, Staf Lapangan).*

![Tampilan Log Aktivitas Sistem & Audit Trail Keamanan](/uploads/perisai-temon-8.webp)
*Gambar 8: Halaman audit log aktivitas sistem merekam kronologi peristiwa real-time, autentikasi, serta tombol ekspor CSV.*
