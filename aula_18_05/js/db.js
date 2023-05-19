var sqlite3 = require('sqlite3').verbose();
//Cria um novo banco de dados
var db = new sqlite3.Database('../database/Empresa.db');

db.run('CREATE TABLE IF NOT EXISTS Funcionario (id INT NOT NULL, nome VARCHAR(20) NOT NULL, idade INT NOT NULL, endereco VARCHAR(25), PRIMARY KEY(id) )');

console.log("Tabela Criada com sucesso");
