const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");


 // make sure these lines are above any app.get or app.post code blocks
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
 
require("./server/configurations/mongoose.configurations");
 
require("./server/routes/Whale.routes")(app);
 
 
 
// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));