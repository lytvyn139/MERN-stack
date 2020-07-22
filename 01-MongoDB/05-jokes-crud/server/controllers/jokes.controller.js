console.log("3) running: contorllers/users.controller.js ");

const Joke = require("../models/jokes.model");

class JokeController {
  findAllJokes = (req, res) => {
    Joke.find()
      .then((jokes) => res.json({ jokes: jokes }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  };
  findOneJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
      .then((joke) => res.json({ joke: joke }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  };
  createJoke = (req, res) => {
    Joke.create(req.body)
      .then((newJoke) => res.json({ joke: newJoke }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  };
  updateJoke = (req, res) => {
    Joke.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((joke) => res.json({ joke: joke }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  };
  deleteJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
      .then((result) => res.json({ result: result }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  };
}

module.exports = new JokeController();
