const express = require('express');
const app = express();
const port = 3000;

const pangrams = [
  "The quick brown fox jumps over the lazy dog.",
  "Pack my box with five dozen liquor jugs.",
  "The five boxing wizards jump quickly.",
  "Jackdaws love my big sphinx of quartz.",
  "The quick onyx goblin jumps over the lazy dwarf.",
  "Waltz, nymph, for quick jigs vex Bud.",
  "Sphinx of black quartz, judge my vow.",
  "Glib jocks quiz nymph to vex dwarf.",
  "Cwm fjord bank glyphs vext quiz.",
  "How razorback jumping frogs can level six piqued gymnasts!"
];

app.get('/pangrams', (req, res) => {
  const randomPangrams = [];
  for (let i = 0; i < 10; i++) {
    const randomIndex = Math.floor(Math.random() * pangrams.length);
    randomPangrams.push(pangrams[randomIndex]);
  }
  res.json(randomPangrams);
});

app.listen(port, () => {
  console.log(`Pangram API running at http://localhost:${port}`);
});
