---
title: "PERISAI AYOM TEMON"
description: "Platform digital pengaduan anonim & penanganan cepat kekerasan perempuan dan anak (PPA) Kapanewon Temon berbasis PWA, AI Triage, dan Leaflet GIS."
status: "completed"
techStack:
  - Next.js 16 (App Router)
  - TypeScript
  - Supabase (PostgreSQL & Realtime)
  - Tailwind CSS 4
  - Leaflet GIS Engine
  - Google Gemini 2.5 Flash
  - Resend Email API
  - Cloudflare Turnstile
startDate: "2026-08-01"
repoUrl: "https://github.com/temonkec-cpu/AYOM-TEMON"
demoUrl: "https://ayom-temon.vercel.app"
heroImage: "https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-01.webp"
featured: true
references:
  - title: "Undang-Undang No. 12 Tahun 2022 tentang Tindak Pidana Kekerasan Seksual (UU TPKS)"
    url: "https://peraturan.go.id/id/uu-no-12-tahun-2022"
  - title: "Layanan Hotline SAPA 129 KPPPA Republik Indonesia"
    url: "https://kpppa.go.id"
  - title: "Dokumentasi Supabase Realtime & PostgreSQL RLS"
    url: "https://supabase.com/docs"
  - title: "Dokumentasi Next.js 16 App Router & Server Actions"
    url: "https://nextjs.org/docs"
---

## 📌 1. Problem (Latar Belakang & Masalah)

Kekerasan terhadap perempuan dan anak (PPA) merupakan salah satu isu sosial yang krusial namun sering kali berada di bawah bayang-bayang ketakutan dan bungkamnya korban (*underreported cases*). Di wilayah **Kapanewon Temon, Kabupaten Kulon Progo** (yang membawahi 15 Kalurahan), korban atau saksi sering mengalami kendala dan hambatan psikologis dalam melaporkan kasus kekerasan:

1. **Rasa Takut Ancaman & Bocornya Identitas:** Korban kerap enggan melapor karena takut identitas pribadinya ketahui oleh pelaku (*perpetrator*) atau masyarakat umum.
2. **Bahaya Jejak Digital pada HP Korban:** Pada banyak kasus Kekerasan Dalam Rumah Tangga (KDRT), HP korban berada di bawah pengawasan atau pemeriksaan rutin oleh pelaku. Adanya notifikasi email konfirmasi atau SMS balasan otomatis justru akan menempatkan korban dalam bahaya fisik yang fatal.
3. **Kepanikan saat Situasi Darurat:** Ketika insiden kekerasan terjadi secara mendadak, korban yang berada dalam posisi panik dan terancam tidak memiliki waktu atau kemampuan kognitif untuk mengisikan formulir pengaduan yang panjang dan rumit.
4. **Keterbatasan Alat Respon Cepat Petugas Satgas:** Petugas Satgas PPA di tingkat Kapanewon memerlukan sistem pemantauan terpusat (*Command Center*) yang dapat mengklasifikasikan tingkat urgensi kasus secara otomatis (mana yang perlu penanganan instant darurat 24 jam vs tindakan lanjutan biasa), memetakan lokasi sebaran kasus di 15 Kalurahan, serta menyediakan transparansi pelacakan tanpa mengurangi privasi korban.

---

## 👤 2. Target User (Pengguna Utama)

Sistem **PERISAI AYOM TEMON** dirancang untuk melayani 3 segmen pengguna utama dengan kebutuhan yang berbeda:

1. **Korban & Saksi Kekerasan (Masyarakat Umum se-Kapanewon Temon):**
   - Warga dari 15 Kalurahan (Glagah, Palihan, Janten, Kebonrejo, Temon Kulon, Temon Wetan, Kulur, Kaligintung, Plumbon, Kedundang, Sindutan, Jangkaran, Karangwuni, Demangrejo, dan Kaliidake).
   - Membutuhkan saluran pelaporan anonim 100%, bebas jejak digital, ramah pengguna awam/gaptek, serta fitur tombol darurat 1-klik saat terdesak.

2. **Petugas Satgas PPA Kapanewon Temon & Pemerintah Kapanewon:**
   - Tim lapangan dan administrator yang bertanggung jawab memverifikasi aduan, menindaklanjuti laporan darurat, berkoordinasi dengan Polsek/Puskesmas/Mitra Rujukan, serta mencatat *audit trail* penanganan kasus.

3. **Super Admin & Pengembang Sistem:**
   - Pengelola hak akses peran (RBAC), pengatur notifikasi email alert petugas, serta pengelola integrasi database Supabase dan AI Triage.

---

## 💡 3. Solution (Solusi yang Ditawarkan)

