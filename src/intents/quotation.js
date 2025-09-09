async function match(text, hasMedia) {
  return hasMedia || /\b(penawaran|quotation|kirim\s*file|upload)\b/i.test(text);
}

async function handle() {
  return "Terima kasih. Mohon isi: material, jumlah, warna, infill, layer, deadline. Kami hitung ±2–6 jam kerja.";
}

module.exports = { match, handle };
