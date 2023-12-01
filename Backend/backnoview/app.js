var express =require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//adição nova Gustavo
//var config = require('./config');

var mongoose = require('mongoose');

//adição nova Gustavo
//const url = config.mongoUrl;

//anterior que dava certo
const url = 'mongodb://localhost:27017/backnoview';
const connect = mongoose.connect(url, {family:4});

connect.then((db) =>{
    console.log("Conectado ao mongo corretamente");
},(err)=>{console.log(err);}
);








//Routers das entidades
var seminovosRouter = require('./routes/Carros/CarrosSeminovos');
var agendaReadRouter = require('./routes/Agendamentos/AgendaLer');
var filtrosRouter = require('./routes/Filtros/Filtros');
var usersRouter = require('./routes/Users/UsersTreat');
var uploadRouter = require('./routes/Uploader/UploadImg');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/carros', seminovosRouter);
app.use('/horarios', agendaReadRouter);
app.use('/filtros', filtrosRouter);
app.use('/users', usersRouter);
app.use('/upload-image', uploadRouter);
module.exports = app;
