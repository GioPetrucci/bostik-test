// import $ from'jquery';


// $('#prueba').click(function () {
// 	alert('Hola');
// })

var express = require('express');
var app = express();

app.get("/", require('../dist/index.html'));



app.listen(8080);