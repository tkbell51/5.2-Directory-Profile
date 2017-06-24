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

app.get('/directory/:id', function(req, res){
 const filterList = data.users
  var user;

  for(var i = 0; i < data.users.length; i++) {
    if(data.users[i].id == req.params.id) {
     user = data.users[i];
    }
  }
//   var skill;
// // for(var i=0; i<user.skills.length; i++) {
// //   skill = user.skills[i];
// //   console.log(skill);
// // }
  // console.log('user', user);

  res.render('profile', user);
});










app.listen(3000, function(){
  console.log('This is my directory!!');
});
