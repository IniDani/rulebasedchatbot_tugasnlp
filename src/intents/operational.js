// src/intents/operasional.js
async function match(text) {
  return /\b(jam|buka|operasional|kapan)\b/i.test(text) &&
         /\b(buka|operasional|jam)\b/i.test(text);
}

async function handle() {
  return (
    "⏰ *Jam Operasional R3D Printing*\n\n" +
    "🗓️ Senin – Jumat: *08.00 – 21.00 WIB*\n" +
    "🛑 Sabtu & Minggu: *Tutup* (karena capstone)\n\n" +
    "Silakan hubungi kami di jam operasional untuk respon lebih cepat. 🙏"
  );
}

module.exports = { match, handle };
