const ContextStrategy = require("./../strategies/base/contextStrategy");
const MongoDB = require("./../strategies/mongodb");
const Postgres = require("./../strategies/postgres");

const contextMongo = new ContextStrategy(new MongoDB());
contextMongo.create();

const contextPostgres = new ContextStrategy(new Postgres());
contextPostgres.create();