// configuração
const bodyParser = require('body-parser');
const express = require('express');
const expressValidator = require('express-validator');
const load = require('express-load');
const app = express();
app.set('view engine', 'ejs');


// configurando midleware

app.use(express.static('./public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(expressValidator());


// 2 - rotas
load('routes')
    .into(app);


// 3 - tratando erros
app.use((req, res, next)=>{
    res.status(404).send('ERRO');
    next();
});


// requisita rotas
require('./routes/home')(app);
require('./routes/produtos')(app);


module.exports = app;