const mysql = require('mysql');


function fabricaDeConexao(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'caelum',
        database: 'casadocodigo'
    })
}



module.exports = fabricaDeConexao;