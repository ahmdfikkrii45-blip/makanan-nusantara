# 🚀 PANDUAN LENGKAP SETUP & HOSTING DI GITHUB PAGES

Panduan ini akan membimbing Anda step-by-step untuk upload website ke GitHub dan mengaktifkan GitHub Pages.

---

## 📋 PERSIAPAN AWAL

### Yang Anda Butuhkan

- ✅ Akun GitHub (gratis)
- ✅ Semua file website (HTML, CSS, JS, JSON)
- ✅ Git installed (atau manual upload)
- ✅ Web browser (Chrome, Firefox, Edge, Safari)

### File yang Harus Ada

```
Cita Rasa Nusantara Website Files:
├── index.html              ✅ REQUIRED
├── products.html           ✅ REQUIRED
├── about.html             ✅ REQUIRED
├── contact.html           ✅ REQUIRED
├── style.css              ✅ REQUIRED
├── script.js              ✅ REQUIRED
├── manifest.json          ✅ REQUIRED
├── README.md              ✅ REQUIRED
└── .gitignore            ✅ RECOMMENDED
```

---

## 🔑 STEP 1: BUAT AKUN GITHUB

### Jika Belum Punya Akun

1. Buka https://github.com
   ```
   ┌─────────────────────────────────────┐
   │  GitHub Home                        │
   │  ✓ Klik "Sign up"                  │
   │  ✓ Isi email, password, username    │
   │  ✓ Verify email                     │
   │  ✓ Setup profile                    │
   └─────────────────────────────────────┘
   ```

2. Tunggu verifikasi email dari GitHub

3. Verify email address Anda

### Jika Sudah Punya Akun

- Login ke GitHub dengan username & password

---

## 📦 STEP 2: BUAT REPOSITORY BARU

### Method A: Via GitHub Web Interface (RECOMMENDED)

**Langkah:**

1. Login ke GitHub
2. Klik icon "+" di sudut kanan atas navbar
   ```
   ┌──────────────────────────────┐
   │ Signed in as: username ▼     │
   │ [+] New repository           │
   │     New organization         │
   │     New gist                 │
   └──────────────────────────────┘
   ```

3. Klik "New repository"

4. Isi form dengan:
   ```
   ┌─────────────────────────────────────┐
   │ Repository name:                    │
   │ cita-rasa-nusantara                │
   │                                     │
   │ Description (optional):             │
   │ Platform penjualan makanan          │
   │ tradisional Indonesia               │
   │                                     │
   │ ○ Public  ○ Private                 │
   │ (Pilih Public agar bisa diakses)   │
   │                                     │
   │ ☐ Add a README file                │
   │ ☐ Add .gitignore                   │
   │ ☐ Choose a license                 │
   │ (Biarkan unchecked semua)          │
   │                                     │
   │ [Create repository]                │
   └─────────────────────────────────────┘
   ```

5. Tunggu repository dibuat

**Hasil:**
```
Anda akan redirect ke halaman repository
URL: github.com/USERNAME/cita-rasa-nusantara
Status: Empty repository
```

---

## 📤 STEP 3: UPLOAD FILES KE GITHUB

### Option A: Upload Langsung via Web (TERMUDAH)

**Langkah Demi Langkah:**

1. Di halaman repository kosong, klik **"uploading an existing file"** atau:
   - Klik "Add file" → "Upload files"

2. Visual interface:
   ```
   ┌──────────────────────────────────────┐
   │ Drag files here or click to select   │
   │                                      │
   │ Allowed: All file types              │
   │ Max size: 25 MB per file             │
   └──────────────────────────────────────┘
   ```

3. Drag & drop semua file atau klik dan pilih:
   - index.html
   - products.html
   - about.html
   - contact.html
   - style.css
   - script.js
   - manifest.json
   - README.md
   - .gitignore

