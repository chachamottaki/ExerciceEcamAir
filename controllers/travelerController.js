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

    //creation of MySQL database connection
    var mysql = require("mysql");
    var connection = mysql.createConnection({
        host : '127.0.0.1',
        user : 'root',
        password : 'root123',
        database : 'EcamAir'
    });

    //connect to db
    connection.connect((err) => {
        if (err) throw err;
        console.log('Connected to MySQL database!');
    });

    //insert data

    if(User.amount == 1){
        const sql = "INSERT INTO ecamair.orders (destination,names , ages, price, insurance) VALUES (?,?,?,?,?)";
        const values = [User.destination, User.name,User.age, User.totalPrice,User.insurance];
        connection.query(sql,values, function(err, result) {
            if (err) throw err;
            console.log('1 record inserted!');
        });
    }
    else {
        for (let i = 0; i < User.amount; i++) { 
            const sql = "INSERT INTO ecamair.orders (destination,names , ages, price, insurance) VALUES (?,?,?,?,?)";
            const values = [User.destination, User.name[i],User.age[i], User.totalPrice,User.insurance];
            connection.query(sql,values, function(err, result) {
                if (err) throw err;
                console.log('1 record inserted!');
            });
        }
    }
    
    //close connection
    connection.end(function(err) {
        if (err) throw err;
        console.log('MySQL connection closed!');
    });
      
      

}