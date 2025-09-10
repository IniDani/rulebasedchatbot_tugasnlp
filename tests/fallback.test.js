const { match, handle } = require("../src/intents/fallback");

describe("Fallback Intent", () => {
  describe("match()", () => {
    it("selalu mengembalikan true", async () => {
      expect(await match("")).toBe(true);
      expect(await match("teks random apapun")).toBe(true);
      expect(await match("12345")).toBe(true);
    });
  });

  describe("handle()", () => {
    let response;

    beforeAll(async () => {
      response = await handle();
    });

    it("harus memberi pesan maaf", () => {
      expect(response).toMatch(/Maaf, saya belum memahami/);
    });

    it("harus menampilkan semua menu utama", () => {
      expect(response).toMatch(/1️⃣ \*Daftar Harga\*/);
      expect(response).toMatch(/2️⃣ \*Kalkulator Estimasi\*/);
      expect(response).toMatch(/3️⃣ \*Daftar Bahan\*/);
      expect(response).toMatch(/4️⃣ \*Lokasi\*/);
    });

    it("harus ada instruksi ketik menu", () => {
      expect(response).toMatch(/Ketik \*menu\*/);
    });
  });
});
