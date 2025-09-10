require("dotenv").config();
const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const { route } = require("./router");
const logger = require("./utils/logger");
const connectDB = require("./config/db");
const ChatLog = require("./models/chatLog");

connectDB();

const client = new Client({
  authStrategy: new LocalAuth(),
});

// 🔹 QR Code Event
client.on("qr", (qr) => {
  logger.info("QR Code generated, scan dengan WhatsApp kamu 📱");
  qrcode.generate(qr, { small: true });
});

// 🔹 Ready Event
client.on("ready", () => {
  logger.info("✅ WhatsApp bot telah tersambung...");
});

// Message Event
client.on("message", async (msg) => {
  logger.info(`📩 Pesan dari ${msg.from}: ${msg.body}`);

  let reply = null;

  try {
    reply = await route(msg.body, msg.hasMedia);

    if (reply) {
      await msg.reply(reply);
      logger.debug(`💬 Balasan terkirim ke ${msg.from}: ${reply}`);
    }
  } catch (err) {
    logger.error(`❌ Error saat memproses pesan: ${err.message}`);
    reply = "Maaf, bot mengalami kendala. Mohon tunggu sebentar 🙏";
    await msg.reply(reply);
  }

  // 🔹 Simpan chat log ke Mongo
  try {
    await ChatLog.create({
      from: msg.from,
      to: msg.to,
      message: msg.body,
      reply: reply,
      hasMedia: msg.hasMedia,
    });
    logger.debug(`📝 Chat log disimpan ke MongoDB (${msg.from})`);
  } catch (dbErr) {
    logger.error(`❌ Gagal menyimpan chat log: ${dbErr.message}`);
  }
});

// 🔹 Initialize
client.initialize();
logger.info("Memulai WhatsApp bot...");