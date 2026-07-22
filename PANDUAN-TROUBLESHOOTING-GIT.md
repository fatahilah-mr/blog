# 📘 Panduan Troubleshooting Git: Mengatasi Error saat `git push` Ditolak

Dokumen ini berisi panduan langkah demi langkah untuk mengatasi kendala saat melakukan `git push` yang ditolak karena adanya perbedaan commit antara repositori lokal (komputer/HP) dan repositori remote (GitHub).

---

## ❓ 1. Mengapa Error Ini Terjadi?

Pesan error yang biasanya muncul:
```text
! [rejected]        main -> main (fetch first)
error: failed to push some refs to 'https://github.com/...'
hint: Updates were rejected because the remote contains work that you do
hint: not have locally.
```

**Penyebab Utama:**
Ada perubahan commit baru di GitHub (misalnya pengeditan artikel via Sveltia CMS atau via web GitHub) yang **belum ada di lokal Anda**, sementara Anda juga sudah membuat commit baru di lokal.

---

## 🛠️ 2. Solusi & Langkah Troubleshooting

### 🌟 Solusi A: Menggunakan `git pull --rebase` (Sangat Direkomendasikan)
Metode ini mengambil perubahan terbaru dari GitHub dan menempatkan (*rebase*) commit lokal Anda di atas commit terbaru dari remote. Ini menjaga riwayat komit tetap rapi dan bersih.

```bash
# 1. Ambil & tumpuk commit lokal di atas commit remote
git pull --rebase origin main

# 2. Push kembali ke GitHub
git push origin main
```

---

### 🔀 Solusi B: Menggunakan `git pull` Standar (Merge)
Metode ini menarik perubahan dari GitHub dan menggabungkannya via *merge commit*.

```bash
# 1. Tarik dan gabungkan perubahan
git pull origin main

# 2. Jika muncul editor teks commit message, simpan (misal di Vim: tekan Esc, ketik :wq lalu Enter)

# 3. Push ke GitHub
git push origin main
```

---

### ⚠️ Solusi C: Jika Terjadi Bentrokan File (Git Conflict)
Jika file yang sama diubah di GitHub dan di lokal pada baris yang sama, Git akan menghentikan proses sementara dan menandai *conflict*.

Langkah penyelesaiannya:

```bash
# 1. Cek file mana yang mengalami konflik
git status

# 2. Buka file yang konflik, cari penanda seperti berikut:
# <<<<<<< HEAD
# kode dari lokal Anda
# =======
# kode dari GitHub
# >>>>>>> origin/main

# 3. Edit file tersebut secara manual: pilih kode yang benar dan hapus penanda (<<<<<<<, =======, >>>>>>>).

# 4. Tandai file yang sudah diperbaiki:
git add .

# 5. Lanjutkan proses rebase atau commit:
git rebase --continue
# (atau 'git commit' jika sebelumnya menggunakan git pull standar)

# 6. Push hasil perbaikan ke GitHub:
git push origin main
```

---

## 💡 3. Tips Pencegahan Terbaik

Untuk menghindari bentrokan commit di masa mendatang, biasakan selalu menjalankan perintah ini **sebelum Anda mulai mengedit file** secara lokal:

```bash
git pull origin main
```
