const mongoose = require("mongoose");

const promoSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },       // Judul promo
    description: { type: String, required: true }, // Detail promo
    validUntil: { type: Date, required: true },    // Berlaku sampai
    discount: { type: Number, required: true },    // Potongan %
  },
  { timestamps: true }
);

module.exports = mongoose.model("Promo", promoSchema);
