const path = require ('path');

const productController = {
    products: (req,res) => {
        //res.sendFile(path.resolve('views/products/products.html'));
        
        res.send('All products');
        //falta crear la pagina de Ver todos los productos
    },
    productDetail:  (req,res) =>{
        res.sendFile(path.resolve('views/products/productDetail.html'));
    },
    productCart:  (req,res) =>{
        res.sendFile(path.resolve('views/products/productCart.html'));
    }
}

module.exports = productController;