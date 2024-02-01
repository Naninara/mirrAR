const ProductModel = require("../../Models/ProductModel");
const VariantSchema = require("../../Models/VariantSchema");

const deleteVariantController = async (req, res) => {
  const { parentId, variantId } = req.body;
  const deletedVariant = await VariantSchema.findByIdAndDelete({
    _id: variantId,
  });
  if (!deletedVariant) {
    res.status(400).json("Variant ID Not found");
  }
  const parentObject = await ProductModel.findOne({ _id: parentId });
  if (!parentObject) {
    res.status(400).json("Variant ID Not found");
  }
  const filterdVariants = parentObject.variants.filter((ele) => {
    return ele._id != variantId;
  });

  parentObject.variants = filterdVariants;
  parentObject
    .save()
    .then((response) => res.status(200).json({ msg: "deleted sucessfullt" }))
    .catch((err) => res.status(400).json(err));
};

module.exports = deleteVariantController;
