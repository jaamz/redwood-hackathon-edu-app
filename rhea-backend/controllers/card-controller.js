const FlashCards = require('../models/flashcards');


const help = (req, res) => {
    res.status(200).send({ message: "Welcome to Flashcard API", 
                           GetAllCards: "/all",
                           GetCardById: "/:id",
                           CreateCard: "/",
                           EditCard: "/:id",
                           DeleteCard: '/:id',
                        })
};

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


module.exports = { help, getAllCards, getCardById };  