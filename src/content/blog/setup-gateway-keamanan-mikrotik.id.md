---
title: "Setup Gateway & Keamanan Jaringan MikroTik"
description: "Panduan praktis konfigurasi gateway MikroTik RB951Ui, Firewall NAT masquerade, DHCP Server, dan optimasi frekuensi nirkabel."
pubDate: "2026-06-04"
heroImage: "/uploads/blog/mikrotik-01.webp"
tags: ["networking", "mikrotik", "security", "gateway"]
lang: "id"
draft: false
references:
  - title: "Dokumentasi Resmi MikroTik RouterOS Manual"
    url: "https://help.mikrotik.com/docs/display/ROS/RouterOS+documentation"
  - title: "MikroTik Firewall NAT & Masquerade Guide"
    url: "https://wiki.mikrotik.com/wiki/Manual:IP/Firewall/NAT"
---

Membangun infrastruktur jaringan lokal yang stabil dan aman memerlukan konfigurasi *gateway* yang terstruktur pada perangkat *router*. Pada panduan praktis ini, kita akan mengulas langkah-langkah implementasi *gateway* fungsional menggunakan perangkat **MikroTik RouterBoard RB951Ui-2HnD**, mencakup pembagian alamat IP, aktivasi *interface* WLAN, konfigurasi *Firewall NAT*, *DHCP Server*, serta teknik *troubleshooting* jaringan.

---

## 🛠️ Informasi Spesifikasi Hardware & Sistem

Pengujian dan eksekusi perintah pada laboratorium ini dilakukan menggunakan spesifikasi perangkat berikut:

| Parameter Sistem | Nilai / Spesifikasi Perangkat |
| :--- | :--- |
| **Model Perangkat** | MikroTik RB951Ui-2HnD (Arsitektur: `mipsbe`) |
| **Versi RouterOS** | RouterOS v6.49.6 (Akses via WinBox 64-bit) |
| **Identity Router** | `Mk Fatah` |
| **MAC Address Akses** | `64:D1:54:D4:94:81` |

---

## 📊 Skema Pengalamatan Jaringan (IP Address List)

Infrastruktur dibagi menjadi tiga segmen utama: jalur koneksi internet (WAN), jaringan lokal kabel (LAN), dan jaringan nirkabel (WLAN).

| Interface | IP Address / Prefix | Network | Keterangan & Alokasi Host |
| :--- | :--- | :--- | :--- |
| `ether1-WAN` | `192.168.0.105/24` | `192.168.0.0` | Jalur Dynamic (D) / Gateway Internet ISP |
| `ether2-LAN` | `192.168.10.1/26` | `192.168.10.0` | Jaringan Lokal Kabel (Maksimal 62 Host) |
| `wlan1-WLAN` | `192.168.20.1/25` | `192.168.20.0` | Jaringan Nirkabel / Wi-Fi (Maksimal 126 Host) |

---

## 💻 Parameter Konfigurasi Inti (WinBox & CLI)

### 1. Konfigurasi Firewall NAT (Network Address Translation)
Agar seluruh segmen IP lokal (`192.168.10.0/26` dan `192.168.20.0/25`) dapat meneruskan paket data ke internet, kita wajib mengaktifkan fitur *Source NAT (Masquerade)* pada *interface* out-WAN:

```routeros
/ip firewall nat
add chain=srcnat out-interface=ether1-WAN action=masquerade comment="NAT Masquerade Internet Access"
```

### 2. Layanan DHCP Server & IP Pool
Menyiapkan alokasi IP otomatis untuk perangkat klien di jaringan kabel dan nirkabel dengan *lease time* 10 menit:

```routeros
/ip pool
add name=dhcp_pool0 ranges=192.168.10.2-192.168.10.62
add name=dhcp_pool1 ranges=192.168.20.2-192.168.20.126

/ip dhcp-server
add name=dhcp1 interface=ether2-LAN lease-time=10m address-pool=dhcp_pool0 disabled=no
add name=dhcp2 interface=wlan1-WLAN lease-time=10m address-pool=dhcp_pool1 disabled=no
```

---

## 🧪 Dokumentasi & Verifikasi Hasil Pengujian

### 1. Pengujian Konektivitas Internet dari Router
Verifikasi koneksi outbound dilakukan dari terminal MikroTik dengan mengirimkan paket ICMP *ping* ke publik DNS (`8.8.8.8`):

```bash
[fatah@Mk Fatah] > ping 8.8.8.8
  SEQ HOST                                     SIZE TTL TIME  STATUS
    0 8.8.8.8                                    56  116 12ms
    1 8.8.8.8                                    56  116 11ms
    sent=10 received=10 packet-loss=0% min-rtt=11ms avg-rtt=13ms max-rtt=18ms
```

---

## 🔍 Troubleshooting Kendala Lapangan

### Kendala 1: Klien Terhubung ke Wi-Fi Namun Mengalami Latensi Tinggi (RTO)
* **Masalah:** Perangkat klien nirkabel mengalami putus-sambung dengan nilai RTT (Round Trip Time) sangat tinggi.
* **Analisis:** Terjadi interferensi sinyal frekuensi 2.4GHz karena penggunaan kanal default (`auto`) yang padat di lingkungan sekitar.
* **Solusi:** Menggelar *Wireless Frequency Scan*, mengunci kanal nirkabel ke frekuensi paling sepi, menguji opsi `2GHz-only-N`, serta mematikan protokol nirkabel yang tidak digunakan (*nstrex/nv2*).

### Kendala 2: Klien LAN Tidak Mendapatkan IP Otomatis dari DHCP Server
* **Masalah:** Perangkat komputer di port `ether2-LAN` mendapatkan alokasi IP APIPA (`169.254.x.x`).
* **Analisis:** Status `dhcp1` menjadi *invalid* karena port `ether2-LAN` secara tidak sengaja dimasukkan ke dalam anggota *Bridge Interface*.
* **Solusi:** Mengeluarkan port `ether2-LAN` dari anggota *bridge*, lalu mengarahkan layanan *DHCP Server* secara langsung ke port fisik `ether2-LAN`. Setelah penyesuaian, klien langsung mendapatkan IP presisi `192.168.10.x/26`.
