const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const { route } = require('./router');

const client = new Client({ authStrategy: new LocalAuth() });

client.on('qr', qr => qrcode.generate(qr, { small: true }));
client.on('ready', () => console.log('Whatsapp telah tersambung...'));

client.on('message', async msg => {
  try {
    const reply = await route(msg.body, msg.hasMedia);
    if (reply) await msg.reply(reply);
  } catch (e) {
    console.error("Error:", e);
    await msg.reply("Maaf, bot mengalami kendala. Mohon tunggu sebentar 🙏");
  }
});

client.initialize();
