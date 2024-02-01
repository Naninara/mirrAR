const express = require("express");
const createVariantController = require("../Controllers/VariantControllers/createVariantController");
const updateVariantController = require("../Controllers/VariantControllers/updateVariantController");

const {
  getVariantsByParentId,
  getVariantByVariantId,
} = require("../Controllers/VariantControllers/getVariantsController");
const deleteVariantController = require("../Controllers/VariantControllers/deleteVariantController");

const router = express.Router();
//api to create variant
router.route("/createvariant").post(createVariantController);
//api to get varaint by parent id

router.route("/getbyparentid/:pid").get(getVariantsByParentId);

//api to get varaint by variant id
router.route("/getvariantid/:vid").get(getVariantByVariantId);

//api to update varaint using id
router.route("/updatevariant/:id").patch(updateVariantController);

//api to =delete varaint using id
router.route("/deletevariant").delete(deleteVariantController);

module.exports = router;
