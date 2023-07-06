require('dotenv').config;
require('./db');
const express = require('express');

const app = express();
require('./config')(app);

// const imgUploader = require( CREAR RUTA )
// app.use('/api/image', imgUploader); con ruta creada

module.exports = app;
