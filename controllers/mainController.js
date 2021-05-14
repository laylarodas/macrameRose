const fs = require('fs');
const path = require('path');

const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const mainController = {
    index: async  function(req,res){
        //res.sendFile(path.resolve('views/index.html'));
        //const inSale = products.filter(product => product.section == 'inSale');
        //const featured = products.filter(product => product.section == 'featured');
        //res.render('index',{inSale, featured, toThousand});


        let inSale = await db.products.findAll({
            where:{
                discount: {[Op.gt] : 0}
            },
            limit: 4
        });
        let featured = await db.products.findAll({
            limit: 8
        });

        let categories = await db.categories.findAll();

        res.render('index',{inSale,featured,categories,toThousand});
    },
    contact:  (req,res) =>{
        res.send('Contact');
        //todavia no esta creada esta pagina
    },
    search: async function(req,res){
        /*let search = req.query.keywords;
        let productsToSearch = products.filter(product => product.name.toLowerCase().includes(search));
        res.render('results',{
            products: productsToSearch,
            search,
            toThousand,
        });*/
        let search = req.query.keywords;
        
        let productsToSearch = await db.products.findAll({where: {name: {[Op.like]: `%${search}%`}}});
        res.render('results',{
            products: productsToSearch,
            search,
            toThousand
        })
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
    },
    prueba: async function(req,res) {

        let productsAll = await db.products.findAll({
            include:['category','color','size'],
            order: [
                ["name" , "ASC"]
            ],
            limit: 1
        })
        let categoryOne = await db.products.findAll({where: {categoryId: 1}});
        let categoryTwo = await db.products.findAll({where: {categoryId: 2}});

        let search = req.query.keywords;

        let productsToSearch = await db.products.findAll({where: {name: {[Op.like]: `%${search}%`}}});

        res.render('pruebaVista',{
            productsAll,
            products: productsToSearch,
            search,
            categoryOne,
            categoryTwo,
        });
    }

}

module.exports = mainController;