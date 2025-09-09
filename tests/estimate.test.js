const { match, handle } = require("../src/intents/estimate");

describe("Estimate Intent", () => {
  describe("match()", () => {
    test("should match when contains 'estimasi'", async () => {
      const r = await match("estimasi harga PLA");
      expect(r).not.toBeNull();
    });

    test("should match when contains 'kira-kira'", async () => {
      const r = await match("kira-kira biaya cetak berapa?");
      expect(r).not.toBeNull();
    });

    test("should match when contains dimension pattern", async () => {
      const r = await match("Cetak 10x5x3 cm PLA");
      expect(r).not.toBeNull();
    });

    test("should not match for unrelated text", async () => {
      const r = await match("halo, apa kabar?");
      expect(r).toBeNull();
    });
  });

  describe("handle()", () => {
    test("should return fallback message if no dimensions provided", async () => {
      const res = await handle({}, "estimasi PLA");
      expect(res).toMatch(/⚠️ Untuk menghitung estimasi saya butuh informasi lebih lengkap/);
      expect(res).toMatch(/estimasi PLA 10x5x3 cm 2 pcs/);
    });

    test("should calculate estimation with default PLA", async () => {
      const res = await handle({}, "estimasi PLA 10x5x3 cm");
      expect(res).toMatch(/Perkiraan \*kasar\* untuk 1 pcs bahan \*PLA\*/);
      expect(res).toMatch(/Rp/);
      expect(res).toMatch(/cm³/);
    });

    test("should calculate estimation with ABS material", async () => {
      const res = await handle({}, "estimasi ABS 10x5x3 cm 2 pcs");
      expect(res).toMatch(/2 pcs bahan \*ABS\*/);
      expect(res).toMatch(/Rp/);
    });

    test("should calculate estimation with PETG material", async () => {
      const res = await handle({}, "estimasi PETG 20x10x5 cm 1 pcs");
      expect(res).toMatch(/1 pcs bahan \*PETG\*/);
      expect(res).toMatch(/Rp/);
    });

    test("should default to PLA if material is unknown", async () => {
      const res = await handle({}, "estimasi UNOBTAINIUM 10x5x3 cm 1 pcs");
      expect(res).toMatch(/bahan \*PLA\*/);
    });

    test("should handle multiple quantity correctly", async () => {
      const res1 = await handle({}, "estimasi PLA 10x5x3 cm 1 pcs");
      const res2 = await handle({}, "estimasi PLA 10x5x3 cm 5 pcs");

      const extractNumbers = (txt) =>
        txt.match(/Rp([\d.]+)\s–\sRp([\d.]+)/)?.slice(1, 3).map((s) =>
          Number(s.replace(/\./g, ""))
        );

      const [min1, max1] = extractNumbers(res1);
      const [min5, max5] = extractNumbers(res2);

      expect(min5).toBeCloseTo(min1 * 5, -1); // tolerate rounding
      expect(max5).toBeCloseTo(max1 * 5, -1);
    });
  });
});
