const { match, handle } = require("../src/intents/pricing");

describe("Pricelist Intent", () => {
  describe("match()", () => {
    it("harus match untuk kata kunci harga", async () => {
      expect(await match("berapa harga per gram?")).toEqual({});
      expect(await match("bisa kasih tarif cetak 3D?")).toEqual({});
      expect(await match("minta pricelist terbaru")).toEqual({});
    });

    it("tidak boleh match kalau ada dimensi (biar ke estimate)", async () => {
      expect(await match("harga PLA 10x5x3 cm")).toBeNull();
      expect(await match("estimasi biaya ABS 20x10x5 mm")).toBeNull();
    });

    it("tidak boleh match untuk teks random", async () => {
      expect(await match("halo bot")).toBeNull();
      expect(await match("tolong cetak")).toBeNull();
    });
  });

  describe("handle()", () => {
    let response;

    beforeAll(async () => {
      response = await handle();
    });

    it("harus memulai dengan judul pricelist", () => {
      expect(response).toMatch(/Daftar Harga 3D Printing \(per gram\)/);
    });

    it("harus menampilkan kategori utama", () => {
      expect(response).toMatch(/\*Filament FDM/);
      expect(response).toMatch(/\*Resin SLA\/DLP/);
      expect(response).toMatch(/\*Bubuk SLS/);
    });

    it("harus menampilkan beberapa bahan utama", () => {
      expect(response).toMatch(/PLA: Rp\d+/);
      expect(response).toMatch(/ABS: Rp\d+/);
      expect(response).toMatch(/PETG: Rp\d+/);
      expect(response).toMatch(/TPU: Rp\d+/);
      expect(response).toMatch(/Nylon/);
    });

    it("harus menampilkan varian resin", () => {
      expect(response).toMatch(/Standard Resin/);
      expect(response).toMatch(/Tough\/Durable Resin/);
      expect(response).toMatch(/Flexible Resin/);
    });

    it("harus ada bagian catatan", () => {
      expect(response).toMatch(/\*ℹ️ Catatan\*/);
      expect(response).toMatch(/Harga berubah tergantung kualitas/);
    });

    it("harus ada instruksi untuk estimasi", () => {
      expect(response).toMatch(/Ketik atau kirim estimasi/);
    });
  });
});
