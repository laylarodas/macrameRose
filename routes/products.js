const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');


router.get('/productsList', productsController.productsList);
router.get('/productDetail', productsController.productDetail);
router.get('/productCart', productsController.productCart);
router.get('/productCreate', productsController.productCreate);
router.get('/productEdition', productsController.productEdition);

module.exports = router;