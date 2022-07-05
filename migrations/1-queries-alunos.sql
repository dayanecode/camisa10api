use CAMISA10FC;

DROP TABLE ALUNOS;


CREATE TABLE ALUNOS (
id INT PRIMARY KEY AUTO_INCREMENT,
nome_aluno varchar(255) NOT NULL,
data_nasc date, 
idade int,
rg varchar(12), 
cpf varchar(14), 
responsavel varchar(255), 
telefone bigint, 
categoria varchar(100), 
observacoes varchar(255)
);

INSERT ALUNOS VALUES (default, "RYAM LUCCA", "2013-09-04","8",NULL, NULL, "WILLIAM PEREIRA DO NASCIMENTO",11995935733,"SUB-09",NULL);
INSERT ALUNOS VALUES (default, "HENRY WILLIAM", "2017-07-12","4",NULL, NULL, "WILLIAM PEREIRA DO NASCIMENTO",11995935733,"BABY-FUT",NULL);

SELECT * FROM ALUNOS;

ALTER TABLE ALUNOS CHANGE id id_aluno INT PRIMARY KEY auto_increment; 