const inquirer = require('inquirer');
const chalk = require('chalk');
const Logo = require('./logo');
const { createSVG, saveSVG } = require('./utils');

function promptUser() {
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'text',
          message: 'Enter up to three characters for the logo:',
          validate: input => input.length <= 3,
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
      ])
      .then(resolve)
      .catch(reject);
  });
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
  })
  .catch(error => console.error(chalk.red(`Error: ${error.message}`)));