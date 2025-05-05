const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  if (req.method !== 'GET') {
    res.status(405).send('Metode tidak didukung');
    return;
  }

  try {
    const pangramsPath = path.join(__dirname, '..', 'pangrams.json');
    const pangrams = JSON.parse(fs.readFileSync(pangramsPath, 'utf8'));

    const random = pangrams[Math.floor(Math.random() * pangrams.length)];
    res.status(200).json({ pangram: random });
  } catch (error) {
    res.status(200).send('Pesan Semua baik');
  }
};