**PERISAI AYOM TEMON** (*Aplikasi Yakin Operasional & Mentoring Perlindungan Perempuan & Anak*) menghadirkan solusi teknologi terpadu yang memadukan prinsip ***Victim-Centered Approach***, keandalan PWA offline, kecerdasan buatan (AI Triage), dan sistem pemantauan geografis (GIS) interaktif:

- **Arsitektur Zero-Victim Email & Pelaporan Anonim 100%:** Korban dapat melapor tanpa wajib mencantumkan nama lengkap, NIK, atau kontak pribadi. Sistem diatur secara ketat untuk **TIDAK PERNAH mengirimkan email balasan/notifikasi ke HP pelapor**, mencegah terdeteksinya jejak digital oleh pelaku.
- **PWA Panic Button SOS 1-Klik & Pre-Save Profil Safe Local:** Korban dapat menyimpan profil darurat secara 100% lokal di `localStorage` HP korban (Zero-Server Storage). Saat bahaya mengancam, korban cukup menekan 1 tombol merah SOS di PWA untuk mengirimkan sinyal darurat beserta lokasi GPS real-time.
- **Double-Bezel Safety & Quick Exit (ESC):** Tombol mengambang *"KABUR CEPAT (ESC)"* yang seketika mengalihkan layar ke pencarian Google dan membersihkan riwayat navigasi saat korban berada dalam pengawasan.
- **Triase Otomatis berbasis AI Gemini:** Menggunakan kecerdasan buatan untuk menguji kronologi aduan, memberikan rekomendasi urgensi, indikator risiko, dan panduan tindakan awal bagi petugas Satgas.
- **Command Center Dashboard Satgas PPA:** Antarmuka pemantauan dengan *Dual-View Switcher* (Kanban Board Drag & Drop dan Tabel Interaktif 23 Kolom), Peta GIS Leaflet dengan fitur *Live Search* dan *Auto FlyTo Zoom-In* ke koordinat GPS aduan.

---

## ⭐ 4. Key Features (Fitur-Fitur Utama)

- **🚨 PWA-Ready 1-Click SOS Panic Button:** Tombol tanggap darurat 1-tap yang dapat diakses dari Web App Shortcut Home Screen HP korban. Mengirimkan koordinat GPS presisi dan label kontak darurat (`0812... (pribadi), 0898... (darurat kerabat)`) secara instan.
- **🛡️ Local Pre-Save Profile Safe (`PreSaveProfileModal.tsx`):** Pengisian data diri darurat yang disimpan aman di memori lokal HP korban tanpa tersimpan di server sebelum tombol Panic Button benar-benar ditekan.
- **🔍 Pelacakan Status Transparan via Kode Tracking & PIN 6-Digit:** Warga dapat memantau proses tindak lanjut aduan secara anonim cukup dengan memasukkan Kode Tracking (`AYOM-2026-XXXX`) dan PIN acak 6-digit yang diberikan sistem saat laporan pertama kali dibuat.
- **🗺️ Peta Sebaran GIS Leaflet dengan Live Search & Auto Zoom-In:** Peta interaktif 15 Kalurahan Kapanewon Temon dilengkapi *Live Search Bar* (Tracking ID, Nama, Kalurahan), algoritma *Spiral Coordinate Offset* untuk mencegah penumpukan pin lokasi, serta animasi **`map.flyTo` Smooth Zoom-In (Level 16)** & *Auto Popup Open* ketika mencari aduan spesifik.
- **📋 Dual-View Command Center (Kanban Board & Tabel Data 23 Kolom):** Admin dapat mengelola status aduan (*Menunggu*, *Diproses*, *Selesai*, *Ditolak*) dengan fitur *Drag & Drop* Kanban, filter rentang tanggal, saklar notifikasi email alert petugas, serta ekspor laporan lengkap 23 kolom ke format CSV.
- **🔴 Kartu Statistik Darurat Aktif:** Kartu statistik pintar yang hanya menghitung aduan ber-urgensi `DARURAT` yang masih memerlukan penanganan aktif (aduan darurat yang sudah berstatus `Selesai` otomatis dikecualikan dari hitungan darurat).
- **🔒 Keamanan Berlapis & Anti-Spam (Turnstile + Rate Limiting):** Dilengkapi verifikasi Cloudflare Turnstile anti-bot, in-memory rate limiting pada API server actions, serta enkripsi SSL/TLS PostgreSQL Row Level Security (RLS) Supabase.
- **🎨 Design System PERISAI Modern:** Mengadopsi palet warna acuan resmi Brief Desain Logo PERISAI Modern (*Teal Dark* `#32848D`, *Teal Medium* `#619892`, *Sage Green* `#93B39D`, *Light Olive* `#B0C99E`, *Soft Lime* `#CBDCA5`, *Off White* `#F6FAF5`) serta gambar logo vektor asli `favicon.svg`.

---

## 🧱 5. Challenges & Lessons Learned (Tantangan Teknis & Pemecahan Masalah)

