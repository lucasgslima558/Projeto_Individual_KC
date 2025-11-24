var musicaModel = require("../models/musicaModel");

function buscarMusica(req, res) {
    let idMusica = req.body.idMusica;

    musicaModel.buscar(idMusica)
        .then(resultado => {
            res.json(resultado[0]); 
        })
        .catch(erro => {
            console.error(erro);
            res.status(500).json({ erro });
        });
}

module.exports = {
    buscarMusica
}