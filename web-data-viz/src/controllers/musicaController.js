var musicaModel = require("../models/musicaModel");

function buscarMusica(req, res) {
    let idMusica = req.params.idMusica;

    musicaModel.buscarMusica(idMusica)
        .then(function (resultado) {
            res.status(200).json(resultado);
        }).catch(function (erro) {
            res.status(500).json(erro.sqlMessage);
        })
        
}
function cadastrar(req, res) {
    var idUsuario = req.body.idUsuario;
    var idMusica = req.body.idMusica;
    var nota = req.body.nota;
    var comentario = req.body.comentario;

    // Validações
    if (idUsuario == undefined) {
        res.status(400).send("Seu idUsuario está undefined!");
    } else if (idMusica == undefined) {
        res.status(400).send("Seu idMusica está undefined!");
    } else if (nota == undefined) {
        res.status(400).send("Nota está undefined!");
    } else if (comentario == undefined) {
        res.status(400).send("Comentário está undefined!");
    } else {

        musicaModel.cadastrar(idUsuario, idMusica, nota, comentario)
            .then(
                function (resposta) {
                    res.json(resposta);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro da avaliação! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

module.exports = {
    buscarMusica,
    cadastrar
}