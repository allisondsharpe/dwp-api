var express = require('express')
//var body_parser = require('body-parser');
var app = express();

//Config 
var port = 4000; 

app.get('/api/v1', function(req, res) {
  res.json({hello: 'world'});
});

app.listen(port, function() {
  console.log('Server Active on', port); 
});
