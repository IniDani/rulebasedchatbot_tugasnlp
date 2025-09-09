async function match(text) {
  return /\b(harga|biaya|rate|tarif)\b/i.test(text);
}

async function handle() {
  return "Harga dasar Rp1500/gram PLA (min Rp35.000). Harga tergantung material, ukuran, dan finishing.";
}

module.exports = { match, handle };
