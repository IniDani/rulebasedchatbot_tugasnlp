function extractDims(text) {
  const m = text.match(/(\d+)[x×](\d+)[x×](\d+)\s*(cm|mm)/i);
  if (!m) return null;
  const [ , a, b, c, unit ] = m;
  const mul = unit.toLowerCase()==="cm" ? 10 : 1;
  return [a*mul, b*mul, c*mul];
}

function extractQty(text) {
  const m = text.match(/\b(\d+)\s*(pcs|buah|unit)?\b/i);
  return m ? Number(m[1]) : 1;
}

function extractMaterial(text) {
  const m = text.match(/\b(pla|abs|petg|tpu)\b/i);
  return m ? m[1].toUpperCase() : 'PLA';
}

module.exports = { extractDims, extractQty, extractMaterial };
