const { Client, LocalAuth } = require("whatsapp-web.js");
const qrcode = require("qrcode-terminal");
const { route } = require("./router");
const logger = require("./utils/logger"); // pakai Winston

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

// 🔹 Message Event
client.on("message", async (msg) => {
  logger.info(`📩 Pesan dari ${msg.from}: ${msg.body}`);

  try {
    const reply = await route(msg.body, msg.hasMedia);

    if (reply) {
      await msg.reply(reply);
      logger.debug(`💬 Balasan terkirim ke ${msg.from}: ${reply}`);
    }
  } catch (err) {
    logger.error(`❌ Error saat memproses pesan dari ${msg.from}: ${err.message}`);

    try {
      await msg.reply("Maaf, bot mengalami kendala. Mohon tunggu sebentar 🙏");
    } catch (sendErr) {
      logger.error(`❌ Gagal mengirim pesan error ke ${msg.from}: ${sendErr.message}`);
    }
  }
});

// 🔹 Initialize
client.initialize();
logger.info("Memulai WhatsApp bot...");