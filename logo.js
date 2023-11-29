class Logo {
    constructor(text, textColor, shape, shapeColor) {
      this.text = text;
      this.textColor = textColor;
      this.shape = shape;
      this.shapeColor = shapeColor;
    }
  
    generateSVG() {
  
    const width = 300;
    const height = 200;

    // SVG opening tag with width and height attributes
    let svgContent = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">`;

    // Text element
    svgContent += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;

    // Square element)
    if (this.shape === 'square') {
      svgContent += `<rect width="80%" height="80%" x="10%" y="10%" fill="${this.shapeColor}" />`;
    } else if (this.shape === 'circle') {
      // Circle element
      svgContent += `<circle cx="50%" cy="50%" r="40%" fill="${this.shapeColor}" />`;
    } else if (this.shape === 'triangle') {
      // Triangle element
      svgContent += `<polygon points="50%,10% 90%,90% 10%,90%" fill="${this.shapeColor}" />`;
    }

    // SVG closing tag
    svgContent += `</svg>`;

    return svgContent;
  }
}

module.exports = Logo;