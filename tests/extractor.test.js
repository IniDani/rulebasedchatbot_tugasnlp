const { extractDims, extractQty, extractMaterial } = require("../src/utils/extractors");

describe("Extractor Utils", () => {
  describe("extractDims", () => {
    test("harus bisa parsing dimensi dalam cm", () => {
      expect(extractDims("estimasi 10x5x3 cm")).toEqual([100, 50, 30]);
    });

    test("harus bisa parsing dimensi dalam mm", () => {
      expect(extractDims("estimasi 20×10×5 mm")).toEqual([20, 10, 5]);
    });

    test("return null kalau tidak ada dimensi", () => {
      expect(extractDims("estimasi PLA 2 pcs")).toBeNull();
    });
  });

  describe("extractQty", () => {
    test("harus bisa parsing jumlah pcs", () => {
      expect(extractQty("estimasi PLA 10x5x3 cm 2 pcs")).toBe(2);
    });

    test("harus bisa parsing jumlah buah", () => {
      expect(extractQty("estimasi ABS 5x5x5 cm 3 buah")).toBe(3);
    });

    test("harus bisa parsing jumlah unit", () => {
      expect(extractQty("estimasi PETG 20x20x20 mm 7 unit")).toBe(7);
    });

    test("default 1 kalau tidak ada jumlah", () => {
      expect(extractQty("estimasi PLA 10x5x3 cm")).toBe(1);
    });
  });

  describe("extractMaterial", () => {
    test("default PLA kalau tidak ada bahan", () => {
      expect(extractMaterial("estimasi 10x5x3 cm")).toBe("PLA");
    });

    test("bisa parsing ABS", () => {
      expect(extractMaterial("estimasi ABS 5x5x5 cm")).toBe("ABS");
    });

    test("bisa parsing PETG", () => {
      expect(extractMaterial("estimasi pakai PETG")).toBe("PETG");
    });

    test("bisa parsing TPU", () => {
      expect(extractMaterial("estimasi TPU 20x20x20 mm")).toBe("TPU");
    });

    test("bisa parsing Nylon", () => {
      expect(extractMaterial("estimasi Nylon 30x30x30 mm")).toBe("Nylon");
    });

    test("bisa parsing Nylon (PA12)", () => {
      expect(extractMaterial("estimasi Nylon PA12 10x10x10 mm")).toBe("Nylon (PA12)");
      expect(extractMaterial("estimasi PA12 10x10x10 mm")).toBe("Nylon (PA12)");
    });

    test("bisa parsing Nylon + Fiberglass", () => {
      expect(extractMaterial("estimasi Nylon + Fiberglass 20x20x20 mm")).toBe("Nylon + Fiberglass");
      expect(extractMaterial("estimasi Nylon plus Fiberglass")).toBe("Nylon + Fiberglass");
    });

    test("bisa parsing resin varian", () => {
      expect(extractMaterial("estimasi pakai Standard Resin")).toBe("Standard Resin");
      expect(extractMaterial("estimasi pakai Tough Resin")).toBe("Tough Resin");
      expect(extractMaterial("estimasi pakai Flexible Resin")).toBe("Flexible Resin");
      expect(extractMaterial("estimasi resin aja")).toBe("Standard Resin");
    });
  });
});