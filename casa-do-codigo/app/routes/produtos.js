
module.exports = function rotasProdutos(app) {

    var listarProdutos = function (req, res) {

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.listar(function (err, results) {
            res.format({
                html: function() {
                    res.render('produtos/lista', { lista: results });
                },
                json: function(params) {
                    res.json(results);
                }
            });
        });

        connection.end();
    };

    var cadastrarProduto = function(req, res) {

        var produto = req.body;
        console.log(produto);
        
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.salvar(produto, function (err, results) {
            console.log(err);
            res.redirect('/produtos');
        }); 
    };

    app.get('/produtos', listarProdutos);

    app.get('/produtos/formularios', function(req,res) {
        res.render('produtos/forms.ejs');
    });

    app.post('/produtos', cadastrarProduto);
    
}

 