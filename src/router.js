const greet = require('./intents/greet');
const pricing = require('./intents/pricing');
const estimate = require('./intents/estimate');
const fallback = require('./intents/fallback');
const location = require('./intents/location');
const materials = require('./intents/materials');

const rules = [
  pricing,
  materials,
  estimate,
  greet,
  location,
  fallback
];

async function route(text, hasMedia) {
  for (const r of rules) {
    const res = await r.match(text, hasMedia);
    if (res) return await r.handle(res, text);
  }
  return null;
}

module.exports = { route };
