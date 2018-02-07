var express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
 
//var dbURL = 'mongodb://localhost:27017/imooc';
var dbURL = 'mongodb://mongodb/imooc';//mongodb这个名字是 在--link=aaa:bbb时的名字 即bbb
mongoose.connect(dbURL);
 
var app = express();
 
app.listen(3000,function(){
    console.log("server start. Listen port:3000");
});
 
require('./router/router')(app)