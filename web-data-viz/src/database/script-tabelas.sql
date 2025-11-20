/* Script do Projeto Individual */

CREATE TABLE usuario (
	id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(90) NOT NULL,
	username VARCHAR(20) NOT NULL,
    senha VARCHAR(20) NOT NULL
);

CREATE TABLE album(
	id_album INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(90) NOT NULL,
    dtLancamento DATE
);

CREATE TABLE musica(
	id_musica INT PRIMARY KEY AUTO_INCREMENT,
    fk_album INT,
    FOREIGN KEY (fk_album)
		REFERENCES album (id_album),
    nome VARCHAR(90) NOT NULL
);

CREATE TABLE avaliacao(
	id_avaliacao INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT,
    FOREIGN KEY (fk_usuario)
		REFERENCES usuario (id_usuario),
    fk_musica INT,
    FOREIGN KEY (fk_musica)
		REFERENCES musica (id_musica),
	nota DECIMAL(3,2) NOT NULL,
    comentario TEXT(150)
);

/* Inserção */

INSERT INTO album (nome, dtLancamento) VALUES
	('In the Court of the Crimson King', '1969-10-10'),
    ('In the Wake of Poseidon', '1970-05-15'),
    ('Lizard', '1970-12-11'),
    ('Islands', '1971-12-03'),
    ("Larks' Tongues in Aspic", '1973-03-23'),
    ('Starless and Bible Black', '1974-03-29'),
    ('Red', '1974-10-06'),
    ('Discipline', '1981-10-02');
    
INSERT INTO musica (fk_album, nome) VALUES
	(1, '21st Century Schizoid Man'),
	(1, 'I Talk to the Wind'),
	(1, 'Epitaph'),
	(1, 'Moonchild'),
	(1, 'The Court of the Crimson King'),
	(2, 'Peace - A Beginning'),
	(2, 'Pictures of a City'),
	(2, 'Cadence and Cascade'),
	(2, 'In the Wake of Poseidon'),
	(2, 'Peace - A Theme'),
	(2, 'Cat Food'),
	(2, "The Devil's Triangle"),
	(2, 'Peace - An End'),
	(3, 'Cirkus'),
	(3, 'Indoor Games'),
	(3, 'Happy Family'),
	(3, 'Lady of the Dancing Water'),
	(3, 'Lizard'),
	(4, 'Formentera Lady'),
	(4, "Sailor's Tale"),
	(4, 'The Letters'),
	(4, 'Ladies of the Road'),
	(4, 'Prelude: Song of the Gulls'),
	(4, 'Islands'),
    (5, "Larks' Tongues in Aspic, Part One"),
    (5, 'Book of Saturday'),
    (5, 'Exiles'),
    (5, 'Easy Money'),
    (5, 'The Talking Drum'),
    (5, "Larks' Tongues in Aspic, Part Two"),
    (6, 'The Great Deceiver'),
    (6, 'Lament'),
    (6, "We'll let you know"),
    (6, 'The Night Watch'),
    (6, 'Trio'),
    (6, 'The Mincer'),
    (6, 'Starless and Bible Black'),
    (6, 'Fracture'),
    (7, 'Red'),
    (7, 'Fallen Angel'),
    (7, 'One More Red Nightmare'),
    (7, 'Providence'),
    (7, 'Red'),
    (8, 'Elephant Talk'),
    (8, 'Frame by Frame'),
    (8, 'Matte Kudasai'),
    (8, 'Indiscipline'),
    (8, 'Thela Hun Ginjeet'),
    (8, 'The Sheltering Sky'),
    (8, 'Discipline');

/* Views */

/* Consulta */