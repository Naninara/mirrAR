const ProductModel = require("../../Models/ProductModel");
const VariantSchema = require("../../Models/VariantSchema");

const createVariantController = async (req, res) => {
  const { parentId, name, SKU, additionalCost, StockCount } = req.body;

  let createdVariantObject;
  await VariantSchema.create({ name, SKU, additionalCost, StockCount })
    .then((response) => {
      createdVariantObject = response;
    })
    .catch((err) => res.status(400).json(err));

  if (createdVariantObject) {
    const parentProduct = await ProductModel.findOne({ _id: parentId });
    if (!parentProduct) {
      res.status(400).json({ msg: "invalid parent id" });
    }

    const newVariantsArray = [...parentProduct.variants, createdVariantObject];
    parentProduct.variants = newVariantsArray;
    await parentProduct
      .save()
      .then((response) => {
        res.status(200).json(response);
      })
      .catch((err) => res.status(500).json(err));
  }
};

module.exports = createVariantController;
