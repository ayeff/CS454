var fs = require('fs');

function read(filename) {
  fs.readFile(filename, 'utf8', function(err, data) {
    console.log('Error: ', err);
    console.log('Data: ', data);
  });
}
read('sample.txt');
console.log('Done reading file');