
var app = require('./app');
var yargs = require('yargs');

var flags = yargs.usage('$0: Usage node cli.js')
  .options('h', {
    alias: 'help',
    describe: 'Display help'
  })
  .options('w', {
    alias: 'write',
    describe: 'writes a file with specified name and text',
    type: 'array'
  })
  .options('r', {
    alias: 'remove',
    describe: 'remove a file by name'
  })
  .argv;

if (flags.help) {
  yargs.showHelp();
} else {
  app.run(flags);
}

