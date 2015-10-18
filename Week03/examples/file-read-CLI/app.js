var fs = require('fs');

module.exports.run = function(flags) {
  var fileApp = new FileApp(flags);
  fileApp.init();
};

function FileApp(flags) {
  this.flags = flags;
}

FileApp.prototype.init = function() {
  if (this.flags.write) {
    this.write();
  }

  if (this.flags.remove) {
    this.remove();
  }
};

FileApp.prototype.write = function () {
  var filename = this.flags.write[0];
  var data = this.flags.write[1];

  fs.writeFile(filename, data, function(err) {
    if (err) throw err;
    console.log('File Saved');
  });
};

FileApp.prototype.remove = function () {
  var filename = this.flags.remove;

  fs.unlink(filename, function(err) {
    if (err) throw err;
    console.log('Removed');
  });
};





