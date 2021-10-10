const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const methodOverride = require('method-override');

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');


app.use(session({
    secret: "Shh, It' a secret ",
    resave: false,
    saveUninitialized: false
}));

app.set('view engine','ejs');
app.set('views', path.join(__dirname, '/views'));
app.use(cookieParser());
//const publicPath = path.resolve(__dirname, './public');
app.use(express.static('public'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(methodOverride('_method'));
app.use(userLoggedMiddleware);

const mainRoutes = require('./routes/main');
const productRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const categoriesRoutes = require('./routes/categories');


const apiProductsRouter = require('./routes/api/products');
const apiUsersRouter = require('./routes/api/users');
const apiCategoriesRouter = require('./routes/api/categories');

//rutas estaticas
app.use('/', mainRoutes);
app.use('/products', productRoutes);
app.use('/user', usersRoutes);
app.use('/categories', categoriesRoutes);

app.use('/api/products',apiProductsRouter);
app.use('/api/users',apiUsersRouter);
app.use('/api/categories',apiCategoriesRouter);

app.listen(process.env.PORT || 3001, ()=>{
    console.log('Servidor corriendo en el puerto 3001');
});


app.use((req,res,next)=>{
    res.status(404).render('not-found');
});

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