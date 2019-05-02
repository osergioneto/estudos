const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const extrasController = require('../controllers/extrasController');

// Do work here
router.get('/', storeController.homePage);
router.get('/stores', storeController.getStores);
router.get('/store/:slugs', storeController.getStoreBySlug);
router.get('/stores/:id/edit', storeController.editStore);
router.get('/add', storeController.addStore);
router.post('/add',
    storeController.upload,
    storeController.resize,
    storeController.createStore
);
router.post('/add/:id', 
    storeController.upload,
    storeController.resize,
    storeController.updateStore
);

//Extras LearnNode
router.get('/nome', extrasController.showName);
router.get('/reverse/:word/:number', extrasController.reverse);
router.get('/printQueryAsJson', extrasController.printQueryAsJson);

module.exports = router;
