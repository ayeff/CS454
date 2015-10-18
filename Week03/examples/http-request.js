var http = require('http');

http.get('http://jsonplaceholder.typicode.com/posts', function(res) {
  console.log('Response ' + res.statusCode);

  var body = '';
  res.on('data', function(data) {
    body += data;
    //console.log('BODY' + data);
  });

  res.on('end', function() {
    console.log(body);
  });

}).on('error', function(err) {
  console.log('Error: ' + err);
});