let Traveler = require("../models/travelerModel");
travelersList = [];

exports.validate = function(req,res){
    let name = req.body.name;
    let age = req.body.age;

    let traveler = new Traveler(name,age);
    req.session.traveler = traveler;
    console.log(traveler);

    const amount = req.session.amount;
    const destination = req.session.destination;
    const travelersList = req.session.traveler;
    // console.log(travelersList.name);
    // console.log(travelersList.name[0]);

    res.render('validation.ejs', {destination: destination,n: amount, travelersList : travelersList});
}