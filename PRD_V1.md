# PRD V1 — Landing Page Dasar VetCare CRM

Dokumen ini merinci spesifikasi kebutuhan produk (Product Requirement Document) dan detail implementasi halaman utama (`Guest.jsx`) pada **Fase V1**.

---

## 🎯 Kebutuhan Utama & Target
- **Tujuan**: Memperkenalkan sistem dasar VetCare CRM kepada target pasar potensial (Klinik Hewan, Dokter Hewan, Pet Grooming, dan Pet Shop).
- **Fokus Tampilan**: Layout bersih, navigasi mendasar, dan penyajian nilai produk (value proposition) tanpa elemen visual yang kompleks.

---

## 🛠️ Komponen yang Diimplementasikan di `Guest.jsx`

### 1. Navbar (Navigasi Sederhana)
- Logo platform VetCare CRM yang bersih.
- Link navigasi statis: `Home` dan `Layanan/Fitur`.
- Tombol CTA "Log In" untuk masuk ke area anggota/pengguna terdaftar.

### 2. Hero Section Dasar
- **Headline**: *"Kelola Klinik Hewan Lebih Mudah dengan VetCare CRM"*
- **Subheadline**: *"Kelola pelanggan, data hewan, rekam medis, appointment, dan vaksinasi dalam satu platform modern."*
- **CTA Buttons**:
  - Tombol primer "Mulai Gratis" (mengarahkan pendaftaran).
  - Tombol sekunder "Lihat Demo".
- *Catatan*: Pada fase ini belum ada ilustrasi mockup dashboard ataupun lencana data statistik.

### 3. Tentang VetCare CRM (Tentang)
- Deskripsi tekstual sederhana yang menjelaskan masalah administrasi klinik hewan konvensional (misalnya: penulisan tangan rekam medis, hilangnya riwayat pasien) dan bagaimana CRM memecahkannya.

### 4. Fitur Utama (Grid 2x2)
Menampilkan 4 pilar fitur paling fundamental dalam mengelola operasional harian:
- **Customer Management**: Modul pendaftaran dan pendataan profil pemilik hewan.
- **Pet Management**: Modul pembuatan profil satwa (jenis, berat, riwayat alergi).
- **Appointment**: Sistem penjadwalan janji temu dokter.
- **Medical Record**: Pencatatan riwayat diagnosis klinis dasar.

### 5. Banner Aksi (CTA) & Footer
- Spanduk/Banner ajakan bertindak sederhana di bagian bawah halaman.
- Footer statis yang menyajikan hak cipta dan syarat ketentuan umum.

---

## 💻 Karakteristik Kode & Teknis (Fase V1)
- **Struktur Berkas**: Seluruh elemen diletakkan langsung dalam berkas halaman [Guest.jsx](file:///D:/naaila-workspace/src/pages/Guest.jsx) (file tunggal, tanpa impor seksi terpisah).
- **React State**: Hanya menggunakan state menu mobile toggle sederhana.
- **Efek & Animasi**: Tanpa animasi eksternal (tidak mengimpor `framer-motion`).
- **Data Visual**: Tidak ada integrasi bagan atau chart grafis (`recharts` belum dipasang).
