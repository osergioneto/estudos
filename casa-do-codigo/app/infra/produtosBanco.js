module.exports  = function() {
    this.listar = function(connection, callback) {
        connection.query('select * from livros', callback);
    }
    return this;
} 