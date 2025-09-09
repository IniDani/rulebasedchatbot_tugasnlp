const { reflect } = require('../src/reflection.js');

test("reflection saya→kamu", () => {
  expect(reflect("saya butuh cepat")).toMatch(/kamu butuh cepat/);
});