4. Setelah file terupload, isi pesan commit:
   ```
   Commit message:
   Initial commit - Cita Rasa Nusantara website
   ```

5. Klik **"Commit changes"**

6. Files akan terupload ke repository

### Option B: Upload via Git Command (ADVANCED)

**Persiapan:**

1. Install Git:
   - Windows: https://git-scm.com/download/win
   - Mac: `brew install git`
   - Linux: `apt-get install git`

2. Setup Git config:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your@email.com"
   ```

**Upload Process:**

1. Buka Terminal/Command Prompt

2. Navigate ke folder project:
   ```bash
   cd path/to/cita-rasa-nusantara
   ```

3. Initialize Git repository:
   ```bash
   git init
   ```

4. Add semua files:
   ```bash
   git add .
   ```

5. Commit:
   ```bash
   git commit -m "Initial commit - Cita Rasa Nusantara website"
   ```

6. Add remote (ganti USERNAME dengan username GitHub Anda):
   ```bash
   git remote add origin https://github.com/USERNAME/cita-rasa-nusantara.git
   ```

7. Push ke GitHub:
   ```bash
   git branch -M main
   git push -u origin main
   ```

8. Login dengan GitHub credentials jika diminta

**Done!** Files sudah terupload.

---

## ⚙️ STEP 4: SETUP GITHUB PAGES

### Setting GitHub Pages

1. Di halaman repository, klik **"Settings"**
   ```
   Kira-kira di sebelah kanan, sebelum "Insights"
   
   ┌────────────────────────────────┐
   │ Code │ Issues │ Pull requests  │
   │ Discussions │ ... │ Settings   │
   └────────────────────────────────┘
   ```

2. Di sidebar kiri, scroll down dan klik **"Pages"**
   ```
   Sidebar Menu:
   ├── General
   ├── Branches
   ├── Secrets and variables
   ├── ...
   └── Pages ← KLIK INI
   ```

3. Di bagian **"Source"**, setting:
   - Build and deployment: "Deploy from a branch"
   - Branch: Pilih "main" dan folder "(root)"
   ```
   ┌──────────────────────────────┐
   │ Build and deployment         │
   │                              │
   │ Source: Deploy from a branch │
   │ Branch: [main ▼] [(root) ▼]  │
   │ [Save]                       │
   └──────────────────────────────┘
   ```

4. Klik **"Save"**

5. Tunggu proses build (biasanya 1-2 menit)

6. Anda akan melihat:
   ```
   ✓ Your site is live at:
     https://USERNAME.github.io/cita-rasa-nusantara
   ```

---

## 🎉 STEP 5: VERIFIKASI WEBSITE LIVE

### Test Website

1. Copy URL yang diberikan GitHub:
   ```
   https://USERNAME.github.io/cita-rasa-nusantara
   ```
   (Ganti USERNAME dengan username GitHub Anda)

2. Buka di web browser

3. Verify:
   - ✅ Homepage loading dengan baik
   - ✅ Styling & warna muncul (bukan white/unstyled)
   - ✅ Navigation links bekerja
   - ✅ Add to cart berfungsi
   - ✅ Filter & search bekerja
   - ✅ Responsive di mobile

### Contoh URL

Jika username Anda adalah "fikri", website Anda akan live di:
```
https://fikri.github.io/cita-rasa-nusantara
```

---

## 📝 CONTOH SETUP (SCREENSHOT TEXT)

### Halaman Repository Awal

```
┌─────────────────────────────────────────────────────┐
│                                                     │
│  fikri / cita-rasa-nusantara                       │
│  Public repository                                  │
│                                                     │
│  ┌──────────────────────────────────────────────┐  │
│  │ Code │ Issues │ Pull requests │ ... │ ⚙️     │  │
│  └──────────────────────────────────────────────┘  │
│                                                     │
│  📁 Main branch • 0 commits                        │
│                                                     │
│  ├── 📄 index.html                                │
│  ├── 📄 products.html                            │
│  ├── 📄 about.html                               │
│  ├── 📄 contact.html                             │
│  ├── 🎨 style.css                                │
│  ├── ⚙️ script.js                                │
│  ├── 📦 manifest.json                            │
│  ├── 📖 README.md                                │
│  └── 📄 .gitignore                               │
│                                                     │
└─────────────────────────────────────────────────────┘
```

### Halaman Settings → Pages

```
┌──────────────────────────────────────────────────┐
│ Pages                                            │
│                                                  │
│ GitHub Pages                                    │
│                                                  │
│ Build and deployment                            │
│ Source: [Deploy from a branch ▼]               │
│ Branch: [main ▼] [(root) ▼]                    │
│ [Save]                                          │
│                                                  │
│ ✓ Your site is live at:                        │
│   https://fikri.github.io/cita-rasa-nusantara  │
│                                                  │
│ Deploy status: ✓ Last deployed 2 minutes ago   │
│                                                  │
└──────────────────────────────────────────────────┘
```

---

## 🔗 CUSTOM DOMAIN (OPTIONAL)

Jika ingin custom domain (misal: www.citarasanusantara.com):

1. Beli domain di registrar:
   - Namecheap, GoDaddy, Domain.com, etc

2. Di GitHub Settings → Pages:
   - Bagian "Custom domain"
   - Input: `citarasanusantara.com`
   - Klik Save

3. Di registrar, setup DNS:
   - Create CNAME record pointing ke: `fikri.github.io`

4. Tunggu DNS propagate (24 jam)

**Note:** Tidak required untuk mulai, bisa ditambah nanti.

---

## ✏️ UPDATE & MAINTENANCE

### Mengupdate Website

**Via GitHub Web:**
1. Klik file yang ingin diedit (misal: products.html)
2. Klik edit icon (pensil)
3. Edit content
4. Klik "Commit changes"

**Via Git:**
```bash
# Edit files locally
# Kemudian:
git add .
git commit -m "Update: Tambah produk baru"
git push origin main
```

**Deploy Otomatis:**
- Setiap kali push ke GitHub, GitHub Pages automatically rebuild
- Update biasanya live dalam 1-2 menit

---

## ❌ TROUBLESHOOTING

### Problem: Website 404 Not Found

**Solusi:**
1. Verify URL benar: `https://USERNAME.github.io/cita-rasa-nusantara`
2. Check Settings → Pages apakah aktif
3. Pastikan branch dipilih "main" dan folder "(root)"
4. Tunggu 5 menit untuk deployment complete
5. Hard refresh browser (Ctrl+Shift+R)

