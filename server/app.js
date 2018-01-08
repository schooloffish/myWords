'use strict';

let express = require('express');
let bodyParser = require('body-parser');
let path = require('path');
let app = express();

let clientFolder = path.join(path.dirname(__dirname), 'dist');
// let clientFolder = path.join(path.dirname(__dirname), 'dist');
console.log(clientFolder);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(express.static(clientFolder));

app.get('/', function (req, res) {
    res.send('hello,world!');
});

let Phrase = require('./rest/phrase.js');
let phrase = new Phrase();
let router = phrase.expressRouter();

app.use('/api/v1', router);

app.use('/react/index.html',(req,res)=>{
    const file=path.join(clientFolder,'react','index.html');
    res.sendFile(file);
});

app.use('/angular/index.html',(req,res)=>{
    const file=path.join(clientFolder,'angular','index.html');
    res.sendFile(file);
});

//handle 404, to fix angular2 router and express router conflicts
app.use('*', function (req, res) {
    const file=path.join(clientFolder,'react',req.baseUrl);
    res.sendFile(file);
});

app.listen(3001, function (params) {
    console.log('Example app listening on port 3000..');
});