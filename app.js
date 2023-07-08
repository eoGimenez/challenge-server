require('dotenv').config();
require('./db');
const express = require('express');

const app = express();
require('./config')(app);

const imgUploader = require('./routes/image.routes');
app.use('/api/image', imgUploader);

module.exports = app;
