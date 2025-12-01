var avaliacaoModel = require('../models/avaliacaoModel')

function buscarResumoAlbum(req, res) {
    avaliacaoModel.buscarResumoAlbum()
    .then(function (resultado) {
        res.status(200).json(resultado);
    }).catch (function (erro) {
        console.log(erro)
        res.status(500).json(erro.sqlMessage);
    })
}

module.exports = {
    buscarResumoAlbum
}