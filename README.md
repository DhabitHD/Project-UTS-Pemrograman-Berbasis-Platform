# Portofolio Pribadi - TUI

Ini adalah proyek website portofolio pribadi yang dibuat untuk memenuhi tugas Ujian Tengah Semester (UTS) mata kuliah Pemrograman Berbasis Platform. Website ini dirancang dengan estetika unik yang terinspirasi dari TUI (Terminal User Interface), memberikan nuansa retro dan teknis.

## Tampilan Proyek
![Tampilan Homepage]()
![Tampilan About]()
![Tampilan Contact]()

## Fitur Utama
- Desain TUI/Terminal: Tampilan antarmuka yang konsisten di seluruh halaman, menyerupai aplikasi di dalam terminal.
- Tiga Halaman Terpisah: Situs ini terstruktur menjadi tiga halaman utama yang saling terhubung:
- Home: Halaman selamat datang dengan seni ASCII dan perkenalan singkat.
  1. About: Halaman yang menampilkan detail keahlian, riwayat pendidikan, dan foto profil.
  2. Contact: Halaman dengan detail kontak dan formulir interaktif untuk mengirim pesan.
  3. Responsif: Tata letak dirancang agar tetap terlihat baik di berbagai ukuran layar, mulai dari desktop hingga mobile.
- Validasi Form: Formulir kontak menggunakan JavaScript native untuk memvalidasi input pengguna sebelum pengiriman.
- Hybrid CSS: Menggabungkan kekuatan framework Tailwind CSS untuk tata letak dan responsivitas dengan **CSS native** untuk styling komponen kustom (seperti jendela TUI, panel, dan tombol).

## Teknologi yang Digunakan
- HTML5: Untuk struktur dan konten halaman web.
- CSS3:
  - Tailwind CSS: Digunakan sebagai framework utama untuk layout, spacing, dan utility classes.
  - CSS Native: Digunakan dalam file style.css untuk styling spesifik dan kustom pada komponen antarmuka TUI.
- JavaScript (ES6+): Digunakan untuk interaktivitas pada sisi klien, khususnya untuk validasi formulir kontak di script.js.
- Google Fonts: Menggunakan font VT323 untuk mendapatkan estetika pixelated yang khas.

## Struktur Proyek.
```
.
├── index.html      # Halaman Utama (Home)
├── about.html      # Halaman Tentang Saya
├── contact.html    # Halaman Kontak
├── style.css       # File CSS Native untuk komponen TUI
└── script.js       # File JavaScript untuk validasi form
```
