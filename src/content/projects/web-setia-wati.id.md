---
title: "Portofolio Setia Wati (Kwettiau)"
description: "Website portofolio interaktif dan estetik bertema pink pastel untuk Setia Wati, dirancang menggunakan React 19, Vite, TypeScript, dan Motion."
status: "completed"
techStack:
  - React 19
  - Vite
  - TypeScript
  - Motion
  - Tailwind CSS
  - Lucide React
startDate: "2026-06-30"
repoUrl: "https://github.com/fatahilah-mr/web-setia-wati"
demoUrl: "https://kwettiau.fatah.web.id"
heroImage: "/uploads/setia-wati-portfolio.jpg"
featured: true
references:
  - title: "Dokumentasi Resmi React"
    url: "https://react.dev"
  - title: "Dokumentasi Resmi Vite"
    url: "https://vitejs.dev"
  - title: "Dokumentasi Motion"
    url: "https://motion.dev"
---


## 📌 1. Problem (Latar Belakang & Masalah)

Setia Wati (Kwettiau), lulusan Teknik Komputer dan Jaringan (TKJ) SMK Patriot Pituruh, membutuhkan media *personal branding* digital untuk merepresentasikan identitas uniknya. Portofolio IT konvensional umumnya menghadapi tiga kendala utama:
- **Tampilan Kaku & Monokrom:** Didominasi warna gelap dan baris kode tanpa merefleksikan karakter personal pemiliknya.
- **Profil Terpisah:** Tidak mampu memadukan keahlian teknis jaringan (TKJ) dengan minat kreatif seperti penulisan jurnal fiksi, seni kuliner, dan musik favorit (NCT Dream).
- **Kurang Interaktif:** Tidak memiliki elemen interaksi modern yang berkesan bagi pengunjung atau rekruiter.

---

## 👤 2. Target User (Pengguna Utama)

1. **Rekruiter & Mitra Industri:** Perusahaan, sekolah, atau instansi yang mengevaluasi profil, riwayat pendidikan, dan kompetensi teknis TKJ Setia Wati.
2. **Pengunjung & Komunitas:** Rekan sebayanya yang ingin mengenal profil personal, motivasi hidup, karya tulisan, dan *playlist* musik favorit.
3. **Klien & Tim Kolaborasi:** Pihak yang membutuhkan kolaborasi di bidang layanan jaringan dasar, desain visual, atau proyek kreatif.

---

## 💡 3. Solution (Solusi yang Ditawarkan)

Membangun web portofolio *Single Page Application* (SPA) berbasis **React 19** dan **Vite** bertema *Pink Pastel Glassmorphism*. Solusi ini menghadirkan:
- **Estetika Visual Berkarakter:** Paduan warna *soft pink pastel* dan efek *glassmorphism* modern yang hangat dan ramah pengguna.
- **Interaktivitas UI Tinggi:** Efek *3D Mouse Tilt Parallax* pada kartu favorit, animasi halus via **Motion**, serta widget pemutar musik interaktif.
- **Modul Kontak Instan:** Modal formulir surat yang mendeteksi input pengunjung dan menggenerasi URI `mailto:` tanpa memerlukan backend server yang rumit.

---

## ⭐ 4. Key Features (Fitur-Fitur Utama)

- **🔒 3D Card Tilt Parallax Effect:** Efek visual responsif 3 dimensi pada kartu idola yang bergerak dinamis mengikuti kursor pengguna.
- **🤖 Smart Scroll-Spy Header:** Header pintar yang menyembunyikan diri saat *scroll* ke bawah dan muncul saat *scroll* ke atas, lengkap dengan pelacak seksi aktif.
- **🛡️ Lazy Loaded Image & Shimmer Skeleton:** Komponen `LazyImage` khusus yang menyajikan animasi *shimmering* saat gambar dimuat untuk kenyamanan UX maksimal.
- **🗺️ Interactive Playlist & Like System:** Widget pemutar musik favorit dengan saklar sukai (*like/dislike*) yang mengubah status UI secara *real-time*.
- **📊 Interactive Email Modal:** Popup dialog surat interaktif yang memungkinkan pengunjung mengirim email langsung via *mail client* bawaan.
- **⚡ Profil Biodata & Showcase Keahlian TKJ:** Visualisasi data diri dan badge keahlian teknis (*Networking Setup*, *Cisco Packet Tracer*, *Hardware Troubleshooting*).

---

## 🧱 5. Challenges & Lessons Learned (Tantangan Teknis & Pemecahan Masalah)

- **Tantangan 1: Manipulasi Transformasi 3D & Performa Scroll Mobile**
  - *Masalah:* Manipulasi transformasi 3D dan animasi *scroll* berisiko memicu *layout thrashing* dan penurunan *frame rate* di perangkat mobile.
  - *Solusi:* Mengoptimalkan CSS via `will-change: transform, box-shadow`, transisi `cubic-bezier(0.16, 1, 0.3, 1)`, dan opsi `{ passive: true }` pada *event listener scroll*.
- **Tantangan 2: Pengelolaan State SPA yang Kompleks**
  - *Masalah:* Mengelola status UI interaktif (header, drawer mobile, playlist musik, dan modal kontak) dalam satu halaman SPA tanpa kekacauan *state*.
  - *Solusi:* Memisahkan struktur kode ke komponen modular (`LazyImage.tsx`, `playlist.ts`, `types.ts`) dan mengoptimalkan penggunaan React Hooks (`useState`, `useEffect`, `useRef`).

---

## 📈 6. Impact (Dampak & Hasil)

- **Sebelum:** Belum ada wadah digital terpadu untuk menyajikan profil profesional TKJ sekaligus karakter personal secara estetik.
- **Sesudah:**
  - **100% Responsif & Fast Load:** Memiliki portofolio web berkecepatan tinggi yang responsif di seluruh ukuran layar.
  - **Personal Branding Kuat:** Berhasil menciptakan kesan mendalam bagi rekruiter dan pengunjung melalui tema *pink pastel glassmorphism* yang unik.

---

## 🛠️ Tech Choices (Pilihan Teknologi & Alasan Teknis)

- **React 19:** Dipilih untuk arsitektur komponen deklaratif, efisiensi render DOM, dan manajemen *state* reaktif.
- **Vite:** Dipilih sebagai *build tool* dan dev server dengan kecepatan HMR instan serta hasil *bundle production* teroptimasi.
- **Motion (Framer Motion):** Dipilih untuk menangani transisi komponen dan animasi UI yang halus dan alami.
- **Tailwind CSS & CSS Variables:** Kombinasi *utility-first styling* dan token warna CSS untuk fleksibilitas pembentukan tema *pink pastel*.
- **Lucide React:** Dipilih sebagai pustaka ikon SVG yang ringan, konsisten, dan mudah disesuaikan.

---

## 🖼️ Screenshots & Visual Demo

![Tampilan Utama Portofolio](/uploads/setia-wati-portfolio.jpg)
*Gambar 1: Antarmuka utama (Hero Section & Header) dari Portofolio Setia Wati.*

