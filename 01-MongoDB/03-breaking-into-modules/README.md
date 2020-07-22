### 1. Connecting to MongoDB with Mongoose

Config folder where you will find the mongoose.config.js file where we use mongoose to connect to MongoDb. Mongoose has a super convenient connect method -- mongoose.connect

### 2. Create your Mongoose Schema and Model

Mongoose provides more structure to MongoDB by adding schemas that we can create that turn into models for our collections. These models specify keys, types, and even validations for documents in a specific collection. Mongoose also handles appropriate naming for us when it communicates with MongoDB! In vs-code, navigate your way to the user.model.js file in the models folder where we create a User collection using mongoose. Once again, we need to import mongoose using the require statement at the top of the file.

### 3. Use the Mongoose Models to Create / Retrieve / Update / Destroy

Navigate your way into the controllers folder where we will find the user.controller.js file that will house all of our logic for creating, retrieving, updating, and deleting users. Notice at the top of the file, we do not have a require("mongoose") statement. Instead we have a require("../models/user.model") statement which is importing the User variable that we exported from the user.model.js file. In our controller file, we export different functions that perform the basic CRUD operations using our User model.

### 4. Routing

Navigate your way into the routes folder where we will find the user.routes.js file that will be responsible for all of our routes dealing with the user model. Notice at the top of the file, this time, we have a require("../controllers/user.controller") statement which is importing everything we exported from the controller file.
