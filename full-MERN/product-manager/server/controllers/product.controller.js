console.log("3) running: contorollers/product.contoroller.js ");

const { Product } = require("../models/product.model");

module.exports.index = (request, response) => {
  response.json({
    message: "ok",
  });
};

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

module.exports.getAllProducts = (request, response) => {
  Product.find({})
    .then((products) => response.json(products))
    .catch((err) => response.json(err));
};

module.exports.findOneProduct = (request, response) => {
  Product.findOne({ _id: request.params.id })
    .then((product) => response.json({ product: product }))
    .catch((err) =>
      response.json({ message: "Something went wrong", error: err })
    );
};
