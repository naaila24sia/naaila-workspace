# PRD V2 — Landing Page Pengembangan VetCare CRM

Dokumen ini merinci spesifikasi kebutuhan produk (Product Requirement Document) dan perluasan fitur yang diimplementasikan pada halaman utama (`Guest.jsx`) untuk **Fase V2**.

---

## 🎯 Kebutuhan Utama & Target
- **Tujuan**: Membantu calon klien memvisualisasikan cara kerja sistem dengan penambahan mockup visual dan pembuktian sosial (social proof).
- **Fokus Tampilan**: Menampilkan performa klinik, ulasan pengguna asli, serta membuka jalur komunikasi pendaftaran instan melalui WhatsApp.

---

## 🛠️ Komponen Tambahan yang Diimplementasikan di `Guest.jsx`

### 1. Dashboard Preview (Tampilan Tangkapan Layar)
- Penyajian mockup antarmuka aplikasi dashboard CRM. Memberikan gambaran kepada pengguna tentang bentuk visual tabel data pasien, menu samping (sidebar), dan grafik performa klinik.

### 2. Statistik Pengguna & Lencana Melayang
- Penambahan metrik performa untuk meningkatkan kepercayaan:
  - Jumlah pelanggan aktif: *"1,420 Pelanggan"*
  - Jumlah anabul/hewan yang ditangani: *"10k+ Happy Pets"*
- Floating statistic card beranimasi naik-turun lambat di sekeliling gambar hero.

### 3. Modul CRM yang Diperluas
Selain 4 fitur dasar V1, fase ini menambahkan penjelasan tertulis untuk fitur lanjutan:
- **Membership**: Kategori keanggotaan klinik.
- **Reminder Vaksin**: Pengingat otomatis masa berlaku vaksinasi.
- **Inventory**: Manajemen stok obat-obatan apotek klinik.
- **Customer History**: Riwayat lengkap interaksi pelanggan.
- **Campaign Promotion**: Program pemasaran terarah.

### 4. Benefit (Keuntungan Operasional)
- Grid berisi 4 poin penting keunggulan aplikasi: *Hemat Waktu*, *Peningkatan Pendapatan*, *Akurasi Stok*, dan *Pengalaman Klien Premium*.

### 5. Ulasan/Testimoni Pengguna (Social Proof)
- Menampilkan testimoni nyata dari 3 profil pengguna (pemilik klinik, dokter hewan, dan manajer operasional) lengkap dengan foto avatar dan nama klinik mereka.

### 6. FAQ (Tanya Jawab Accordion)
- Daftar pertanyaan yang sering diajukan mengenai keamanan data rekam medis, migrasi data, dan biaya langganan.
- Dibangun menggunakan interaktivitas buka/tutup berbasis tab.

### 7. Integrasi Booking via WhatsApp
- Tombol aksi WhatsApp mengambang (floating button) di sudut bawah halaman yang langsung mengarah ke chat klinik dengan teks pesan pembuka otomatis.

---

## 💻 Karakteristik Kode & Teknis (Fase V2)
- **Struktur Berkas**: File [Guest.jsx](file:///D:/naaila-workspace/src/pages/Guest.jsx) mulai dipisah secara logis dengan mendefinisikan konstanta data (data testimoni, data benefit) agar kode lebih bersih.
- **React State**: Menggunakan `useState` untuk mengelola indeks aktif FAQ accordion dan toggle menu mobile.
- **Kebergantungan**: Memasukkan tautan gambar dinamis dari Unsplash untuk avatar dan ilustrasi rekam medis.
