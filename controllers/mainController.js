const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    index: (req,res) => {
        //res.sendFile(path.resolve('views/index.html'));
        const inSale = products.filter(product => product.section == 'inSale');
        const featured = products.filter(product => product.section == 'featured');
        res.render('index',{inSale, featured, toThousand});
    },
    contact:  (req,res) =>{
        res.send('Contact');
        //todavia no esta creada esta pagina
    },
    search: (req,res) =>{
        res.send('Search');
    },
    cart:  (req,res) =>{
        //res.sendFile(path.resolve('views/products/productCart.html'));
        res.render('cart');
    },
    login: (req,res) => {
        //res.sendFile(path.resolve('views/users/login.html'));
        res.render('login');
    },
    register:  (req,res) =>{
        //res.sendFile(path.resolve('views/users/register.html'));
        res.render('register');
    }

}

module.exports = mainController;