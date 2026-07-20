---
title: Website Portofolio Pribadi
description: Website portofolio interaktif dan responsif berbasis Astro yang menampilkan profil, proyek jaringan/AI, serta sertifikasi teknis.
status: active
techStack:
  - Astro
  - TypeScript
  - GSAP
  - Lenis
  - Cloudflare Pages
repoUrl: https://github.com/fatahilah-mr/portfolio
demoUrl: https://fatahmr.my.id
heroImage: https://cdn.fatahmr.my.id/portfolio/assets/favicon/web-app-manifest-512x512.png
featured: true
startDate: 2026-07-18T05:37
---

## Background / Problem Statement

Sebagai seorang **Spesialis Administrasi Jaringan & AI Prompt Engineering**, menyajikan kredensial keahlian teknis yang mencakup infrastruktur fisik (_hardware/cabling_), jaringan (_Cisco, MikroTik_), administrasi server (_Linux, Windows Server_), hingga integrasi AI secara profesional membutuhkan platform yang modern dan cepat.

Website portofolio ini dibangun untuk menggantikan daftar riwayat hidup konvensional menjadi sebuah antarmuka interaktif bilingual (ID/EN) yang ringan. Fokus utamanya adalah memamerkan empat pilar kompetensi utama dan rekam jejak proyek lab secara terstruktur tanpa mengorbankan kecepatan aksesibilitas serta performa _rendering_.

## Architecture / Tech Stack

Website ini dirancang menggunakan pendekatan _Static Site Generation_ (SSG) modern yang mengutamakan performa tinggi dan nol kelebihan _overhead_ JavaScript:

- **Framework Core:** Astro v5 untuk performa _zero-JS by default_ dan pengorganisasian komponen yang modular.
- **Styling & UI:** Vanilla CSS murni dengan desain antarmuka modern, sistem variabel warna yang presisi, serta tata letak penuh responsif.
- **Data Source / CMS:** Google Sheets API sebagai basis data dinamis untuk pengelolaan entri proyek dan portofolio secara terpusat.
- **Deployment & Edge Network:** Cloudflare Pages untuk distribusi konten tingkat global dengan latensi minimal dan keandalan tinggi.

## Key Features

- **Comprehensive Technical Skills Showcase:** Mengelompokkan kompetensi teknis secara mendalam ke dalam 6 pilar utama:

    1. _Perangkat Keras & Pengkabelan:_ Perakitan PC, UTP Crimping, Fiber Optik Splicing, Fast Connector, OPM & VFL Testing, hingga Manajemen Rack Server.
    2. _Cisco Networking:_ Keamanan perangkat, Switching/VLAN/Trunking, STP Portfast, EtherChannel, IPv4/IPv6, Static Routing, serta Dynamic Routing (OSPF, BGP, EIGRP, RIP).
    3. _MikroTik & Wireless:_ Internet Gateway, DHCP/DNS, Password Hardening, Firewall NAT, Content Blocking, Port Forwarding, AP-Bridge Mode, dan Hotspot Gateway.
    4. _Linux Server Administration:_ Debian (12 & 13), SSH, Bind9 DNS, Nginx/Apache2, Nftables Firewall, VRRP Redundancy, dan HAProxy Load Balancing.
    5. _Windows Server Administration:_ Windows Server 2022, Active Directory (ADDS), IIS, File Sharing, RAID Storage, serta User/Group Management (OU).
    6. _AI & Web Development:_ AI Prompt Engineering untuk otomatisasi skrip & troubleshooting, pengembangan web responsif dengan Astro, serta penerapan UI/UX Design System.

- **Bilingual Internationalization (ID/EN):** Fitur pengalihan bahasa cepat untuk menjangkau perekrut lokal maupun internasional.
- **Integrated Project Lab & Certifications:** Galeri pengujian topologi jaringan serta bukti sertifikasi teknis terverifikasi.
- **Optimized Performance:** Dibangun tanpa ketergantungan _framework CSS_ berat, menghasilkan skor performa maksimal pada pengujian Google Lighthouse.

## Outcomes / Lessons Learned

- **Performa Ekstrem:** Penggunaan Astro v5 bersama Vanilla CSS terbukti menghasilkan waktu muat (_load time_) di bawah 1 detik dengan efisiensi penggunaan memori yang luar biasa.
- **Struktur Keahlian Terorganisir:** Pemetaan keahlian teknis dari level kabel fisik hingga _High Availability Server_ membantu perekrut memahami spektrum kemampuan _Network System Administration_ secara komprehensif.
- **Integrasi Workflow AI:** Penerapan AI Prompt Engineering berhasil mempercepat proses pengerjaan otomatisasi skrip dokumentasi dan pengelolaan konfigurasi jaringan.
