const { match, handle } = require("../src/intents/estimate");

describe("Estimate Intent", () => {
  describe("match()", () => {
    it("harus match untuk kata kunci estimasi", async () => {
      expect(await match("tolong estimasi PLA")).toEqual({});
      expect(await match("kira kira biaya untuk ABS")).toEqual({});
    });

    it("harus match jika ada dimensi", async () => {
      expect(await match("PLA 10x5x3 cm")).toEqual({});
      expect(await match("ABS 20x10x5 mm")).toEqual({});
    });

    it("tidak boleh match untuk teks random", async () => {
      expect(await match("halo bot")).toBeNull();
      expect(await match("berapa harga per gram")).toBeNull();
    });
  });

  describe("handle()", () => {
    it("harus memberi instruksi jika dimensi tidak ada", async () => {
      const response = await handle({}, "estimasi PLA");
      expect(response).toMatch(/Sertakan dimensi/);
      expect(response).toMatch(/Contoh:/);
    });

    it("harus menghitung estimasi dengan dimensi dan qty", async () => {
      const response = await handle({}, "estimasi PLA 10x5x3 cm 2 pcs");
      expect(response).toMatch(/Perkiraan \*kasar\*/);
      expect(response).toMatch(/bahan \*PLA\*/);
      expect(response).toMatch(/2 pcs/);
      expect(response).toMatch(/Rp\d/);
    });

    it("default qty = 1 jika tidak disebutkan", async () => {
      const response = await handle({}, "estimasi ABS 5x5x5 cm");
      expect(response).toMatch(/1 pcs/);
    });

    it("fallback ke PLA jika material tidak dikenal", async () => {
      const response = await handle({}, "estimasi wood 5x5x5 cm");
      expect(response).toMatch(/bahan \*PLA\*/);
    });

    it("output harus ada volume dan gram", async () => {
      const response = await handle({}, "estimasi PETG 10x10x10 mm 1 pcs");
      expect(response).toMatch(/cm³/);
      expect(response).toMatch(/g\)/);
    });
  });
});
