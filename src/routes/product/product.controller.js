const { objeto } = require("../../model/product.model");

const controller = {};
const connection = require("../../dBConnection/connection");

const { ProductModel } = require("../../model/product.model");

async function httpGetAllProducts(req, res) {
  try {
    await connection();
    //.find will is the command for searching the database
    const allProducts = await ProductModel.find();
    return res.status(200).json(allProducts);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  httpGetAllProducts,
};
