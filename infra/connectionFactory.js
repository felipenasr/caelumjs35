const mysql = require('mysql');


function connectionFactory(){
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'casadocodigo'
    })
}



module.exports = () => connectionFactory;