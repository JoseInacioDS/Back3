//criando o primeiro servidor http

const http = require('http');

const server = http.createServer((req, res)=>{
    console.log('efetuando pedido');
    //header
    res.setHeader('content-type', 'text/html')
    res.write('<h1>pedido aceito</h1>');
    res.write('<h2>Já éńtéńdí qúé ó ṕédídó fóí áçéító</h2>');
    res.end();

});

server.listen(3000, 'localhost', ()=>{
    console.log('servidor iniciado');
});