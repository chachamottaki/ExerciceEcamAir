//import express
let express = require('express');
const session = require('express-session');

//Initialize the app
let app = express();

//use express bodyparser (req.body...) to get form values
app.use(express.urlencoded({extended:true}));

//use express session to get values outside form
app.use(session({
    secret: 'mysecret', // set a secret string for the session
    resave: false,
    saveUninitialized: true
  }));

//router
let router = require('./routes');
app.use('/', router);

// serve up static files (css)
 app.use('/public', express.static('public'));

//Setup server post
let port = 8000;

//Launch app to listen to specified port
app.listen(port, function() {
    console.log('Server running on port' + port)
});


