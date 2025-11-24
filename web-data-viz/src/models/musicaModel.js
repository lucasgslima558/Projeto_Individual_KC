var database = require("../database/config")
var sessao = require("../../public/js/sessao")

function buscar(id_musica) {
    console.log("ACESSEI O MUSICA MODEL! Se aqui der erro, verifique sua página de músicas e avaliações.")

    var instrucaoSql = `SELECT m.id_musica, m.nome AS nome_musica, a.id_album, a.nome AS nome_album FROM musica m JOIN album a ON m.fk_album = a.id_album WHERE id_musica = ${id_musica}`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(id_usuario, id_musica, nota, comentario) {
    console.log("ACESSEI O MUSICA MODEL! Se aqui der erro, verifique sua página de músicas e avaliações.")

    var instrucaoSql = `INSERT INTO avaliacao (fk_usuario, fk_musica, nota, comentario) VALUES ('${id_usuario}', '${id_musica}', '${nota}', '${comentario}')`

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscar,
    cadastrar
}