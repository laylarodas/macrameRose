const { body } = require('express-validator');
const path = require('path');
const db = require('../database/models');


const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir el nombre del producto.').bail().isLength({min: 5}).withMessage('Debe tener al menos 5 caracteres.'),
    body('description').notEmpty().withMessage('Tienes que escribir la descripcion del producto.').bail().isLength({min: 20}).withMessage('Debe tener al menos 20 caracteres.'),
    body('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = [".jpg", ".png" , ".gif", ".jpeg"];

        if(!file){
            throw new Error('Tienes que subir una imagen.');
        }else{
            let fileExtension = path.extname(file.originalname);
            if(!acceptedExtensions.includes(fileExtension)){
                throw new Error(`Las extensiones permitidas son ${acceptedExtensions.join(',')}`);
            }
        }
        return true;
    }),
    body('categoryId').custom(value =>{
        if(value === undefined){
            throw new Error('Debes seleccionar una categoria.');
        }
        return true;
    }),
    body('colorId').custom(value =>{
        
        if(value === ''){
            throw new Error('Debes elegir un color.');
        } else {
            db.colors.findAll({where:{id: value}}).then(response =>{
                if (response) {
                    return true
                }else{
                    throw new Error('Debe seleccionar un color valido.')
                }
            })
        }
        return true;
    }),
    body('sizeId').custom(value =>{
        if(value === ''){
            throw new Error('Debes elegir un tamaño.');
        } else {
            db.sizes.findAll({where:{id: value}}).then(response =>{
                if (response) {
                    return true
                }else{
                    throw new Error('Debe seleccionar un tamaño valido.')
                }
            })
        }
        return true;
    }),
    body('price').custom(value =>{
        if(value == ''){
            throw new Error('Debes ingresar el precio del producto.')
        }
        return true
    }),
    body('discount').custom(value =>{
        if(value == ''){
            throw new Error('Debes ingresar el descuento del producto, sino tiene descuento ingresar 0.')
        }
        return true
    }),
    body('stock').custom(value =>{
        if(value == ''){
            throw new Error('Debes ingresar el stock del producto.')
        }
        return true
    })
]


module.exports = validations;