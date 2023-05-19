var express = require('express');
var http = require('http');
var path = require('path');
var sqlite3 = require('sqlite3')
var db = new sqlite3.Database('../database/Empresa.db');
const cors = require('cors');
var bodyParser = require('body-parser');

var porta = 3333;
var app = express();
app.use(cors({
    origin: '*'
}));

app.use(bodyParser.urlencoded({extended: true}))
//parse application/json
//app.use(bodyParser.json())

var server = http.createServer(app);

app.get('/', function(req, res){
    //Se digitarmos no navegador localhost:3333, faremos uma requisição GET
    res.sendFile(path.join(__dirname,'../index.html'));
    //res.send('<h1>Você se conectou com sucesso</h1> <h2>Ola</h2>');
});

app.post('/add', function(req, res){
    db.serialize(()=>{
        db.run('INSERT INTO FUNCIONARIO(id, nome, idade, endereco)VALUES(?,?,?,?)',
        [req.body.id, req.body.nome, req.body.idade, req.body.endereco], 
        function(err){
            if (err){
                return console.log(err.message);
            }
            console.log("Novo funcionário adicionado com sucesso");
            res.send("Novo funcionário com ID = " + req.body.id + 
                " e nome = " + req.body.nome);
        });
    });
});

app.post('/ver', function(req,res){
    db.serialize(() => {
        db.each('SELECT id, nome FROM Funcionario WHERE id = ?', 
        [req.body.id], function(err, row){
            if(err){
                res.send("Erro ao encontrar funcionário");
                return console.error(err.message);
            }
            res.send(`<p>Id: ${row.id}<p> <p>Nome: ${row.nome}</p><hr>`);
            console.log("Funcionário encontrado");
        });
    });
});

//Esperando na porta 3333
server.listen(3333, function(){
    console.log("Server listening on port: " + porta);
});