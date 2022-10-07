const mongoose = require('mongoose');


const WhaleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        minlenght: [2, "Name must be at least two characters long."]
    },

    imgUrl: {
        type: String,
    },

    numSea: {
        type: Number,
        required: [true, "Number is required."],
        min: [0, "0 is the Leaste you can have."]
    },

    whaleType: {
        type: String,
        required: [true, "Whale Type is required."],
        minlenght: [2, "Whale Type must be at least two characters long."]
    },

    shiny: {
        type: Boolean
    },

    fast: {
        type: Boolean
    },

    friendly: {
        type: Boolean
    }


}, { timestamps: true })


const Whale = mongoose.model('Whale', WhaleSchema);
module.exports = Whale;