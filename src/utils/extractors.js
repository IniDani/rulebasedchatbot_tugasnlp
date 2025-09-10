function extractDims(text) {
  // Format: 10x5x3 cm atau 10×5×3 mm
  const m = text.match(/(\d+)\s*[x×]\s*(\d+)\s*[x×]\s*(\d+)\s*(cm|mm)/i);
  if (!m) return null;

  const [, a, b, c, unit] = m.map(v => v);
  const mul = unit.toLowerCase() === "cm" ? 10 : 1; // cm -> mm
  return [Number(a) * mul, Number(b) * mul, Number(c) * mul];
}

function extractQty(text) {
  // Cari angka dengan atau tanpa pcs/buah/unit
  const m = text.match(/\b(\d+)\s*(pcs|buah|unit)?\b/i);
  return m ? Number(m[1]) : 1;
}

function extractMaterial(text) {
  const lower = text.toLowerCase();

  if (/\bpla\b/.test(lower)) return "PLA";
  if (/\babs\b/.test(lower)) return "ABS";
  if (/\bpetg\b/.test(lower)) return "PETG";
  if (/\btpu\b/.test(lower)) return "TPU";
  if (/\bnylon(\s|$)/.test(lower)) return "Nylon";
  if (/\bnylon\s*\(pa12\)\b/.test(lower) || /\bpa12\b/.test(lower)) return "Nylon (PA12)";
  if (/\bnylon\s*(\+|plus)\s*fiberglass\b/.test(lower)) return "Nylon + Fiberglass";

  // Resin variants
  if (/\bstandard resin\b/.test(lower)) return "Standard Resin";
  if (/\btough resin\b/.test(lower) || /\bdurable resin\b/.test(lower)) return "Tough Resin";
  if (/\bflexible resin\b/.test(lower)) return "Flexible Resin";
  if (/\bresin\b/.test(lower)) return "Standard Resin"; // fallback resin

  return "PLA"; // default
}

module.exports = { extractDims, extractQty, extractMaterial };