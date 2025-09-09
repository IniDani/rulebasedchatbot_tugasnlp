const { extractDims, extractQty, extractMaterial } = require('../utils/extractors');

async function match(text) {
  const hasDim = !!extractDims(text);
  const hasKw = /\b(estimasi|kira.?kira|harga|biaya)\b/i.test(text);
  return (hasDim || hasKw) ? {} : null;
}

async function handle(_, text) {
  const dims = extractDims(text);
  const qty = extractQty(text);
  const mat = extractMaterial(text);

  if (!dims) {
    return "Bisa kasih *estimasi kasar*. Sertakan dimensi (L×W×H) dan jumlah ya. Contoh: \"estimasi PLA 10x5x3 cm 2 pcs\".";
  }

  const vol_mm3 = dims.reduce((a,b)=>a*b,1);
  const density = { PLA:1.24, ABS:1.04, PETG:1.27, TPU:1.21 }[mat] || 1.2;
  const vol_cm3 = vol_mm3 / 1000;
  const est_g = (vol_cm3 * density * 0.15);
  const pricePerGram = 1500;
  const price = Math.max(35000, Math.round(est_g * pricePerGram)) * qty;

  return `Perkiraan *sangat kasar* untuk ${mat} ~ Rp${price.toLocaleString('id-ID')} (qty ${qty}). Untuk akurat, kirim file *.stl*.`;
}

module.exports = { match, handle };
