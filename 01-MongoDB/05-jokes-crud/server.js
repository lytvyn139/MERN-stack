console.log("0) init server.js");
const express = require("express");
const cors = require("cors");
const PORT = 8000;
const localhost = "http://127.0.0.1:";
const app = express();

app.use(cors());
app.use(express.json());

const db_name = "Jokes";
require("./server/config/mongoose.config")(db_name);

require("./server/routes/jokes.routes")(app);

app.listen(PORT, () => {
  console.log(`The server is all fired up on port ${localhost}${PORT}`);
  console.log(`to see the jokes go to ${localhost}${PORT}/api/jokes`);
});
