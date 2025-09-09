const { match, handle } = require("../src/intents/location");

describe("Intent: Location", () => {
  test("should match keywords related to location", async () => {
    const positives = [
      "dimana alamat percetakan?",
      "lokasi ada di mana ya?",
      "kasih maps nya dong",
      "bisa share peta lokasi?",
      "tempat cetak 3D ada dimana?"
    ];

    for (const text of positives) {
      expect(await match(text)).toBe(true);
    }
  });

  test("should not match unrelated text", async () => {
    const negatives = [
      "berapa harga cetak?",
      "halo bot",
      "bisa bikin estimasi?",
      "status order saya"
    ];

    for (const text of negatives) {
      expect(await match(text)).toBe(false);
    }
  });

  test("should return proper address response", async () => {
    const response = await handle();

    expect(response).toMatch(/📍 Percetakan 3D kami berlokasi di/);
    expect(response).toMatch(/Universitas Gadjah Mada/);
    expect(response).toMatch(/Bulaksumur/);
    expect(response).toMatch(/Sleman/);
    expect(response).toMatch(/https:\/\/maps\.app\.goo\.gl/);
  });
});
