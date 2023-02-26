let Traveler = require("../models/travelerModel");
travelersList = [];

exports.validate = function(req,res){
    let name = req.body.name;
    let age = req.body.age;

    let traveler = new Traveler(name,age);
    travelersList.push(traveler);
    console.log(travelersList);

    res.render('validation.ejs');
}
