const express = require('express');
const router = express.Router();

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

router.get('/login', mainController.login);
router.get('/register', mainController.register);


router.get('/search', mainController.search);


router.get('/contact', mainController.contact);

router.get('/cart', mainController.cart);

router.get('/prueba', mainController.prueba);


module.exports = router;