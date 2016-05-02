var express = require('express');
var app = express();

app.use('/api', express.static('api'));
app.use(express.static('public'));

app.listen(3000, function () {
  console.log('Example app listening on port http://localhost:3000 ');
});