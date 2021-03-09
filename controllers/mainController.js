const path = require ('path');

const mainController = {
    index: (req,res) => {
        //res.sendFile(path.resolve('views/index.html'));
        res.render('index');
    },
    contact:  (req,res) =>{
        res.send('Contact');
        //todavia no esta creada esta pagina
    },

}

module.exports = mainController;