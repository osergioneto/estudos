
module.exports = function rotasProdutos(app) {
    app.get('/produtos', function(req, res) {

        var connection = app.infra.connectionFactory();
        var produtosBanco = app.infra.produtosBanco;

        produtosBanco.listar(connection, function(err, results) {
            res.render('produtos/lista', {lista: results});
        });

        connection.end();  
    });
}

 