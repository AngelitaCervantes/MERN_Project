const mongoose = require('mongoose');
 
const SeasonsSchema = new mongoose.Schema({
    season: {
        type: String,
        required: [true, "Season is required."],
        minlenght: [2, "Season must be at least two characters long."]
    },
 
}, { timestamps: true })
 
 
const Seasons = mongoose.model('Seasons', SeasonsSchema);
module.exports = Seasons;