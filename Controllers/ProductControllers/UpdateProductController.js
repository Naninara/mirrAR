const ProductModel = require("../../Models/ProductModel");

const updateProductController = async (req, res) => {
  {
    const { id } = req.params.id;
    await ProductModel.findOneAndUpdate({ id, ...req.body })
      .then((response) => {
        res.status(200).json({ msg: "Updated Succesfully" });
      })
      .catch((err) => res.status(400).json(err));
  }
};

module.exports = updateProductController;
