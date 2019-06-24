const express = require('express');
const router = express.Router();
const storeController = require('../controllers/storeController');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const reviewController = require('../controllers/reviewController');
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
router.post('/account/forgot', authController.forgot);
router.get('/account/reset/:token', authController.reset);
router.post('/account/reset/:token', 
  authController.confirmPassword,
  authController.update
);
router.get('/map', storeController.mapPage);
router.get('/hearts', authController.isLoggedIn, storeController.getHearts);
router.post('/reviews/:id', authController.isLoggedIn, reviewController.addReview);

router.get('/top', storeController.getTopStores);

/* API */
router.get('/api/v1/search', storeController.searchStores);
router.get('/api/v1/stores/near', storeController.mapStores);
router.post('/api/v1/stores/:id/heart', storeController.heartStore);

//Extras LearnNode
router.get('/nome', extrasController.showName);
router.get('/reverse/:word/:number', extrasController.reverse);
router.get('/printQueryAsJson', extrasController.printQueryAsJson);

module.exports = router;
