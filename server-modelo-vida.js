const http = require('http');

const server = http.createServer((req, res)=>{
    const rotas = {
        '/': '<h1>Home</h1>',
        '/produtos': '<h1>Produtos</h1>',
        'error': '<h1>Errors</h1>'
    }
    if(rotas[req.url]){
        res.end(rotas[req.url]);
    }else{
        response.writeHead(404,{
            'Content-type': 'text/html'   
        })
        res.end(rotas.error);        
    }

})



server.listen(3000, 'localhost', ()=>{
   console.log('rodando...');   
});












// var http = require('http');

// // criar servidor


// server = http.createServer((request, response)=>{
    
//     var rotas = {
//         '/produtos': '<h1>Produtos</h1>',
//         '/':'<h1>Home</h1>',
//         'error': '<h1>error</h1>'
//    }
//     if(rotas[request.url]){
//         response.end(rotas[request.url]);
//     }else{
//         response.writeHead(404,{
//             'Content-type': 'text/html'   
//         })
//         response.end(rotas.error);
//     }

// });


// // localhost:porta

// server.listen(3000, 'localhost', (erro) =>{
//     console.log('rodando...');
// });
