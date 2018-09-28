const express = require('express');
const router = express.Router();
const cardControllers = require('../controllers/card-controller');
const { getAllCards, getCardById, createCard, editCard, deleteCard } = cardControllers;

// index route
router.get('/', function (req, res) {
    res.send({
        message: 'index route'
    });
});

// get all flashcards
router.get('/all', getAllCards);

// help 
// router.get('/help', help);

// get by ID
// router.get('/:id', getCardById);

// create card
router.post('/', createCard);

// edit card
router.put('/:id', editCard);

// delete card
router.delete('/:id', deleteCard);


module.exports = router;