async function match(text) {
  const hasDim = /\d+\s*[x×]\s*\d+/i.test(text);
  const hasKw = /\b(harga|biaya|rate|tarif|pricelist)\b/i.test(text);
  return hasKw && !hasDim ? {} : null;
}

async function handle() {
  return (
    "*📋 Daftar Harga 3D Printing (per gram)*\n\n" +

    "*Filament FDM (Fused Deposition Modeling)*\n" +
    "• PLA: Rp180 – Rp275 per gram (–Rp275) – filament 1 kg sekitar Rp180.000–Rp275.000 🎯\n" +
    "• ABS: Rp200 – Rp300 per gram (estimasi)\n" +
    "• PETG: Rp250 – Rp350 per gram\n" +
    "• TPU: Rp500 – Rp800 per gram\n" +
    "• Nylon: Rp800 – Rp1.500 per gram\n\n" +

    "*Resin SLA/DLP*\n" +
    "• Standard Resin: Rp600 – Rp1.200 per gram\n" +
    "• Tough/Durable Resin: Rp1.500 – Rp3.000 per gram\n" +
    "• Flexible Resin: Rp2.000 – Rp4.000 per gram\n\n" +

    "*Bubuk SLS*\n" +
    "• Nylon (PA12): Rp2.000 – Rp4.000 per gram\n" +
    "• Nylon + Fiberglass: Rp2.500 – Rp5.000 per gram\n\n" +

    "*ℹ️ Catatan*\n" +
    "Harga berubah tergantung kualitas, warna khusus (glow, metalik), dan jumlah pembelian.\n\n" +
    "Ketik atau kirim estimasi (dengan dimensi) untuk perhitungan otomatis."
  );
}

module.exports = { match, handle };
