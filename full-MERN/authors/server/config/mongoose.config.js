console.log("✅ mongoose.config.js");

const mongoose = require("mongoose");

module.exports = db_name => {
	mongoose.connect(`mongodb://localhost/${db_name}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
		.then(() => console.log(`Established a connection to the database ${db_name}`))
		.catch(err => console.log(`Something went wrong when connecting to the database `, err));
}