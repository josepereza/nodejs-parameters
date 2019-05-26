var express = require('express');
var http = require('http');
var app = express();



app.use(express.static(__dirname + '/public'));

app.get('/home', function (req, res) {
    res.send('hello world');
});

      //PARAMETERS  WITH req.query

app.get('/variables', function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('name: ' + req.query.name + '\n');
    res.write('fruit: ' + req.query.fruit + '\n');
    res.write('query: ' + req.query + '\n');
    queryStuff = JSON.stringify(req.query);
    res.end('That\'s all folks' + '\n' + queryStuff);
});
         /* http://35.198.86.178:3000/variables/?name=jose&fruit=pera

            //OUTPUT 1

            name: jose
            fruit: pera
            query: [object Object]
            That's all folks
            {"name":"jose","fruit":"pera"} 
         */



      //PARAMETERS  WITH req.params

app.get('/:name1/:name2/:name3', function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('name1: ' + req.params.name1 + '\n');
    res.write('name2: ' + req.params.name2 + '\n');
    res.write('name3: ' + req.params.name3 + '\n');
    queryStuff = JSON.stringify(req.params);
    res.end('That\'s all folks' + '\n' + queryStuff);
});
          /* http://35.198.86.178:3000/juan/pedro/martinez

            //OUTPUT 2

            name1: juan
            name2: pedro
            name3: martinez
            That's all folks
            {"name1":"juan","name2":"pedro","name3":"martinez"} 
           */




     //PROCCESS POST  DATA   
            
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({
    extended: true
}));

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/pruebapost', function (req, res) {
    console.log('El nombre es : ' + req.body.name);
    console.log('El telefono es:' + req.body.telefono);
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('Nombre : ' + req.body.name + '\n');
    res.write('Telefono: ' + req.body.telefono + '\n');
    res.write('objeto: ' + req.body + '\n');
    queryStuff = JSON.stringify(req.body);
    res.end('That\'s all folks' + '\n' + queryStuff);
});


app.listen(3000, () => {
    console.log('escuchando en el puerto 3000')
});
