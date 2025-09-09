const greet = require('./intents/greet');
const pricing = require('./intents/pricing');
const estimate = require('./intents/estimate');
const fallback = require('./intents/fallback');
const location = require('./intents/location');
const materials = require('./intents/materials');
const operational = require('./intents/operational');
const order = require('./intents/order');

const rules = [
  pricing,
  materials,
  operational,
  order,
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
