//import express
let express = require('express');

//Initialize the app
let app = express();

//Launch app to listen to specific port
const http = require("http");
const host = 'localhost';
const port = 8000;

const requestListener = function (req, res) {    
    res.writeHead(200);    
    res.end("Hii!");
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {    
    console.log(`Server is running on http://${host}:${port}`);
});
