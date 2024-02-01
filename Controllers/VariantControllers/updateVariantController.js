const VariantSchema = require("../../Models/VariantSchema");

const updateVariantController = async (req, res) => {
  const { id } = req.params.id;

  await VariantSchema.findOneAndUpdate({ id, ...req.body })
    .then(() => {
      res.status(200).json({ msg: "Updated Succesfully" });
    })
    .catch((err) => res.status(400).json(err));
};

module.exports = updateVariantController;
