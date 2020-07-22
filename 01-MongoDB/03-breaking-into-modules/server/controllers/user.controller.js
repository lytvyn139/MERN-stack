/* A couple key points:

User is a constructor function which can create new user objects and also has other methods that will talk to the database!
the .then() will only execute upon successfully inserting data in the database
the .catch() will execute only if there is an error.
 */
console.log("3) running: contorllers/users.controller.js ");

//02. requesting user model
const User = require("../models/user.model");

class UserController {
  findAllUsers = (req, res) => {
    User.find()
      .then((allDaUsers) => res.json({ users: allDaUsers }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  };
  findOneSingleUser = (req, res) => {
    User.findOne({ _id: req.params.id })
      .then((oneSingleUser) => res.json({ user: oneSingleUser }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  };
  createNewUser = (req, res) => {
    User.create(req.body)
      .then((newlyCreatedUser) => {
        res.json({ user: newlyCreatedUser });
        console.log(newlyCreatedUser);
      })
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  };
  updateExistingUser = (req, res) => {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then((updatedUser) => res.json({ user: updatedUser }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  };
  deleteAnExistingUser = (req, res) => {
    User.deleteOne({ _id: req.params.id })
      .then((result) => res.json({ result: result }))
      .catch((err) =>
        res.json({ message: "Something went wrong", error: err })
      );
  };
}

module.exports = new UserController();

/* 

module.exports.findAllUsers = (req, res) => {
  User.find()
    .then((allDaUsers) => res.json({ users: allDaUsers }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleUser = (req, res) => {
  User.findOne({ _id: req.params.id })
    .then((oneSingleUser) => res.json({ user: oneSingleUser }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewUser = (req, res) => {
  User.create(req.body)
    .then((newlyCreatedUser) => {
      res.json({ user: newlyCreatedUser });
      console.log(newlyCreatedUser);
    })
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then((updatedUser) => res.json({ user: updatedUser }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

*/
