const path = require('path');
const fs = require('fs');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const productsController = {
    index:  (req,res) =>{
        //res.sendFile(path.resolve('views/products/productCart.html'));
        res.render('products',{products: products, toThousand});
    },
    detail:(req,res)=>{
        //res.send('detail');
        let product = products.find(product=>product.id==req.params.id)
		res.render('detail',{product,toThousand});
    },
    create:  (req,res) =>{
        //res.sendFile(path.resolve('views/products/productCart.html'));
        res.render('create');
    },
    store: (req,res) =>{

        if(req.file != undefined){
            image = req.file.filename;
        }else{
            image = 'default-image.png';
        }

        let ids = products.map(p => p.id);//Array de los ids del archivo json

        /* Objeto Nuevo Producto */
        let newProduct = {
            id: Math.max(...ids)+1,
            ...req.body,
            image: image
        } 
        /* Add newProduct a products */
        products.push(newProduct)
        fs.writeFileSync(productsFilePath, JSON.stringify(products, null, ' '));

        /*Redireccionamiento a todos los productos */
		res.redirect('/products');

    },
    edit:  (req,res) =>{
        //res.sendFile(path.resolve('views/products/productCart.html'));
        let productToEdit = products.find(product=>product.id==req.params.id);
		res.render('edit',{productToEdit,toThousand});
    },
    update: (req,res)=> {
        //'envio de datos actualizados de un producto'
        let id = req.params.id;
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
        res.redirect('/products');

    },
    destroy: (req,res) => {
        //'para eliminar un producto'
        let id = req.params.id;
        let finalProducts = products.filter(product => product.id != id);

        fs.writeFileSync(productsFilePath, JSON.stringify(finalProducts, null, ' '));
        res.redirect('/products');
    }
    
}


module.exports = productsController;