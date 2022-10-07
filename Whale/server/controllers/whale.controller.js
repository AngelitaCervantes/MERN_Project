const Whale = require("../models/Whale.model");


module.exports.findAllWhales = (req, res) => {
    Whale.find()
        .then(allWhales => {
            res.json({ results: allWhales })
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.createWhales = (req, res) => {
    Whale.create(req.body)
        .then(createdWhale => {
            res.json({ results: createdWhale })
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.findOneWhales = (req, res) => {
    Whale.findOne({ _id: req.params.id })
        .then(whales => {
            res.json({ results: whales })
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.updateOneWhale = (req, res) => {
    Whale.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedWhale => {
            res.json({ results: updatedWhale })
        })
        .catch(err => {
            res.json(err)
        })
}

module.exports.deleteWhale = (req, res) => {
    Whale.deleteOne({ _id: req.params.id })
        .then(whale => {
            res.json({ results: whale })
        })
        .catch(err => {
            res.json(err)
        })
}