// __tests__/materials.test.js
const { match, handle } = require("../src/intents/materials");

describe("Intent: Daftar Bahan 3D Printing", () => {
  describe("match()", () => {
    it("harus cocok dengan kata kunci 'bahan'", async () => {
      expect(await match("bahan apa saja yang tersedia?")).toBeTruthy();
    });

    it("harus cocok dengan kata kunci 'material'", async () => {
      expect(await match("material untuk print?")).toBeTruthy();
    });

    it("harus cocok dengan kata kunci 'filament'", async () => {
      expect(await match("ada filament TPU?")).toBeTruthy();
    });
    it("harus cocok dengan kata kunci 'perbedaan'", async () => {
      expect(await match("apa perbedaan antara bahan?")).toBeTruthy();
    });

    it("tidak boleh cocok dengan teks yang tidak relevan", async () => {
      expect(await match("berapa harga cetak 3D?")).toBeFalsy();
      expect(await match("halo bot")).toBeFalsy();
    });
  });

  describe("handle()", () => {
    let response;
    beforeAll(async () => {
      response = await handle();
    });

    it("mengembalikan string", () => {
      expect(typeof response).toBe("string");
      expect(response.length).toBeGreaterThan(50); // harus cukup panjang
    });

    it("harus menyebutkan PLA", () => {
      expect(response).toMatch(/PLA/i);
    });

    it("harus menyebutkan ABS", () => {
      expect(response).toMatch(/ABS/i);
    });

    it("harus menyebutkan PETG", () => {
      expect(response).toMatch(/PETG/i);
    });

    it("harus menyebutkan TPU", () => {
      expect(response).toMatch(/TPU/i);
    });

    it("harus menyebutkan Nylon", () => {
      expect(response).toMatch(/Nylon/i);
    });

    it("harus menyebutkan Resin", () => {
      expect(response).toMatch(/Resin/i);
    });

    it("harus memberi catatan pemilihan bahan", () => {
      expect(response).toMatch(/kelebihan dan kekurangan/i);
      expect(response).toMatch(/Pemilihan bahan/i);
    });
  });
});
