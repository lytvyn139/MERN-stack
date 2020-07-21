const express = require("express");
const cors = require("cors");
const PORT = 8000;
const app = express();

app.use(cors());
app.use(express.json());

//new db code
const mongoose = require("mongoose");
const db_name = "menu";
mongoose
  .connect(`mongodb://localhost/${db_name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`connected to "${db_name}" db`))
  .catch((errors) => console.log(errors));

// what the objects in the db should look like
const MenuSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "item must have a name"],
      minlength: [3, "item name must be 3 char or longer"],
    },
    price: {
      Number,
      required: [true, "item must have a price"],
      min: [0, "price cannot be less than 0"],
    },
    course: {
      String,
      required: [true, "course must have a name"],
    },
  },
  { timestamps: true }
);

//var that we use to communicate with db
const Menu = mongoose.model("Menu", MenuSchema);

//routes / controller
app.get("/api/test", (req, res) => {
  res.json({ message: "ok" });
});

app.get("/api/menu", (req, res) => {
  Menu.find({})
    .then((menuItems) => res.json(menuItems))
    .catch((error) => res.json(error));
});

app.post("/api/menu", (req, res) => {
  const menuItem = new Menu(req.body); //will put form data into new obj
  menuItem
    .save()
    .then(() => res.json(menuItem))
    .catch((error) => res.json(error));
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
