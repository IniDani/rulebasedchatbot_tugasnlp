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
      expect(await match("menu")).toBe(false);
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

    it("harus menampilkan semua menu utama", () => {
      expect(response).toMatch(/1️⃣ \*Daftar Harga\*/);
      expect(response).toMatch(/2️⃣ \*Kalkulator Estimasi\*/);
      expect(response).toMatch(/3️⃣ \*Daftar Bahan\*/);
      expect(response).toMatch(/4️⃣ \*Lokasi\*/);
    });

    it("harus memberi instruksi tentang ketik menu", () => {
      expect(response).toMatch(/Ketik \*menu\*/);
    });
  });
});
