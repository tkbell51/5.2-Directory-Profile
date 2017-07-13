const Data = require('../model/data');

module.exports = {
  directory: function(req, res){
    res.render('directory', {model: Data.all()});
  },

  profile: function(req, res){

    var user = req.params.id;
    const profile = Data.findOne(user);
    res.render('profile', {model: profile});
  }
};
