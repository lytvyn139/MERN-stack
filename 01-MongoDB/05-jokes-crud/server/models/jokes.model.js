console.log("4) running: models/users.model.js ");
const mongoose = require("mongoose");

const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "Joke can't be empty"],
      minlength: [5, "Joke must be 5 characters or longer"],
    },
    punchline: {
      type: String,
      required: [true, "punchline can't be empty"],
      minlength: [5, "punchline must be 5 characters or longer"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Joke", JokeSchema);
