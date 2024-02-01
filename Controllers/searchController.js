const ProductModel = require("../Models/ProductModel");

const searchController = async (req, res) => {
  const { query } = req.query;
  await ProductModel.find({ $text: { $search: query } })
    .then((response) => res.status(200).json(response))
    .catch((err) => res.status(400).json(err));
};

module.exports = searchController;
