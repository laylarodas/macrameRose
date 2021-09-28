const path = require('path');
const db = require('../../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;
const moment = require('moment');
const { response } = require('express');

const usersAPIController = {
    'list': (req, res) => {
        db.users.findAll()
        .then(users => {
            return res.status(200).json({
                meta:{
                    status:200,
                    total:users.length,
                    url: '/api/users'
                },
                data: users
            })
        })
    },
    'detail': (req, res) => {
        db.users.findByPk(req.params.id)
        .then(user => {
            return res.status(200).json({
                meta:{
                    status:200,
                    url: '/api/users/:id'
                },
                data: user
            })
        })
    }
}


module.exports = usersAPIController;