async function match() {
  // fallback selalu match terakhir
  return true;
}

async function handle() {
  return (
    "Maaf, saya belum memahami maksud kamu 🤖.\n\n" +
    "Berikut pilihan layanan yang bisa saya bantu:\n\n" +
    "1️⃣ *Daftar Harga* percetakan 3D\n" +
    "2️⃣ *Kalkulator Estimasi* cetak 3D\n" +
    "3️⃣ *Daftar Bahan* yang tersedia\n" +
    "4️⃣ *Lokasi* percetakan\n\n" +
    "Ketik *menu* untuk menampilkan pilihan ini kapan saja."
  );
}

module.exports = { match, handle };
