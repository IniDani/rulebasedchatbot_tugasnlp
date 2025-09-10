// src/intents/fallback.js
const { reflect } = require("../reflection");

async function match() {
  // fallback selalu match terakhir
  return true;
}

// Sanitizer ringan agar aman dipantulkan dan tidak terlalu panjang
function sanitize(text) {
  if (typeof text !== "string") return "";
  return text.replace(/\s+/g, " ").trim().slice(0, 200);
}

async function handle(_, text) {
  const echoed = reflect(sanitize(text || ""));
  const preface = echoed
    ? `Aku menangkap kamu mengatakan: _"${echoed}"._\n`
    : "";

  return (
    preface +
    "Maaf, saya belum memahami maksud kamu 🤖.\n\n" +
    "Berikut pilihan layanan yang bisa saya bantu:\n\n" +
    "1. *Daftar Harga* percetakan 3D\n" +
    "2. *Kalkulator Estimasi* cetak 3D\n" +
    "3. *Daftar Bahan* yang tersedia\n" +
    "4. *Lokasi* percetakan\n" +
    "5. *Jam Operasional* percetakan\n" +
    "6. *Cara Pemesanan* layanan cetak 3D\n" +
    "7. *Cek Promo* terkini\n\n" +
    "Ketik *menu* untuk menampilkan pilihan ini kapan saja."
  );
}

module.exports = { match, handle, intentName: "fallback" };