- **Tantangan 1: Perlindungan Privasi Korban & Kebocoran Jejak Digital HP Korban.**
  - *Kendala:* Mengirimkan email konfirmasi atau notifikasi push tradisional ke perangkat pelapor akan meninggalkan jejak digital yang sangat berbahaya jika HP korban diperiksa oleh pelaku KDRT.
  - *Solusi:* Menerapkan prinsip *Zero-Victim Email Architecture*. Email notifikasi instan hanya dikirimkan ke alamat email resmi Petugas Satgas (`OFFICER_EMAIL`), sedangkan di sisi pelapor hanya diberikan Kode Tracking ID & PIN 6-digit di layar untuk dicatat/disimpan secara mandiri.

- **Tantangan 2: Overlapping Marker Koordinat di Peta GIS.**
  - *Kendala:* Ketika multiple laporan dibuat dari Kalurahan yang sama (atau laporan tanpa izin GPS yang jatuh di koordinat acuan Kalurahan), ikon pin Leaflet menumpuk tepat di piksel yang sama persis sehingga pin aduan baru tertutup oleh pin aduan lama.
  - *Solusi:* Mengembangkan algoritma *Spiral Coordinate Offset/Jitter* di komponen `TemonMapLeaflet.tsx`. Jika terdeteksi koordinat yang sama (hingga 4 desimal), titik lokasi aduan kedua dan seterusnya otomatis digeser secara melingkar/spiral sehingga 100% pin aduan tetap terlihat dan dapat diklik oleh petugas.

- **Tantangan 3: Navigasi Cepat Petugas Mencari Lokasi Kasus Spesifik di Peta.**
  - *Kendala:* Petugas kesulitan menemukan titik lokasi dari kode aduan tertentu di antara belasan pin yang tersebar di peta 15 Kalurahan.
  - *Solusi:* Mengintegrasikan *Live Search Bar* pada kartu peta dan menghubungkannya dengan event Leaflet `map.flyTo()`. Begitu petugas mengetikkan Tracking ID spesifik (contoh: `AYOM-2026-9X2K`), kamera peta akan meluncur secara halus (*smooth animation*), melakukan *zoom-in* ke level 16, dan otomatis membuka *Popup Window* detail aduan beserta tombol tindakan cepat.

- **Tantangan 4: Kecepatan Pengisian Form saat Situasi Bahaya Terdesak.**
  - *Kendala:* Korban yang dalam ancaman fisik tidak sempat mengisi 10+ kolom formulir pelaporan.
  - *Solusi:* Membangun sistem *Pre-Save Profile* lokal (`PreSaveProfileModal.tsx`) dan *PWA Panic Button SOS* 1-klik (`PanicButtonModal.tsx`). Korban dapat melengkapi profil dalam keadaan aman, dan saat situasi darurat cukup menekan 1 tombol untuk mengirim aduan lengkap beserta koordinat GPS real-time.

---

## 📈 6. Impact (Dampak & Hasil)

- **Sebelum Diterapkan:**
  - Warga enggan melapor karena takut identitasnya bocor atau kebingungan mengenai prosedur aduan.
  - Penanganan kasus kekerasan tertahan oleh proses birokrasi manual dan komunikasi WhatsApp yang tidak terstruktur.
  - Petugas Satgas kesulitan memetakan sebaran kasus di 15 Kalurahan Kapanewon Temon secara spasial.

- **Sesudah Diterapkan:**
  - **100% Perlindungan Privasi:** Korban dapat melapor secara anonim tanpa jejak digital di perangkat pribadi.
  - **Respon Cepat 1-Klik:** Aduan darurat dapat dikirimkan dalam kurun waktu kurang dari 3 detik melalui Panic Button SOS PWA.
  - **Efisiensi Kerja Satgas PPA:** Pemantauan terpusat via Command Center (Kanban Board + Peta GIS Live Search) memangkas waktu koordinasi penanganan kasus antara Satgas Kapanewon, Polsek, dan Puskesmas.
  - **Dokumentasi Terstruktur:** Seluruh data kasus terdokumentasi rapi dalam database Supabase dengan 23 parameter lengkap yang siap diekspor ke format CSV untuk pelaporan berkala ke Dinas PMD Dalduk KB Kabupaten Kulon Progo.

---

## 🛠️ Tech Choices (Pilihan Teknologi & Alasan Teknis)

- **Next.js 16 (App Router) & React 19:**
  - *Alasan:* Memberikan performa Server Components yang sangat cepat, keamanan Server Actions untuk proses mutasi data tanpa mengekspos endpoint API sensitif, serta dukungan rendering PWA yang optimal.
- **Supabase (PostgreSQL, Auth, & Realtime Engine):**
  - *Alasan:* Menyediakan basis data PostgreSQL yang andal, fiturnya *Row Level Security* (RLS) menjamin keamanan data aduan, serta *Supabase Realtime Channel* memungkinkan Peta GIS & Kanban Board ter-update secara otomatis instan (0 detik) saat ada laporan baru masuk.
