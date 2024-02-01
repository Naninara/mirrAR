const ProductModel = require("../../Models/ProductModel");

const getallproducts = async (req, res) => {
  await ProductModel.find({})
    .populate("variants")
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => res.status(400).json(err));
};

const getSingleProduct = async (req, res) => {
  const { id } = req.params;

  const foundProduct = await ProductModel.findOne({ _id: id });
  if (!foundProduct) {
    res.status(400).json(foundProduct);
  } else {
    res.status(200).json(foundProduct);
  }
};

module.exports = { getallproducts, getSingleProduct };
