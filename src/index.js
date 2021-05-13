var express = require('express');
const path=require('path')
var http = require('http');
var app = express();

const publicpath=path.join(__dirname,'../public')
app.use(express.static(publicpath))
http.createServer(app).listen(3000);