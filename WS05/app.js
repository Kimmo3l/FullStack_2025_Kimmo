const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express()
const port = process.env.port || 3000;

const uri = process.env.MONGODB_URI + "local_library";

const routes = require('./routes/routes');

app.use(bodyParser.json());

mongoose.connect(uri);

app.use('/api', routes);

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
  })