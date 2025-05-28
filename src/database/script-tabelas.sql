DROP DATABASE IF EXISTS csprofiler;
CREATE DATABASE IF NOT EXISTS csprofiler;
USE csprofiler;

CREATE TABLE usuario (
    idUsuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(45) NOT NULL,
    email VARCHAR(60) NOT NULL UNIQUE,
    senha VARCHAR(50) NOT NULL
);

CREATE TABLE nivel_tatico (
    idTatico INT AUTO_INCREMENT PRIMARY KEY,
    entry_fragger DECIMAL(2, 0) NOT NULL,
    support DECIMAL(2, 0) NOT NULL,
    lurker DECIMAL(2, 0) NOT NULL,
    awper DECIMAL(2, 0) NOT NULL,
    igl DECIMAL(2, 0) NOT NULL,
    fk_idUsuario INT,
    FOREIGN KEY (fk_idUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE nivel_personalidade (
    idPersonalidade INT AUTO_INCREMENT PRIMARY KEY,
    hardcore DECIMAL(2, 0) NOT NULL,
    casual DECIMAL(2, 0) NOT NULL,
    social DECIMAL(2, 0) NOT NULL,
    relaxado DECIMAL(2, 0) NOT NULL,
    aprendiz DECIMAL(2, 0) NOT NULL,
    fk_idUsuario INT,
    FOREIGN KEY (fk_idUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE resultado_quiz (
    idResultado_quiz INT AUTO_INCREMENT PRIMARY KEY,
    data_realizacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    perfil_tatico VARCHAR(45) NOT NULL,
    perfil_personalidade VARCHAR(45) NOT NULL,
    fk_idUsuario INT,
    fk_nivelTatico INT,
    fk_nivelPersonalidade INT,
    FOREIGN KEY (fk_idUsuario) REFERENCES usuario(idUsuario),
    FOREIGN KEY (fk_nivelTatico) REFERENCES nivel_tatico(idTatico),
    FOREIGN KEY (fk_nivelPersonalidade) REFERENCES nivel_personalidade(idPersonalidade)
);

-- usuario teste
insert into usuario (nome, email, senha)
values
('Pedro', 'pedro@gmail.com', '123');

select * from usuario;

select * from nivel_personalidade;

select * from nivel_tatico;

select * from resultado_quiz;
