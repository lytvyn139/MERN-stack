/* 
Let's break it down. The mongoose.model() method is the most important in this case. Its job is to take a blueprint object and, in turn, create the necessary database collection out of the model. We get this blueprint by making a new schema instance from the mongoose.Schema() object constructor.  Notice how the mongoose.Schema() method takes an object as its parameter?  The structure of that object is how each new document put into the collection will be formatted. You can learn more about the other Schema Types here. We then create a User variable to export and set it to be the value of mongoose.model which will effectively export a constructor function to create new user objects. Exporting the User variable will allow us to import and use the User constructor function in any file we choose. */

console.log("4) running: models/users.model.js ");
const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    /* 
  before validation
  name: String,
  age: Number,
 */

    name: {
      type: String,
      required: [true, "name can't be empty"],
      minlength: [3, "Name must be 3 characters or longer"],
    },
    age: {
      type: Number,
      required: [true, "age must be provided"],
      min: [16, "User must be 16+"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
