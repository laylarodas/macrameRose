const path = require('path');
const fs = require('fs');
const { validationResult } = require('express-validator');

const db = require('../database/models');
const sequelize = db.sequelize;
const Op = db.Sequelize.Op;

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
    index: async function(req,res){
        //res.sendFile(path.resolve('views/products/productCart.html'));
        
        let products = await db.products.findAll({
            order: [
                ["name","ASC"]
            ]
        })
        res.render('products',{products, toThousand});
    },
    detail: async function(req,res){
        //res.send('detail');
        //let product = products.find(product=>product.id==req.params.id)
		//res.render('detail',{product,toThousand});

        let product = await db.products.findOne({
            where: {
                id: req.params.id
            },
            include: ['color','category','size']
        })


        res.render('detail',{product,toThousand})
    },
    create: async function(req,res){
        //res.sendFile(path.resolve('views/products/productCart.html'));

        let categories = await db.categories.findAll();
        let colors = await db.colors.findAll();
        let sizes = await db.sizes.findAll();

        res.render('create',{sizes,colors,categories});
    },
    store: async function(req,res){
        let categories = await db.categories.findAll();
        let colors = await db.colors.findAll();
        let sizes = await db.sizes.findAll();

        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            return res.render('create',{
                errors: resultValidation.mapped(),
                oldData: req.body,
                categories,
                colors,
                sizes
                
            })
            
        }
        

        /*let ids = products.map(p => p.id);//Array de los ids del archivo json

         //Objeto Nuevo Producto
        let newProduct = {
            id: Math.max(...ids)+1,
            ...req.body,
            image: image
        } 
          //Add newProduct a products
        products.push(newProduct)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));*/

        if(req.file != undefined){
            image = req.file.filename;
        }else{
            image = 'default-image.png';
        }


        await db.products.create({
            name: req.body.name,
            image: image,
            description: req.body.description,
            categoryId: req.body.categoryId,
            colorId: req.body.colorId,
            sizeId: req.body.sizeId,
            price: req.body.price,
            discount: req.body.discount,
            stock: req.body.stock
        });
        
        res.redirect('/products');
        

        /*Redireccionamiento a todos los productos */

		//res.redirect('/products');

    },
    edit: async function(req,res){
        //res.sendFile(path.resolve('views/products/productCart.html'));
        //let productToEdit = products.find(product=>product.id==req.params.id);
		//res.render('edit',{productToEdit,toThousand});

        let productToEdit = await db.products.findByPk(req.params.id)
        
        let categories = await db.categories.findAll();
        let colors = await db.colors.findAll();
        let sizes = await db.sizes.findAll();


        res.render('edit',{productToEdit,categories,colors,sizes,toThousand})
    },
    update: async function(req,res) {
        //'envio de datos actualizados de un producto'
        /*let id = req.params.id;
        let productToEdit = products.find(product => product.id == id);

        let image; 
		if(req.file != undefined){
			image = req.file.filename
		} else {
			image = productToEdit.image
		}

        productToEdit = {
			id: productToEdit.id,
			...req.body,
			image: image,
		};

        let newProducts = products.map(product => {
			if (product.id == productToEdit.id) {
				return product = {...productToEdit};
			}
			return product;
		});

        fs.writeFileSync(productsFilePath, JSON.stringify(newProducts, null, ' '));
        res.redirect('/products'); */

        let productToEdit = await db.products.findByPk(req.params.id);

        let categories = await db.categories.findAll();
        let colors = await db.colors.findAll();
        let sizes = await db.sizes.findAll();

        const resultValidation = validationResult(req);
        if(resultValidation.errors.length > 0){
            return res.render('edit',{
                errors: resultValidation.mapped(),
                oldData: req.body,
                categories,
                colors,
                sizes,
                productToEdit
                
            })
            
        }



        let image;
		if(req.file != undefined){
			image = req.file.filename
		} else {
			image = productToEdit.image
		}


        await db.products.update({
            ...req.body,
            image: image
        },{
            where: {
                id: req.params.id
            }
        })

        res.redirect('/products');

    },
    destroy: async function(req,res) {
        //'para eliminar un producto'
        /*let id = req.params.id;
        let finalProducts = products.filter(product => product.id != id);

        fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
        res.redirect('/products');*/

        await db.products.destroy({
            where:{
                id:req.params.id,
            }
        })

        res.redirect('/products');
    }
    
}


module.exports = productsController;