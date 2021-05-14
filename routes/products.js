const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsController');
const uploadFile = require('../middlewares/productMulterMiddleware');
const validations = require('../middlewares/validateProductsMiddleware');


/*** GET ALL PRODUCTS ***/
router.get('/', productsController.index);//VISTA DE TODOS LOS PRODUCTOS


/*** GET ONE PRODUCT  ***/
router.get('/detail/:id/', productsController.detail);//VISTA DEL DETALLE DE UN PRODUCTO


/*** CREATE ONE PRODUCT ***/
router.get('/create', productsController.create);// VISTA DE FORMULARIO DE CREACION
router.post('/',uploadFile.single('image'),validations,productsController.store);// GUARDAR NUEVO PRODUCTO


/*** EDIT ONE PRODUCT ***/
router.get('/edit/:id', productsController.edit);//VISTA DE FORMULARIO DE EDICION
router.put('/:id',uploadFile.single('image'),validations,productsController.update);//GUARDAR DATOS ACTUALIZADOS


/*** DELETE ONE PRODUCT ***/
router.delete('/:id', productsController.destroy);//ELIMINA UN PRODUCTO  */






module.exports = router;