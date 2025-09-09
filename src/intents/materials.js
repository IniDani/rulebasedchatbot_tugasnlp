// materials.js
async function match(text) {
  return /\b(bahan|material|filament|resin|plastik|perbedaan)\b/i.test(text);
}

async function handle() {
  return (
    "*🧵 Daftar Bahan & Karakteristik 3D Printing*\n\n" +

    "*1️⃣ PLA (Polylactic Acid)* 🌱\n" +
    "• Mudah dicetak, cocok untuk pemula\n" +
    "• Ramah lingkungan (biodegradable)\n" +
    "• Kaku, tapi agak rapuh\n" +
    "• Tidak tahan panas tinggi (>60°C)\n\n" +

    "*2️⃣ ABS (Acrylonitrile Butadiene Styrene)* 🔥\n" +
    "• Lebih kuat & tahan panas dibanding PLA\n" +
    "• Permukaan bisa dihaluskan dengan uap aseton\n" +
    "• Cenderung melengkung saat dicetak (butuh bed panas)\n" +
    "• Cocok untuk part fungsional\n\n" +

    "*3️⃣ PETG (Polyethylene Terephthalate Glycol)* 💧\n" +
    "• Kombinasi antara fleksibilitas dan kekuatan\n" +
    "• Tahan kelembaban dan bahan kimia ringan\n" +
    "• Lebih ulet dibanding PLA\n" +
    "• Cocok untuk botol, container, part outdoor\n\n" +

    "*4️⃣ TPU (Thermoplastic Polyurethane)* 🌀\n" +
    "• Fleksibel & elastis seperti karet\n" +
    "• Tahan aus dan gesekan\n" +
    "• Sulit dicetak (perlu setting printer khusus)\n" +
    "• Cocok untuk gasket, seal, casing HP\n\n" +

    "*5️⃣ Nylon (Polyamide)* ⚙️\n" +
    "• Sangat kuat dan tahan gesekan\n" +
    "• Sedikit fleksibel, tahan beban\n" +
    "• Menyerap kelembaban (perlu penyimpanan kering)\n" +
    "• Cocok untuk gear, engsel, part mekanis\n\n" +

    "*6️⃣ Resin Standar (SLA/DLP)* 🧪\n" +
    "• Detail halus & presisi tinggi\n" +
    "• Permukaan sangat mulus\n" +
    "• Rapuh, tidak sekuat filament\n" +
    "• Cocok untuk miniatur, prototipe, model arsitektur\n\n" +

    "*7️⃣ Resin Tough/Durable* 🛠️\n" +
    "• Lebih kuat & sedikit fleksibel\n" +
    "• Tahan benturan ringan\n" +
    "• Cocok untuk casing, prototipe fungsional\n\n" +

    "*8️⃣ Resin Flexible* 🧤\n" +
    "• Lentur & mirip karet\n" +
    "• Cocok untuk model wearable, seal, atau prototipe ergonomis\n\n" +

    "*9️⃣ Nylon (PA12) via SLS* ⚡\n" +
    "• Sangat tahan benturan\n" +
    "• Cocok untuk part industri, engsel, prototipe fungsional\n" +
    "• Bisa dicampur serat (fiberglass) untuk lebih kuat\n\n" +

    "ℹ️ Setiap bahan punya kelebihan dan kekurangan. " +
    "Pemilihan bahan tergantung kebutuhan: estetika, kekuatan, fleksibilitas, atau tahan panas."
  );
}

module.exports = { match, handle };
