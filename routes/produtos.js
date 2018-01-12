module.exports = (app) => {
    
    app.get('/produtos', (req, res)=>{
        const connection = require('../infra/conexaoComOBanco')();
        const ProdutosDAO = require('../dao/ProdutosDAO');
        const produtosDAO = new ProdutosDAO(connection);
        
        produtosDAO.lista( (err, result)=>{
            const pagina = 'Produtos';
            res.render('produtos/lista', { produtos: result});            
            // res.send(result);            
        });
    })
    
    
    app.post('/produtos',(req, res)=>{
        const connection = require('../infra/conexaoComOBanco')();
        const ProdutosDAO = require('../dao/ProdutosDAO');
        const produtosDAO = new ProdutosDAO(connection);

        const produto = req.body;

        req.assert('titulo', 'Titulo é obrigatorio').notEmpty();
        req.assert('preco', 'Titulo é obrigatorio').isFloat();


        const errors = req.validationErrors();
        if(!errors){
            produtosDAO.salvar(produto, (err)=>{
                res.redirect('/produtos')
            })
        }else{
            res.send(errors);
        }
        
    });  
    
    app.get('/produtos/form',(req, res)=>{
        res.render('produtos/form');     
   });  


   app.get('/produtos/:id', (req, res)=>{
        const connection = require('../infra/conexaoComOBanco')();       
        const idDoLivro = req.params.id;

        connection.query('SELECT * FROM livros WHERE id = ?', idDoLivro, (err, result)=>{
            res.send(result);
        })
   })
}

