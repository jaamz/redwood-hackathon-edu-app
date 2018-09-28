const express = require('express');
const router = express.Router();
const cardControllers = require('../controllers/card-controller');
const { help, seed, getAllCardSets, getCardSetById, createCardSet, editCardSet, deleteCardSet } = cardControllers;

router.get('/', help);
router.get('/all', getAllCardSets);
router.get('/:id', getCardSetById);
router.post('/seed', seed);
router.post('/', createCardSet);
router.put('/:id', editCardSet);
router.delete('/:id', deleteCardSet);

module.exports = router;