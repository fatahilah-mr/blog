---
title: "Rancang Bangun Jaringan Kantor 3 Lantai (Cisco)"
description: "Simulasi arsitektur jaringan kantor 3 lantai berbasis Cisco Packet Tracer, Multi-Area OSPF, Inter-VLAN routing, dan DHCP Relay Agent."
pubDate: "2026-06-04"
heroImage: "/uploads/blog/topologi-cisco-pt-01.webp"
tags: ["networking", "cisco", "vlan", "ospf"]
lang: "id"
draft: false
references:
  - title: "Cisco Networking Academy - Inter-VLAN Routing Configuration"
    url: "https://www.cisco.com/c/en/us/support/docs/lan-switching/inter-vlan-routing/41860-howto-itvlan.html"
  - title: "Cisco OSPF Design Guide & Multi-Area Architecture"
    url: "https://www.cisco.com/c/en/us/support/docs/ip/open-shortest-path-first-ospf/7039-1.html"
---

Perancangan infrastruktur jaringan skala menengah hingga skala perusahaan (*enterprise*) menuntut adanya pemisahan domain siaran (*broadcast domain*), efisiensi rute data, dan redundansi yang andal. Artikel ini mengulas simulasi arsitektur jaringan gedung kantor 3 lantai menggunakan **Cisco Packet Tracer**, mengintegrasikan *Inter-VLAN Routing* pada *Multilayer Switch* (MLS), protokol routing dinamis **Multi-Area OSPF**, serta distribusi IP terpusat.

---

## 🛠️ Ringkasan Fitur & Spesifikasi Arsitektur

Infrastruktur ini dibangun untuk menangani isolasi lalu lintas data antar-departemen gedung tiga lantai dengan karakteristik berikut:

* **Simulator:** Cisco Packet Tracer v8.x
* **Protokol Routing Dinamis:** Multi-Area OSPF (Area 0 Backbone & Area 1 Branch)
* **Segmentasi Jaringan:** Inter-VLAN Routing (VLAN 10, VLAN 20, VLAN 30) pada Core Multilayer Switch
* **Layanan IP Terpusat:** DHCP Server & DHCP Relay Agent (`ip helper-address`)
* **Keamanan & Kontrol Lalu Lintas:** Standard & Extended Access Control List (ACL)

---

## 📊 Skema Pengalamatan IP (Addressing Table)

Berikut adalah tabel pengalokasian segmen IP address dan area OSPF pada seluruh perangkat jaringan utama:

| Perangkat | Interface | Segmentasi VLAN | IP Address | Subnet Mask | Area OSPF | Keterangan Lokasi |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| `Core-MLS` | Sub-int / Sw | VLAN 10 | `192.168.10.1` | `255.255.255.0` | Area 0 | Lantai 1 (Staff/Dev) |
| `Core-MLS` | Sub-int / Sw | VLAN 20 | `192.168.20.1` | `255.255.255.0` | Area 0 | Lantai 2 (Finance/HR) |
| `Core-MLS` | Sub-int / Sw | VLAN 30 | `192.168.30.1` | `255.255.255.0` | Area 1 | Lantai 3 (Executive/Server) |
| `Router-A` | `Gig0/0` | - | `10.10.10.1` | `255.255.255.252` | Area 0 | Uplink Backbone Core |
| `Router-B` | `Gig0/1` | - | `10.10.10.2` | `255.255.255.252` | Area 1 | Uplink Inter-Area Branch |

---

## 💻 Langkah Konfigurasi Utama (Cisco IOS Snippet)

### 1. Konfigurasi Inter-VLAN Routing pada Multilayer Switch (Core-MLS)
Mendefinisikan VLAN dan mengaktifkan kemampuan routing layer 3 pada *Multilayer Switch*:

```cisco
vlan 10
 name Lantai-1
vlan 20
 name Lantai-2
vlan 30
 name Lantai-3
exit

! Mengaktifkan fungsi IP Routing Layer 3
ip routing

interface vlan 10
 ip address 192.168.10.1 255.255.255.0
 no shutdown

interface vlan 20
 ip address 192.168.20.1 255.255.255.0
 no shutdown

interface vlan 30
 ip address 192.168.30.1 255.255.255.0
 no shutdown
```

### 2. Aktivasi Protokol Routing Dinamis Multi-Area OSPF
Mengonfigurasi pertukaran tabel rute otomatis antar-subnet dalam backbone Area 0 dan branch Area 1:

```cisco
router ospf 1
 router-id 1.1.1.1
 network 192.168.10.0 0.0.0.255 area 0
 network 192.168.20.0 0.0.0.255 area 0
 network 10.10.10.0 0.0.0.3 area 0
 network 192.168.30.0 0.0.0.255 area 1
exit
```

---

## 🧪 Hasil Pengujian & Verifikasi Laboratorium

1. **Uji Ping Inter-VLAN:** Seluruh host antar-lantai (VLAN 10, 20, dan 30) dapat saling berkomunikasi dengan tingkat keberhasilan 100% (*Success Rate 5/5*).
2. **Kesesuaian OSPF Neighbor:** Eksekusi perintah `show ip ospf neighbor` menunjukkan status `FULL/DR` dan `FULL/BDR` tanpa adanya paket yang terbuang.
3. **Analisis Tabel Routing:** Perintah `show ip route` menampilkan rute internal berlabel `O` (OSPF) serta rute antar-area berlabel `O IA` (*OSPF Inter-Area*).

---

## 🔍 Troubleshooting Kendala Arsitektur

### Kendala 1: Klien di Lantai 3 Gagal Mendapatkan IP dari DHCP Server Terpusat
* **Masalah:** Komputer klien di VLAN 30 mendapatkan alamat IP APIPA (`169.254.x.x`).
* **Analisis:** Paket *DHCP Request* menggunakan pesan *broadcast* layer 2 yang tidak dapat menembus batas VLAN/Subnet.
* **Solusi:** Mengonfigurasi *DHCP Relay Agent* pada *interface* Switched Virtual Interface (SVI) VLAN 30 di Core Switch menggunakan sintaks `ip helper-address [IP_DHCP_Server]`.

### Kendala 2: Status Tetangga OSPF Stuck pada State EXSTART/EXCHANGE
* **Masalah:** Proses *adjacency* OSPF antar-router backbone tidak pernah mencapai status `FULL`.
* **Analisis:** Terjadi ketidakcocokan ukuran *Maximum Transmission Unit* (MTU) pada interface tetangga.
* **Solusi:** Menyelaraskan ukuran MTU interface atau menerapkan perintah `ip ospf mtu-ignore` pada interface serial/gigabit yang terhubung.
