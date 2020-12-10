var mysql = require('mysql');

function createDBConnection() {
    if (!process.env.NODE_ENV) {
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '9xdjpcda',
            database: 'casadocodigo'
        });    
    }
      
    if (process.env.NODE_ENV == 'test'){
        return mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '9xdjpcda',
            database: 'casadocodigo_test'
        });    
    }
}

//Wrapper. "Embalei" uma função dentro da outra.   
module.exports = function() {
    console.log('Carregamento do mysql');
    return createDBConnection;
}