# Hasil Testing Chatbot

| File Test              | Test Case                              | Status |
|-------------------------|----------------------------------------|--------|
| **greet.test.js**       | match() harus mengenali sapaan dasar | ✅ |
|                         | match() harus mengenali variasi 'selamat ...' | ✅ |
|                         | match() tidak boleh match untuk teks non-sapaan | ✅ |
|                         | handle() harus mengandung sapaan R3D Bot | ✅ |
|                         | handle() harus menampilkan semua menu utama (1–7) | ✅ |
|                         | handle() harus memberi instruksi tentang ketik menu | ✅ |
| **order.test.js**       | match() harus mengenali kata kunci langsung | ✅ |
|                         | match() harus mengenali variasi dengan kata 'cara' | ✅ |
|                         | match() tidak boleh match untuk teks tidak relevan | ✅ |
|                         | handle() harus menyertakan judul cara pemesanan | ✅ |
|                         | handle() harus menyertakan langkah-langkah pemesanan | ✅ |
|                         | handle() harus menyertakan catatan akhir | ✅ |
| **pricelist.test.js**   | match() harus match untuk kata kunci harga | ✅ |
|                         | match() tidak boleh match kalau ada dimensi (biar ke estimate) | ✅ |
|                         | match() tidak boleh match untuk teks random | ✅ |
|                         | handle() harus memulai dengan judul pricelist | ✅ |
|                         | handle() harus menampilkan kategori utama | ✅ |
|                         | handle() harus menampilkan beberapa bahan utama | ✅ |
|                         | handle() harus menampilkan varian resin | ✅ |
|                         | handle() harus ada bagian catatan | ✅ |
|                         | handle() harus ada instruksi untuk estimasi | ✅ |
| **materials.test.js**   | match() harus cocok dengan kata kunci 'bahan' | ✅ |
|                         | match() harus cocok dengan kata kunci 'material' | ✅ |
|                         | match() harus cocok dengan kata kunci 'filament' | ✅ |
|                         | match() harus cocok dengan kata kunci 'perbedaan' | ✅ |
|                         | match() tidak boleh cocok dengan teks yang tidak relevan | ✅ |
|                         | handle() mengembalikan string | ✅ |
|                         | handle() harus menyebutkan PLA | ✅ |
|                         | handle() harus menyebutkan ABS | ✅ |
|                         | handle() harus menyebutkan PETG | ✅ |
|                         | handle() harus menyebutkan TPU | ✅ |
|                         | handle() harus menyebutkan Nylon | ✅ |
|                         | handle() harus menyebutkan Resin | ✅ |
|                         | handle() harus memberi catatan pemilihan bahan | ✅ |
| **extractor.test.js**   | extractDims: parsing dimensi cm | ✅ |
|                         | extractDims: parsing dimensi mm | ✅ |
|                         | extractDims: return null kalau tidak ada dimensi | ✅ |
|                         | extractQty: parsing jumlah pcs | ✅ |
|                         | extractQty: parsing jumlah buah | ✅ |
|                         | extractQty: parsing jumlah unit | ✅ |
|                         | extractQty: default 1 kalau tidak ada jumlah | ✅ |
|                         | extractMaterial: default PLA kalau tidak ada bahan | ✅ |
|                         | extractMaterial: bisa parsing ABS | ✅ |
|                         | extractMaterial: bisa parsing PETG | ✅ |
|                         | extractMaterial: bisa parsing TPU | ✅ |
|                         | extractMaterial: bisa parsing Nylon | ✅ |
|                         | extractMaterial: bisa parsing Nylon (PA12) | ❌ |
|                         | extractMaterial: bisa parsing Nylon + Fiberglass | ❌ |
|                         | extractMaterial: bisa parsing resin varian | ✅ |
| **estimate.test.js**    | match() harus match 'estimasi' | ✅ |
|                         | match() harus match 'kira-kira' | ✅ |
|                         | match() harus match pola dimensi | ✅ |
|                         | match() tidak boleh untuk teks random | ✅ |
|                         | handle() fallback jika tidak ada dimensi | ✅ |
|                         | handle() estimasi default PLA | ✅ |
|                         | handle() estimasi ABS | ✅ |
|                         | handle() estimasi PETG | ✅ |
|                         | handle() default PLA jika bahan unknown | ✅ |
|                         | handle() multiple quantity | ✅ |
| **fallback.test.js**    | match() selalu true | ✅ |
|                         | handle() harus memberi pesan maaf | ✅ |
|                         | handle() menampilkan semua menu utama | ✅ |
|                         | handle() instruksi ketik menu | ✅ |
| **operational.test.js** | match() harus match jam operasional | ✅ |
|                         | match() tidak boleh untuk teks random | ✅ |
|                         | handle() menampilkan jam operasional | ✅ |
| **location.test.js**    | match() harus match lokasi | ✅ |
|                         | match() tidak boleh untuk teks random | ✅ |
|                         | handle() menampilkan alamat | ✅ |
| **promo.test.js**       | match() harus mengenali promo | ✅ |
|                         | match() tidak boleh untuk teks random | ✅ |
|                         | handle() default jika tidak ada promo | ✅ |
|                         | handle() menampilkan daftar promo | ✅ |
