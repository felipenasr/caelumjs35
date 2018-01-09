var http = require('http');

// criar servidor


server = http.createServer((request, response)=>{
    
    var rotas = {
        '/produtos': '<h1>Produtos</h1>',
        '/':'<h1>Home</h1>',
        'error': '<h1>error</h1>'
   }
    if(rotas[request.url]){
        response.end(rotas[request.url]);
    }else{
        response.writeHead(404,{
            'Content-type': 'text/html'   
        })
        response.end(rotas.error);
    }

});


// localhost:porta

server.listen(3000, 'localhost', (erro) =>{
    console.log('rodando...');
});
