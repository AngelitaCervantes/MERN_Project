const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

require("./server/configurations/mongoose.configurations");
 
require("./server/routes/Seasons.routes")(app);
 
 
 
// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));