const mongoose = require("mongoose");

const ChatLogSchema = new mongoose.Schema(
  {
    from: { type: String, required: true },  // pengirim
    to: { type: String },                    // penerima (opsional)
    message: { type: String, required: true }, // isi pesan
    reply: { type: String },                   // balasan bot
    hasMedia: { type: Boolean, default: false },
  },
  { timestamps: true } // otomatis bikin createdAt & updatedAt
);

module.exports = mongoose.model("ChatLog", ChatLogSchema);
