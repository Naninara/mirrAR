const ProductModel = require("../../Models/ProductModel");
const VariantSchema = require("../../Models/VariantSchema");

const getVariantsByParentId = async (req, res) => {
  const { pid } = req.params;
  await ProductModel.findOne({ _id: pid })
    .populate("variants")
    .then((response) => {
      res.status(200).json(response.variants);
    })
    .catch((err) => {
      console.log(err);
    });
};

getVariantByVariantId = async (req, res) => {
  const { vid } = req.params;

  await VariantSchema.findOne({ _id: vid })
    .then((response) => {
      res.status(200).json(response);
    })
    .catch((err) => res.status(400).json(err));
};

module.exports = { getVariantsByParentId, getVariantByVariantId };