- **Google Gemini 2.5 Flash (via Portkey AI / Native Client):**
  - *Alasan:* Model LLM yang sangat cepat dan akurat dalam melakukan analisis teks bahasa Indonesia untuk menentukan klasifikasi urgensi, analisis faktor risiko, dan rekomendasi langkah awal penanganan bagi petugas.
- **Leaflet Engine & OpenStreetMap:**
  - *Alasan:* Library peta GIS yang sangat ringan, open-source, fleksibel untuk pemetaan titik koordinat kustom, serta tidak memerlukan biaya lisensi API peta berbayar.
- **Tailwind CSS 4 & Vanilla CSS Design System:**
  - *Alasan:* Memungkinkan kustomisasi skema warna PERISAI Modern (*Teal Dark*, *Teal Medium*, *Sage Green*, *Off White*) secara presisi, ringan tanpa overhead runtime CSS-in-JS, serta mendukung mikro-animasi GPU-accelerated yang mulus.
- **Resend Email API:**
  - *Alasan:* Layanan pengiriman email transaksional dengan tingkat *deliverability* sangat tinggi untuk memastikan email notifikasi aduan darurat langsung masuk ke kotak masuk (*inbox*) petugas Satgas tanpa tertahan di folder spam.
- **Cloudflare Turnstile:**
  - *Alasan:* Solusi verifikasi keamanan anti-bot yang bebas hambatan (*frictionless captcha*), menjaga agar formulir tidak disalahgunakan oleh bot/spam tanpa menyulitkan korban yang sedang dalam kondisi panik.

---

## 🖼️ Screenshots & Visual Demo

![Antarmuka Utama Beranda Publik PERISAI AYOM TEMON](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-01.webp)
*Gambar 1: Antarmuka utama beranda publik PERISAI AYOM TEMON menampilkan jaminan privasi Safety-First UX, hotline darurat 24 jam, dan tombol Kabur Cepat (ESC).*

![Formulir Pengaduan Anonim PPA & SOS Darurat 1-Klik](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-02.webp)
*Gambar 2: Formulir pengaduan anonim pada rute `/lapor` dilengkapi banner SOS Darurat 1-Klik, deteksi otomatis titik GPS presisi 15 Kalurahan, dan proteksi bebas jejak digital.*

![Portal Pelacakan Progres Status Aduan Anonim Terenkripsi](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-03.webp)
*Gambar 3: Halaman pelacakan progres aduan anonim terenkripsi menggunakan Kode Tracking ID (`AYOM-2026-XXXX`) dan PIN rahasia 4-digit.*

![Halaman Edukasi Hak Korban & Panduan Keselamatan Digital](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-04.webp)
*Gambar 4: Halaman edukasi literasi hukum UU TPKS No. 12/2022, hak pemulihan korban, dan panduan mitigasi keamanan perangkat seluler.*

![Portal Otentikasi Login Petugas Satgas PPA](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-05.webp)
*Gambar 5: Portal otentikasi login khusus petugas Satgas PPA Kapanewon Temon terintegrasi Supabase Auth Google OAuth SSO.*

![Dasbor Utama Command Center Satgas PPA](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-06.webp)
*Gambar 6: Dasbor utama Command Center Satgas PPA menampilkan statistik Bento Grid realtime Supabase, saklar notifikasi email Resend API, dan peta GIS 15 Kalurahan.*

![Manajemen Aduan Warga Tampilan Kanban Board](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-07.webp)
*Gambar 7: Tampilan Kanban Board manajemen aduan warga dilengkapi filter urgensi & rentang tanggal, indikator rujukan (Medis, Hukum, Rumah Aman), dan pemindahan status interaktif.*

![Manajemen Aduan Warga Tampilan Tabel Data & Ringkasan Gemini AI](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-08.webp)
*Gambar 8: Tampilan Tabel Data aduan warga menampilkan ringkasan kronologi otomatis oleh Gemini AI, status penanganan, dan fitur ekspor CSV.*

![Direktori Pengguna & Manajemen Hak Akses RBAC 3-Tier](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-09.webp)
*Gambar 9: Halaman direktori pengguna menampilkan panduan hak akses RBAC 3-Tier (Super Admin, Operator Humas, Staf Lapangan Read-Only) dan manajemen akun petugas.*

![Log Aktivitas Sistem & Audit Trail Keamanan Realtime](https://cdn.fatah.web.id/portfolio/assets/projects/web-ayom-temon/web-ayom-temon-10.webp)
*Gambar 10: Halaman log aktivitas sistem merekam kronologi tindakan administrator secara realtime dilengkapi filter keparahan dan ekspor CSV.*
