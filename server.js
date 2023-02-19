//import express
let express = require('express');

//Initialize the app
let app = express();

//Send message for default URL
app.get('/', (request, response) => response.send('Hello world !'));

//Setup server post
let port = 8000;

//Launch app to listen to specified port
app.listen(port, function() {
    console.log('Server running on port' + port)
});

