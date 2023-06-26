const express = require("express");
const { httpGetAllProducts } = require("./product.controller");
const productRouter = express.Router();

productRouter.get("/product", httpGetAllProducts);

module.exports = productRouter;
