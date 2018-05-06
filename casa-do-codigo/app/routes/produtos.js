
module.exports = function rotasProdutos(app) {
    app.get('/produtos', function (req, res) {
        var mysql = require('mysql');
        var connection = mysql.createConnection({
            host : 'localhost',
            user : 'root',
            password : '9xdjpcda',
            database : 'casadocodigo'
        });

        connection.query('SELECT * FROM livros', function (err, results) {
            res.send(results);
        });

        connection.end();
    });
}

