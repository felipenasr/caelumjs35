class ProdutosDAO{

    constructor(connection){
        this._connection = connection;
    }
    lista(callback){
        this._connection.query('SELECT * FROM livros', callback);
    }
    salvar(produto, callback){
        this._connection.query('INSERT INTO livros SET ?', produto, callback);
    }
}
module.exports = ProdutosDAO;


// function ProdutosDAO(){
//     this._connection = connection;
// }
// ProdutosDAO.prototype.lista = (callback)=>{
//     connection.query('SELECT * FROM livros', callback);    
// }

// module.exports = (connection)=>{
//     const produtosDAO = {
//         lista: (callback)=>{
//             connection.query('SELECT * FROM livros', callback);
//             connection.end();
//         }
//     }

//     return produtosDAO;
// }