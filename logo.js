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

    // Shape element
    if (this.shape === 'square') {
      svgContent += `<rect width="80%" height="80%" x="10%" y="10%" fill="${this.validateColor(this.shapeColor)}" />`;
    } else if (this.shape === 'circle') {
      // Circle element
      svgContent += `<circle cx="50%" cy="50%" r="40%" fill="${this.validateColor(this.shapeColor)}" />`;
    } else if (this.shape === 'triangle') {
      // Triangle element
      svgContent += `<polygon points="50%,10% 90%,90% 10%,90%" fill="${this.validateColor(this.shapeColor)}" />`;
    }

    // Text element
    svgContent += `<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" fill="${this.validateColor(this.textColor)}" font-size="30">${this.text}</text>`;

    // SVG closing tag
    svgContent += `</svg>`;

    return svgContent;
  }

  validateColor(color) {
    // Convert color to lowercase for case-insensitive comparison
    const lowercasedColor = color.toLowerCase();

    // Color keywords and their corresponding values
    const colorKeywords = {
      black: '#000000',
      white: '#ffffff',
      red: '#ff0000',
      green: '#00ff00',
      blue: '#0000ff',
    };

    // Check if the input is a valid color keyword
    if (colorKeywords.hasOwnProperty(lowercasedColor)) {
      return colorKeywords[lowercasedColor];
    }

    // Check if the input is a valid hexadecimal color
    if (/^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)) {
      return color;
    }

    // Default to black if validation fails
    return '#000000';
  }
}

module.exports = Logo;
