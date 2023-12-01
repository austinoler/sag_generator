const fs = require('fs');

function createSVG(content) {
  const svgDeclaration = '<?xml version="1.0" encoding="UTF-8" standalone="no"?>';
  const svgOpeningTag = '<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" ' +
    '"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';
  
  const svgContent = `${svgDeclaration}\n${svgOpeningTag}\n${content}`;
  
  return svgContent;
}

function saveSVG(content, filename) {
  fs.writeFileSync(filename, content);
  console.log(`Generated ${filename}`);
}

module.exports = { createSVG, saveSVG };