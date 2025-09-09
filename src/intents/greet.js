async function match(text) {
  return /\b(hai|halo|selamat\s(pagi|siang|sore|malam))\b/i.test(text);
}

async function handle() {
  return "Halo! Saya *R3D Bot*. Ketik *menu* untuk pilihan layanan.";
}

module.exports = { match, handle };
