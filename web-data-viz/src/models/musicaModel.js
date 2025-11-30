var database = require("../database/config")

function buscarMusica(idMusica) {
    console.log("ACESSEI O MUSICA MODEL! Se aqui der erro, verifique sua página de músicas e avaliações.")

    var instrucaoSql = `SELECT m.id_musica AS idMusica, m.nome AS nome_musica, a.id_album AS idAlbum, a.nome AS nome_album FROM musica m JOIN album a ON m.fk_album = a.id_album WHERE m.id_musica = ${idMusica}`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(idUsuario, idMusica, nota, comentario) {
    console.log("ACESSEI O MUSICA MODEL! Se aqui der erro, verifique sua página de músicas e avaliações.")

    var instrucaoSql = `INSERT INTO avaliacao (fk_usuario, fk_musica, nota, comentario) VALUES (${idUsuario}, ${idMusica}, ${nota}, '${comentario}')`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarMusica,
    cadastrar
}