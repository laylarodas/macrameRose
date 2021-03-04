const express = require('express');

const path = require('path');

const app = express();

const mainRoutes = require('./routes/main');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/user');

const publicPath = path.resolve(__dirname, './public');

app.set('view engine','ejs');

app.use(express.static(publicPath));

app.listen(process.env.PORT || 4000, ()=>{
    console.log('Servidor corriendo en el puerto 4000');
});

//rutas estaticas
app.use('/', mainRoutes);

app.use('/', productRoutes);

app.use('/', userRoutes);


/*
app.get('/', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});


app.get('/productDetail', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/productDetail.html'));
});

app.get('/productCart', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/productCart.html'));
});

app.get('/register', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', (req,res)=>{
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

*/