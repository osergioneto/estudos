exports.showName = ((req, res) => {
    const sn = { nome: 'Sérgio', sobrenome: 'Neto', cool: true};
    res.render('extras/showName', sn);
});

exports.reverse = ((req, res) => {
    const reverse = [...req.params.word].reverse().join('');
    const resp = { 'invertido': reverse,'numero': req.params.number };
    res.render('extras/reverse', resp);
});

exports.printQueryAsJson = ((req, res) => {
    const query = req.query;
    res.render('extras/printQueryAsJson', query);
});
