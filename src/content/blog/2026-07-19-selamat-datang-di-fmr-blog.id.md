---
title: Selamat Datang di fmr.blog
description: Artikel blog pertama saya di situs yang baru.
pubDate: 2026-07-19
heroImage: /uploads/Logo Web Blog.png
tags:
  - welcome
  - tech
lang: id
project: "fmr-blog"
---

Halo dunia! Selamat datang di **fmr.blog**, rumah digital baru tempat saya membagikan catatan laboratorium, coretan kode, hingga dokumentasi infrastruktur IT. 

Artikel ini merupakan tonggak sejarah (_milestone_) pertama bagi blog ini. Sengaja saya tulis bukan hanya sebagai formalitas "Hello World", tetapi juga sebagai pengingat mengapa platform ini dibangun.

### Mengapa Membangun Blog (Lagi)?

Di era di mana informasi berseliweran begitu cepat di media sosial berformat video pendek, memiliki sebuah _blog_ berbasis teks yang terindeks dengan baik mungkin terdengar kuno. Namun bagi seorang praktisi IT—baik itu _System Administrator_, _Network Engineer_, maupun penggiat LLM—dokumentasi tertulis adalah segalanya. 

Blog ini hadir sebagai:

1. **Pusat Pengetahuan (_Knowledge Base_):** Tempat saya mendokumentasikan eksperimen _server_, studi kasus jaringan, atau instalasi alat-alat _open-source_ baru.
2. **Ruang Diskusi:** Terdapat integrasi langsung dengan GitHub Discussions (melalui Giscus) di bawah artikel ini, memudahkan sesama _engineer_ untuk bertukar pikiran.
3. **Arsip Portofolio:** Sebagai pembuktian konkret (_Proof of Work_) dari proyek-proyek yang saya sentuh.

### Mengintip Dapur Teknologi (Tech Stack)

Bagi Anda yang penasaran, blog ini dirancang dengan filosofi "sedikit mungkin _JavaScript_, secepat mungkin responsnya" menggunakan ekosistem teknologi modern berikut:

*   **Astro 5 & Node.js:** Mesin utama *Static Site Generator* (SSG) dengan lingkungan kompilasi Node.js untuk menghasilkan halaman statis super cepat dengan *Zero-JS* secara *default*.
*   **TypeScript & Zod:** Pengetikan ketat (*type-safety*) dan validasi skema data koleksi konten secara otomatis pada saat proses *build*.
*   **Sveltia CMS & Cloudflare Functions:** Pengelolaan konten (_authoring_) berbasis Git di `/admin` yang terhubung dengan *Serverless GitHub OAuth proxy* di Cloudflare Pages.
*   **Vanilla CSS & Google Fonts:** Sistem desain UI ringan dengan token warna *Forest Green* (`#4A7856`), efek *glassmorphism*, dan tipografi Inter/Outfit tanpa menggunakan framework CSS berat.
*   **Shiki & Giscus:** Penyorotan sintaksis kode otomatis (*github-dark*) serta sistem komentar terintegrasi berbasis GitHub Discussions yang tersinkronisasi otomatis dengan tema gelap/terang.
*   **Astro Sitemap & RSS Feed:** Pembuatan XML Sitemap otomatis untuk SEO Google Search Console serta Umpan RSS di `/rss.xml` untuk aplikasi agregator berita.

### Apa Selanjutnya?

Ke depannya, Anda bisa menantikan lebih banyak tulisan teknis di sini. Mulai dari _troubleshooting_ jaringan, eksplorasi _Large Language Models_, hingga _review_ alat-alat _self-hosted_.

Terima kasih sudah mampir! Jangan lupa manfaatkan fitur **RSS Feed** yang ada di _footer_ agar Anda tidak ketinggalan _update_ terbaru, dan mari berdiskusi di kolom komentar. 

Salam _open-source_! ☕
