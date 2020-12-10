const feedRoutes = require('./feed_routes');

module.exports = function (app, db) {
    feedRoutes(app, db);
    //Outro grupo de rotas podem vir aqui no futuro
}