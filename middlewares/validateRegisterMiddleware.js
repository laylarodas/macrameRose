const { body } = require('express-validator');
const path = require('path');

const db = require('../database/models');

const validations = [
    body('name').notEmpty().withMessage('Tienes que escribir un nombre completo.').bail().isLength({min: 2}).withMessage('Debe tener al menos 2 caracteres.'),
    body('userName').notEmpty().withMessage('Tienes que escribir un nombre de usuario.').bail().isLength({min: 2}).withMessage('Debe tener al menos 2 caracteres.'),
    body('email').notEmpty().withMessage('Tienes que escribir un correo electronico.').bail().isEmail().withMessage('Debes escribir un formato de correo electronico válido.').bail().custom(value => {
        return db.users.findAll({where: {email: value}}).then(user => {
          if (user) {
            return Promise.reject('Este email ya esta registrado.');
          }
        }).catch(error=>error);
    }),
    body('password').notEmpty().withMessage('Tienes que escribir una contraseña.').bail().isLength({min: 8}).withMessage('Debe tener al menos 8 caracteres.').matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
    ).withMessage('Debe tener al menos 1 mayúscula,1 minuscula,1 caracter especial y 1 número.'),
    body('avatar').custom((value, { req }) => {
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
    })

]


module.exports = validations;