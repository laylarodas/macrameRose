const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;


const productsAPIController = {
    'list': (req, res) => {
        db.products.findAll()
        .then(products => {
            return res.status(200).json({
                meta:{
                    status:200,
                    total:products.length,
                    url: '/api/products'
                },
                data: products
            })
        })
    },
    'detail': (req, res) => {
        db.products.findByPk(req.params.id)
        .then(product => {
            return res.status(200).json({
                meta:{
                    status:200,
                    url: '/api/products/:id'
                },
                data: product
            })
        })
    }
}


module.exports = productsAPIController;