async function match(text) {
  return /\b(alamat|lokasi|dimana|tempat|maps?|peta)\b/i.test(text);
}

async function handle() {
  return (
    "📍 Percetakan 3D kami berlokasi di:\n\n" +
    "Universitas Gadjah Mada (UGM)\n" +
    "Bulaksumur, Kec. Depok,\n" +
    "Kabupaten Sleman, Daerah Istimewa Yogyakarta 55281\n\n" +
    "👉 Google Maps: https://maps.app.goo.gl/SVoTo4G2ih7WYHATA"
  );
}

module.exports = { match, handle };
