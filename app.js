const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');
const roboController = require('./controllers/robo-controller');
// const data = require('./data.js')

app.use(express.static('public'));
app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');


app.get('/directory', roboController.directory);

app.get('/directory/:id', roboController.profile);


app.listen(process.env.PORT || 3000, function(){
  console.log('This is my directory!!');
});