### Problem: Styling tidak muncul (hanya white page)

**Penyebab:** CSS file path salah

**Solusi:**
1. Verify `style.css` ada di root folder
2. Pastikan file names case-sensitive
3. Di HTML, check: `<link rel="stylesheet" href="style.css">`
4. Hard refresh browser (Ctrl+Shift+R)

### Problem: JavaScript tidak jalan

**Solusi:**
1. Verify `script.js` ada di root
2. Check console (F12 → Console) untuk errors
3. Verify script tag: `<script src="script.js"></script>`
4. Hard refresh browser

### Problem: Files tidak terupload

**Solusi:**
1. Check file size (max 25 MB per file)
2. Verify internet connection stabil
3. Try browser lain (Chrome, Firefox)
4. Try manual upload via web interface

### Problem: "Failed to deploy"

**Solusi:**
1. Verify index.html exists di root
2. Verify no special characters di filenames
3. Check untuk encoding issues (UTF-8)
4. Check GitHub Actions tab untuk error logs

---

## 📊 GITHUB PAGES STATUS CHECKING

### Via GitHub Web

1. Go to repository
2. Klik "Actions" tab
3. Lihat workflow "Deploy to GitHub Pages"
4. Status:
   - 🟢 Green checkmark = Success
   - 🔴 Red X = Failed (check logs)
   - 🟡 Yellow = Running

