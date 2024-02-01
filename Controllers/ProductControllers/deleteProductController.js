const ProductModel = require("../../Models/ProductModel");
const VariantSchema = require("../../Models/VariantSchema");

const deleteProductController = async (req, res) => {
  const { id } = req.params;
  const DeletedProduct = await ProductModel.findByIdAndDelete({ _id: id });
  if (!DeletedProduct) {
    res.status(400).json({ msg: "product with id not found" });
  } else {
    res.status(200).json({ msg: "Deleted Succesfully" });
  }
};

module.exports = deleteProductController;
