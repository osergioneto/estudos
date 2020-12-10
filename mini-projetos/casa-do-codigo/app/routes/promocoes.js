module.exports = function (app) {
    app.get('/promocoes/formularios', function (req, res) {
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.listar(function (err, results) {
            res.render('promocoes/form', { lista: results });
        });
        connection.end();
    });

    app.post('/promocoes', function (req, res) {
        var promocao = req.body;
        app.get('io').emit('novaPromocao', promocao);
        res.redirect('promocoes/formularios');
    });
};