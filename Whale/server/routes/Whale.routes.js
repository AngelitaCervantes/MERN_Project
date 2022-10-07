const whaleController = require("../controllers/whale.controller");


//get, post, put, delete
module.exports = (app) => {
    app.get("/api/whales", whaleController.findAllWhales);
    app.post("/api/whales", whaleController.createWhales);
    app.get("/api/whales/:id", whaleController.findOneWhales);
    app.put("/api/whales/:id", whaleController.updateOneWhale);
    app.delete("/api/whales/:id", whaleController.deleteWhale);
}

