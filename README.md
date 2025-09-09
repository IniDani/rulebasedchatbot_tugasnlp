# R3D Bot – WhatsApp 3D Printing Assistant
disusun oleh:
1. Muhammad Rafli Ramadani (22/497787/TK/54571)
2. Muhammad Budi Setiawan (22/505064/TK/55254)

R3D Bot adalah chatbot WhatsApp berbasis aturan (rule-based) yang membantu pelanggan layanan percetakan 3D untuk:
- Melihat daftar harga cetak 3D
- Menghitung estimasi biaya otomatis
- Mengetahui bahan/material yang tersedia
- Mengetahui jam operasional dan lokasi
- Mendapatkan informasi promo terbaru
- Menyediakan panduan pemesanan layanan cetak 3D

Bot ini dibangun menggunakan `Node.js`, `MongoDB`, dan `whatsapp-web.js`, dibuat untuk proyek mata kuliah NLP berbasis aturan untuk percetakan atau bisnis serupa.

## Fitur Utama
| Fitur | Deskripsi |
| -- | --- |
| Daftar Harga | Menampilkan pricelist 3D printing per gram untuk filament, resin, dan bubuk SLS |
| Kalkulator Estimasi | Menghitung estimasi biaya otomatis berdasarkan dimensi, bahan, dan jumlah |
| Daftar Bahan | Memberikan informasi karakteristik bahan 3D printing seperti PLA, ABS, PETG, TPU, Nylon, Resin |
| Jam Operasional | Memberikan info jam buka & tutup percetakan |
| Lokasi | Memberikan alamat percetakan dan link Google Maps |
| Promo | Menampilkan promo aktif dari MongoDB |
| Cara Pemesanan | Panduan lengkap langkah-langkah pemesanan layanan |

## Teknologi yang Digunakan
- Node.js
- MongoDB
- whatsapp-web.js
- Winston
- Jest

## Instalasi & Setup
1. Clone Repository
```bash
git clone https://github.com/IniDani/rulebasedchatbot_tugasnlp.git
cd rulebasedchatbot_tugasnlp
```
2. Install dependencies
```bash
npm install
```
3. Buat file `.env` di root dengan variabel
```
MONGO_URI=<MongoDB Connection URI>
```

4. Jalankan bot
```bash
npm run dev
```

5. Scan QR Code Whatsapp yang muncul di terminal untuk menghubungkan ke akun.

## Test
Testing dapat dilakukan menggunakan Jest dengan perintah di terminal:
```bash
npm test
```
