function ProdutosDAO(connection){
    this._connection = connection;
}

ProdutosDAO.prototype.listar = function(callback) {
    this._connection.query('SELECT * FROM livros', callback);
}

ProdutosDAO.prototype.salvar = function (produto, callback) {
    this._connection.query('insert into livros set ?', produto, callback);  
    console.log(produto);  
}

module.exports = function() {
    return ProdutosDAO;
} 