console.log("3) running: contorollers/product.contoroller.js ");

const { Product } = require("../models/product.model");
module.exports.index = (request, response) => {
  response.json({
    message: "ну і шо",
  });
};
// The method below is new
module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body;
  Product.create({
    title,
    price,
    description,
  })
    .then((product) => response.json(product))
    .catch((err) => response.json(err));
};
