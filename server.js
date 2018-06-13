const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

const config = require('./config');
const Task = require('./api/models/todoListModel');

const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const routes = require('./api/routes/todoListRoutes');
routes(app);

app.use((req, res) => {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(config.port, () => console.log(`Server started on: ${config.port}`));

module.exports = app;
