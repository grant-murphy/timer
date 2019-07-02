const stdin = process.stdin;
// don't worry about these next two lines of setup work.
stdin.setRawMode(true);
stdin.setEncoding('utf8');
process.stdout.write('\x07');
// on any input from stdin (standard input), output a "." to stdout


const timer = function () {
  let array = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

  stdin.on('data', (key) => {
    if (key === 'b') {
      process.stdout.write('\x07');
      console.log('beep', key)
    }
    if (array.includes(key)) {
      console.log('Set timer for: ' + key)
      setTimeout(() => {
      process.stdout.write('\x07')
      console.log('beep');
      // process.exit();
    }, key * 1000);

    }
    if (key === '\u0003') {
      console.log('Thanks for using me, ciao!');
      process.exit();
    } 
  });
};

timer();



//ANOTHER WAY TO IMPLEMENT

// const readline = require('readline');
// const ask = readline.createInterface({
//  input: process.stdin,
//  output: process.stdout
// });

// const asking = function(question, answer) {
//  ask.question(question,
//    answer => {
//      if (answer === 'b') {
//        console.log(answer)
//        setTimeout(() => {
//          process.stdout.write('\x07');
//          process.exit();
//        }, 0 * 1000);
//      } else {
//        console.log(answer)
//        setTimeout(() => {
//          process.stdout.write('\x07');
//          process.exit();
//        }, answer * 1000);
//      }
//    })
// }
// asking('setting timer for ');