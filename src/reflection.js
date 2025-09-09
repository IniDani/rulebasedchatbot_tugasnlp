function reflect(text) {
  const pairs = [
    [/\bsaya\b/gi, "kamu"],
    [/\baku\b/gi, "kamu"],
    [/\banda\b/gi, "saya"],
    [/\bpunyaku\b/gi, "punyamu"],
    [/\bpunyamu\b/gi, "punyaku"]
  ];
  let out = text;
  for (const [rgx, repl] of pairs) out = out.replace(rgx, repl);
  return out;
}

module.exports = { reflect };
