
module.exports = function rotasProdutos(app) {
    app.get('/produtos', function(req, res) {

        var connection = app.infra.connectionFactory();
        var produtosBanco = new app.infra.ProdutosDAO(connection);

        produtosBanco.listar(function(err, results) {
            res.render('produtos/lista', {lista: results});
        });

        connection.end();  
    });
}

 