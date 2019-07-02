const times = process.argv.slice(2).map(parseInt);

for(const index in times) {
  setTimeout(() => {
    process.stdout.write('\x07');
    process.stdout.write(times[index].toString());
  }, times[index] * 1000);
};

// Another way to do the question
// for(const char of timer) {
//   setTimeout(() => {
//     process.stdout.write('\x07');
//   }, char * 1000);
// };

