const { objeto } = require("../../model/product.model");
function getAllProducts(req, res) {
  return res.status(200).json(objeto);
}

module.exports = {
  getAllProducts,
};
