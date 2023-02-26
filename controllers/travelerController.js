let Traveler = require("../models/travelerModel");
travelersList = [];

exports.validate = function(req,res){
    let name = req.body.name;
    let age = req.body.age;

    let traveler = new Traveler(name,age);
    req.session.traveler = traveler;
    
    req.session.user = {
        ...req.session.user,
        name: req.body.name,
        age: req.body.age
      };
    let User = req.session.user;

    res.render('validation.ejs', {destination: User.destination, n: User.amount, name:User.name, age: User.age});
}