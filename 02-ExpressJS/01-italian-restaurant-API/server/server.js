//npm i express cors nodemon
const express = require("express");
const port = 8004;
const app = express();
const cors = require("cors");
app.use(cors());

//  /api/test
app.get("/api/test", (req, res) => {
  res.json({
    message: "ok",
    whatever: 200,
  });
});

//controller
const menu = {
  "appetizers": [
	{name: "calamari", price: "$6.00"},
	{name: "ca234ari", price: "$00"},
	{name: "calamwer", price: "$4200"},
	],
  "entrees": [
	{name: "saladka", price: "$6.00"},
	{name: "stsdfsd", price: "$4.00"},
  ],
  "desserts": [
	{name: "calri", price: "$1.00"},
	{name: "calari", price: "$7.00"},
	{name: "calari", price: "$9.00"},
  ]
};

//  /api/menu
app.get("/api/menu", (req, res) => {
  res.json(menu);
});

app.listen(port, () => {
  console.log(`listeing on port http://127.0.0.1:${port}`);
  console.log(`menu can be reached at http://127.0.0.1:${port}/api/menu`);
});
