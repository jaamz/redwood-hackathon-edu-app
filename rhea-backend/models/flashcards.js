const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cardSchema = new Schema({
    
    setname: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    cards: {
        type: Array,
        trim: true,
    }

})

const Cards = mongoose.model('Cards', cardSchema);
module.exports = Cards;
