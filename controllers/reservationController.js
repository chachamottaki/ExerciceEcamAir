
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
        insurance = 'off';
        totalPrice = amount * 45;
    }

    let reservation = new order(destination, amount, insurance, totalPrice);
    reservationList.push(reservation);

    req.session.destination = destination;
    req.session.amount = amount;
    req.session.insurance = insurance;
    req.session.totalPrice = totalPrice;

    req.session.user = {
        destination : req.session.destination,
        amount: req.session.amount,
        insurance: req.session.insurance,
        totalPrice: req.session.totalPrice
      };

    res.render('encode.ejs', {n : amount});
}

exports.confirm = function(req,res){
    res.render('confirmation.ejs');
}
