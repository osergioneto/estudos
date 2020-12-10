var express = require('../config/express')();
var request = require('supertest')(express);

describe('#ProdutoController', function(params) {

    beforeEach(function (done) {
        var conn = express.infraconnectionFactory();
        conn.query('delete from produtos', function (err, result) {
            if(!err){
                done();
            };
        });
    });

    it('#Listagem json',function(done) {
        request.get('/produtos')
        .set('Accept', 'application/json')
        .expect('Content-type', /json/)
        .expect(200, done);  
    });

    it('#Teste de cadastro de produto com dados inválidos', function (done) {
        request.post('/produtos')
        .send({titulo: '', descricao: 'novo livro', preco: '100.30'})
        .expect(400, done);
    });

    it('#Teste de cadastro de produto com dados válidos', function(done) {
        request.post('/produtos')
        .send({titulo: 'Estruturas de Dados e Algoritmos em Javascript', descricao: 'Livro de Loiane', preco: '47.98'})
        .expect(302,done);
    });
});