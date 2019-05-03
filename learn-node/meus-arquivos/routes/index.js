const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const extrasController = require('../controllers/extrasController');

// Do work here
router.get('/', storeController.homePage);
router.get('/stores', storeController.getStores);
router.get('/store/:slugs', storeController.getStoreBySlug);
router.get('/stores/:id/edit', storeController.editStore);
router.get('/add', authController.isLoggedIn, storeController.addStore);
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

router.get('/tags', storeController.getStoresByTag);
router.get('/tags/:tag', storeController.getStoresByTag);

router.get('/login', userController.loginForm);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
router.get('/register', userController.registerForm);
router.post('/register', 
    userController.validateRegister,
    userController.register,
    authController.login
);

router.get('/account', authController.isLoggedIn, userController.account);
router.post('/account', userController.updateAccount);


//Extras LearnNode
router.get('/nome', extrasController.showName);
router.get('/reverse/:word/:number', extrasController.reverse);
router.get('/printQueryAsJson', extrasController.printQueryAsJson);

module.exports = router;
