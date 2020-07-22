console.log("0) init server.js");
const express = require("express");
const cors = require("cors");
const PORT = 8000;
const localhost = "http://127.0.0.1:";
const app = express();

app.use(cors());
app.use(express.json());

// 01. This will fire our mongoose.connect statement to initialize our database connection
const db_name = "actual_db_test";
require("./server/config/mongoose.config")(db_name);

// 02. in user.controller.js

//03. This is where we import the users routes function from our user.routes.js file
require("./server/routes/user.routes")(app);

app.listen(PORT, () => {
  console.log(`The server is all fired up on port ${localhost}${PORT}`);
  console.log(`to see users go to ${localhost}${PORT}/api/users`);
});

/* 
- we go mongoose.config
- conecting to mongoose, receiving db_name from server js
- then goes to user.routes
- in user.routes we require("../controllers/user.controller");
- controller give us new instance of UserController class, controller also requires a model 
- based on request get/post/put it can tell controller fn what to do

*/
