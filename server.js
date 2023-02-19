//import express
let express = require('express');

//Initialize the app
let app = express();

//Send message for default URL
// app.get('/', (request, response) => response.send('Hello world !'));

//render ejs pages
app.set('view engine', 'ejs');
app.get('/', (req, res) => {
    const data = {
      title: 'EcamAir',
      heading: 'Réservation',
      content: 'Destination: Barcelone'
    };
    res.render('template', data);
  });
  
//serve up static files (css)
 app.use('/public', express.static('public'));

//Setup server post
let port = 8000;

//Launch app to listen to specified port
app.listen(port, function() {
    console.log('Server running on port' + port)
});

