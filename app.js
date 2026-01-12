require('dotenv').config();

const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const methodOverride = require('method-override');

const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');

// Configuración de sesión
app.use(session({
    secret: process.env.SESSION_SECRET || "macrame_rose_default_secret",
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

// Configuración del puerto
const PORT = process.env.PORT || 3001;

app.listen(PORT, ()=>{
    console.log(`🌹 Macramé Rose corriendo en http://localhost:${PORT}`);
    console.log(`📊 API disponible en http://localhost:${PORT}/api`);
});

// Manejo de ruta 404
app.use((req,res,next)=>{
    res.status(404).render('not-found');
});