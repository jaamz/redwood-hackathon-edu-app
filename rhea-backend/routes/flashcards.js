const express = require('express');
const router = express.Router();
const cardControllers = require('../controllers/card-controller');
let { getAllCards, getCardById, help } = cardControllers;


// get all flashcards
router.get('/', help);
router.get('/all', getAllCards);
// get by ID
router.get('/:id', getCardById);



module.exports = router;