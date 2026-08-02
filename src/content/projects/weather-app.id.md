---
title: "Weather App — Glassmorphism & Dynamic Background"
description: "Aplikasi ramalan cuaca interaktif bertema iOS Glassmorphism dengan prakiraan dinamis, deteksi lokasi GPS, dan penyesuaian latar belakang otomatis."
status: "completed"
techStack:
  - HTML5
  - CSS3
  - JavaScript (Vanilla)
  - OpenWeatherMap API
  - Vercel
startDate: "2026-06-13"
repoUrl: "https://github.com/fatahilah-mr/learn-to-make-a-website/tree/main/02-weather-app"
demoUrl: "https://weather-app-fatahilah.vercel.app"
heroImage: "/uploads/weather-app/weather-app-1.webp"
featured: true
references:
  - title: "Dokumentasi OpenWeatherMap Current Weather Data API"
    url: "https://openweathermap.org/current"
  - title: "MDN Web Docs - Geolocation API"
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API"
---


## 📌 1. Problem (Latar Belakang & Masalah)

Aplikasi pemantau cuaca bawaan perangkat seluler sering kali memuat iklan yang mengganggu dan antarmuka yang kaku. Terdapat tiga kendala utama pada aplikasi cuaca konvensional:
- **Respon Visual Kurang Imersif:** Perubahan kondisi cuaca (hujan, cerah, berawan) tidak tercermin pada suasana visual latar belakang antarmuka secara *real-time*.
- **Pencarian Kota Rentan Error:** Pengguna yang memasukkan spasi tambahan atau format huruf tidak konsisten sering mengalami kegagalan pencarian data API.
- **Ketergantungan pada Framework Berat:** Penggunaan *framework* JavaScript besar untuk aplikasi sederhana menghasilkan *bundle size* yang memperlambat waktu muat di koneksi seluler lambat.

---

## 👤 2. Target User (Pengguna Utama)

1. **Pengguna Komuter & Traveler:** Individu yang membutuhkan informasi suhu, kelembapan, dan ramalan cuaca per 3 jam sebelum bepergian.
2. **Penggemar Desain Minimalis:** Pengguna yang menyukai antarmuka bersih bergaya *iOS Glassmorphism* tanpa gangguan iklan atau bilah navigasi kompleks.
3. **Pengembang Web Pemula:** Developer yang mempelajari integrasi Geolocation API, asynchronous JavaScript (`fetch`/`async-await`), dan pemrosesan data JSON.

---

## 💡 3. Solution (Solusi yang Ditawarkan)

Membangun aplikasi web cuaca responsif *mobile-first* berbasis **HTML5**, **CSS3**, dan **Vanilla JavaScript** tanpa dependensi *framework* eksternal. Solusi ini menghadirkan:
- **Tampilan iOS Glassmorphism:** Efek *frosted glass* modern dengan transisi latar belakang dinamis yang berubah otomatis sesuai parameter cuaca lokasi target (misal: efek petir saat badai, gradien biru saat cerah).
- **Deteksi Geolocation Instant:** Integrasi Geolocation API native browser untuk mengambil koordinat presisi pengguna dalam hitungan milidetik.
- **Prakiraan Terstruktur 5 Hari:** Menyajikan ramalan cuaca per 3 jam via *horizontal scroll container* serta ringkasan prediksi 5 hari ke depan.

---

## ⭐ 4. Key Features (Fitur-Fitur Utama)

- **🔒 Auto-Trim & Normalisasi Input:** Fitur pencarian nama kota cerah yang membersihkan spasi acak dan menangani eror kode status HTTP 404 secara ramah pengguna.
- **🤖 Automatic Dynamic Background:** Latar belakang antarmuka berubah warna dan suasana secara otomatis mengikuti *condition code* OpenWeatherMap API (Thunderstorm, Drizzle, Rain, Snow, Clear, Clouds).
- **🛡️ 1-Click GPS Location Detector:** Tombol akses cepat yang meminta izin lokasi dan langsung memuat data cuaca titik lokasi pengguna saat ini.
- **🗺️ Horizontal Scroll Forecast:** Wadah ramalan cuaca per 3 jam dengan interaksi geser horizontal (*touch-friendly*) untuk perangkat mobile.
- **📊 Indikator Atmosfer Lengkap:** Menampilkan parameter suhu saat ini, suhu terasa (*feels like*), kelembapan (*humidity*), tekanan udara, dan kecepatan angin.

---

## 🧱 5. Challenges & Lessons Learned (Tantangan Teknis & Pemecahan Masalah)

- **Tantangan 1: Penanganan Eror API Async & Penolakan Izin Lokasi GPS**
  - *Masalah:* Jika pengguna menolak akses GPS atau memasukkan nama kota yang tidak terdaftar, aplikasi mengalami *unhandled promise rejection* dan antarmuka *freeze*.
  - *Solusi:* Membungkus seluruh pemanggilan API dalam struktur `try-catch-finally`, menyajikan notifikasi banner eror yang informatif, dan menyediakan fallback kota default (*Jakarta*).
- **Tantangan 2: Optimasi Performa Glassmorphism pada Layar Seluler**
  - *Masalah:* Penggunaan properti CSS `backdrop-filter: blur()` pada banyak elemen kartu berisiko memicu *frame drop* saat *scrolling* di smartphone kelas menengah.
  - *Solusi:* Menerapkan `will-change: transform` dan membatasi lapisan *backdrop blur* hanya pada kontainer kartu utama.

---

## 📈 6. Impact (Dampak & Hasil)

- **Sebelum:** Pengguna harus menginstal aplikasi seluler berukuran besar atau membuka situs cuaca penuh iklan.
- **Sesudah:**
  - **Waktu Muat Sub-Detik:** Aplikasi memuat dalam waktu kurang dari 500ms dengan *zero framework overhead*.
  - **100% Responsif & Mobile-Optimized:** Pengalaman penggunaan yang mulus di perangkat iOS, Android, maupun peramban desktop.

---

## 🛠️ Tech Choices (Pilihan Teknologi & Alasan Teknis)

- **Vanilla JavaScript (ES6+):** Dipilih untuk menjamin ukuran berkas terkompresi yang sangat kecil dan eksekusi instan tanpa proses kompilasi kompleks.
- **OpenWeatherMap API:** Layanan API cuaca global yang andal dengan batas panggilan *free-tier* yang murah hati dan data *real-time*.
- **CSS3 Variables & Backdrop Filter:** Digunakan untuk mengelola token warna dinamis dan efek *glassmorphism* tanpa bantuan pustaka CSS eksternal.
- **Vite & Vercel Edge Network:** Pustaka penyaji dan infrastruktur *hosting edge* global untuk pengiriman aset ultra-cepat.

---

## 🖼️ Screenshots & Visual Demo

![Tampilan Utama Weather App Glassmorphism](/uploads/weather-app/weather-app-1.webp)
*Gambar 1: Antarmuka utama Weather App menampilkan efek glassmorphism, ramalan cuaca per 3 jam, dan deteksi lokasi otomatis.*
