const http = require('http');
const port = 3000;


const routes = {
    "/":"bem vindo",
    "/livros": "pagina de livros",
    "/sobre": "pagina sobre nos"
}
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end(routes[req.url]);
})

server.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}.`);
})