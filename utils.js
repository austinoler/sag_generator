const fs = require('fs');

function createSVG(content) {
  
}

function saveSVG(content, filename) {
  fs.writeFileSync(filename, content);
  console.log(`Generated ${filename}`);
}

module.exports = { createSVG, saveSVG };