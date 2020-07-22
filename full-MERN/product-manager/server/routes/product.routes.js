console.log("2) running: routes/product.routes.js ");

const ProductController = require("../controllers/product.controller");
module.exports = function (app) {
  app.get("/api", ProductController.index);
  app.post("/api/create_product", ProductController.createProduct);
  app.get("/api/see_all_products", ProductController.getAllProducts);
};
