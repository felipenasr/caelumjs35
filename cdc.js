const app = require('./config-express');

// requisita rotas
require('./routes/home')(app);
require('./routes/produtos')(app);





// Listen e qual porta

app.listen(3000, ()=>{
    console.log('Rodando...');
});