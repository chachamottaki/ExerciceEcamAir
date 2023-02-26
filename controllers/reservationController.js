
let order = require("../models/reservationModel");
let reservationList = [];

exports.addOrder = function(req,res){
    //let order1 = new Reservation();
    res.render('reservation.ejs');
}
exports.encode = function(req,res){
    let destination = req.body.destination; //get req.body. ... value in .ejs : name= ...
    let amount = req.body.amount;
    let insurance = req.body.insurance;
    let price = req.body.totalPrice;

    let reservation = new order(destination, amount, insurance, price);
    reservationList.push(reservation);
    console.log(reservationList);

    res.render('encode.ejs');
}
exports.validate = function(req,res){
    res.render('validation.ejs');
}
exports.confirm = function(req,res){
    res.render('confirmation.ejs');
}
