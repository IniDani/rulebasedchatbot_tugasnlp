const {
  extractDims,
  extractQty,
  extractMaterial,
} = require("../utils/extractors");

async function match(text) {
  const hasKw = /\b(estimasi|kira.?kira)\b/i.test(text);
  const hasDim = !!extractDims(text);

  return hasKw || hasDim ? {} : null;
}

async function handle(_, text) {
  const dims = extractDims(text);
  const qty = extractQty(text) || 1;
  const mat = extractMaterial(text) || "PLA";

  // Harga per gram dari pricelist
  const priceTable = {
    PLA: [180, 275],
    ABS: [200, 300],
    PETG: [250, 350],
    TPU: [500, 800],
    Nylon: [800, 1500],
    "Standard Resin": [600, 1200],
    "Tough Resin": [1500, 3000],
    "Flexible Resin": [2000, 4000],
    "Nylon (PA12)": [2000, 4000],
    "Nylon + Fiberglass": [2500, 5000],
  };

  // 🔹 Fallback kalau tidak ada dimensi
  if (!dims || dims.length < 3) {
    return (
      "⚠️ Untuk menghitung estimasi saya butuh informasi lebih lengkap.\n\n" +
      "Mohon sertakan format:\n" +
      "👉 `estimasi [bahan] [LxWxH] cm [jumlah] pcs`\n\n" +
      "Contoh:\n" +
      "`estimasi PLA 10x5x3 cm 2 pcs`\n\n" +
      "Bahan yang tersedia: PLA, ABS, PETG, TPU, Nylon, Resin, dll."
    );
  }

  // 🔹 Hitung volume
  const vol_mm3 = dims.reduce((a, b) => a * b, 1);
  const vol_cm3 = vol_mm3 / 1000;

  // Asumsikan densitas rata-rata 1 g/cm³ untuk polymer
  const grams = vol_cm3 * 1;

  const [minP, maxP] = priceTable[mat] || priceTable["PLA"];
  const minEst = Math.round(grams * minP) * qty;
  const maxEst = Math.round(grams * maxP) * qty;

  return (
    `Perkiraan *kasar* untuk ${qty} pcs bahan *${mat}* (~${vol_cm3.toFixed(
      1
    )} cm³ ≈ ${grams.toFixed(1)} g):\n` +
    `💰 Rp${minEst.toLocaleString("id-ID")} – Rp${maxEst.toLocaleString(
      "id-ID"
    )}\n\n`
  );
}

module.exports = { match, handle };
