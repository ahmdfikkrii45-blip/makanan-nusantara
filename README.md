# 🍲 Cita Rasa Nusantara - Website Penjualan Makanan Daerah Indonesia

Platform e-commerce modern untuk menjual dan membeli makanan tradisional dari berbagai daerah di Indonesia dengan desain yang colorful dan responsif.

## 📋 Fitur Utama

✨ **Desain Colorful & Modern**
- Gradient warna cerah yang mencerminkan budaya Indonesia
- Interface yang user-friendly dan responsif
- Animasi smooth dan transisi yang menarik

🛒 **Shopping Cart Functionality**
- Tambah produk ke keranjang
- Notifikasi real-time saat produk ditambahkan
- Summary keranjang dengan total harga

🔍 **Filter & Search**
- Filter produk berdasarkan kategori daerah (Sumatra, Jawa, Bali, Kalimantan, Sulawesi, Nusa Tenggara)
- Search bar untuk mencari produk spesifik
- Filter aktif dengan visual feedback

📱 **Responsive Design**
- Optimal untuk desktop, tablet, dan mobile
- Mobile-first approach
- Performa cepat dan loading optimal

📄 **Multiple Pages**
- **Beranda (index.html)** - Landing page dengan featured products
- **Menu Makanan (products.html)** - Katalog lengkap semua produk
- **Tentang Kami (about.html)** - Informasi perusahaan dan tim
- **Kontak (contact.html)** - Form kontak dan FAQ

## 📁 Struktur File

```
cita-rasa-nusantara/
├── index.html          # Halaman beranda
├── products.html       # Katalog produk
├── about.html         # Tentang kami
├── contact.html       # Kontak & FAQ
├── style.css          # Styling utama (colorful & responsive)
├── script.js          # Fungsionalitas JavaScript
├── README.md          # File ini
└── .gitignore         # File yang di-ignore Git
```

## 🚀 Cara Hosting di GitHub Pages

### Langkah 1: Persiapkan Repository

1. **Buat akun GitHub** (jika belum punya)
   - Kunjungi https://github.com
   - Daftar akun baru

2. **Buat Repository Baru**
   - Klik "+" di sudut kanan atas → "New repository"
   - Nama repository: `cita-rasa-nusantara`
   - Jangan buat README, .gitignore, atau license
   - Klik "Create repository"

### Langkah 2: Upload File ke GitHub

#### **Cara A: Menggunakan Git (Recommended)**

1. **Install Git** (jika belum)
   - Download dari https://git-scm.com
   - Install dan setup

2. **Setup di Terminal/Command Prompt**
   ```bash
   # Buka folder project
   cd path/ke/cita-rasa-nusantara
   
   # Inisialisasi Git repository
   git init
   
   # Tambahkan semua file
   git add .
   
   # Commit
   git commit -m "Initial commit - Cita Rasa Nusantara website"
   
   # Tambahkan remote (ganti USERNAME dengan username GitHub Anda)
   git remote add origin https://github.com/USERNAME/cita-rasa-nusantara.git
   
   # Push ke GitHub
   git branch -M main
   git push -u origin main
   ```

#### **Cara B: Upload Manual via GitHub Web Interface**

1. Buka repository di GitHub
2. Klik "Add file" → "Upload files"
3. Drag semua file ke area upload atau pilih file
4. Klik "Commit changes"

### Langkah 3: Setup GitHub Pages

1. Di halaman repository, klik **Settings**
2. Di sidebar, klik **Pages**
3. Di bagian "Source", pilih branch **main**
4. Pilih folder **(root)**
5. Klik **Save**
6. GitHub akan show URL website Anda (biasanya: `https://USERNAME.github.io/cita-rasa-nusantara`)
7. Tunggu beberapa menit hingga website live

### Langkah 4: Verify Website Live

- Akses URL: `https://USERNAME.github.io/cita-rasa-nusantara`
- Website Anda sudah live dan bisa diakses dari mana saja!

## 🎨 Warna & Desain

