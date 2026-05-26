# 🧭 Dimas Nurdiansyah — Interactive 3D Portfolio Web

<div align="center">
  <img src="https://img.shields.io/badge/React-19.2.6-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  <img src="https://img.shields.io/badge/Three.js-0.184.0-black?style=for-the-badge&logo=three.js&logoColor=white" alt="Three.js" />
  <img src="https://img.shields.io/badge/Tailwind%20CSS-v4.3.0-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Vite-8.0.12-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Framer%20Motion-12.40.0-F43F5E?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
</div>

<br />

> **"Membangun ekosistem web modern dengan keindahan visual minimalis dan arsitektur backend yang kokoh."**
>
> — *Bestdym (Dimas Nurdiansyah)*

Selamat datang di repositori kode **Interactive 3D Portfolio Web** saya. Ini adalah situs web portofolio pribadi premium dengan estetika minimalis hitam-putih (*High Contrast Black & White*) berkinerja tinggi yang dirancang untuk memamerkan proyek, riwayat kerja, pencapaian akademis, serta keahlian teknologi saya melalui visualisasi 3D interaktif yang canggih.

---

## ✨ Fitur Utama (Key Features)

Situs portofolio ini dilengkapi dengan fitur-fitur berkelas industri kreatif digital modern:

1. **⌨️ Interactive 3D Mechanical Keyboard (Tech Stack Showcase)**
   * Dibangun menggunakan **React Three Fiber (R3F)** dan **Drei** di atas **WebGL**.
   * Menampilkan model keyboard mekanikal 3D interaktif bertema *Dolch/Monochrome* dengan 18 tombol (*keycaps*) yang mewakili *tech stack* saya.
   * Setiap tombol dapat di-hover, memiliki efek penekanan tombol dinamis (*cherry-mx keycap press animation*), diiringi dengan pendaran cahaya (*underglow LED*) serta deskripsi teknologi interaktif pada layar proyeksi holografis virtual.

2. **🍱 Premium Bento Grid Portfolio**
   * Tata letak proyek berbasis kisi bento (*Bento Grid*) yang modern dan responsif menggunakan **Tailwind CSS v4**.
   * Menampilkan proyek unggulan seperti **3D Human Anatomy Web** (WebGL & Shaders), **Bunga Bali E-commerce** (Supabase & Stripe), **Denah Coding** (Next.js & Postgres), dan **Web Pariwisata Yogyakarta** (Leaflet Map).
   * Animasi transisi masuk (*scroll reveal*) yang halus menggunakan **Framer Motion**.

3. **⏳ Minimalist Timeline Experience**
   * Jalur perjalanan karier interaktif yang mendetail, mendokumentasikan peran saya sebagai *Full Stack Developer* dan *Web Developer Intern* di **Wesclic**.
   * Dilengkapi detail teknologi (*tech pills*) yang berubah warna secara taktil saat disentuh.

4. **🏆 Credibility & Credentials**
   * Menyorot pencapaian profesional seperti Sertifikasi Internasional **MikroTik MTCNA** dan partisipasi dalam **Web Design Competition SDG 8**.

5. **✉️ Contact & Call-to-Action Premium**
   * Kartu kontak interaktif berskala besar dengan gradien elegan gelap-terang yang terintegrasi langsung dengan email (*mailto*) serta profil sosial media (GitHub, LinkedIn).

---

## 🛠️ Tech Stack & Dependensi

Proyek ini dibangun menggunakan teknologi mutakhir guna memastikan performa render, animasi, dan struktur kode tetap prima:

### Core & Framework
* **React 19** (`^19.2.6`) - Pustaka antarmuka deklaratif berbasis komponen terbaru.
* **Vite 8** (`^8.0.12`) - *Frontend tooling* yang sangat cepat untuk HMR (*Hot Module Replacement*).

