module.exports = (app) => {

    
    app.get('/produtos', (req, res) => {
        var pagina = 'Produtos';
        const produtos = ['Livro JS', 'Livro Node'];
        
        res.render('produtos/lista', {
            produtos: produtos
            
        });
        
        
    });
}
