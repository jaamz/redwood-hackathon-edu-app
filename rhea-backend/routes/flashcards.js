const express = require('express');
const router = express.Router();
const cardControllers = require('../controllers/card-controller');
const { help, seed, getAllCards, getCardById, createCard, editCard, deleteCard } = cardControllers;

router.get('/', help);
router.get('/all', getAllCards);
router.get('/:id', getCardById);
router.post('/seed', seed);
router.post('/', createCard);
router.put('/:id', editCard);
router.delete('/:id', deleteCard);

module.exports = router;