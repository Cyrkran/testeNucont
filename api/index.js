var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json({limit: '100mb', extended: true})); //Permite enviar javascript object como objeto de requisição
app.use(bodyParser.urlencoded({limit: '100mb', extended: true})); //deixa eu enviar muita coisa :D


app.listen(3003, () => {
    console.log("API running and ready to go");
});

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, '../frontend')));



module.exports = app;