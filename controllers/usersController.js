const path = require ('path');

const usersController = {
    login: (req,res) => {
        //res.sendFile(path.resolve('views/users/login.html'));
        res.render('users/login');
    },
    register:  (req,res) =>{
        //res.sendFile(path.resolve('views/users/register.html'));
        res.render('users/register');
    }

}

module.exports = usersController;