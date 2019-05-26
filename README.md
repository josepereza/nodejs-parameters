# nodejs-parameters
parameters get and post en nodejs

How to Get URL Parameters with Javascript
-----------------------------------------
The URL and URLSearchParams Objects
A URL object basically represents a url. The search property of the URL object returns the string of query parameters.
// new URL object
var url = new URL('http://demo.com?id=100&topic=main');

var query_string = url.search;

// will output : ?id=100&topic=main
console.log(query_string);
The query parameters string can be used to create a URLSearchParams object, through which you can get parameter values.
var url = new URL('http://demo.com?id=100&topic=main');

var query_string = url.search;

var search_params = new URLSearchParams(query_string); 

var id = search_params.get('id');

// output : 100
console.log(id);

EJEMPLO:

<script type="text/javascript">
          window.onload = articulo;

          function articulo() {
              var url = location;
              console.log('Esta es la Url actual' + document.URL)
              console.log('Esta tambiem es la Url actual' + url);
              var query_string = url.search;
              console.log(query_string);
              var search_params = new URLSearchParams(query_string);

              var dato1 = search_params.get('dato1');
              var dato2 = search_params.get('dato2');
              var dato3 = search_params.get('dato3');
</script>

**********************************************************************************************************************
Getting URL Parameters in Node.js
----------------------------------
var express = require('express');
var http = require('http');
var app = express();

app.get('/home', function(req, res){
    res.send('hello world');
  });

app.get('/variables', function(req, res){
  res.writeHead(200, {'content-type': 'text/plain'});
  res.write('name: ' + req.query.name + '\n');
  res.write('fruit: ' + req.query.fruit + '\n');
  res.write('query: ' + req.query + '\n');
  queryStuff = JSON.stringify(req.query);
  res.end('That\'s all folks'  + '\n' + queryStuff);
});


app.get('/:name1/:name2/:name3', function(req, res){
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('name1: ' + req.params.name1 + '\n');
    res.write('name2: ' + req.params.name2  + '\n');
    res.write('name3: ' + req.params.name3  + '\n');
    queryStuff = JSON.stringify(req.params);
    res.end('That\'s all folks'  + '\n' + queryStuff);
  });

app.listen(3000);


http://35.198.86.178:3000/juan/pedro/martinez
//output
name1: juan
name2: pedro
name3: martinez
That's all folks
{"name1":"juan","name2":"pedro","name3":"martinez"}
http://35.198.86.178:3000/variables/?name=jose&fruit=pera
//output
name: jose
fruit: pera
query: [object Object]
That's all folks
{"name":"jose","fruit":"pera"}
******************************************************************************************


How to process POST data in Node.js?
-------------------------------------

If you use Express (high-performance, high-class web development for Node.js), you can do this:
HTML:
<form method="post" action="/">
    <input type="text" name="user[name]">
    <input type="text" name="user[email]">
    <input type="submit" value="Submit">
</form>
API client:
fetch('/', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        user: {
            name: "John",
            email: "john@example.com"
        }
    })
});
Node.js: (since Express v4.16.0)
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Access the parse results as request.body
app.post('/', function(request, response){
    console.log(request.body.user.name);
    console.log(request.body.user.email);
});
Node.js: (for Express <4.16.0)
const bodyParser = require("body-parser");

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 
 */
app.use(bodyParser.json());

app.post("/", function (req, res) {
    console.log(req.body.user.name)
});

EJEMPLO:

app.js
------
var express = require('express');
var http = require('http');
var app = express();


app.use(express.static(__dirname + '/public'));

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

public/index.html
----------------

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>
    <h3>hola mundos</h3>

    <form method="post" action="/pruebapost">
       Nombre <input type="text" name="name">
        Telefon <input type="text" name="telefono">
        <input type="submit" value="Submit">
    </form>

</body>
</html>
----------------------------------------------------------

http://35.198.86.178:3000/

-----------------------------------------------------------
OUT 1
![Alt text] (parameters.png)

//OUT 2

Nombre : Juan felipe
Telefono: 111222
objeto: [object Object]
That's all folks
{"name":"Juan felipe","telefono":"111222"}


