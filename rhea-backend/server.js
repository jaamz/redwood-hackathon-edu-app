const express         = require('express');
const logger          = require('morgan');
const flashCardRouter = require('./routes/flashcards');
const cors            = require('cors')
// require .env and db.js
require('dotenv').load();
require('./config/db');

const app = express();
const port = 5000;

// Logging
app.use(logger('dev'));
app.use(cors())
// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/flashcards', flashCardRouter);

app.listen(port, () => console.log(`Server is running on port: ${port}`));

module.exports = app;