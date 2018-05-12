
module.exports = function rotasProdutos(app) {

    var listarProdutos = function (req, res) {

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.listar(function (err, results) {
            res.render('produtos/lista', { lista: results });
        });

        connection.end();
    };

    var cadastrarProduto = function(req, res) {

        var produto = req.body;

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salvar(produto, function (err, results) {
            res.redirect('/produtos');
        }); 
    };

    app.get('/produtos', listarProdutos);

    app.get('/produtos/formularios', function(req,res) {
        res.render('produtos/forms.ejs');
    });

    app.post('/produtos', cadastrarProduto);
    
}

 