# PRD V3 — Landing Page CRM Lengkap (Fase Premium)

Dokumen ini merinci spesifikasi kebutuhan produk (Product Requirement Document) tingkat premium dan detail arsitektur modular yang diimplementasikan pada **Fase V3 (Terakhir)**.

---

## 🎯 Kebutuhan Utama & Target
- **Tujuan**: Membangun landing page representatif resmi VetCare CRM yang sangat premium, hidup, interaktif, dan optimal di seluruh ukuran layar (mobile, tablet, desktop).
- **Fokus Tampilan**: Visualisasi data bisnis nyata, alur kerja interaktif, validasi formulir lengkap, dan sentuhan animasi transisi modern.

---

## 🛠️ Komponen Premium yang Diimplementasikan di `Guest.jsx`

### 1. Hero Premium dengan Mockup Dashboard Interaktif
- **Peta Navigasi**: Menu navigasi kaca (`backdrop-blur-md bg-white/80`) dengan penanda link aktif dan CTA "Mulai Gratis".
- **Ilustrasi Dashboard Hidup**:
  - Simulasi fungsional dashboard aplikasi dengan mockup sidebar navigasi dan area selamat datang.
  - Kartu statistik (Pasien, Janji Temu, Finansial) dengan hover-scale.
  - Notifikasi melayang WhatsApp reminder yang berkedip dan kartu grafik mini.

### 2. Trusted By (Logo Partner)
- Menampilkan logo minimalis monokromatik dari 6 klinik besar/partner veteriner terkemuka sebagai elemen penambah nilai kepercayaan.

### 3. CRM Features (Tabbed Grid)
- Piringan fitur CRM dibagi menjadi 4 pilar taktis: *Operational*, *Analytical*, *Collaborative*, dan *Strategic*.
- Navigasi tab interaktif untuk berganti konten grid fitur dengan transisi memudar (fade) yang mulus.

### 4. Dashboard Analytics (Grafik Recharts Nyata)
- Mengintegrasikan library **Recharts** untuk merender diagram analitik fungsional:
  - **Revenue Analytics**: Grafik Area berwarna hijau gradasi (`AreaChart`) memvisualisasikan tren finansial bulanan.
  - **Patient Analytics**: Grafik Batang tiga warna (`BarChart`) membandingkan penambahan pasien anjing, kucing, dan hewan lainnya.
  - **Appointment Analytics**: Grafik Donat (`PieChart`) menyajikan persentase status penyelesaian janji temu.
- **Log Aktivitas Terbaru**: Panel riwayat berjalan (update rekam medis drh., alert stok obat cacing).

### 5. CRM Workflow (Alur Penggunaan 9 Langkah)
- Timeline alur pasien dari *Pemilik Hewan* hingga menjadi *Pelanggan Loyal*.
- Pengguna dapat mengklik setiap langkah untuk memperbarui penjelasan deskripsi peran otomatisasi CRM secara dinamis di kartu detail sebelah kanan.

### 6. FAQ Accordion Premium
- Buka-tutup tanya jawab dengan transisi tinggi elemen yang sangat halus memanfaatkan sensor deteksi tinggi otomatis **Framer Motion**.

### 7. Newsletter & Contact Form dengan Validasi
- **Newsletter**: Validasi email regex instan dengan alert sukses setelah email didaftarkan.
- **Contact Form**: Form data klinik (5 fields input) lengkap dengan penanda field yang kosong (error check) sebelum dikirim.
- **Peta Kantor**: Menyematkan Google Maps dengan filter hitam-putih (grayscale) agar menyatu dengan estetika website premium.

---

## 💻 Arsitektur & Teknis Modular (Fase V3)
Untuk menjaga kebersihan kode dan performa aplikasi, seluruh bagian dipecah menjadi komponen modular:

```
src/
├── sections/
│   ├── Navbar.jsx              # Navigasi Glassmorphism & Menu Mobile
│   ├── Hero.jsx                # Banner Premium & Dashboard Tiruan
│   ├── TrustedBy.jsx           # Baris Logo Partner
│   ├── About.jsx               # Perbandingan Konvensional vs Digital
│   ├── Features.jsx            # Tab 4 Pilar Fitur CRM
│   ├── DashboardPreview.jsx    # Visualisasi Recharts & Log Aktivitas
│   ├── Workflow.jsx            # Diagram Alur Penggunaan Interaktif
│   ├── Benefits.jsx            # Keuntungan Operasional Klinik
│   ├── Testimonials.jsx        # Ulasan Pengguna Rating Bintang
│   ├── FAQ.jsx                 # Accordion Tanya Jawab Animasi
│   ├── Newsletter.jsx          # Berlangganan Buletin Gelap & Validasi
│   ├── Contact.jsx             # Form Demo & Peta Lokasi Gray Filter
│   └── Footer.jsx              # Footer Peta Situs & Back-To-Top
└── pages/
    └── Guest.jsx               # Kompilasi & Penggabung Semua Bagian
```

- **Pustaka Utama**: `framer-motion` (animasi), `recharts` (diagram), `react-icons/fa` (ikon sosial media), `lucide-react` (ikon operasional).
