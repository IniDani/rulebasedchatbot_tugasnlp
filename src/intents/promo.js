// intents/promo.js
const Promo = require("../models/promo"); // pastikan model sudah benar

// Cek apakah user mengetik kata promo/diskon/penawaran/voucher
async function match(text) {
  return /\b(promo|diskon|penawaran|voucher)\b/i.test(text);
}

// Ambil promo aktif dari MongoDB
async function handle() {
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // reset jam ke 00:00:00

  const promos = await Promo.find({
    validUntil: { $gte: today } // hanya promo yang masih berlaku
  }).sort({ validUntil: 1 });

  if (!promos.length) {
    return "❌ Saat ini belum ada promo yang tersedia. Nantikan promo menarik berikutnya ya! 😉";
  }

  let response = "🎉 *Promo Cetak 3D Terkini* 🎉\n\n";
  promos.forEach((p, i) => {
    response += `${i + 1}. *${p.title}* 🎯\n`;
    response += `   ${p.description}\n`;
    response += `   📅 Berlaku sampai: ${new Date(p.validUntil).toLocaleDateString("id-ID")}\n`;
    response += `   💰 Diskon: ${p.discount}%\n\n`;
  });

  return response.trim();
}

module.exports = { match, handle };
