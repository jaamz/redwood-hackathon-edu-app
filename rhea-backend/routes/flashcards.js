const express = require('express');
const router = express.Router();
const cardControllers = require('../controllers/card-controller');
const { getAllCards, getCardById } = cardControllers;

// index route
router.get('/', function (req, res) {
    res.send({
        message: 'index route'
    });
});

// get all flashcards
router.get('/allcards', getAllCards);



module.exports = router;