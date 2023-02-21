//import express
let express = require('express');

//Initialize the app
let app = express();


//render ejs pages
// app.set('view engine', 'ejs');

// app.get('/', (req, res) => {
//     res.render('reservation');
//   });

//   app.post('/', (req, res) => {
//     res.render('encode');
//   });

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

