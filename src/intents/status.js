async function match(text) {
  const m = text.match(/#R3D-\d{4}\b/i);
  return m ? { id: m[0].toUpperCase() } : null;
}

async function handle({ id }) {
  const status = "printing";
  const eta = "besok, 16:00";
  return `Status pesanan *${id}*: ${status}. ETA ${eta}.`;
}

module.exports = { match, handle };
