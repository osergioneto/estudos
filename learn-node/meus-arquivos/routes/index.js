const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const extrasController = require('../controllers/extrasController');

// Do work here
router.get('/', storeController.homePage);

//Extras LearnNode
router.get('/nome', extrasController.showName);
router.get('/reverse/:word/:number', extrasController.reverse);
router.get('/printQueryAsJson', extrasController.printQueryAsJson);

module.exports = router;
