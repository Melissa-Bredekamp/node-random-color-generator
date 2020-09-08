const randomColor = require('randomcolor');
//  console.log(randomColor());
// const characters = '#';

// console.log('#');
// console.log('########################');
// console.log('########################');
// console.log('########################');
// console.log('########################');
// console.log('########################');
// console.log('########################');
// console.log('########', '', '#########');
// console.log('########', 'randomcolor', '#########');
// console.log('########', randomColor(), '########'); */

// const blockOfCharacters = () => {
//   {
//     console.log('##############################'),
//       console.log('##############################'),
//       console.log('##############################'),
//       console.log(`###### ${randomColor()} #####`),
//       console.log('##############################'),
//       console.log('##############################'),
//       console.log('##############################');
//   }
// };
// console.log(blockOfCharacters);

const hue = process.argv[2];
// console.log(hue);
const luminosity = process.argv[3];
// console.log(luminosity);

const color = randomColor({ hue: hue, luminosity: luminosity });
console.log(color);

const chalk = require('chalk');
// console.log(chalk.green('##########'));
// console.log(chalk.green('###########   ' + color + '    ##########'));

// for (var i = 0; i < 5; i++) {
// console.log('Hi');
// }

// for (var i = 0; i < 3; i++) {
// console.log('###############################');
// }
for (var i = 0; i < 3; i++) {
  console.log(chalk.green('##############################'));
}

for (var i = 0; i < 3; i++) {
  console.log(chalk.green('#########  ' + color + '  ##########'));
}

for (var j = 0; j < 3; j++) {
  console.log(chalk.green('##############################'));
}
