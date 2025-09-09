const { reflect } = require('../reflection');

async function match() { return true; }

async function handle(_, text) {
  return "Aku memahami " + reflect(text) + ". Pilih: *estimasi*, *penawaran*, *status*, atau *admin*.";
}

module.exports = { match, handle };
