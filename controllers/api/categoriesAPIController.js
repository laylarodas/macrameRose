const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;


const categoriesAPIController = {
    'list': (req, res) => {
        db.categories.findAll()
        .then(categories => {
            return res.status(200).json({
                meta:{
                    status:200,
                    count:categories.length,
                    url: '/api/categories'
                },
                data: categories
            })
        })
    },
    'detail': (req, res) => {
        db.categories.findByPk(req.params.id)
        .then(category => {
            return res.status(200).json({
                meta:{
                    status:200,
                    url: '/api/categories/:id'
                },
                data: category
            })
        })
    }
}


module.exports = categoriesAPIController;