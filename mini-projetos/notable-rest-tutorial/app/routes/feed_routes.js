module.exports = function (app, db) {
    
    const collection = 
    app.post('/feed', (req, res) => {
        const card = {
            idDoCard: req.body.idCard,
            idDoCriador: req.body.idCreator,
            nomeDoCriador: req.body.creatorName
            /*
            positionCreation: req.body.position-creation,
            timeCreation: req.body.time-creation,
            description: req.body.card-description,
            upVotes: req.body.up-votes,
            downVotes: req.body.down-votes,
            comments: req.body.comments
            */
        };
        db.collection('cards').insert(card, (err, result) => {
            if (err) {
                console.log(err);
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(result.ops[0]);
            }
        }); 
    });
};