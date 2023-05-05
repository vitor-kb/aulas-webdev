var express = require('express');
var http = require('http');
var app = express();
var server = http.createServer(app);
var path = require('path');

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname,'./formulario.html'))
});

app.post('/add', function(req, res){
    db.serialize(() => {
        db.run('INSERT INTO Funcionario(id, nome, idade, endereco) VALUES(?,?,?,?)', [req.body.id, req.body.nome, req.body.idade, req.body.endereco], function(err){
            if(err){
                return console.log(err.message);
            }
            console.log("Novo funcionário adicionado com sucesso");
            res.send("Novo funcionário com ID = " + req.body.id + " e nome = " + req.body.nome);
        });
    });
});

//Esperando na porta 3333
server.listen(3333, function(){
    console.log("Server listening on port: 3333");
});

//Se digitarmos no navegador localhost:3333, faremos uma requisição GET
/*app.get('/', function(req, res){
    //Servidor manda a resposta da requisição de volta para o cliente
    res.send("<h1>Você se conectou com sucesso</h1>");
});*/