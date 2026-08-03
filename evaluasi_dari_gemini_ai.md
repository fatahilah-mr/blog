Mengenai struktur layout dan penggunaan gambar pada feed, berikut analisis objektif mengenai efektivitasnya untuk tipe blog/portofolio teknikal kamu:
1. Evaluasi Layout Desktop (2 Kolom Saat Ini)
Layout 2 kolom simetris (50:50) yang kamu gunakan di homepage (Tulisan Terbaru vs Proyek Pilihan) maupun di halaman feed memiliki kelemahan dari segi hirarki visual: dua bagian tersebut saling berebut perhatian pengunjung.
Rekomendasi Layout yang Lebih Cocok
A. Untuk Homepage (/)
 * Layout Asimetris (Main Content + Sidebar) — Nisbah ~70:30 atau 65:35:
   * Kolom Utama (Kiri/Besar): Fokus pada Tulisan Terbaru dan Proyek Pilihan Utama secara berurutan ke bawah (vertikal).
   * Sidebar (Kanan/Kecil): Isi dengan profil singkat, tautan media sosial, tech stack/skills, dan tautan newsletter/RSS.
   * Alasan: Mata manusia saat membaca di layar desktop cenderung mengikuti pola garis (F-pattern). Kolom utama yang lebih lebar memberi ruang napas bagi teks, sementara sidebar menyimpan informasi pendukung tanpa memotong arus membaca.
B. Untuk Halaman Feed Blog (/blog)
 * Layout 1 Kolom Ringkas (Single-Column List):
   * Tampilkan artikel secara vertikal ke bawah dalam satu kolom terpusat (max-width ~720px - 800px).
   * Setiap item berisi: Judul, Tanggal, Estimasi Waktu Baca, Tag Bahasa/Kategori, dan Ringkasan Singkat (Excerpt).
   * Alasan: Untuk blog teknikal (jaringan, sysadmin, development), pola daftar 1 kolom jauh lebih mudah dipindai (scannable) daripada grid 2 kolom yang memaksa mata bergerak zig-zag.
C. Untuk Halaman Feed Proyek (/proyek)
 * Layout Grid 2 atau 3 Kolom (Symmetric Grid):
   * Tetap gunakan grid 2 atau 3 kolom khusus untuk halaman proyek.
   * Proyek bersifat visual dan independen satu sama lain, sehingga format kartu (card grid) sangat cocok di sini.
2. Haruskah Menambahkan Gambar/Thumbnail?
Jawabannya bergantung pada jenis kontennya (Proyek vs Artikel Blog):
A. Untuk Halaman Proyek (/proyek) — SANGAT DISARANKAN (YA)
 * Alasan: Proyek web/aplikasi adalah produk visual. Kartu proyek yang hanya berisi teks dan badge terasa abstrak dan kurang menarik.
 * Saran Implementasi:
   * Tambahkan mockup/screenshot tampilan antarmuka (UI) aplikasi atau diagram arsitektur sistem di bagian atas setiap kartu proyek.
   * Gunakan rasio gambar yang konsisten (misalnya 16:9) dengan opsi lazy loading agar tidak memberatkan initial load.
B. Untuk Halaman Blog (/blog) — TIDAK WAJIB / SEBAIKNYA HINDARI GAMBAR GENERIK
 * Alasan: Artikel blog kamu berfokus pada topik teknis (MikroTik, Cloud Hosting, Arsitektur Jaringan). Jika kamu memaksakan gambar pada setiap artikel, kamu akan cenderung menggunakan stock photo generik (gambar server, kode abstrak) yang tidak memberikan nilai informasi tambahan dan justru mengalihkan perhatian dari judul.
 * Saran Implementasi:
   * Pertahankan pendekatan berorientasi tipografi (tanpa gambar di feed blog).
   * Gambar hanya perlu dimasukkan di dalam isi artikel jika berupa diagram jaringan, tangkapan layar terminal, atau arsitektur sistem yang relevan.
Ringkasan Langkah Perbaikan
 * Ubah feed blog menjadi 1 kolom terpusat tanpa gambar thumbnail agar fokus pada keterbacaan judul dan deskripsi teknis.
 * Tambahkan gambar screenshot/mockup pada kartu di halaman proyek untuk meningkatkan daya tarik visual.
 * Ubah homepage dari rasio 50:50 menjadi layout asimetris (konten utama + sidebar) untuk memperjelas hirarki informasi.

