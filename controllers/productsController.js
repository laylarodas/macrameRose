const path = require ('path');

const productsController = {
    productDetail:  (req,res) =>{
        //res.sendFile(path.resolve('views/products/productDetail.html'));
        res.render('products/productDetail');
    },
    productCart:  (req,res) =>{
        //res.sendFile(path.resolve('views/products/productCart.html'));
        res.render('products/productCart');
    },
    productCreate:  (req,res) =>{
        //res.sendFile(path.resolve('views/products/productCart.html'));
        res.render('products/productCreate');
    },
    productEdition:  (req,res) =>{
        //res.sendFile(path.resolve('views/products/productCart.html'));
        res.render('products/productEdition');
    },
    productsList:  (req,res) =>{
        //res.sendFile(path.resolve('views/products/productCart.html'));
        res.render('products/productsList');
    }
}

module.exports = productsController;