const { match, handle } = require("../src/intents/promo");
const Promo = require("../src/models/promo");

// Mock Promo agar tidak query DB asli
jest.mock("../src/models/promo");

describe("Promo Intent", () => {
  describe("match()", () => {
    it("harus mengenali kata kunci promo", async () => {
      expect(await match("Ada promo gak?")).toBe(true);
      expect(await match("Tolong info diskon")).toBe(true);
      expect(await match("Apakah ada penawaran menarik?")).toBe(true);
      expect(await match("Voucher tersedia?")).toBe(true);
    });

    it("tidak boleh match untuk teks yang tidak terkait promo", async () => {
      expect(await match("berapa harga PLA per gram")).toBe(false);
      expect(await match("tolong buatkan estimasi ukuran 10x10x10")).toBe(false);
    });
  });

  describe("handle()", () => {
    beforeEach(() => {
      jest.clearAllMocks();
    });

    it("harus mengembalikan pesan default jika tidak ada promo", async () => {
      Promo.find.mockReturnValue({
        sort: jest.fn().mockResolvedValue([]),
      });

      const response = await handle();
      expect(response).toMatch(/❌ Saat ini belum ada promo/);
    });

    it("harus menampilkan daftar promo jika ada", async () => {
      const dummyPromos = [
        {
          title: "Diskon Mahasiswa",
          description: "Cetak 3D untuk mahasiswa diskon 20%",
          validUntil: new Date("2025-12-31"),
          discount: 20,
        },
        {
          title: "Promo Akhir Tahun",
          description: "Diskon 30% untuk semua material",
          validUntil: new Date("2025-12-30"),
          discount: 30,
        },
      ];

      Promo.find.mockReturnValue({
        sort: jest.fn().mockResolvedValue(dummyPromos),
      });

      const response = await handle();

      expect(response).toMatch(/🎉 \*Promo Cetak 3D Terkini\*/);
      expect(response).toMatch(/1\. \*Diskon Mahasiswa\*/);
      expect(response).toMatch(/2\. \*Promo Akhir Tahun\*/);
      expect(response).toMatch(/💰 Diskon: 20%/);
      expect(response).toMatch(/💰 Diskon: 30%/);
    });
  });
});
