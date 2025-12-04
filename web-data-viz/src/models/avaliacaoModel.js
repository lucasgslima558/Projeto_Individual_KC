var database = require('../database/config')

function buscarResumoAlbum() {
    console.log("ACESSEI O AVALIACAO MODEL! Se aqui der erro, verifique sua página de Dashboard e avaliações.")

    var instrucaoSql = `SELECT al.id_album,
        al.nome AS nome_album,
        CASE 
			WHEN al.id_album = 1 THEN 'ItCotCK'
            WHEN al.id_album = 2 THEN 'ItWoP'
            WHEN al.id_album = 3 THEN 'Lizard'
            WHEN al.id_album = 4 THEN 'Islands'
            WHEN al.id_album = 5 THEN 'LTiA'
            WHEN al.id_album = 6 THEN 'SaBB'
            WHEN al.id_album = 7 THEN 'Red'
            WHEN al.id_album = 8 THEN 'Discipline'
		END AS sigla_album,
        COUNT(a.id_avaliacao) AS qtd_avaliacoes,
        AVG(a.nota) AS media_nota,

        -- valeu pela ideia indiretamente Vivian!
        SUM(CASE WHEN a.nota > 2.5 THEN 1 ELSE 0 END) AS avaliacoes_positivas,
        SUM(CASE WHEN a.nota < 2.4 THEN 1 ELSE 0 END) AS avaliacoes_negativas
            FROM album al
            -- LEFT JOIN utilizado para pegar até mesmo as músicas não avaliadas
                LEFT JOIN musica m 
                    ON m.fk_album = al.id_album
                LEFT JOIN avaliacao a 
                    ON a.fk_musica = m.id_musica
        GROUP BY al.id_album, al.nome
        ORDER BY al.id_album;
`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarResumoAlbum
}