const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const pangrams = JSON.parse(
    fs.readFileSync(path.join(__dirname, '..', 'pangrams.json'), 'utf8')
  );
  const random = pangrams[Math.floor(Math.random() * pangrams.length)];
  res.status(200).json({ pangram: random });
};
