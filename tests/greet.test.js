// __tests__/greet.test.js
const { match, handle } = require("../src/intents/greet");

describe("Greet Intent", () => {
  describe("match()", () => {
    it("harus mengenali sapaan dasar", async () => {
      expect(await match("hai")).toBe(true);
      expect(await match("Halo semuanya")).toBe(true);
    });

    it("harus mengenali variasi 'selamat ...'", async () => {
      expect(await match("selamat pagi")).toBe(true);
      expect(await match("Selamat siang")).toBe(true);
      expect(await match("selamat sore")).toBe(true);
      expect(await match("selamat malam")).toBe(true);
    });

    it("tidak boleh match untuk teks non-sapaan", async () => {
      expect(await match("tolong buatkan estimasi 10x10x10 cm")).toBe(false);
      expect(await match("berapa harga PLA per gram?")).toBe(false);
    });
  });

  describe("handle()", () => {
    let response;

    beforeAll(async () => {
      response = await handle();
    });

    it("harus mengandung sapaan R3D Bot", () => {
      expect(response).toMatch(/Halo! Saya \*R3D Bot\*/);
    });

    it("harus menampilkan semua menu utama (1–6)", () => {
      expect(response).toMatch(/1\. \*Daftar Harga\*/);
      expect(response).toMatch(/2\. \*Kalkulator Estimasi\*/);
      expect(response).toMatch(/3\. \*Daftar Bahan\*/);
      expect(response).toMatch(/4\. \*Lokasi\*/);
      expect(response).toMatch(/5\. \*Jam Operasional\*/);
      expect(response).toMatch(/6\. \*Cara Pemesanan\*/);
    });

    it("harus memberi instruksi tentang ketik menu", () => {
      expect(response).toMatch(/Ketik \*menu\*/);
    });
  });
});
