const ProductModel = require("../../Models/ProductModel");
const VariantSchema = require("../../Models/VariantSchema");

const createProductController = async (req, res) => {
  const { name, description, price } = req.body;

  const isExist = await ProductModel.findOne({ name });

  if (isExist) {
    return res.status(409).json({ msg: "Product with name already exist" });
  }

  let varaintsObject;
  if (req.body.variants && req.body.variants.length != 0) {
    await VariantSchema.insertMany(req.body.variants)
      .then((response) => {
        varaintsObject = response;
      })
      .catch((err) => res.status(400).json(err));
  }

  await ProductModel.create({
    name,
    description,
    price,
    variants: varaintsObject ? varaintsObject : [],
  })
    .then((response) => {
      res.status(201).json({ msg: "added sucessfully" });
    })
    .catch((err) => res.sendStatus(400).json(err));
};

module.exports = createProductController;
