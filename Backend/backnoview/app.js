var express =require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const cors = require('cors');


var mongoose = require('mongoose');
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

//AUTENTICAÇÃO VAI AQUI
/*
function auth(req, res, next) {
    console.log(req.headers);

    // Check if the request contains the 'Authorization' header
    var authHeader = req.headers.authorization;
    if (!authHeader) {
        var err = new Error("Authentication required");
        res.setHeader('WWW-Authenticate', 'Basic');
        err.status = 401;
        return next(err);
    }

    // Decode the base64-encoded credentials
    var auth = Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(":");
    var user = auth[0];
    var pass = auth[1];

    // Check credentials (replace with your actual authentication logic)
    if (user === process.env.AUTH_USER && pass === process.env.AUTH_PASSWORD) {
        next(); // Authorized
    } else {
        var err = new Error("Invalid credentials");
        res.setHeader("WWW-Authenticate", "Basic");
        err.status = 401;
        return next(err);
    }
}

// Usage of environment variables for credentials
// Set these environment variables in your deployment environment
// For example, in your .env file during development
// AUTH_USER=admin
// AUTH_PASSWORD=password


app.use(auth);
*/
app.use(express.static(path.join(__dirname, 'public')));


app.use('/carros', seminovosRouter);
app.use('/horarios', agendaReadRouter);
app.use('/filtros', filtrosRouter);
app.use('/users', usersRouter);
app.use('/upload-image', uploadRouter);
module.exports = app;
