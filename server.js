//import express
let express = require('express');

//Initialize the app
let app = express();

//Launch app to listen to specific port
const port = 8000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  