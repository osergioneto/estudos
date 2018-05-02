var express = require('express')();

express.get('/produtos', function (req, res) {
    res.send('<html><body><h1>Listagem de produtos</h1></body></html>');
});

express.listen(3000, function () {
    console.log('Servidor no ar :)');
});