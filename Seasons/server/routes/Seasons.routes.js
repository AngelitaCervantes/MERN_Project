const seasonController = require("../controllers/seasons.controller");
 
module.exports = (app) => {
    app.get("/api/seasons", seasonController.findAllSeasons);
    app.post("/api/seasons", seasonController.createSeasons);
    app.get("/api/seasons/:id", seasonController.findOneSeasons);
    app.put("/api/seasons/:id", seasonController.updateOneSeason);
    app.delete("/api/seasons/:id", seasonController.deleteSeason);
}
