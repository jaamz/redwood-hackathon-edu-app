const FlashCards = require('../models/flashcards');
const FlashCardData = require('../data/flashcards');

const help = (req, res) => {
    res.status(200).send({ message: "Welcome to Flashcard API", 
                           Seed:           "/seed",
                           GetAllCardsets: "/all",
                           GetCardSetById: "/:id",
                           CreateCardSet:  "/",
                           EditCardSet:    "/:id",
                           DeleteCardSet:  "/:id",
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

const getAllCardSets = async (req, res) => {
    try {
        let allCards = await FlashCards.find().exec()
        if(allCards.length === 0) res.status(404).send({ success: false, message: `No flashcards found in database`})
        else res.status(200).send({ success:true, cardsets: allCards })
    } catch (e) {
        res.status(500).send({success: false, message: `Server Error: ${e.message}`})
    }
}

const getCardSetById = async (req, res) => {
    let { id } = req.params
    try {
        let cardSet = await FlashCards.findById(id).exec();
        if (!cardSet) res.status(404).send({ success: false, message: `No Card Found by ID: ${id}`})
        else res.status(200).send({ success: true, cardSet})
    } catch(e){
        if(e.name === 'CastError') res.status(406).send({success: false, message: `Cast Error: ${e.message}`})
        else res.status(500).send({success: false, message: `Server Error: ${e.message}`})
    }
}

const createCardSet = async (req,res) => {
    let cardSet = req.body;
    try{
        let cards = await FlashCards.create(cardSet)
        console.log(cards)
        res.status(200).send(cardSet);
    } catch(err){
        if(err) res.status(500).send({ Error: err.message })
    }
}

// const createCardSet = (req, res) => {
//     let cardSet = req.body;
//     console.log(cardSet)
//     FlashCards.create(cardSet)
//         .then((cardSet) => {
//             res.status(200).send(cardSet);
//         })
//         .catch((err) => {
//             res.status(500).send({ Error: err.message })
//         })
// }

const editCardSet = (req, res) => {
    FlashCards.findByIdAndUpdate(req.params.id, { $set: req.body }, {new:true}, (err, cardSet) => {
        if(err) {
            res.status(500).send({ 
                message:'There was an error with out database.', error: err.message
            })
        } else if (!cardSet) {
            res.status(404).send({ message: 'Could not find cards with that ID' })
        } else {
            res.status(200).send(cardSet)
        }
    })
}

const deleteCardSet = (req, res) => {
    let {id} = req.params
    FlashCards.findByIdAndRemove(id, (err, cardSet) => {
        console.log(id);
        console.log(cardSet);
        if(err) {
            res.status(500).send({ message: 'There was an error with our database.', error: err.message })
        } else if (!cardSet) {
            res.status(404).send({ message: 'Could not find cardset with that id' });
        } else {
            res.status(200). send({ message: `Cardset ${id} successfully deleted.`, cardset: cardSet })
        }
    })
}

module.exports = { help, seed, getAllCardSets, getCardSetById, createCardSet, editCardSet, deleteCardSet };
