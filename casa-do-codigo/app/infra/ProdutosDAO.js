function ProdutosDAO(connection){
    this._connection = connection;
}

ProdutosDAO.prototype.listar = function(callback) {
        this._connection.query('select * from livros', callback);
}

module.exports = function() {
    return ProdutosDAO;
} 