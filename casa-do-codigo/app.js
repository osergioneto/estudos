var express = require('express')();
express.set('view engine', 'ejs');

express.get('/produtos', function (req, res) {
    res.render('produtos/lista');
});

express.listen(3000, function () {
    console.log('Servidor no ar :)');
});