//Get an instance of the express router and set routes
let express = require('express');
let router = express.Router();

//Instantiate controller
var reservationController = require('./controllers/reservationController');

router.get('/',reservationController.addOrder);
router.post('/encode', reservationController.encode);
router.post('/validation', reservationController.validate);
router.post('/confirmation', reservationController.confirm);

module.exports = router;