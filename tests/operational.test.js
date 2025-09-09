// __tests__/operasional.test.js
const { match, handle } = require("../src/intents/operational");

describe("Intent: Jam Operasional", () => {
  describe("match()", () => {
    it("should match keywords related to operational hours", async () => {
      const cases = [
        "jam buka berapa?",
        "kapan operasional?",
        "buka sampai jam berapa?",
        "jam operasional percetakan",
        "jam pelayanan"
      ];
      for (const input of cases) {
        expect(await match(input)).toBe(true);
      }
    });

    it("should not match unrelated text", async () => {
      const cases = [
        "berapa harga PLA?",
        "tolong kirim lokasi",
        "halo bot",
        "saya mau pesan print 3d"
      ];
      for (const input of cases) {
        expect(await match(input)).toBe(false);
      }
    });
  });

  describe("handle()", () => {
    it("should return operational hours message", async () => {
      const response = await handle();
      expect(response).toMatch(/Senin – Jumat/i);
      expect(response).toMatch(/08\.00 – 21\.00 WIB/i);
      expect(response).toMatch(/Sabtu & Minggu/i);
      expect(response).toMatch(/Tutup/i);
    });
  });
});
