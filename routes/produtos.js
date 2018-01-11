module.exports = (app) => {

    app.get('/produtos', (req, res)=>{
        const connection = require('../infra/conexaoComOBanco')();
        connection.query('SELECT * FROM livros', (err, result)=>{
            const pagina = 'Produtos';
            res.render('produtos/lista', { produtos: result});            
            // res.send(result);            
        });
        
        connection.end();
   })

   app.get('/produtos/:id', (req, res)=>{
        const connection = require('../infra/conexaoComOBanco')();       
        const idDoLivro = req.params.id;

        connection.query('SELECT * FROM livros WHERE id = ?', idDoLivro, (err, result)=>{
            res.send(result);
        })
   })
}

