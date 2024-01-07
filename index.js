const inquirer = require('inquirer');
const Logo = require('./logo');
const { createSVG, saveSVG } = require('./utils');

function promptUser() {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'text',
      message: 'Enter up to three characters for the logo:',
      validate: input => (input.length <= 3 ? true : 'Text must be up to three characters.'),
    },
    {
      type: 'input',
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      type: 'list',
      name: 'shape',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      type: 'input',
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);
}

promptUser()
  .then(answers => {
    const logo = new Logo(
      answers.text,
      answers.textColor,
      answers.shape,
      answers.shapeColor
    );

    const svgContent = logo.generateSVG();
    saveSVG(svgContent, 'logo.svg');
    console.log('Logo generated successfully.');
  })
  .catch(error => console.error(`Error: ${error.message}`));
