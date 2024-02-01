const express = require("express");
const createProductController = require("../Controllers/ProductControllers/CreateProductController");
const deleteProductController = require("../Controllers/ProductControllers/deleteProductController");
const {
  getallproducts,
  getSingleProduct,
} = require("../Controllers/ProductControllers/getProductsController");
const updateProductController = require("../Controllers/ProductControllers/UpdateProductController");
const router = express.Router();

router.route("/addproduct").post(createProductController);

router.route("/getallproducts").get(getallproducts);

router.route("/getsingleproduct/:id").get(getSingleProduct);

router.route("/updateproducts/:id").patch(updateProductController);

router.route("/deleteproducts/:id").delete(deleteProductController);
module.exports = router;
