const Promo = require("../models/promo");

async function match(text) {
  return /\b(promo|diskon|penawaran|voucher)\b/i.test(text);
}

async function handle() {
  const promos = await Promo.find({ validUntil: { $gte: new Date() } }).sort({
    validUntil: 1,
  });

  if (!promos.length) {
    return "❌ Saat ini belum ada promo yang tersedia. Nantikan promo menarik berikutnya ya! 😉";
  }

  let response = "🎉 *Promo Cetak 3D Terkini* 🎉\n\n";
  promos.forEach((p, i) => {
    response += `${i + 1}. *${p.title}* 🎯\n`;
    response += `   ${p.description}\n`;
    response += `   📅 Berlaku sampai: ${p.validUntil.toLocaleDateString("id-ID")}\n`;
    response += `   💰 Diskon: ${p.discount}%\n\n`;
  });

  return response.trim();
}

module.exports = { match, handle };
