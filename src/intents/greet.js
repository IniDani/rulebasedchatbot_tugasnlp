async function match(text) {
  return /\b(hai|halo|selamat\s(pagi|siang|sore|malam)|menu)\b/i.test(text);
}

async function handle() {
  return (
    "Halo! Saya *R3D Bot* 🤖.\n" +
    "Berikut pilihan layanan yang bisa saya bantu:\n\n" +
    "1. *Daftar Harga* percetakan 3D\n" +
    "2. *Kalkulator Estimasi* cetak 3D\n" +
    "3. *Daftar Bahan* yang tersedia\n" +
    "4. *Lokasi* percetakan\n\n" +
    "5. *Jam Operasional* percetakan\n\n" +
    "6. *Cara Pemesanan* layanan cetak 3D\n\n" +
    "Ketik *menu* untuk menampilkan pilihan ini kapan saja."
  );
}

module.exports = { match, handle };
