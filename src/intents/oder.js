async function match(text) {
  return /\b(order|pesan|pemesanan|cara\s+(order|pesan|pemesanan)|bagaimana\s+(cara|untuk)\s+(order|pesan))\b/i.test(
    text
  );
}

async function handle() {
  return (
    "🛒 *Cara Pemesanan Layanan Cetak 3D*\n\n" +
    "1. Kirim *file desain* dalam format *.stl* (atau beri keterangan ukuran jika belum punya file).\n" +
    "2. Tentukan *bahan* (PLA, ABS, PETG, Resin, dll) dan *jumlah pcs*.\n" +
    "3. Bot akan memberikan *estimasi harga* otomatis.\n" +
    "4. Jika setuju, konfirmasi untuk dibuatkan *quotation resmi*.\n" +
    "5. Lakukan *pembayaran* sesuai invoice.\n" +
    "6. Proses cetak akan dimulai, dan hasil bisa *diambil langsung* atau *dikirim* ke alamat Anda.\n\n" +
    "📌 Catatan: Untuk hasil terbaik, pastikan desain sudah final sebelum dicetak."
  );
}

module.exports = { match, handle };
