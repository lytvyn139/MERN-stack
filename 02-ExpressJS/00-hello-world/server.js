//npm i express cors nodemon
const express = require("express");
const port = 8000;
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());
//if you receive extra information in body of req, format as data that we can access

const menu = {
  appetizers: ["calamarati", "mozarella sticks"],
  entrees: ["pizza", "pasta"],
  desserts: ["cheesecake"],
};

app.get("/api/test", (req, res) => {
  res.json({ "/api/test GET request": "OK" });
});

app.post("/api/test", (req, res) => {
  console.log(req.body);
  res.json({ "/api/test POST request": "OK" });
});

app.get("/api/menu", (req, res) => {
  res.json(menu);
});

//add to entrees route
app.post("/api/entrees", (req, res) => {
  menu.entrees.push(req.body.entrees);
  res.json({ "/api/entrees POST request": "OK" });
});

/* RUN SERVER */
app.listen(port, () => {
  console.log(`listeing Server at: http://127.0.0.1:${port}`);
  console.log(`menu can be reached at http://127.0.0.1:${port}/api/menu`);
});
