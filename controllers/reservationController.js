
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

    if (insurance == 'on') {
        totalPrice = (amount * 45) + 20 ;
    } else {
        totalPrice = amount * 45;
    }

    let reservation = new order(destination, amount, insurance, totalPrice);
    reservationList.push(reservation);
    console.log(reservationList);

    res.render('encode.ejs');
}

exports.confirm = function(req,res){
    res.render('confirmation.ejs');
}

