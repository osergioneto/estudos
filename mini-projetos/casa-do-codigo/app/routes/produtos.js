
module.exports = function rotasProdutos(app) {

    var listarProdutos = function (req, res) {

        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        produtosDAO.listar(function (err, results) {
            if(err){
                return next(err);
            }
            res.format({
                html: function() {
                    res.render('produtos/lista', { lista: results });
                },
                json: function() {
                    res.json(results);
                }
            });
        });

        connection.end();
    };

    var cadastrarProduto = function(req, res) {

        var produto = req.body;
        
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);

        var validadorTitulo = req.assert('titulo', 'O Título é obrigatório').notEmpty();
        var validadorPreco = req.assert('preco', 'O preço tem que ser decimal').isFloat();

        var erros = req.validationErrors();
        if(erros){
            res.format({
                html: function () {
                    res.status(400).render('produtos/forms.ejs', { validacaoErros: erros, produto: produto });
                },
                json: function () {
                    res.status(400).json(erros);
                }
            });
            return;
        }

        produtosDAO.salvar(produto, function (err, results) {
            res.redirect('/produtos');
        }); 
    };

    app.get('/produtos', listarProdutos);

    app.get('/produtos/formularios', function(req,res) {
        res.render('produtos/forms.ejs', {validacaoErros: {}, produto: {} });
    });

    app.post('/produtos', cadastrarProduto);
    
}

 