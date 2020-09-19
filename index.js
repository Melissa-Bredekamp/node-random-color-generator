const randomColor = require('randomcolor');
const chalk = require('chalk');

const hue = process.argv[2];
// console.log(hue);
const luminosity = process.argv[3];
// console.log(luminosity);
const color = randomColor({ hue: hue, luminosity: luminosity });
// console.log(color);

// Stretch goals:
// function askFunction() {
//   if (typeof hue != 'undefined') {
//     ask1 = 'What hue are you searching for?';
//     console.log(ask1);
//     //   } else if (typeof luminosity != 'undefined') {
//     //     ask2 = 'what luminosity are you searching for?';
//     //     console.log(ask2);
//     //   } else {
    for (var i = 0; i < 3; i++) {
      console.log(chalk.hex(color)('##############################'));
    }

    console.log(chalk.hex(color)('#########  ' + color + '  ##########'));

    for (var j = 0; j < 3; j++) {
      console.log(chalk.hex(color)('##############################'));
    }
  }
}
