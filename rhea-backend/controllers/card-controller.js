const FlashCards = require('../models/flashcards');
const FlashCardData = require('../data/flashcards');

const help = (req, res) => {
    res.status(200).send({ message: "Welcome to Flashcard API", 
                           GetAllCards: "/all",
                           GetCardById: "/:id",
                           CreateCard: "/",
                           EditCard: "/:id",
                           DeleteCard: '/:id',
                        })
};

const seed = async (req, res) => {
    try {
        let cards = await FlashCards.create(FlashCardData)
        res.status(200).send({cards});
    } catch (e) {
        res.status(500).send({ Error: e.message});
    }
}

const getAllCards = async (req, res) => {
    try {
        let allCards = await FlashCards.find().exec()
        if(allCards.length === 0) res.status(404).send({ success: false, message: `No flashcards found in database`})
        else res.status(200).send({ success:true, cards: allCards })
    } catch (e) {
        res.status(500).send({success: false, message: `Server Error: ${e.message}`})
    }
}

const getCardById = async (req, res) => {
    let { id } = req.params
    try {
        let card = await FlashCards.findById(id).exec();
        if (!ride) res.status(404).send({ success: false, message: `No Card Found by ID: ${id}`})
        else res.status(200).send({ success: true, card})
    } catch(e){
        if(e.name === 'CastError') res.status(406).send({success: false, message: `Cast Error: ${e.message}`})
        else res.status(500).send({success: false, message: `Server Error: ${e.message}`})
    }
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

module.exports = { help, seed, getAllCards, getCardById, createCard, editCard, deleteCard };
