// __tests__/order.test.js
const { match, handle } = require("../src/intents/order");

describe("Order Intent", () => {
  describe("match()", () => {
    it("harus mengenali kata kunci langsung", async () => {
      expect(await match("saya mau order cetakan 3D")).toBe(true);
      expect(await match("bisa pesan model PLA?")).toBe(true);
      expect(await match("pemesanan cetakan resin")).toBe(true);
    });

    it("harus mengenali variasi dengan kata 'cara'", async () => {
      expect(await match("bagaimana cara order di sini?")).toBe(true);
      expect(await match("tolong jelaskan cara pemesanan")).toBe(true);
      expect(await match("bagaimana untuk pesan printer 3D?")).toBe(true);
    });

    it("tidak boleh match untuk teks tidak relevan", async () => {
      expect(await match("berapa harga PLA per gram")).toBe(false);
      expect(await match("lokasi percetakan ada di mana")).toBe(false);
      expect(await match("selamat pagi bot")).toBe(false);
    });
  });

  describe("handle()", () => {
    let response;

    beforeAll(async () => {
      response = await handle();
    });

    it("harus menyertakan judul cara pemesanan", () => {
      expect(response).toMatch(/🛒 \*Cara Pemesanan Layanan Cetak 3D\*/);
    });

    it("harus menyertakan langkah-langkah pemesanan", () => {
      expect(response).toMatch(/1\./);
      expect(response).toMatch(/2\./);
      expect(response).toMatch(/3\./);
      expect(response).toMatch(/4\./);
      expect(response).toMatch(/5\./);
      expect(response).toMatch(/6\./);
    });

    it("harus menyertakan catatan akhir", () => {
      expect(response).toMatch(/📌 Catatan/);
    });
  });
});
