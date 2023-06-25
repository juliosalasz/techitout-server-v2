const express = require("express");
const { getAllProducts } = require("./product.controller");
const productRouter = express.Router();

productRouter.get("/product", getAllProducts);

module.exports = productRouter;
