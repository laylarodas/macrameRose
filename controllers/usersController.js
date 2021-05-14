const { validationResult } = require('express-validator');
const User = require('../models/User');
const bcrypt = require('bcryptjs');


const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;


const usersController = {
    register: function(req,res) {
        res.render('register');
    },
    registerProcess: async function(req,res){
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            return res.render('register',{
                errors: resultValidation.mapped(),
                oldData: req.body,
                
            })
            
        }


        //let userInDB = User.findField('email',req.body.email);

        let userInDB = await db.users.findOne({
            where: {
                email: req.body.email
            }
        })


        if(userInDB){
            return res.render('register',{
                errors:{
                    email: { 
                        msg: 'Este email ya esta registrado.'
                    }
                },
                oldData: req.body
            })
        }

        
        /*let userToCreate = {
            ...req.body,
            password: bcryptjs.hashSync(req.body.password, 10),
            avatar: req.file.filename
        }*/

        if(req.file != undefined){
            avatar = req.file.filename;
        }else{
            avatar = 'default-image.png';
        }

        await db.users.create({
            name: req.body.name,
            userName: req.body.userName,
            email: req.body.email,
            avatar: avatar,
            password: bcrypt.hashSync(req.body.password, 10)
        })

        //let userCreate = User.create(userToCreate);
        res.redirect('/user/login');
        //res.send('Ok, Pasaste todas las validaciones puedes ingresar');
    },
    registerEdit: async function(req,res){
        let userToEdit = await db.users.findByPk(req.params.id);

        res.render('userEdit',{userToEdit});
    },
    registerUpdate: async function(req,res){
       
        let userToEdit = await db.users.findByPk(req.params.id)
        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            return res.render('userEdit',{
                errors: resultValidation.mapped(),
                userToEdit,
            })
        }
        


        let avatar;
		if(req.file != undefined){
			avatar = req.file.filename
		} else {
			avatar = userToEdit.avatar
		}


        await db.users.update({
            name: req.body.name,
            userName: req.body.userName,
            email: req.body.email,
            avatar: avatar,
            password: bcrypt.hashSync(req.body.password, 10)
        },{
            where: {
                id: req.params.id
            }
        })

        res.redirect('/user/profile');



        //res.send('USUARIO EDITADO')
    },
    login: function(req,res) {
        res.render('login');
    },
    loginProcess: function (req,res) {
        //let userToLogin = User.findField('email',req.body.email);
        db.users.findOne({
            where: {
                email: req.body.email
            }
        }).then(response => {
            if (response) {
                let userToLogin = response;
                let okPassword = bcrypt.compareSync(req.body.password,userToLogin.password);
                if(okPassword == true) {
                    delete userToLogin.password;
                    req.session.userLogged = userToLogin;
                    if(req.body.rememberUser) {
                        res.cookie('userEmail', req.body.email, { maxAge: (1000*60)*60});
                    }
                    return res.redirect('/user/profile');
                }
                return res.render('login', {
                    errors: {
                        email:{
                            msg: 'Las credenciales son invalidas.'
                        }
                    }
                })
            }       
                    
            return res.render('login', {
                errors: {
                    email: {
                        msg: 'No se encuentra este email en nuestra base de datos.'
                   }
                }
            });
        }).catch(error=>error)
        
                
    },
    profile: function (req,res) {
        res.render('profile',{
            user: req.session.userLogged
        });
    },
    logout: function (req,res) {
        res.clearCookie('userEmail');
        req.session.destroy();
        return res.redirect('/');
    }

}

module.exports = usersController;