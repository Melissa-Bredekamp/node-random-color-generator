const randomColor = require('randomcolor');

const hue = process.argv[2];
// console.log(hue);
const luminosity = process.argv[3];
// console.log(luminosity);

const color = randomColor({ hue: hue, luminosity: luminosity });
// console.log(color);

const chalk = require('chalk');

for (var i = 0; i < 3; i++) {
  console.log(chalk.hex(color)('##############################'));
}

console.log(chalk.hex(color)('#########  ' + color + '  ##########'));

for (var j = 0; j < 3; j++) {
  console.log(chalk.hex(color)('##############################'));
}
