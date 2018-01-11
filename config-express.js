// configuração
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(express.static('./public'));
// requisita rotas
require('./routes/home')(app);
require('./routes/produtos')(app);


module.exports = app;