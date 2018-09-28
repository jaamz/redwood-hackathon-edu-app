const FlashCards = require('../models/flashcards');



const getAllCards = (req, res) => {
    res.json(FlashCards)
}

const getCardByID = (req, res) => {
    FlashCards.findById(req.params.id)
        .exec((err, cards) => {
            if (err) {
                res.status(500).send({
                    message: 'error'
                })
            } else if (cards.length === 0) {
                res.status(404).send({
                    message: 'no cards'
                })
            } else {
                res.status(200).send({
                    cards
                })
            }
        })
}

const createCard = (req, res) => {
    let cards = req.body;
    console.log(cards)
    FlashCards.create(cards)
        .then((cards) => {
            res.status(200).send(cards);
        })
        .catch((err) => {
            res.status(500).send({ Error: err.message })
        })
}

const editCard = (req, res) => {
    FlashCards.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, cards) => {
        if(err) {
            res.status(500).send({ 
                message:'There was an error with out database.', error: err.message
            })
        } else if (!cards) {
            res.status(404).send({ message: 'Could not find cards with that ID' })
        } else {
            res.status(200).send(cards)
        }
    })
}

const deleteCard = (req, res) => {
    FlashCards.findByIdAndRemove(req.params.id, (err, cards) => {
        if(err) {
            res.status(500).send({ message: 'There was an error with our database.', error: err.message })
        } else if (!cards) {
            res.status(404).send({ message: 'Could not find cardset with that id' });
        } else {
            res.status(200). send({ deletedCards: cards })
        }
    })
}

module.exports = { getAllCards, getCardByID, createCard, editCard, deleteCard };