// tests/fallback.test.js
const path = require('path');

describe('fallback intent', () => {
  let fallback;
  let reflection;

  beforeAll(() => {
    // Load modul nyata (bukan mock) untuk integration-like test
    // Pastikan path sesuai struktur project kamu
    fallback = require(path.join('..', 'src', 'intents', 'fallback.js'));
    reflection = require(path.join('..', 'src', 'reflection.js'));
  });

  test('match() should always return true', async () => {
    const m = await fallback.match('apa pun teks');
    expect(m).toBe(true);
  });

  test('handle() should include the menu text', async () => {
    const out = await fallback.handle({}, 'teks apapun');
    expect(out).toMatch(/Daftar Harga/i);
    expect(out).toMatch(/Kalkulator Estimasi/i);
    expect(out).toMatch(/Daftar Bahan/i);
    expect(out).toMatch(/Lokasi/i);
    expect(out).toMatch(/Ketik \*menu\*/i);
  });

  test('handle() should prefix with reflected text when input exists', async () => {
    const input = 'saya ingin tahu harga';
    const out = await fallback.handle({}, input);
    // Preface format: Aku menangkap kamu mengatakan: "_"..._
    expect(out).toMatch(/Aku menangkap kamu mengatakan:/i);

    // Cek bahwa reflection berjalan (saya -> kamu)
    const reflected = reflection.reflect(input);
    // Escape string untuk dipakai di RegExp, supaya stabil
    const escaped = reflected.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const re = new RegExp(`"_?${escaped}_?"`,'i');
    expect(out).toMatch(re);
  });

  test('handle() should NOT break on non-string inputs (null/undefined/object)', async () => {
    await expect(fallback.handle({}, null)).resolves.toEqual(expect.any(String));
    await expect(fallback.handle({}, undefined)).resolves.toEqual(expect.any(String));
    await expect(fallback.handle({}, { a: 1 })).resolves.toEqual(expect.any(String));
  });

  test('handle() should truncate very long input (<=200 chars in preface)', async () => {
    const long = 'saya '.repeat(1000); // panjang
    const out = await fallback.handle({}, long);
    // Ambil bagian preface saja
    const lines = out.split('\n');
    // Baris pertama seharusnya preface (jika ada input)
    const preface = lines[0] || '';
    // 200 char batas di fungsi sanitize (plus wrapper teks preface)
    expect(preface.length).toBeLessThanOrEqual(260); // toleransi karena ada wrapper teks
  });

  test('handle() should fall back to menu when input empty string', async () => {
    const out = await fallback.handle({}, '');
    // Tidak wajib ada preface karena input kosong
    expect(out).not.toMatch(/Aku menangkap/i);
    expect(out).toMatch(/Daftar Harga/i);
  });
});
