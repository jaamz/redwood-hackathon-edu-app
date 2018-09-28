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


module.exports = { getAllCards, getCardByID };