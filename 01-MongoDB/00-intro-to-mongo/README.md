![](https://webassets.mongodb.com/_com_assets/cms/mongodb_logo1-76twgcu2dm.png)

## Mongo DB

Mongo DB is a noSQL database which means Not Only SQL.
There is no relationship between our collections, and it allows us more flexibility with our database structure. This also means that there will be no joins, and can retrieve information faster.

### MySQL vs MongoDB

| MySQL  | MongoDB    |
| ------ | ---------- |
| schema | database   |
| table  | collection |
| row    | document   |

When you start up the mongo shell, you will notice that it is in JSON format.

### Commands

```
## CREATE
### Show all the databases aka schemas
show dbs

### Show the current database
db

### Create/switch to a database
use {database name}

### Show all collections aka table in the current database
show collections

### Create a collection aka table in the current database
db.createCollection("users")

### Create aka insert value in the "users collection", it's not SQL, so documents aka rows don't have to follow same syntax:
db.users.insert({name: 'Sam'})
db.users.insert({name: 'Gendalf', class: 'Wizzard'})

## READ
### Find all documents in a certain collection in the current database.
db.users.find()
db.users.find().pretty()

### will find user Sam
db.users.find({name: "Sam"})

### will return nothing, no key age
db.users.find({name: "Sam", age: 44})

### search by ID:
db.users.find({_id: ObjectId("5f15f35b0629a257f90ba31a")})

### search by price <= 8
db.users.find({ price: {$lte: 8} }).pretty()

## UPDATE
db.users.update({QUERY}, {WHAT FIELDS YOU WANNA ADD})
db.users.update({name: "Gendalf"}, {Location: "Shire"})
db.users.update({name: "Gendalf"}, {Location: "Shire"})

db.users.update({QUERY}, {FIELDS_TO_UPDATE}, {OPTIONS})
db.users.update({name: "Gendalf"}, {$set: {location: "Mountain View"}})

## DELETE
### Drop aka delete the current database, must go inside of db (use name)
db.dropDatabase()

### Drop aka delete the current database
db.dropCollection('collection aka table name')

### This will drop a collection in the current database
db.{collectionName}.drop()

### Remove only 1 name
db.users.remove({name: "Sam"}, true)

### Remove all names Sam
db.users.remove({name: "Sam"})
```

## Operators

Operators are an important part of MongoDB. You've already seen the \$set operator in the update method, so you should be aware of their existence. Since our queries are more method-based and not typed syntax like regular SQL, we need to pack more functionality into the documents we use to query our databases. Enter operators. Operators allow you to 'operate' on the data (lame description, I know). Let's say I have the following documents in a collection called dojos that looked like this

- \_id: Obj123123123124
- name: Shotam
- number_of_students: 20
  If I wanted to get all the Dojos whose number of students is greater than 15, I would run the following:

db.dojos.find({number_of_students: {\$gt: 15}})

Here is a chart of the most frequently-used operators (take some time to play around with them):

- name description
- \$gt (greater than) Use to query selectively on numerical-valued fields
- \$gte (greater than or equal to) Use to query selectively on numerical-valued fields
- \$lt (less than) Use to query selectively on numerical-valued fields
- \$lte (less than or equal to) Use to query selectively on numerical-valued fields
- \$in (in array) Use to find documents who have a particular value within an array.

* Name Description
* \$push Push to an array contained within a document.
* \$pop Removes either the first or last element from an array. EX:

db.COLLECTION.update({QUERY}, {\$pop: {array_key: (1 or -1)}})

Use 1 for the last item in the array, -1 for the first item.

$addToSet	It functions just like $push. However, $addToSet only adds to the specified array if the value doesn't already exist (thereby preventing duplicate entries).
$pull Removes a specified value from an array, unlike \$pop, which removes by location. Ex:

- db.COLLECTION.update({QUERY}, {\$pull: {array_key: VALUE}})

This will remove all instances of VALUE from the documents with the array specified by the array_key that match QUERY.

## Mongoose

Mongoose ODM - object data modeling

```
npm install mongoose
```

We must also require it

```
const mongoose = require('mongoose')
```

### Database Connection

```javascript

mongoose.connect("mongodb://localhost/{databaseName},{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() =>  console.log("You're now inside the mainframe..."))
    .catch(err => console.log("MELTDOWN! MELTDOWN! MELTDOWN!",err))

```

### The Model Setup

```javascript
const mongoose = require("mongoose");

// Basic setup of the Mongoose Schema
const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "This is how we validate"],
      minlength: [3, "Setup has to be more than 2 characters"],
    },
    punchline: String,
  },
  { timestamps: true }
);

// This is how we register our schema.
const Joke = mongoose.model("Joke", JokeSchema);

// Finally we export it out of the file.
module.exports = User;
```

### Mongoose Queries

#### To find All(INDEX) . . .

```javascript
Joke.find()
  .then((allJokes) => res.json(allJokes))
  .catch((err) => res.json(err));
```

#### To find one(SHOW). . .

```javascript
    Joke.find({_id:req.params.id)
        .then( oneJoke => res.json(oneJoke))
        .catch(err => res.json(err))
```

#### Creating one(CREATE). . .

```javascript
Joke.create(req.body)
  .then((newJoke) => res.json(newJoke))
  .catch((err) => res.json(err));
```

We know by now that we can't relate our database objects together, but what if we want to have a one to many relationship?<br>

### Nested Documents

```javascript
const mongoose = require("mongoose");

const MessageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
      minlength: [3, "Message must be at least 3 characters."],
    },
  },
  { timestamps: true }
);

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A user must have a name"],
    },
    messages: [MessageSchema],
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", MessageSchema);
const User = mongoose.model("User", UserSchema);
```

To actually create a message and nest it in the UserSchema, we need to do something like this.

```javascript
Message.create(req.body)
  .then((newMessage) => {
    User.findByIdAndUpdate(
      { _id: req.params.id },
      { $push: { messages: newMessage } }
    );
  })
  .catch((err) => res.json(err));
```

## Modularization

```
├ jokes-api/
    ├ node_modules/
    ├ server/
        ├ config
            ├ database.config.js
        ├ controllers
            ├ jokes.controllers.js
        ├ models
            ├ joke.model.js
        ├ routes
            ├ jokes.routes.js
    ├ server.js
    ├ package.json
```
