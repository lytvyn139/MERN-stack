console.log("1) running: config/mongoose.config.js ");

const mongoose = require("mongoose");

module.exports = (db_name) => {
  mongoose
    .connect(`mongodb://localhost/${db_name}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //The useNewUrlParser and useUnifiedTopology are options we pass to get rid of deprecation messages in our terminal.
    })
    .then(() =>
      console.log(`Established a connection to the database => | ${db_name} |`)
    )
    .catch((err) =>
      console.log("Something went wrong when connecting to the database", err)
    );
};

/* 
show dbs
use actual_db_test
show collections
db.users.find().pretty()
*/
