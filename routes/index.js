var express = require('express');
var router = express.Router();
const mainController = require('../controllers/main.js');

/* GET home page. */
router.get('/', (req, res, next) => {res.status(200).send({ message: "hello world!!"})});

module.exports = router;
