const http = require('http');

const hostname = '127.0.0.1'; //localhost
const port = 3000; //Porta da aplicação

const server = http.createServer((req, res)=> {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello World</h1>');
}); //Criação do servidor

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}); //Listener que valida se o servidor está rodando