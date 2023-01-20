const Season = require("../models/seasons.model");
 
 
module.exports.findAllSeasons = (req, res) => {
    Season.find()
        .then(allSeasons => {
            res.json({ results: allSeasons })
        })
        .catch(err => {
            res.json(err)
        })
}
 
module.exports.createSeasons = (req, res) => {
    Season.create(req.body)
        .then(createdSeason => {
            res.json({ results: createdSeason })
        })
        .catch(err => {
            res.json(err)
        })
}
 
module.exports.findOneSeasons = (req, res) => {
    Season.findOne({ _id: req.params.id })
        .then(seasons => {
            res.json({ results: seasons })
        })
        .catch(err => {
            res.json(err)
        })
}
 
module.exports.updateOneSeason = (req, res) => {
    Season.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedSeason => {
            res.json({ results: updatedSeason })
        })
        .catch(err => {
            res.json(err)
        })
}
 
module.exports.deleteSeason = (req, res) => {
    Season.deleteOne({ _id: req.params.id })
        .then(season => {
            res.json({ results: season })
        })
        .catch(err => {
            res.json(err)
        })
}
