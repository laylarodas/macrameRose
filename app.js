const express = require('express');
const path = require('path');
const app = express();
const methodOverride = require('method-override');


const mainRoutes = require('./routes/main');
const productRoutes = require('./routes/products');
const userRoutes = require('./routes/user');

const publicPath = path.resolve(__dirname, './public');

app.use(express.static(publicPath));


app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.set('view engine','ejs');


app.use(methodOverride('_method'));


app.listen(process.env.PORT || 3000, ()=>{
    console.log('Servidor corriendo en el puerto 3000');
});

//rutas estaticas
app.use('/', mainRoutes);

app.use('/', productRoutes);

app.use('/', userRoutes);

app.use((req,res,next)=>{
    res.status(404).render('not-found');
})

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