Website menggunakan **color palette yang vibrant** mencerminkan budaya Indonesia:

- **Primary Orange**: `#FF6B35` - Energik dan hangat
- **Warm Orange**: `#F7931E` - Ceria dan ramah
- **Golden Yellow**: `#FFB81C` - Kemewahan & keanggunan
- **Forest Green**: `#04A777` - Alami & segar
- **Ocean Blue**: `#0077B6` - Kepercayaan & stabilitas

## 💻 Teknologi yang Digunakan

- **HTML5** - Struktur semantic
- **CSS3** - Modern styling dengan Grid & Flexbox
- **JavaScript (Vanilla)** - Fungsionalitas interaktif
- **Git** - Version control
- **GitHub Pages** - Free hosting

## 📦 Produk di Website

Website ini menampilkan 24+ produk makanan tradisional dari:

- **Sumatera** - Rendang, Lumpia, Martabak, Pempek
- **Jawa** - Soto Ayam, Gado-gado, Perkedel, Soto Banjar
- **Bali** - Bebek Betutu, Babi Guling, Sate Babi, Sambal Matah
- **Kalimantan** - Lempah Kuah, Soto Banjar, Bingka Landak
- **Sulawesi** - Cakalang, Tinutuan, Woku
- **Nusa Tenggara** - Soto Ayam Kupang, Sate Kambing, Sambal NTT

## 🔧 Customization

### Mengubah Warna

Edit file `style.css`, ubah variabel di bagian `:root`:
```css
:root {
    --color-primary: #FF6B35;      /* Ubah warna utama */
    --color-secondary: #F7931E;    /* Ubah warna secondary */
    /* ... */
}
```

### Menambah Produk

1. Buka `products.html`
2. Tambahkan card baru:
```html
<div class="product-card" data-region="sumatra">
    <div class="product-image"><span class="product-emoji">🥘</span></div>
    <div class="product-info">
        <h3>Nama Produk</h3>
        <p class="region">📍 Lokasi</p>
        <p class="description">Deskripsi produk</p>
        <div class="rating">⭐⭐⭐⭐⭐ (jumlah)</div>
        <span class="price">Rp 50.000</span>
        <button class="btn-cart" onclick="addToCart('Nama Produk', 50000)">+ Keranjang</button>
    </div>
</div>
```

### Mengubah Konten

- **Nama Perusahaan**: Ubah "Cita Rasa Nusantara" ke nama pilihan Anda
- **Kontak**: Edit di footer dan halaman contact
- **Tentang Kami**: Edit file `about.html`

## 📱 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## ⚡ Performance Tips

1. Website sudah dioptimalkan untuk performance
2. Gunakan minifier CSS/JS untuk ukuran lebih kecil (optional)
3. Pertimbangkan CDN untuk asset jika traffic tinggi

## 🤝 Support & Maintenance

- Update konten secara berkala
- Monitor analytics (gunakan Google Analytics)
- Dapatkan feedback dari pelanggan
- Update produk dan harga secara reguler

## 📄 Lisensi & Terms

Website ini dapat digunakan untuk tujuan komersial maupun personal. Modifikasi sesuai kebutuhan.

## 🎯 Next Steps

1. ✅ Upload ke GitHub
2. ✅ Setup GitHub Pages
3. ✅ Test website
4. 📧 Tambahkan email integration untuk form kontak (optional)
5. 📊 Integrasikan Google Analytics (optional)
6. 🛒 Setup payment gateway (Midtrans, Stripe, etc) untuk transaksi nyata
7. 📱 Develop mobile app (optional)

## 📞 Bantuan

Jika ada pertanyaan atau error:
1. Check browser console (F12 → Console)
2. Verify semua file sudah ter-upload
3. Clear browser cache (Ctrl+Shift+Del)
4. Tunggu 5 menit untuk GitHub Pages deployment

---

**Made with ❤️ for Indonesian Culinary Heritage**

Selamat menikmati website Cita Rasa Nusantara Anda! 🍜🥘🌶️
