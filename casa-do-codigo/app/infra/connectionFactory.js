var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '9xdjpcda',
        database: 'casadocodigo'
    });  
}

//Wrapper. "Embalei" uma função dentro da outra.   
module.exports = function() {
    console.log('Carregamento do mysql');
    return createDBConnection;
}