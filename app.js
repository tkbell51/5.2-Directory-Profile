const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const data = require('./data.js')

app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');



app.get('/directory', function(req, res){
  res.render('directory', data);
});












app.listen(3000, function(){
  console.log('This is my directory!!');
});