### Via Command Line

```bash
cd repository-folder
git status
git log --oneline
```

---

## 🎓 BEST PRACTICES

### Do's ✅

- ✅ Keep files organized in root folder
- ✅ Use meaningful commit messages
- ✅ Test website sebelum push
- ✅ Keep README updated
- ✅ Use .gitignore untuk files unnecessary
- ✅ Regular backups locally
- ✅ Check browser console untuk errors

### Don'ts ❌

- ❌ Jangan upload file yang terlalu besar
- ❌ Jangan ubah repository name setelah deploy
- ❌ Jangan delete index.html
- ❌ Jangan push confidential info (keys, passwords)
- ❌ Jangan rename folders after deploy
- ❌ Jangan upload binary files unnecessarily

---

## 🔐 SECURE BEST PRACTICES

### Jika ada backend/API

```javascript
// ❌ JANGAN HARDCODE
const API_KEY = "sk_live_12345...";  // BAHAYA!

// ✅ GUNAKAN ENVIRONMENT VARIABLES
// (Butuh backend service)
const API_KEY = process.env.API_KEY;
```

### GitHub doesn't allow

- Private API keys
- Database passwords
- OAuth tokens
- SSH keys
- Secrets apapun

---

## 📚 REFERENCE LINKS

### GitHub Pages Documentation
- Official docs: https://pages.github.com/
- GitHub Pages Help: https://docs.github.com/en/pages

### Git Commands
- Git documentation: https://git-scm.com/doc
- Git tutorial: https://git-scm.com/book

### Useful Tools
- Markdown preview: https://markdown-it.github.io/
- HTML validator: https://validator.w3.org/
- CSS validator: https://jigsaw.w3.org/css-validator/

---

## ✨ TIPS & TRICKS

### 1. Add GitHub Badge ke README

```markdown
[![GitHub Pages](https://github.com/USERNAME/cita-rasa-nusantara/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/USERNAME/cita-rasa-nusantara/actions/workflows/pages/pages-build-deployment)
```

### 2. Share Website

```
Anda bisa sharing URL ke teman:
https://fikri.github.io/cita-rasa-nusantara

Atau shorten dengan bit.ly:
https://bit.ly/citarasa
```

### 3. Portfolio

Tambahkan ke portfolio/CV Anda:
```
Project: Cita Rasa Nusantara E-commerce
Link: https://USERNAME.github.io/cita-rasa-nusantara
Description: Website penjualan makanan tradisional Indonesia
Technologies: HTML5, CSS3, JavaScript, GitHub Pages
```

### 4. Backup Locally

```bash
# Clone repository to backup
git clone https://github.com/USERNAME/cita-rasa-nusantara.git backup-folder
```

---

## 🎉 SELESAI!

**Congratulations!** 

Anda sekarang punya website live di GitHub Pages yang bisa diakses dari manapun! 🎊

### What's Next?

- [ ] Share website ke teman & keluarga
- [ ] Optimize untuk mobile
- [ ] Add more products
- [ ] Setup email notifications
- [ ] Integrate payment gateway
- [ ] Setup analytics
- [ ] Add SSL certificate (automatic dengan GitHub)
- [ ] Custom domain (optional)

---

## 💬 SUPPORT

Jika ada pertanyaan atau error:

1. **Check GitHub Status**: https://www.githubstatus.com/
2. **Search existing issues**: https://github.com/USERNAME/cita-rasa-nusantara/issues
3. **Create new issue** jika belum ada
4. **Check browser console** (F12) untuk JavaScript errors
5. **Check GitHub Actions** untuk deployment errors

---

**Happy hosting! 🚀**

Dibuat dengan ❤️ untuk memudahkan Anda launch website

---

*Last updated: 2024*
*GitHub Pages Documentation: https://pages.github.com/*