### Desain & Efek Visual
* **Tailwind CSS v4** (`^4.3.0`) - Menggunakan plugin Vite resmi `@tailwindcss/vite` untuk kecepatan kompilasi CSS yang instan dan kustomisasi variabel modern.
* **Framer Motion 12** (`^12.40.0`) - Mengatur animasi mikro-interaksi, transisi masuk, dan menu laci (*drawer*) responsif.
* **Lucide React** (`^1.16.0`) - Kumpulan ikon vektor minimalis beresolusi tinggi.

### Grafis 3D (WebGL)
* **Three.js** (`^0.184.0`) - Mesin rendering 3D berbasis JavaScript.
* **@react-three/fiber** (`^9.6.1`) - React wrapper untuk grafis 3D Three.js.
* **@react-three/drei** (`^10.7.7`) - Kumpulan komponen pembantu fungsional untuk memudahkan kontrol kamera, teks 3D (`<Text>`), dan partikel (`Starfield`).

---

## 📂 Struktur Direktori Proyek

```bash
portofolio-web/
├── public/                 # Aset statis public
├── src/
│   ├── assets/             # Gambar, ikon, & font kustom
│   ├── components/         # Komponen Modular Utama
│   │   ├── AboutExperience.jsx       # Bagian "Tentang Saya" & Garis Waktu Kerja
│   │   ├── ContactSection.jsx        # Formulir & Tautan Sosial Media Premium
│   │   ├── PortfolioAchievements.jsx # Bento Grid Proyek & Sertifikat Pencapaian
│   │   └── TechStack3D.jsx           # Canvas 3D Keyboard Mekanikal Interaktif
│   ├── App.css             # Gaya CSS global tambahan
│   ├── App.jsx             # Entry point komponen layout utama
│   ├── index.css           # Konfigurasi Tailwind CSS v4 & Fonts
│   └── main.jsx            # Bootstrapping React & DOM render
├── package.json            # Daftar pustaka & skrip proyek
├── vite.config.js          # Konfigurasi bundler Vite
└── README.md               # Dokumentasi Proyek (file ini)
```

---

## 🚀 Panduan Memulai (Getting Started)

Ikuti langkah-langkah di bawah ini untuk menjalankan proyek ini di lingkungan lokal Anda.

### Prasyarat (Prerequisites)
Pastikan Anda sudah menginstal:
* [Node.js](https://nodejs.org/) (Versi LTS sangat direkomendasikan, minimal v18+)
* Package manager bawaan Node seperti `npm`.

### Langkah Instalasi

1. **Klon Repositori ini:**
   ```bash
   git clone https://github.com/username-anda/portofolio-web.git
   cd portofolio-web
   ```

2. **Instal seluruh dependensi proyek:**
   ```bash
   npm install
   ```

3. **Jalankan Development Server:**
   ```bash
   npm run dev
   ```
   Buka peramban browser Anda di alamat yang tertera (biasanya `http://localhost:5173`).

4. **Membuat Build Produksi:**
   Untuk mengompilasi dan mengoptimalkan aset untuk siap dideploy ke server hosting (seperti Vercel/Netlify):
   ```bash
   npm run build
   ```

5. **Pratinjau Hasil Build Produksi:**
   Untuk menguji hasil build produksi secara lokal sebelum melakukan deployment:
   ```bash
   npm run preview
   ```

---

## 👨‍💻 Mengenal Pengembang

* **Nama:** Dimas Nurdiansyah (Bestdym)
* **Status:** Mahasiswa S1 Teknik Informatika di **Universitas Mercu Buana Yogyakarta (UMBY)**.
* **Peran Aktif:** Full Stack Developer di **Wesclic**.
* **Fokus:** Web Development, 3D Web Graphics, Database Architecture, & API Integrations.

Untuk berkolaborasi atau sekadar menyapa, jangan ragu menghubungi saya via email di **[dimas.nurdiansyah@example.com](mailto:dimas.nurdiansyah@example.com)** atau kunjungi tautan sosial media yang tertera pada bagian bawah situs portofolio saya!

---

<div align="center">
  <sub>Made with ❤️ and ☕ by <b>Dimas Nurdiansyah</b> © 2026</sub>
</div>
