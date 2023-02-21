
let order = require("../models/reservationModel");

exports.addOrder = function(req,res){
    let order1 = new Reservation();
    res.render('reservation.ejs');
}
exports.encode = function(req,res){
    res.render('encode.ejs');
}
exports.validate = function(req,res){
    res.render('validation.ejs');
}
exports.confirm = function(req,res){
    res.render('confirmation.ejs');
}

