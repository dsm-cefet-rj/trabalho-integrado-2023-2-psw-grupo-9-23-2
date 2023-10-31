var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

//Routers da entidade carro
var seminovosRouter = require('./routes/Carros/CarrosSeminovos');
//var antigosRouter = require('./routes/Carros/CarrosAntigos');
//var criaCarRouter = require('./routes/Carros/CriadorCarros');
//var delCarRouter = require('./routes/Carros/DeleterCarro');
//var updCarRouter = require('./routes/Carros/UpdaterCarro');
var agendaReadRouter = require('./routes/Agendamentos/AgendaLer')
var filtrosRouter = require('./routes/Filtros/Filtros');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', indexRouter);
app.use('/carros', seminovosRouter);
//app.use('/Antigos', antigosRouter);
//app.use('/carros', criaCarRouter);
//app.use('/carros', delCarRouter);
//app.use('/carros', updCarRouter);
app.use('/horarios', agendaReadRouter);
app.use('/filtros', filtrosRouter);

module.exports = app;
