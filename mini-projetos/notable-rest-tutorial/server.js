const express       = require('express');
const MongoClient   = require('mongodb').MongoClient;
const bodyParser    = require('body-parser');
const db            = require('./config/db');

const app = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

MongoClient.connect(db.url, (err, db) => {
    
    if (err) return console.log(err + 'erro linha 14')

    db = db.db("note-api");
    require('./app/routes')(app, db);

    app.listen(port, () => {
        console.log('Nós estamos funcionando na porta ' + port + '.');
    }); 

})



